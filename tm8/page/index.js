import { align, createWidget, widget, text_style} from '@zos/ui'
import { push } from '@zos/router'

//import { Calorie } from '@zos/sensor'


import {
  MENU_OPTIONS,
  MENU_TO_BUTTON,
  DEVICE_WIDTH,
  DEVICE_HEIGHT,
  TITLE_SIZE,
  LINE_SIZE,
  LINE1_Y,
  LINE2_Y,
  LINE3_Y,
  LINE4_Y,
} from "../utils/constants";

const globalData = getApp()._options.globalData;


Page({
  printContent(currentMode) {
    const TITLE_TEXT = {
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

    const LINE1_TEXT = {
      text: "Line1" , //_1234567890",
      text_style: text_style.NONE,
      x: DEVICE_WIDTH/5,
      y: LINE1_Y,
      w: DEVICE_WIDTH/2,
      h: LINE_SIZE+3,
      color: 0x999999,
      text_size: LINE_SIZE,
      align_h: align.LEFT,
      align_v: align.CENTER_V,
    }

    const LINE2_TEXT = {
      text: "Line2",//_1234567890",
      text_style: text_style.NONE,
      x: DEVICE_WIDTH/5,
      y: LINE2_Y,
      w: DEVICE_WIDTH/2,
      h: LINE_SIZE+3,
      color: 0x999999,
      text_size: LINE_SIZE,
      align_h: align.LEFT,
      align_v: align.CENTER_V,
    }

    const LINE3_TEXT = {
      text: "Line3",//_1234567890",
      text_style: text_style.NONE,
      x: DEVICE_WIDTH/5,
      y: LINE3_Y,
      w: DEVICE_WIDTH/2,
      h: LINE_SIZE+3,
      color: 0x999999,
      text_size: LINE_SIZE,
      align_h: align.LEFT,
      align_v: align.CENTER_V,
    }
    
    const LINE4_TEXT = {
      text: "Line4",//_1234567890",
      text_style: text_style.NONE,
      x: DEVICE_WIDTH/5,
      y: LINE4_Y,
      w: DEVICE_WIDTH/2,
      h: LINE_SIZE+3,
      color: 0x999999,
      text_size: LINE_SIZE,
      align_h: align.LEFT,
      align_v: align.CENTER_V,
    }
    
    createWidget(widget.TEXT, TITLE_TEXT)
    createWidget(widget.TEXT, LINE1_TEXT)

    //createWidget(widget.TEXT, LINE2_TEXT)
    //createWidget(widget.TEXT, LINE3_TEXT)
    //const line4 = new createWidget(widget.TEXT, LINE4_TEXT)

    //line1.setProperty(prop.MORE, {text: `nLAT:`}) // ${geolocation.getLatitude()}`,})


  },
  build() {
    let calories = 197;//new Calorie().getCurrent(); // Math.floor(Math.random() * 1000)
    let currentMode = globalData.displayType;

    this.printContent(currentMode);

    let activeIndex = MENU_OPTIONS.findIndex(
      (item) => item.type === currentMode,
    )
    
    createWidget(widget.BUTTON, {
      ...MENU_TO_BUTTON,
      click_func: () => {
        push({
          url: "page/menu-list",
        });
      },
    });
  },
    
  onReady() {},

  onShow() {},

  onHide() {},

  onDestroy() {},
});
