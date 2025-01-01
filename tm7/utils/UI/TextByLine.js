import { createWidget, widget, align, text_style } from "@zos/ui";
import { px } from "@zos/utils";
import {TEXTBYLINE_COLOR,TEXTBYLINE_SIZE} from "../../config/constants";


export function MakeYByLine(line) {
   return (px(line * (2*TEXTBYLINE_SIZE)) + 80)
}

export default class TextByLine {
  constructor(params = {}) {
    const { text = '', line = 0, margin = 0 } = params

    this.text = text
    this.line = line
    this.margin = margin
  }

  render(params = {}) {
    let { text = this.text, line = 0, margin = 0} = params

    if (!line) {
      line = this.line
    }

    if (!margin) {
      margin = this.margin
    }

    const y = MakeYByLine(line)
    this.y = y
    
    this.line = line + 1

    return createWidget(widget.TEXT, {
      x: px(margin),
      y,
      w: px(480),
      h: px(46),
      color: TEXTBYLINE_COLOR,
      text_size: px(TEXTBYLINE_SIZE),
      //align_h: align.CENTER_H,
      //align_v: align.CENTER_V,
      text_style: text_style.NONE,
      text: this.text,
    });
  }
}
