import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { COLORS } from '@src/res'

type Props = {}

const Answers: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Answer color={COLORS.green} index={'1'} />
      <Answer color={COLORS.transparent} index={'2'} />
      <Answer color={COLORS.transparent} index={'3'} />
      <Answer color={COLORS.red} index={'4'} />
    </View>
  )
}

type AProps = {
  color: string
  index: string
}

const Answer: FC<AProps> = ({ color, index }) => {
  return (
    <View style={[styles.answer, { backgroundColor: color }]}>
      <Text style={styles.aText}>Answer {index}</Text>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    padding: '16@ms',
  },
  answer: {
    width: '100%',
    height: '48@ms',
    backgroundColor: COLORS.green,
    marginTop: '8@ms',
    borderWidth: 1,
    borderColor: COLORS.primaryOn,
    borderRadius: '8@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aText: {
    fontSize: 16,
    textAlign: 'center',
  },
})

export default Answers
