import React, { FC } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { SSPropsCreator } from '@src/types/navigation'

const Profile: FC<SSPropsCreator<'Profile'>> = ({}) => {
  return <View style={styles.container}></View>
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
})

export default Profile
