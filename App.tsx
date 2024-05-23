import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from './src/store/app/store'
import RootNavigator from './src/navigators/RootNavigator'
import { Appearance } from 'react-native'
import { setThemeColors } from './src/store/features/appearance/actions'

const App = () => {
  const colorScheme = Appearance.getColorScheme()

  const setAppearance = () => {
    if (colorScheme === 'dark') {
      setThemeColors('dark')
      return
    }
    setThemeColors('light')

  }


  useEffect(() => {
    setAppearance()
  }, [])



  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}

export default App
