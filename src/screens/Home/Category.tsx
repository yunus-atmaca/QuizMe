import React, { FC } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { moderateScale, ScaledSheet } from 'react-native-size-matters'

import { COLORS, STYLES } from '@src/res'
import { getNavContainerRef } from '@src/types/navigation'

type Props = {
  isEven: boolean
  category: string
}

const CWidth = STYLES.S_WIDTH / 2
const CHeight = moderateScale(256)

const Category: FC<Props> = ({ isEven, category }) => {
  const onCategory = () => {
    getNavContainerRef().navigate('Questions', { category })
  }

  return (
    <View
      style={[
        styles.holder,
        isEven
          ? {
              paddingStart: moderateScale(16),
              paddingEnd: moderateScale(8),
            }
          : {
              paddingStart: moderateScale(8),
              paddingEnd: moderateScale(16),
              justifyContent: 'flex-end',
            },
      ]}>
      <TouchableOpacity onPress={onCategory} style={styles.container}>
        <Image
          source={require('../../../assets/images/sport.jpg')}
          style={styles.image}
        />

        <View style={styles.textC}>
          <Text style={styles.text}>{category}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = ScaledSheet.create({
  holder: {
    width: CWidth,
    height: CHeight,
    //backgroundColor: 'green',
    paddingHorizontal: '16@ms',
  },
  container: {
    width: '100%',
    height: '180@ms',
    borderRadius: '8@ms',
    borderWidth: 1,
    borderColor: COLORS.primaryOn,
    padding: '4@ms',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: '8@ms',
  },
  textC: {
    position: 'absolute',
    right: '12@ms',
    bottom: '12@ms',
  },
  text: {
    fontSize: 18,
    color: COLORS.primaryOn,
  },
})

export default Category
