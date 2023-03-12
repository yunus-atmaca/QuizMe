import React, { FC } from 'react'
import { ScrollView, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { COLORS } from '@src/res'
import { SSPropsCreator } from '@src/types/navigation'

import Question from './Question'
import Answers from './Answers'

const Questions: FC<SSPropsCreator<'Questions'>> = () => {
  return (
    <ScrollView
      bounces={false}
      showsHorizontalScrollIndicator={false}
      horizontal={false}
      style={styles.container}>
      <Question />
      <Answers />
    </ScrollView>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
})

export default Questions
