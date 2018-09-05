import { gql } from "apollo-boost";

const saveUserMutation = gql`
  mutation SaveUser($name: String, $pw: String) {
    addUser(name: $name, pw: $pw) {
      token
    }
  }
`;

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

const getRecordsMutation = gql`
  mutation GetRecordsMutation($token: String) {
    records(token: $token) {
      count
      calAvg
      balAvg
      tastyAvg
      sumAvg
    }
  }
`;

const getFilteredMutation = gql`
  mutation GetFilteredMutation(
    $token: String
    $cate: String
    $avgs: String
    $starttime: Int
    $endtime: Int
    $daybefore: Int
  ) {
    filtered(
      token: $token
      cate: $cate
      avgs: $avgs
      starttime: $starttime
      endtime: $endtime
      daybefore: $daybefore
    ) {
      count
      calories
      balance
      tasty
      sum
    }
  }
`;

export {
  getTokenMutation,
  verifyTokenMutation,
  saveRecordMutation,
  getRecordsMutation,
  saveUserMutation,
  getFilteredMutation
};
