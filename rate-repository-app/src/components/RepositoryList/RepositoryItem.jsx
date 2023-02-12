import { StyleSheet, View } from "react-native"
import Avatar from "../Avatar"
import InfoSection from "./InfoSection"
import StatisticSection from "./StatisticSection"

const styles = StyleSheet.create({
  colors: {
    backgroundColor: "white",
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
})

//Flatlist renderItem
const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.colors}>
      <View style={styles.container}>
        <Avatar avatarUrl={item.ownerAvatarUrl} />
        <InfoSection item={item} />
      </View>
      <StatisticSection item={item} />
    </View>
  )
}

export default RepositoryItem
