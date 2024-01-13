import { align, text_style } from '@zos/ui'
import { getText } from '@zos/i18n'
import { getDeviceInfo } from '@zos/device'


export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();
 
const TITLE_SIZE = 42
const LINE_SIZE = 36
const LINE1_Y = 70 //(TITLE_SIZE + 28)
const LINE2_Y = 116 //(LINE1_Y + LINE_SIZE + 10)
const LINE3_Y = 172 //(LINE2_Y + LINE_SIZE + 20)
const LINE4_Y = 218 //(LINE3_Y + LINE_SIZE + 10)
const LINE5_Y = 274 //(LINE4_Y + LINE_SIZE + 20)

export const TITLE_TEXT = {
  text: "tm8",
  text_style: text_style.NONE,
  x: 0,
  y: 0,
  w: DEVICE_WIDTH,
  h: TITLE_SIZE+3,
  color: 0x999999,
  text_size: TITLE_SIZE,
  align_h: align.CENTER_H,
  align_v: align.CENTER_V,
}

export const LINE1_TEXT = {
  text: "Line1_12345678",
  text_style: text_style.NONE,
  x: DEVICE_WIDTH/5,
  y: LINE1_Y,
  w: 3*DEVICE_WIDTH/5,
  h: LINE_SIZE+3,
  color: 0x999999,
  text_size: LINE_SIZE,
  align_h: align.LEFT,
  align_v: align.CENTER_V,
}
  
export const LINE2_TEXT = {
  text: "Line2_12345678",
  text_style: text_style.NONE,
  x: DEVICE_WIDTH/5,
  y: LINE2_Y,
  w: 3*DEVICE_WIDTH/5,
  h: LINE_SIZE+3,
  color: 0x999999,
  text_size: LINE_SIZE,
  align_h: align.LEFT,
  align_v: align.CENTER_V,
}

export const LINE3_TEXT = {
  text: "Line3_12345678",
  text_style: text_style.NONE,
  x: DEVICE_WIDTH/5,
  y: LINE3_Y,
  w: 3*DEVICE_WIDTH/5,
  h: LINE_SIZE+3,
  color: 0x999999,
  text_size: LINE_SIZE,
  align_h: align.LEFT,
  align_v: align.CENTER_V,
}
  
export const LINE4_TEXT = {
  text: "Line4_12345678",
  text_style: text_style.NONE,
  x: DEVICE_WIDTH/5,
  y: LINE4_Y,
  w: 3*DEVICE_WIDTH/5,
  h: LINE_SIZE+3,
  color: 0x999999,
  text_size: LINE_SIZE,
  align_h: align.LEFT,
  align_v: align.CENTER_V,
}

export const LINE5_TEXT = {
  text: "Line5 1234567890 dluga linia",
  text_style: text_style.NONE,
  x: DEVICE_WIDTH/5,
  y: LINE5_Y,
  w: 3*DEVICE_WIDTH/5,
  h: LINE_SIZE+3,
  color: 0x999999,
  text_size: LINE_SIZE,
  align_h: align.LEFT,
  align_v: align.CENTER_V,
}

export const MENU_TO_BUTTON = {
  text: "   ---   ",
  press_color: 0x333333,
  normal_color: 0x1a1a1a,
  x: 120,
  y: 350,
  w: 200,
  h: 60,
  color: 0xffffff,
  text_size: 36,
  align_h: align.TOP,
  align_v: align.CENTER_V,
  radius: 28,
};



export const MENU_OPTIONS = [
  {
    name: "MODE1     opis: ten tryb bedzie pokazywal lat i long",
    type: "menu1_type",
    value: 512,
  },
  {
    name: "MODE2 text",
    type: "menu2_type",
    value: 71,
  },
  {
    name: "MODE3 text",
    type: "menu3_type",
    value: 44,
  },
  {
    name: "MODE4 text",
    type: "menu4_type",
    value: 379,
  },
];
