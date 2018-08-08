const graphql = require("graphql");
const User = require("../models/user");

const _ = require("lodash");
var jwt = require("jsonwebtoken");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    pw: { type: GraphQLString },
    token: { type: GraphQLString }
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
      type: UserType,
      args: {
        name: { type: GraphQLString },
        pw: { type: GraphQLString }
      },
      async resolve(parent, args) {
        const value = await User.findOne({ name: args.name });
        if (!value) {
          let user = new User({
            name: args.name,
            pw: args.pw,
            token: jwt.sign({ name: args.name }, "secret")
          });
          return user.save();
        }
      }
    },
    token: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        pw: { type: GraphQLString }
      },
      resolve(parent, args) {
        return User.findOne({ name: args.name, pw: args.pw });
      }
    },
    sign: {
      type: UserType,
      args: {
        token: { type: GraphQLString }
      },
      resolve(parent, args) {
        let value = jwt.verify(args.token, "secret");
        return { name: value.name };
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
