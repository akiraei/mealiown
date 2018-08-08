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
      resolve(parent, args) {
        let user = new User({
          name: args.name,
          pw: args.pw,
          token: jwt.sign({ name: args.name, pw: args.pw }, "secret")
        });
        return user.save();
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
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
