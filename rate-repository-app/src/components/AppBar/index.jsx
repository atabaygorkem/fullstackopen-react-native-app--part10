import { View, StyleSheet, ScrollView } from "react-native"
import Constants from "expo-constants"
import AppBarTab from "./AppBarTab"
import theme from "../../theme"
import useSignOut from "../../hooks/useSignOut"

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
  const { signOut, data, loading } = useSignOut()
  console.log("Appbar", data)
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <AppBarTab text={"Repositories"} to="/" />
        {!loading && data.me ? (
          <>
            <AppBarTab text="Create a review" to="/create/review" />
            <AppBarTab text="My reviews" to="/user/reviews" />
            <AppBarTab text="Sign out" to="/" onPress={signOut} />
          </>
        ) : (
          <>
            <AppBarTab text="Sign in" to="/signin" />
            <AppBarTab text="Sign up" to="/signup" />
          </>
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
