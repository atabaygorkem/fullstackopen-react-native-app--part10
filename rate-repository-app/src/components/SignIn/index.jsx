import { Formik } from "formik"
// import { Alert } from "react-native"
import SignInForm from "./SignInForm"
import * as yup from "yup"
import useSignIn from "../../hooks/useSignIn"
import { useNavigate } from "react-router-native"

const initialValues = {
  username: "",
  password: "",
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be longer")
    .required("Username is required"),
  password: yup
    .string()
    .min(3, "Password must be longer")
    .required("Password is required"),
})

const SignIn = () => {
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values
    try {
      const { data } = await signIn({ username, password })
      console.log("res", data)
      if (data.authenticate.accessToken) {
        navigate("/")
      }
    } catch (e) {
      console.log("err", e)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn
