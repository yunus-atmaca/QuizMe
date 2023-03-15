import React, { FC } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { COLORS, Ic_Person } from '@src/res'
import { getNavContainerRef } from '@src/types/navigation'

type Props = {}

const Header: FC<Props> = ({}) => {
  const onProfile = () => {
    getNavContainerRef().navigate('Profile')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QuizMe!</Text>
      <TouchableOpacity
        onPress={onProfile}
        activeOpacity={0.7}
        style={styles.profile}>
        <Ic_Person />
      </TouchableOpacity>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '56@ms',
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primaryOn,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  profile: {
    position: 'absolute',
    top: '10@ms',
    right: '16@ms',
    width: '36@ms',
    height: '36@ms',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLORS.primaryOn,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightBlue,
  },
})

export default Header
