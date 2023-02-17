import { StyleSheet, View } from "react-native"
import theme from "../../theme"
import Text from "../Text"

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
    flexGrow: 0,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
})

const Rating = ({ rate }) => {
  return (
    <View style={styles.tinyLogo}>
      <Text fontWeight="bold" color="primary">
        {rate}
      </Text>
    </View>
  )
}

export default Rating
