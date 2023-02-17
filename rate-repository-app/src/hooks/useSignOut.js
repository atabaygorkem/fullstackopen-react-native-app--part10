import { useApolloClient, useQuery } from "@apollo/client"
import { useNavigate } from "react-router-native"
import { ME } from "../graphql/queries"
import useAuthStorage from "./useAuthStorage"

const useSignOut = () => {
  const { data, loading } = useQuery(ME)
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const navigate = useNavigate()
  const signOut = async () => {
    await authStorage.removeAccessToken()
    apolloClient.resetStore()
    navigate("/")
  }

  return { signOut, data, loading }
}

export default useSignOut
