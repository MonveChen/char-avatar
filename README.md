# char-avatar
Just provide a string, create a character avatar with its own background color

#### Usage

```js
import { CharAvatar } from "char-avatar"

<CharAvatar str={"字符头像"} width={25} ></CharAvatar>

```

#### Params

  str: string,

  width: number,

  bgColor?: string,

  textColor?: string,

  bgColors?: string[],     //bgColors are already preset, you can customize it

  cornerRadius?: number,

  fontWeight?: number,

  fontScale?: number,

  pictureResolution?: number,
