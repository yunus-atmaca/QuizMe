import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { COLORS, STYLES } from '@src/res'

type Props = {}

const Question: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.qText}>
        What is the name of the house of Harry Potter at Hogwarts?
      </Text>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: STYLES.W_HEIGHT * 0.3,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qText: {
    fontSize: 24,
    textAlign: 'center',
    color: COLORS.primaryOn,
  },
})

export default Question
