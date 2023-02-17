import { Animated } from "react-native"

const animateButton = () => {
  const animated = new Animated.Value(1)

  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.4,
      duration: 100,
      useNativeDriver: true,
    }).start()
  }

  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }

  return { fadeIn, fadeOut, animated }
}

export default animateButton
