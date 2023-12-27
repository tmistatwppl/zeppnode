import { createWidget, widget, prop } from "@zos/ui";
import { Geolocation } from "@zos/sensor";
import { px } from "@zos/utils";
import PageAdvanced from "../../utils/template/PageAdvanced";
import TextByLine, { MakeYByLine } from "../../utils/UI/TextByLine";
import {DEFAULT_COLOR,DEFAULT_COLOR_TRANSPARENT,TITLE_FONT_COLOR,TITLE_FONT_SIZE} from "../../config/constants";
import { DEVICE_WIDTH } from "../../config/device";

PageAdvanced({
  state: {
    pageName: "geo1",
  },
  build() {
    const geolocation = new Geolocation();
    geolocation.start();

    const currentLat = new TextByLine({
      text: `Lat:${geolocation.getLatitude()}`,line: 0, margin: 44,}).render();

    const currentLon = new TextByLine({
      text: `Long:${geolocation.getLongitude()}`, line: 1, margin: 44,}).render();

    const changedLat = new TextByLine({text: `EVENT-CHANGE-LAT`, line: 2, margin: 44,}).render();

    const changedLong = new TextByLine({text: `EVENT-CHANGE-LON`, line: 3, margin: 44,}).render();

    //tm dbg
    const geoStatus = new TextByLine({
      text: `geo init...`,line: 4, margin: 44,}).render();
    
    const changeCallback = () => {
      //tm dbg
      geoStatus.setProperty(prop.MORE, {text: `ngeo: ${geolocation.getStatus()}`,});

      //if (geolocation.getStatus() === 'A') 
      changedLat.setProperty(prop.MORE, {text: `nLAT: ${geolocation.getLatitude()}`,});
      changedLong.setProperty(prop.MORE, {text: `nLONG: ${geolocation.getLongitude()}`,});    
    }

    createWidget(widget.BUTTON, {
      x: (DEVICE_WIDTH - 240) / 2,
      y: MakeYByLine(5),
      w: px(240),
      h: px(46),
      radius: px(16),
      normal_color: DEFAULT_COLOR,
      press_color: DEFAULT_COLOR_TRANSPARENT,
      text: "UPDATE",
      click_func: geolocation.onChange(changeCallback),
    });
  },
  //destroy
});
