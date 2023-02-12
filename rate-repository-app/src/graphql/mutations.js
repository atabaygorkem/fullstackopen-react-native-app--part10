import { gql } from "@apollo/client"

export const AUTHENTICATE = gql`
  mutation authMutation($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`
