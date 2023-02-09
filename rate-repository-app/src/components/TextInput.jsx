import { TextInput as NativeTextInput, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  errorTextInput: {
    borderColor: "#d73a4a",
  },
})

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, error && styles.errorTextInput]
  // if (error) textInputStyle.push(styles.errorTextInput)
  return <NativeTextInput style={textInputStyle} {...props} />
}

export default TextInput
