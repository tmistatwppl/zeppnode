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
    let calories = 11297;//new Calorie().getCurrent(); // Math.floor(Math.random() * 1000)
    let currentMode = globalData.modeType;

//    !isSquare && hmUI.createWidget(hmUI.widget.TEXT, COMMON_TITLE_TEXT);
//    hmUI.createWidget(hmUI.widget.TEXT, TOTAL_CONSUME_TEXT);

    this.buildTopContent(currentMode);

    let activeIndex = MENU_OPTIONS.findIndex(
      (item) => item.type === currentMode,
    );
    this.calculate(calories, currentMode, MENU_OPTIONS[activeIndex]);
    createWidget(widget.BUTTON, {
      ...MENU_TO_BUTTON,
      click_func: () => {
        push({
          url: "page/menu-list",
        });
      },
    });
  },
  calculate(currentCalories, currentMode, modeProperties) { // calculate zeby lepiej diff z calorie 3.0 chodzil
    let { name, type, value } = modeProperties;
    let count = Math.floor(currentCalories / value);
    if (type === MENU_OPTIONS[0].type) {//menu tryb pierwszy
        createWidget(widget.TEXT, LINE1_TEXT);
    }
    if (type === MENU_OPTIONS[1].type) {//menu tryb drugi
        createWidget(widget.TEXT, LINE1_TEXT);
        createWidget(widget.TEXT, LINE2_TEXT);
    }
    if (type === MENU_OPTIONS[2].type) {//menu tryb trzeci
       createWidget(widget.TEXT, LINE3_TEXT);
    }
    if (type === MENU_OPTIONS[3].type) {//menu tryb czwarty
       createWidget(widget.TEXT, LINE3_TEXT);
       createWidget(widget.TEXT, LINE4_TEXT);
    }
    this.drawFood(count, type); // icon
  },
  drawFood() {
    let text = LINE5_TEXT;
    
    createWidget(widget.TEXT, text);
  },
  onReady() {},

  onShow() {},

  onHide() {},

  onDestroy() {},
});
