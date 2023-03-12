import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { RootNav } from '@src/navigation'

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <RootNav />
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default App
