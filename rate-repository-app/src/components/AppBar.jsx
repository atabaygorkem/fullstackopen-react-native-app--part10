import { View, StyleSheet, ScrollView } from "react-native"
import Constants from "expo-constants"
import AppBarTab from "./AppBarTab"
import theme from "../theme"

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBg,
    height: 75,
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: 15,
    flexDirection: "row",

    // ...
  },
  tabsContainer: {
    justifyContent: "space-around",
  },
  // ...
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <AppBarTab text={"Repositories"} to="/" />
        <AppBarTab text={"Sign in"} to="/signin" />
      </ScrollView>
    </View>
  )
}

export default AppBar
