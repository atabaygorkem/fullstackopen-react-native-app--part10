import { useState } from "react"

const useVisible = () => {
  const [visible, setVisible] = useState(false)

  const [buttonText, setButtonText] = useState("Latest repositories")

  const openMenu = () => setVisible(true)

  const closeMenu = () => setVisible(false)

  return { visible, openMenu, closeMenu, buttonText, setButtonText }
}

export default useVisible
