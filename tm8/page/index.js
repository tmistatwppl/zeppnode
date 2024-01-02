import { getTextLayout, createWidget, widget } from '@zos/ui'
import { push } from '@zos/router'
import { getText } from '@zos/i18n'
//import { Calorie } from '@zos/sensor'
import { log as Logger, px } from '@zos/utils'

import {
  TITLE_TEXT,
  UNIT_TEXT,
  UNIT_TEXT2,
  MENU_TO_BUTTON,
  DEVICE_WIDTH,
} from "../utils/styles";
import { MENU_OPTIONS } from "../utils/constants";

const globalData = getApp()._options.globalData;

Page({
  printContent(currentMode) {
    
    createWidget(widget.TEXT, TITLE_TEXT)
    createWidget(widget.TEXT, UNIT_TEXT)
    createWidget(widget.TEXT, UNIT_TEXT2)
    

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
