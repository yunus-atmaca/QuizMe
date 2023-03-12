import { moderateScale } from 'react-native-size-matters'
import { Dimensions } from 'react-native'

export const spacing = {
  s: moderateScale(8),
  m: moderateScale(16),
}

export const radius = {
  s: moderateScale(4),
  m: moderateScale(8),
  ml: moderateScale(16),
}

export const W_WIDTH = Dimensions.get('window').width
export const W_HEIGHT = Dimensions.get('window').height
export const S_WIDTH = Dimensions.get('screen').width
export const S_HEIGHT = Dimensions.get('screen').height
