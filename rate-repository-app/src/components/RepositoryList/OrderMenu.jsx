import { View } from "react-native"
import { Button, Divider, Menu } from "react-native-paper"
import useVisible from "../../hooks/useVisible"
import { repositoriesQueryVariables } from "../../utils"

const OrderMenu = ({ setQueryVariables }) => {
  const { visible, openMenu, closeMenu, buttonText, setButtonText } =
    useVisible()
  return (
    <View
      style={{
        // marginVertical: 6,
        // marginHorizontal : 6,
        // flexDirection: "row",
        // flex: 0,
        // justifyContent: "flex-end",
        // flex: 1,
        flexGrow: 0,
        marginStart: 8,
        // alignItems: "center",
      }}
    >
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button
            onPress={openMenu}
            mode="outlined"
            labelStyle={{
              fontSize: 12,
              // marginLeft: 8,
              marginVertical: 8,
            }}
            contentStyle={{ flexDirection: "row-reverse" }}
            compact
            icon="chevron-down"
          >
            {buttonText}
          </Button>
        }
        anchorPosition="top"
      >
        <Menu.Item
          onPress={() => {
            setButtonText("Latest repositories")
            setQueryVariables(repositoriesQueryVariables.latest)
            closeMenu()
          }}
          disabled={buttonText === "Latest repositories"}
          title="Latest repositories"
          leadingIcon="rocket-launch-outline"
          // style={{ padding: 6 }}
          titleStyle={{ fontSize: 12 }}
          contentStyle={{}}
          style={{ height: 32 }}
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            setButtonText("Highest rated repositories")
            setQueryVariables(repositoriesQueryVariables.highestRated)
            closeMenu()
          }}
          disabled={buttonText === "Highest rated repositories"}
          title="Highest rated repositories"
          leadingIcon="star"
          // style={{ padding: 6 }}
          titleStyle={{ fontSize: 12 }}
          style={{ height: 32 }}
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            setButtonText("Lowest rated repositories")
            setQueryVariables(repositoriesQueryVariables.lowestRated)
            closeMenu()
          }}
          disabled={buttonText === "Lowest rated repositories"}
          title="Lowest rated repositories"
          leadingIcon="star-outline"
          // style={{ padding: 6 }}
          titleStyle={{ fontSize: 12 }}
          style={{ height: 32 }}
        />
      </Menu>
    </View>
  )
}

export default OrderMenu
