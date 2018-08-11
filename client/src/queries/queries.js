import { gql } from "apollo-boost";

const getTokenMutation = gql`
  mutation GetToken($name: String, $pw: String) {
    token(name: $name, pw: $pw) {
      token
    }
  }
`;

const verifyTokenMutation = gql`
  mutation VerifyToken($token: String) {
    sign(token: $token) {
      name
    }
  }
`;

const saveRecordMutation = gql`
  mutation SaveRecord(
    $name: String
    $category: String
    $date: String
    $time: String
    $calories: Int
    $balance: Int
    $tasty: Int
  ) {
    record(
      name: $name
      category: $category
      date: $date
      time: $time
      calories: $calories
      balance: $balance
      tasty: $tasty
    ) {
      name
      count
      category
      date
      time
      calories
      balance
      tasty
      sum
    }
  }
`;

const getRecordData = gql`
  query GetRecordData($name: String) {
    recordData(name: $name) {
      name
      count
      category
      date
      time
      calories
      balance
      tasty
      sum
      memo
    }
  }
`;

const getRecordMutation = gql`
  mutation GetRecordMutation($name: String) {
    getRecord(name: $name) {
      name
      count
      category
      date
      time
      calories
      balance
      tasty
      sum
      memo
    }
  }
`;

export {
  getTokenMutation,
  verifyTokenMutation,
  saveRecordMutation,
  getRecordData,
  getRecordMutation
};
