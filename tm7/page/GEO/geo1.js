import { createWidget, widget, prop } from "@zos/ui";
import { Geolocation } from "@zos/sensor";
import { px } from "@zos/utils";
import PageAdvanced from "../../utils/template/PageAdvanced";
import TextByLine, { MakeYByLine } from "../../utils/UI/TextByLine";
import {DEFAULT_COLOR,DEFAULT_COLOR_TRANSPARENT,TITLE_FONT_COLOR,TITLE_FONT_SIZE} from "../../config/constants";

PageAdvanced({
  state: {
    pageName: "geo1",
  },
  build() {
    //const distance = new Distance();
    const geolocation = new Geolocation();

    const currentLat = new TextByLine({
      //text: `current:${distance.getLatit()}`,
      text: `Lat:${geolocation.getLatitude()}`,line: 0,}).render();

    const currentLon = new TextByLine({
      //text: `current:${distance.getLatit()}`,
      text: `Lon:${geolocation.getLongitude()}`, line: 1,}).render();

    const changedLat = new TextByLine({text: `EVENT-CHANGE-LAT`, line: 2,}).render();

    const changedLon = new TextByLine({text: `EVENT-CHANGE-LON`, line: 3,}).render();

    /*stary callback z distance
    const changeCallback = () => {
      changeEventText.setProperty(prop.MORE, {text: `EVENT-CHANGE: ${distance.getCurrent()}`,});
    };
    */

    const changeCallback = () => {
      if (geolocation.getStatus() === 'A') {
        //console.log(geolocation.getLatitude())
        changedLat.setProperty(prop.MORE, {text: `nLAT: ${geolocation.getLatitude()}`,});

        //console.log(geolocation.getLongitude())
        changedLon.setProperty(prop.MORE, {text: `nLON: ${geolocation.getLongitude()}`,});
      }
    }

    createWidget(widget.BUTTON, {
      x: px(80),
      y: MakeYByLine(4),
      w: px(240),
      h: px(40),
      radius: px(16),
      normal_color: DEFAULT_COLOR,
      press_color: DEFAULT_COLOR_TRANSPARENT,
      text: "update",
      click_func: geolocation.onChange(changeCallback),
    });
  },
});
