const graphql = require("graphql");
const User = require("../models/user");
const Record = require("../models/record");
const Token = require("../models/token");

const _ = require("lodash");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const env = process.env;

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const TokenType = new GraphQLObjectType({
  name: "Token",
  fields: () => ({
    id: { type: GraphQLID },
    token: { type: GraphQLString }
  })
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    pw: { type: GraphQLString }
  })
});

const RecordType = new GraphQLObjectType({
  name: "Record",
  fields: () => ({
    name: { type: GraphQLString },
    count: { type: GraphQLInt },
    category: { type: GraphQLString },
    date: { type: GraphQLString },
    time: { type: GraphQLString },
    calories: { type: GraphQLInt },
    balance: { type: GraphQLInt },
    tasty: { type: GraphQLInt },
    sum: { type: GraphQLInt },
    memo: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { name: { type: GraphQLString } },
      resolve(parent, args) {
        return User.findOne({ name: args.name });
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find({});
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: new GraphQLObjectType({
        name: "combination",
        fields: () => ({
          name: { type: GraphQLString },
          pw: { type: GraphQLString },
          token: { type: GraphQLString }
        })
      }),
      args: {
        name: { type: GraphQLString },
        pw: { type: GraphQLString }
      },
      async resolve(parent, args) {
        const value = await User.findOne({ name: args.name });
        if (!value) {
          const password = bcrypt.hashSync(args.pw, 10);
          const token = jwt.sign({ name: args.name }, env.TOKEN);
          let user = new User({
            name: args.name,
            pw: password
          });
          user.save();
          return { name: args.name, token };
        }
      }
    },
    token: {
      type: TokenType,
      args: {
        name: { type: GraphQLString },
        pw: { type: GraphQLString }
      },
      async resolve(parent, args) {
        const value = await User.findOne({ name: args.name });
        if (bcrypt.compareSync(args.pw, value.pw)) {
          let token = new Token({
            token: jwt.sign({ name: args.name }, env.TOKEN)
          });
          return token;
        }
      }
    },
    records: {
      type: new GraphQLList(RecordType),
      args: {
        token: { type: GraphQLString }
      },
      async resolve(parent, args) {
        const value = jwt.verify(args.token, env.TOKEN);
        const arr = await Record.find({ name: value.name });
        return arr;
      }
    },
    sign: {
      type: UserType,
      args: {
        token: { type: GraphQLString }
      },
      resolve(parent, args) {
        let value = jwt.verify(args.token, env.TOKEN);
        return { name: value.name };
      }
    },
    record: {
      type: RecordType,
      args: {
        name: { type: GraphQLString },
        category: { type: GraphQLString },
        date: { type: GraphQLString },
        time: { type: GraphQLString },
        calories: { type: GraphQLInt },
        balance: { type: GraphQLInt },
        tasty: { type: GraphQLInt },
        memo: { type: GraphQLString }
      },
      async resolve(parent, args) {
        const value = await Record.find({ name: args.name });
        let precount;
        if (value.length > 0) {
          precount = value.sort((a, b) => b.count - a.count)[0].count;
        } else {
          precount = 0;
        }
        const payload = new Record({
          name: args.name,
          category: args.category,
          count: precount + 1,
          date: args.date,
          time: args.time,
          calories: args.calories,
          balance: args.balance,
          tasty: args.tasty,
          memo: args.memo,
          sum:
            args.calories + args.balance + args.tasty > 1000
              ? 1000
              : args.calories + args.balance + args.tasty
        });
        return payload.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers);
// [1, 2, 3, 4, 5]
