/*
 * @Author: Monve
 * @Date: 2022-03-02 11:37:09
 * @LastEditors: Monve
 * @LastEditTime: 2022-04-12 17:24:01
 * @FilePath: /char-avatar/src/charAvatar/CharAvatar.tsx
 */
// @ts-ignore
import Avatar from 'react-string-avatar';

const preset_colors = [
  '#ED5565', //grapefruit
  '#FC6E51', //bittersweet
  '#FFCE54', //sunflower
  '#A0D468', //grass
  '#48CFAD', //mint
  '#4FC1E9', //aqua
  '#5D9CEC', //blue jeans
  '#AC92EC', //lavander
]

interface Param {
  str: string,
  width: number,
  bgColor?: string,
  textColor?: string,
  bgColors?: string[],
  cornerRadius?: number,
  fontWeight?: number,
  fontScale?: number,
  pictureResolution?: number,
}

function selectBgColor(str: string, colors?: string[]): string {
  colors = colors ? colors : preset_colors
  let i = 0
  for (const char of str) {
    i = (i + char.charCodeAt(0)) % colors.length
  }
  return colors[i]
}


export const CharAvatar = (
  {
    str, width, bgColor, textColor, bgColors,
    cornerRadius, fontWeight, fontScale, pictureResolution
  }: Param
) => {
  return (
    <Avatar
      initials={(str && str.length > 0) ? str[0].toUpperCase() : ''}
      width={width}
      bgColor={bgColor ? bgColor : selectBgColor(str || '', bgColors)}
      textColor={textColor ? textColor : "#FFF"}
      cornerRadius={cornerRadius ? cornerRadius : width / 2}
      fontWeight={fontWeight ? fontWeight : 100 * 1.5}
      fontScale={fontScale ? fontScale : 100 * 1.2}
      pictureResolution={pictureResolution ? pictureResolution : width * 2}
    >
    </Avatar>
  )
}