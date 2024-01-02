import { align, text_style } from '@zos/ui'
import { getText } from '@zos/i18n'
import { getDeviceInfo } from '@zos/device'
//import { px } from '@zos/utils'

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = getDeviceInfo();

 
export const TITLE_TEXT = {
  text: getText("unit"),
  x: 4,
  y: 10,
  w: 382,
  h: 38,
  color: 0x999999,
  text_size: 28,
  align_h: align.CENTER_H,
  align_v: align.CENTER_V,
}

export const UNIT_TEXT = {
  text: getText("cake"),
  x: 4,
  y: 62,
  w: 382,
  h: 38,
  color: 0x999999,
  text_size: 28,
  align_h: align.CENTER_H,
  align_v: align.CENTER_V,
}

export const UNIT_TEXT2 = {
  text: getText("consumption"),
  x: 4,
  y: 162,
  w: 382,
  h: 38,
  color: 0x999999,
  text_size: 28,
  align_h: align.CENTER_H,
  align_v: align.CENTER_V,
}

export const MENU_TO_BUTTON = {
  text: getText("menu"),
  press_color: 0x333333,
  normal_color: 0x1a1a1a,
  x: 120,
  y: 350,
  w: 200,
  h: 60,
  color: 0xffffff,
  text_size: 36,
  align_h: align.CENTER_H,
  align_v: align.CENTER_V,
  radius: 28,
};



 


