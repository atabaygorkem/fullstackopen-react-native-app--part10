import { useMutation } from "@apollo/client"
import { useState } from "react"
import { Button, Dialog, MD3Colors, Portal } from "react-native-paper"
import Text from "../components/Text"
import { DELETE_REVIEW } from "../graphql/mutations"

const useDialog = (reviewId, refetch) => {
  const [visible, setVisible] = useState(false)
  const [mutate] = useMutation(DELETE_REVIEW, {
    variables: {
      deleteReviewId: reviewId,
    },
  })

  const showDialog = () => setVisible(true)

  const hideDialog = () => setVisible(false)

  const deleteReview = async () => {
    const { data } = await mutate()
    if (data?.deleteReview) {
      await refetch()
    }
    setVisible(false)
  }

  const ReviewDialog = () => (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Icon icon="alert" />
        <Dialog.Title style={{ textAlign: "center" }}>
          Delete review
        </Dialog.Title>

        <Dialog.Content style={{ alignItems: "center" }}>
          <Text variant="bodyMedium">
            Are you sure you want to delete this review?
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
          <Button onPress={deleteReview} textColor={MD3Colors.error50}>
            Delete
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  )

  return { showDialog, ReviewDialog }
}

export default useDialog
