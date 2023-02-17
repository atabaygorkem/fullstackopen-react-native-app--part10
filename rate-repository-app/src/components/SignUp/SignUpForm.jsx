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

const SignUpForm = ({ onSubmit }) => {
  const { fadeIn, fadeOut, animated } = animateButton()
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.textInput}
        name="username"
        placeholder="Username"
      />
      <FormikTextInput
        style={styles.textInput}
        name="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <FormikTextInput
        style={styles.textInput}
        name="passwordConfirm"
        placeholder="Password confirmation"
        secureTextEntry={true}
      />
      <Pressable onPress={onSubmit} onPressIn={fadeIn} onPressOut={fadeOut}>
        <Animated.View
          style={[styles.textInput, styles.signButton, { opacity: animated }]}
        >
          <Text style={styles.textColor}>Sign up</Text>
        </Animated.View>
      </Pressable>
    </View>
  )
}

export default SignUpForm
