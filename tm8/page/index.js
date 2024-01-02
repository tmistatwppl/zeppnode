import { getTextLayout, createWidget, widget } from '@zos/ui'
import { push } from '@zos/router'
import { getText } from '@zos/i18n'
//import { Calorie } from '@zos/sensor'
import { log as Logger, px } from '@zos/utils'

import {
  TITLE_TEXT,
  UNIT_TEXT,
  TOTAL_CONSUME_TEXT,
  MENU_TO_BUTTON,
  DEVICE_WIDTH,
} from "../utils/styles";
import { FOOD_CALORIES } from "../utils/constants";

const globalData = getApp()._options.globalData;

Page({
  printContent(currentMode) {
    
    createWidget(widget.TEXT, TITLE_TEXT)
    createWidget(widget.TEXT, UNIT_TEXT)
    createWidget(widget.TEXT, TOTAL_CONSUME_TEXT)
    

  },
  build() {
    let calories = 197;//new Calorie().getCurrent(); // Math.floor(Math.random() * 1000)
    let currentMode = globalData.foodType;

    this.printContent(currentMode);

    let activeIndex = FOOD_CALORIES.findIndex(
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
