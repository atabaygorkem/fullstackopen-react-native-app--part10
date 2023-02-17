import { StyleSheet, View } from "react-native"
import { ActivityIndicator, MD2Colors } from "react-native-paper"

const styles = StyleSheet.create({
  loadingIndicator: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: theme.colors.mainBg,
    flexGrow: 1,
  },
})

const LoadingIndicator = ({ center }) => {
  return (
    <View style={center && styles.loadingIndicator}>
      <ActivityIndicator
        animating={true}
        color={MD2Colors.indigoA700}
        size="large"
      />
    </View>
  )
}

export default LoadingIndicator
