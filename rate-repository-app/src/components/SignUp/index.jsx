import * as yup from "yup"
import SignUpForm from "./SignUpForm"
import { Formik } from "formik"
import { useNavigate } from "react-router-native"
import useSignUp from "../../hooks/useSignUp"
import { Alert } from "react-native"

const initialValues = {
  username: "",
  password: "",
  passwordConfirm: "",
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be longer")
    .max(50, "You have exceeded the maximum character limit")
    .required("Username is required"),
  password: yup
    .string()
    .min(5, "Password must be longer")
    .max(50, "You have exceeded the maximum character limit")
    .required("Password is required"),
  passwordConfirm: yup
    .string()
    .required("Password confirm is required")
    .oneOf([yup.ref("password"), null], "Passwords do not match"),
})

const SignUp = () => {
  const [signUp] = useSignUp()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values
    try {
      const { data } = await signUp({ username, password })
      console.log("res", data)
      navigate("/")
    } catch (e) {
      console.log("err", e)
      Alert.alert(e.message)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignUp
