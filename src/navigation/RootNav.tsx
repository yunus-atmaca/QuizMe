import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import type { RootStack } from '@src/types/navigation'

const Stack = createStackNavigator<RootStack>()

import { Home } from '../screens'

const RootNav: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default RootNav
