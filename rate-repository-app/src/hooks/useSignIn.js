import { useApolloClient, useMutation } from "@apollo/client"
import { AUTHENTICATE } from "../graphql/mutations"
import useAuthStorage from "./useAuthStorage"

const useSignIn = () => {
  const [mutate, { data }] = useMutation(AUTHENTICATE)
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const signIn = async ({ username, password }) => {
    const response = await mutate({
      variables: {
        credentials: {
          password,
          username,
        },
      },
    })
    console.log("log from signin hook", response)
    if (response) {
      await authStorage.setAccessToken(response.data?.authenticate?.accessToken)

      console.log("token is saved", await authStorage.getAccessToken())
      apolloClient.resetStore()
      console.log("Resetting apollo store")
    }
    return response
  }

  return [signIn, data]
}

export default useSignIn
