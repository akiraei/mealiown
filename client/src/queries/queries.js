import { gql } from "apollo-boost";

const getTokenMutation = gql`
  mutation GetToken($name: String, $pw: String) {
    token(name: $name, pw: $pw) {
      name
      token
    }
  }
`;

export { getTokenMutation };
