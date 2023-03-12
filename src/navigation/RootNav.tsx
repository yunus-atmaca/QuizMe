import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { getNavContainerRef, RootStack } from '@src/types/navigation'

const Stack = createStackNavigator<RootStack>()

import { Home, Questions } from '../screens'

const RootNav: FC = () => {
  const navigationRef = getNavContainerRef()

  const _onStateChange = () => {}

  return (
    <NavigationContainer ref={navigationRef} onStateChange={_onStateChange}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Questions" component={Questions} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNav
