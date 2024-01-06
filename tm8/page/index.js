import { getTextLayout, createWidget, widget } from '@zos/ui'
import { push } from '@zos/router'

//import { Calorie } from '@zos/sensor'


import {
  TITLE_TEXT,
  LINE1_TEXT,
  LINE2_TEXT,
  LINE3_TEXT,
  LINE4_TEXT,
  LINE5_TEXT,
  MENU_TO_BUTTON,
  
  MENU_OPTIONS,
} from "../utils/constants";

const globalData = getApp()._options.globalData;

Page({
  printContent(currentMode) {
    
    createWidget(widget.TEXT, TITLE_TEXT)
    createWidget(widget.TEXT, LINE1_TEXT)
    createWidget(widget.TEXT, LINE2_TEXT)
    createWidget(widget.TEXT, LINE3_TEXT)
    createWidget(widget.TEXT, LINE4_TEXT)
    createWidget(widget.TEXT, LINE5_TEXT)
    

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
