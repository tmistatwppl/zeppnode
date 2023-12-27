import { createWidget, widget, text_style, align } from '@zos/ui'
import { px } from '@zos/utils'
import {TITLE_FONT_COLOR,TITLE_FONT_SIZE} from "../../config/constants";

export default class Title {
  constructor(params) {
    const { text = "", y = px(30) } = params;

    this.text = text;
    this.y = y;
  }

  render() {
    return createWidget(widget.TEXT, {
      x: px(96),
      y: this.y,
      w: px(288),
      h: px(46),
      color: TITLE_FONT_COLOR,
      text_size: px(TITLE_FONT_SIZE),
      align_h: align.CENTER_H,
      align_v: align.CENTER_V,
      text_style: text_style.NONE,
      text: this.text,
    });
  }
}
