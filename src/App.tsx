import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { RootNav } from '@src/navigation'

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <RootNav />
        </SafeAreaView>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App
