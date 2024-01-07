import { getTextLayout, createWidget, widget } from '@zos/ui'
import { push } from '@zos/router'

//import { Calorie } from '@zos/sensor'
import { log as Logger, px } from "@zos/utils";

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
const logger = Logger.getLogger("tm8");
const globalData = getApp()._options.globalData;

Page({
  buildTopContent(currentMode) { // zostawiam zeby lepiej dzialal diff z calorie 3.0
    createWidget(widget.TEXT, TITLE_TEXT)
  },
  build() {
    let calories = 197;//new Calorie().getCurrent(); // Math.floor(Math.random() * 1000)
    let currentMode = globalData.modeType;

//    !isSquare && hmUI.createWidget(hmUI.widget.TEXT, COMMON_TITLE_TEXT);
//    hmUI.createWidget(hmUI.widget.TEXT, TOTAL_CONSUME_TEXT);

    this.buildTopContent(currentMode);

    let activeIndex = MENU_OPTIONS.findIndex(
      (item) => item.type === currentMode,
    );
    this.calculate(currentMode, MENU_OPTIONS[activeIndex]);
    createWidget(widget.BUTTON, {
      ...MENU_TO_BUTTON,
      click_func: () => {
        push({
          url: "page/menu-list",
        });
      },
    });
  },
  calculate(currentMode, modeProperties) { // calculate zeby lepiej diff z calorie 3.0 chodzil
    
    createWidget(widget.TEXT, LINE1_TEXT)
    createWidget(widget.TEXT, LINE2_TEXT)
    createWidget(widget.TEXT, LINE3_TEXT)
    createWidget(widget.TEXT, LINE4_TEXT)
    
    this.drawFood(); // icon
  },
  drawFood() {
    createWidget(widget.TEXT, LINE5_TEXT)
  },
  onReady() {},

  onShow() {},

  onHide() {},

  onDestroy() {},
});
