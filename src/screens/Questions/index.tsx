import React, { FC } from 'react'
import { TouchableOpacity, ScrollView, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { COLORS, Ic_ArrowLeft } from '@src/res'
import { SSPropsCreator } from '@src/types/navigation'
import { Timer } from '@src/components'

import Question from './Question'
import Answers from './Answers'

const Questions: FC<SSPropsCreator<'Questions'>> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        bounces={false}
        showsHorizontalScrollIndicator={false}
        horizontal={false}>
        <Question />
        <Answers />
      </ScrollView>
      <Timer contentContainer={styles.timerCC} />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
        style={styles.backC}>
        <Ic_ArrowLeft />
      </TouchableOpacity>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  backC: {
    position: 'absolute',
    left: '16@ms',
    top: '16@ms',
    width: '44@ms',
    height: '36@ms',
    borderColor: COLORS.primaryOn,
    borderWidth: 1,
    borderRadius: '8@ms',
    backgroundColor: COLORS.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerCC: {
    position: 'absolute',
    top: '16@ms',
    //backgroundColor: 'blue',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Questions
