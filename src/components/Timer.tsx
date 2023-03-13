import React, { useState, FC, useEffect, useRef } from 'react'
import { Text, View, StyleProp, ViewStyle } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { COLORS } from '@src/res'

type Props = {
  onStart?: () => void
  onFinish?: () => void
  time?: number
  contentContainer?: StyleProp<ViewStyle>
  timerContainer?: StyleProp<ViewStyle>
}

const Timer: FC<Props> = ({ time = 20, contentContainer, timerContainer }) => {
  const remainingTime = useRef(time)
  const [rTime, setRTime] = useState(time)
  const intervalRef = useRef<number>()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setRTime(prev => prev - 1)
    }, 1000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (rTime === 0 && intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }, [rTime])

  return (
    <View style={[styles.container, contentContainer]}>
      <View style={[styles.timer, timerContainer]}>
        <Text style={styles.text}>{rTime} / 20</Text>
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {},
  timer: {
    paddingHorizontal: '12@ms',
    paddingVertical: '8@ms',
    backgroundColor: COLORS.lightBlue,
    height: '36@ms',
    width: '72@ms',
    borderRadius: '8@ms',
    borderWidth: 1,
    borderColor: COLORS.primaryOn,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
})

export default Timer
