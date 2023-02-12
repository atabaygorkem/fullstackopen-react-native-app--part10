import { useApolloClient, useQuery } from "@apollo/client"
import { ME } from "../graphql/queries"
import useAuthStorage from "./useAuthStorage"

const useSignOut = () => {
  const { data, loading } = useQuery(ME)
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const signOut = async () => {
    await authStorage.removeAccessToken()
    apolloClient.resetStore()
  }

  return { signOut, data, loading }
}

export default useSignOut
