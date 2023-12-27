import { setStatusBarVisible } from "@zos/ui";

App({
  globalData: {},
  onCreate(options) {
    console.log("log from app.js on create invoke");
    setStatusBarVisible(false);
  },

  onDestroy(options) {
    console.log("log from app.js on destroy invoke");
  },
});
