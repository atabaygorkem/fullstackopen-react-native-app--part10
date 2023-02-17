import { Formik } from "formik"
import { Alert } from "react-native"
import { useNavigate } from "react-router-native"
import * as yup from "yup"
import useCreateReview from "../../hooks/useCreateReview"
import ReviewForm from "./ReviewForm"

const initialValues = {
  ownerName: "",
  rating: "",
  repositoryName: "",
  text: "",
}

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner's username is required "),
  rating: yup
    .number()
    .min(0, "Rating must be greater than 0")
    .max(100, "Rating must be less than 100")
    .typeError("Rating must be a number")
    .required("Rating is required"),
  repositoryName: yup.string().required("Repository's name is required"),
  text: yup.string(),
})

const CreateReview = () => {
  // const [signIn] = useSignIn()
  const navigate = useNavigate()
  const { createReview } = useCreateReview()

  const onSubmit = async (values) => {
    const { ownerName, rating, repositoryName, text } = values
    try {
      const { repositoryId } = await createReview({
        ownerName,
        rating: +rating,
        repositoryName,
        text,
      })
      console.log("createReview: ", repositoryId)
      navigate(`/repository/${repositoryId}`)
    } catch (error) {
      console.log(error)
      Alert.alert(error.message)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default CreateReview
