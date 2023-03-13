import React, { FC, useState } from 'react'
import { TouchableOpacity, View, ScrollView, Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import { COLORS } from '@src/res'

import { Timer } from '@src/components'

type Props = {
  numberOfQuestions?: number
  onSelectLabel?: () => void
}

const QLabel: FC<Props> = ({ numberOfQuestions = 10 }) => {
  const [selected, setSelected] = useState(0)

  const onClick = (index: number) => {
    setSelected(index)
  }

  return (
    <>
      <View style={styles.container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
          bounces={false}>
          {Array.from(Array(numberOfQuestions).keys()).map((e, i) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => onClick(i)}
                key={'l' + i}
                style={[
                  styles.label,
                  i === selected ? styles.selected : styles.unselected,
                  i === 0 ? { marginStart: 0 } : {},
                ]}>
                <Text style={styles.labelT}>{i + 1}</Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
      <Timer contentContainer={styles.timerCC} />
    </>
  )
}

const styles = ScaledSheet.create({
  container: {
    paddingBottom: '16@ms',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primaryOn,
  },
  scrollView: {
    paddingHorizontal: '16@ms',
  },
  label: {
    width: '40@ms',
    height: '40@ms',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: '8@ms',
  },
  selected: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLORS.primaryOn,
    backgroundColor: COLORS.lightBlue,
  },
  unselected: {
    borderRadius: 100,
    borderWidth: 0,
    borderColor: COLORS.transparent,
    backgroundColor: COLORS.transparent,
  },
  labelT: {
    fontSize: 18,
    color: COLORS.black,
    fontWeight: '600',
  },
  timerCC: {
    marginTop: '16@ms',
    marginStart: '16@ms',
  },
})

export default QLabel
