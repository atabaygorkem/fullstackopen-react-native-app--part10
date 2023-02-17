import { useMutation } from "@apollo/client"
import { CREATE_REVIEW } from "../graphql/mutations"

const useCreateReview = () => {
  const [mutate] = useMutation(CREATE_REVIEW)

  const createReview = async ({ ownerName, rating, repositoryName, text }) => {
    const { data } = await mutate({
      variables: {
        review: {
          ownerName,
          rating,
          repositoryName,
          text,
        },
      },
    })
    return data?.createReview
  }
  return { createReview }
}

export default useCreateReview
