import { align, text_style } from '@zos/ui'
//import { getText } from '@zos/i18n'
import { getDeviceInfo } from '@zos/device'

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();

export const TITLE_SIZE = 42
export const LINE_SIZE = 36
export const LINE1_Y = TITLE_SIZE + 28
export const LINE2_Y = LINE1_Y + LINE_SIZE + 10
export const LINE3_Y = LINE2_Y + LINE_SIZE + 20
export const LINE4_Y = LINE4_Y + LINE_SIZE + 10


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
}

export const MENU_OPTIONS = [
  {
    name: "menu1_text",
    type: "menu1_type",
    value: 512,
  },
  {
    name: "menu2_text",
    type: "menu2_type",
    value: 71,
  },
  {
    name: "menu3_text",
    type: "menu3_type",
    value: 44,
  },
  {
    name: "menu4_text",
    type: "menu4_type",
    value: 379,
  },
];
