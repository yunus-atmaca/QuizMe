import React, { FC } from 'react'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

type Props = {}

const Header: FC<Props> = ({}) => {
  return <View style={styles.container}></View>
}

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '56@ms',
    backgroundColor: 'red',
  },
})

export default Header
