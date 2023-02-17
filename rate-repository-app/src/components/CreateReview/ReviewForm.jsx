import { Animated, Pressable, StyleSheet, View } from "react-native"
import theme from "../../theme"
import animateButton from "../../utils/animateButton"
import FormikTextInput from "../FormikTextInput"
import Text from "../Text"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  },
  textInput: {
    margin: 10,
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderWidth: 1,
    borderRadius: 9,
    borderColor: "#b6b6b6",
  },
  signButton: {
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 9,
  },
  textColor: {
    color: "white",
  },
})

const ReviewForm = ({ onSubmit }) => {
  const { fadeIn, fadeOut, animated } = animateButton()
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.textInput}
        name="ownerName"
        placeholder="Repository owner name"
      />
      <FormikTextInput
        style={styles.textInput}
        name="repositoryName"
        placeholder="Repository name"
      />
      <FormikTextInput
        style={styles.textInput}
        name="rating"
        placeholder="Rating between 0 and 100"
      />
      <FormikTextInput
        style={styles.textInput}
        name="text"
        placeholder="Review"
        multiline={true}
      />
      <Pressable onPress={onSubmit} onPressIn={fadeIn} onPressOut={fadeOut}>
        <Animated.View
          style={[styles.textInput, styles.signButton, { opacity: animated }]}
        >
          <Text style={styles.textColor}>Create a review</Text>
        </Animated.View>
      </Pressable>
    </View>
  )
}

export default ReviewForm
