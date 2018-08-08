const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/userSchema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const env = process.env;

// allow cross-origin requests
app.use(cors());

// connect to mlab database
// make sure to replace my db string & creds with your own
mongoose.connect("mongodb://akira:test1234@ds113402.mlab.com:13402/mealiown");
mongoose.connection.once("open", () => {
  console.log("conneted to database");
});

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
