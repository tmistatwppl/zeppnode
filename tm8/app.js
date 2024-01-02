import { log as Logger } from "@zos/utils";
import LocalStorage from "./utils/storage";

const logger = Logger.getLogger("tm8");
const fileName = "local_data.txt";

App({
  globalData: {
    displayType: "menu2_type",
    localStorage: null,
  },
  onCreate() {
    logger("app onCreate invoke");
    try {
      this.globalData.localStorage = new LocalStorage(fileName);
      const { displayType = "menu2_type" } = this.globalData.localStorage.get();
      this.globalData.displayType = displayType;
    } catch (e) {
      logger.log("--->e:", e);
    }
  },

  onDestroy() {
    logger("app onDestroy invoke");
    this.globalData.localStorage.set({
      displayType: getApp()._options.globalData.displayType,
    });
  },
});
