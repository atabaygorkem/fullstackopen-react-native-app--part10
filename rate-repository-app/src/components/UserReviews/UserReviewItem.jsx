import { format } from "date-fns"
import { StyleSheet, View } from "react-native"
import { Button } from "react-native-paper"
import { useNavigate } from "react-router-native"
import useDialog from "../../hooks/useDialog"
import Rating from "../SingleRepository/Rating"
import Text from "../Text"

const formatDate = (date) => {
  return format(new Date(date), "dd.MM.yyyy")
}

const styles = StyleSheet.create({
  container: {
    // display: "flex",
    // flexDirection: "column",
    marginLeft: 24,
    flexGrow: 1,
    flexShrink: 1,
  },
  parentContainer: {
    display: "flex",
    // flexDirection: "row",
    backgroundColor: "white",
    padding: 24,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
  },
  subButtonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    color: "white",
  },
  itemMargin: {
    marginBottom: 4,
  },
})

const UserReviewItem = ({ review, refetch }) => {
  const navigate = useNavigate()

  const { showDialog, ReviewDialog } = useDialog(review.id, refetch)

  return (
    <View style={styles.parentContainer}>
      <View style={styles.subContainer}>
        <Rating rate={review.rating} />
        <View style={styles.container}>
          <Text style={styles.itemMargin} fontWeight="bold">
            {review?.user?.username}
          </Text>
          <Text color="textSecondary">{formatDate(review.createdAt)}</Text>
          <Text style={{ marginVertical: 8 }}>{review.text}</Text>
        </View>
      </View>

      <View style={styles.subButtonContainer}>
        <Button
          mode="elevated"
          buttonColor="cornflowerblue"
          textColor="white"
          onPress={() => navigate(`/repository/${review.repositoryId}`)}
        >
          View repository
        </Button>
        <Button
          mode="contained-tonal"
          buttonColor="lightcoral"
          textColor="white"
          onPress={showDialog}
        >
          Delete review
        </Button>
      </View>
      <ReviewDialog />
    </View>
  )
}

export default UserReviewItem
