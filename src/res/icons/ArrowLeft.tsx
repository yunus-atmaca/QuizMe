import React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

export default function ArrowLeft({ color, ...props }: SvgProps) {
  return (
    <Svg height="24" width="24" {...props}>
      <Path
        d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"
        fill={color || 'black'}
      />
    </Svg>
  )
}
