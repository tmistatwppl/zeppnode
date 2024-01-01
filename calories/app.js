import { log as Logger } from "@zos/utils";
import LocalStorage from "./utils/storage";

const logger = Logger.getLogger("tmCalories");
const fileName = "calorie_data.txt";

App({
  globalData: {
    foodType: "chocolate",
    localStorage: null,
  },
  onCreate() {
    logger("app onCreate invoke");
    try {
      this.globalData.localStorage = new LocalStorage(fileName);
      const { foodType = "chocolate" } = this.globalData.localStorage.get();
      this.globalData.foodType = foodType;
    } catch (e) {
      logger.log("--->e:", e);
    }
  },

  onDestroy() {
    logger("app onDestroy invoke");
    this.globalData.localStorage.set({
      foodType: getApp()._options.globalData.foodType,
    });
  },
});
