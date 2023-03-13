import React, { FC } from 'react'
import { TouchableOpacity, ScrollView, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { COLORS, Ic_ArrowLeft } from '@src/res'
import { SSPropsCreator } from '@src/types/navigation'
import { Timer } from '@src/components'

import Question from './Question'
import Answers from './Answers'
import Header from './Header'
import Label from './Label'

const Questions: FC<SSPropsCreator<'Questions'>> = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        bounces={false}
        showsHorizontalScrollIndicator={false}
        horizontal={false}>
        <Header category={route.params.category} />
        <Label />
        {/*<Question />
        <Answers />*/}
      </ScrollView>
      {/*<Timer contentContainer={styles.timerCC} />*/}
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
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
