import { Animated, Linking, Pressable, StyleSheet, View } from "react-native"
import theme from "../../theme"
import animateButton from "../../utils/animateButton"
import Avatar from "../Avatar"
import Text from "../Text"
import InfoSection from "./InfoSection"
import StatisticSection from "./StatisticSection"

const styles = StyleSheet.create({
  parentContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: 24,
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    // marginBottom: 10,
    backgroundColor: theme.colors.primary,
    // alignSelf: "center",
    padding: 12,
    marginTop: 24,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    color: "white",
  },
})

//Flatlist renderItem
const RepositoryItem = ({ item, button }) => {
  const { fadeIn, fadeOut, animated } = animateButton()
  return (
    <View style={styles.parentContainer}>
      <View style={styles.container}>
        <Avatar avatarUrl={item.ownerAvatarUrl} />
        <InfoSection item={item} />
      </View>
      <StatisticSection item={item} />
      {button && (
        <Pressable
          onPress={() => Linking.openURL(item.url)}
          onPressIn={fadeIn}
          onPressOut={fadeOut}
        >
          <Animated.View style={[styles.button, { opacity: animated }]}>
            <Text fontWeight="bold" style={styles.text}>
              Open in GitHub
            </Text>
          </Animated.View>
        </Pressable>
      )}
    </View>
  )
}

export default RepositoryItem
