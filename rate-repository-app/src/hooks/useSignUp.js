import { useMutation } from "@apollo/client"
import { CREATE_USER } from "../graphql/mutations"
import useSignIn from "./useSignIn"

const useSignUp = () => {
  const [mutate, { data }] = useMutation(CREATE_USER)
  const [signIn] = useSignIn()

  const signUp = async ({ username, password }) => {
    const response = await mutate({
      variables: {
        user: {
          password,
          username,
        },
      },
    })
    // console.log("useSignUp", response)
    if (response.data.createUser) {
      const res = await signIn({ username, password })
      if (res.data.authenticate) {
        console.log("success!")
      }
    }
    return response
  }

  return [signUp, data]
}

export default useSignUp
