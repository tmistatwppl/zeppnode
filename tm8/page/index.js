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
const persistentData = getApp()._options.globalData.persistentData;

Page({
  buildTopContent(currentMode) { // zostawiam zeby lepiej dzialal diff z calorie 3.0
    createWidget(widget.TEXT, TITLE_TEXT)
  },
  build() {
    let currentData = persistentData.value;//new Calorie().getCurrent(); // Math.floor(Math.random() * 1000)
    let currentMode = persistentData.type;

//    !isSquare && hmUI.createWidget(hmUI.widget.TEXT, COMMON_TITLE_TEXT);
//    hmUI.createWidget(hmUI.widget.TEXT, TOTAL_CONSUME_TEXT);

    this.buildTopContent(currentMode);

    //activeIndex moze byc bledny jak currentMode nie wystepuje w tablicy jako type MENU_OPTIONS[].type
    let activeIndex = MENU_OPTIONS.findIndex(  (item) => item.type === currentMode,    );
        
    this.updateDisplay(MENU_OPTIONS[activeIndex],currentData,currentMode,persistentData.name);
    
    createWidget(widget.BUTTON, {
      ...MENU_TO_BUTTON,
      click_func: () => {
        push({
          url: "page/menu-list",
        });
      },
    });
  },
  updateDisplay(modeProperties,Data,Mode,Name) { // updateDisplay zeby lepiej diff z calorie 3.0 chodzil
    let { name, type, value } = modeProperties;
    let dbgdata = ' dbg:';
    
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
    dbgdata += (' v:' + value);//value to ost element z modeProperties 
    dbgdata += (' d:' + Data);//Data to currentData z persistentData.value
    dbgdata += (' m: '+ Mode);//Mode to activeMode z persistentData.type
    dbgdata += (' n: '+ Name);//Name to activeMode z persistentData.name
    
    this.drawFood(dbgdata, name); // icon
  },
  drawFood(dbgdata, modeName) {
    let line5 = LINE5_TEXT;
    //line5.text = modeName + ' aha dbgdata ' + dbgdata;
    line5.text = modeName + dbgdata;    
    createWidget(widget.TEXT, line5);
  },
  onReady() {},

  onShow() {},

  onHide() {},

  onDestroy() {},
});
