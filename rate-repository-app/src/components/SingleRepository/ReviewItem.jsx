import { format } from "date-fns"
import { StyleSheet, View } from "react-native"
import Text from "../Text"
import Rating from "./Rating"

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
    flexDirection: "row",
    backgroundColor: "white",
    padding: 24,
  },
  text: {
    color: "white",
  },
  itemMargin: {
    marginBottom: 4,
  },
})

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.parentContainer}>
      <Rating rate={review.rating} />
      <View style={styles.container}>
        <Text style={styles.itemMargin} fontWeight="bold">
          {review?.user?.username}
        </Text>
        <Text style={styles.itemMargin} color="textSecondary">
          {formatDate(review.createdAt)}
        </Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  )
}

export default ReviewItem
