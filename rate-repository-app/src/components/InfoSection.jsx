import { StyleSheet, View } from "react-native"
import theme from "../theme"
import Text from "./Text"

const styles = StyleSheet.create({
  flexItem: {
    flexGrow: 1,
    flexShrink: 1,
    margin: 26,
  },
  itemMargin: {
    marginBottom: 10,
  },
  tagItem: {
    // marginBottom: 10,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    padding: 6,
    borderRadius: 10,
  },
  colors: {
    color: "white",
  },
})

const InfoSection = ({ item }) => {
  return (
    <View style={styles.flexItem}>
      <Text fontWeight="bold" style={styles.itemMargin}>
        {item.fullName}
      </Text>
      <Text color="textSecondary" style={styles.itemMargin}>
        {item.description}
      </Text>
      <View style={styles.tagItem}>
        <Text style={styles.colors}>{item.language}</Text>
      </View>
    </View>
  )
}

export default InfoSection
