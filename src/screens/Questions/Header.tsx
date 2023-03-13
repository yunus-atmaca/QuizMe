import React, { FC } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { COLORS, Ic_ArrowLeft } from '@src/res'
import { getNavContainerRef } from '@src/types/navigation'

type Props = {
  category: string
}

const Header: FC<Props> = ({ category }) => {
  const onBack = () => getNavContainerRef().goBack()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onBack}
        activeOpacity={0.7}
        style={styles.backC}>
        <Ic_ArrowLeft />
      </TouchableOpacity>
      <Text style={styles.textH}>{category}</Text>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    padding: '16@ms',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backC: {
    width: '44@ms',
    height: '36@ms',
    borderColor: COLORS.primaryOn,
    borderWidth: 1,
    borderRadius: '8@ms',
    backgroundColor: COLORS.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textH: {
    fontSize: 24,
    color: 'black',
    fontWeight: '600',
    marginStart: '12@ms',
  },
})

export default Header
