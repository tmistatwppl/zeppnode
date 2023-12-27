import { createWidget, widget, prop } from "@zos/ui";
import { Time } from '@zos/sensor';
import { px } from "@zos/utils";
import PageAdvanced from "../../utils/template/PageAdvanced";
import TextByLine, { MakeYByLine } from "../../utils/UI/TextByLine";
import {DEFAULT_COLOR,DEFAULT_COLOR_TRANSPARENT,TITLE_FONT_COLOR,TITLE_FONT_SIZE} from "../../config/constants";
import { DEVICE_WIDTH } from "../../config/device";
PageAdvanced({
  state: {
    pageName: "time1",
  },
  build() {
    const time = new Time();

    const startTime = new TextByLine({
      text: `startTime:${time.getTime()}`,
      line: 0, margin: 44,
    }).render();

    const newTime = new TextByLine({
      text: `pending timestamp update`,
      line: 1, margin: 44
    }).render();

    createWidget(widget.BUTTON, {
      x: (DEVICE_WIDTH - 240) / 2,
      y: MakeYByLine(5),
      w: px(240),
      h: px(46),
      radius: px(16),
      normal_color: DEFAULT_COLOR,
      press_color: DEFAULT_COLOR_TRANSPARENT,
      text: "UPDATE",
      click_func: () => {
        newTime.setProperty(prop.MORE, {text: `timestamp:${time.getTime()}`, });
      },
    });
  },
});
