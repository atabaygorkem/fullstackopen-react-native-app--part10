import { Formik } from "formik"
import { Alert } from "react-native"
import SignInForm from "./SignInForm"
import * as yup from "yup"

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
  const onSubmit = (values) => {
    let str = Object.entries(values).reduce(
      (sum, [key, value]) => sum + `${key}: ${value}\n`,
      ""
    )
    console.log(str)
    Alert.alert(str)
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
