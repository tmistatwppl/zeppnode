import { log as Logger } from "@zos/utils";
import LocalStorage from "./utils/storage";
import { MENU_OPTIONS } from "./utils/constants";

const logger = Logger.getLogger("tm8");
const fileName = "local_data.txt";

App({
  globalData: {
    modeType: MENU_OPTIONS[2].type, //"menu2_type",
    localStorage: null,
  },
  onCreate() {
    logger("app onCreate invoke");
    try {
      this.globalData.localStorage = new LocalStorage(fileName);
      const { modeType } = this.globalData.localStorage.get();
      this.globalData.modeType = modeType;
    } catch (e) {
      logger.log("--->e:", e);
    }
  },

  onDestroy() {
    logger("app onDestroy invoke");
    this.globalData.localStorage.set({
      modeType: getApp()._options.globalData.modeType,
    });
  },
});
