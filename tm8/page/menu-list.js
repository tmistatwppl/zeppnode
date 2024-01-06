import * as hmUI from "@zos/ui";
import { align } from "@zos/ui";
import { back } from "@zos/router";
import { log as Logger, px } from "@zos/utils";
import { localStorage } from "@zos/storage";

import { MENU_OPTIONS,DEVICE_WIDTH } from "../utils/constants";

const globalData = getApp()._options.globalData;

const MENU_LIST_Y = 96;
const MENU_LIST_ITEM_MARGIN = 60;
const MENU_LIST_ITEM_HEIGHT = 52;
const MENU_LIST_RADIOGROUP = {
  select_src: "selected.png",
  unselect_src: "unselected.png",
  x: 30,
  y: MENU_LIST_Y,
  w: -1,
  h: -1,
};

const MENU_LIST_RADIO_ITEM = {
  x: 0,
  y: MENU_LIST_Y,
  w: MENU_LIST_ITEM_HEIGHT,
  h: MENU_LIST_ITEM_HEIGHT,
};

const MENU_LIST_RADIO_ITEM_TEXT = {
  x: 106,
  y: 97,
  w: 254,
  h: MENU_LIST_ITEM_HEIGHT,
  color: 0xffffff,
  text_size: 32,
  align_h: align.LEFT,
  align_v: align.CENTER_V,
}


Page({
  state: {
    activeIndex: -1,
    isFinishInit: false,
    radioGroup: null,
    radioButtonsArray: [],
  },
  onInit() {
    
  },
  setPrograms(index) {
    this.state.activeIndex = index;
    globalData.displayType = MENU_OPTIONS[index].type;
    localStorage.setItem("calorie", {
      displayType: globalData.displayType
    });
    back();
  },
  buildFoodList() {
    let activeIndex = 0;
    const radioGroup = hmUI.createWidget(hmUI.widget.RADIO_GROUP, {
      ...MENU_LIST_RADIOGROUP,
      check_func: (group, index, checked) => {
        if (checked) {
          this.state.isFinishInit && this.setPrograms(index);
        }
      },
    });

    this.state.radioGroup = radioGroup;

    for (let index = 0; index < MENU_OPTIONS.length; index++) {
      this.buildRadioButton(index);
      this.buildRadioText(index);
      activeIndex =
        MENU_OPTIONS[index].type === globalData.displayType ? index : activeIndex;
    }
    this.state.activeIndex = activeIndex;
    this.initRadioGroup();
  },
  buildElement() {
    hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 0,
      y: 0,
      w: DEVICE_WIDTH,
      h: px(
        MENU_LIST_Y +
          (MENU_OPTIONS.length + 1) *
            (MENU_LIST_ITEM_HEIGHT + MENU_LIST_ITEM_MARGIN)
      ),
    });
    this.buildFoodList();
  },
  buildRadioButton(index) {
    const radio = this.state.radioGroup.createWidget(hmUI.widget.STATE_BUTTON, {
      ...MENU_LIST_RADIO_ITEM.styles,
      y: px(index * (MENU_LIST_ITEM_HEIGHT + MENU_LIST_ITEM_MARGIN)),
    });
    this.state.radioButtonsArray.push(radio);
  },
  buildRadioText(index) {
    const text = hmUI.createWidget(hmUI.widget.TEXT, {
      ...MENU_LIST_RADIO_ITEM_TEXT,
      y: px(
        MENU_LIST_Y + index * (MENU_LIST_ITEM_HEIGHT + MENU_LIST_ITEM_MARGIN)
      ),
      text: `${MENU_OPTIONS[index].name[0].toUpperCase()}${MENU_OPTIONS[
        index
      ].name.slice(1)}`,
    });
    text.addEventListener(hmUI.event.SELECT, () => {
      this.state.radioGroup.setProperty(
        hmUI.prop.CHECKED,
        this.state.radioButtonsArray[index]
      );
    });
  },
  initRadioGroup() {
    this.state.radioGroup.setProperty(
      hmUI.prop.INIT,
      this.state.radioButtonsArray[0]
    );
    this.state.radioGroup.setProperty(
      hmUI.prop.CHECKED,
      this.state.radioButtonsArray[this.state.activeIndex]
    );
    this.state.isFinishInit = true;
  },
  build() {
    this.buildElement();
  },
  onReady() {},

  onShow() {},

  onHide() {},

  onDestroy() {},
});
