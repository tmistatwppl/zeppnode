import { log as Logger } from "@zos/utils";
//import myLocalStorage from "./utils/storage";
import { localStorage } from '@zos/storage'

import { MENU_OPTIONS } from "./utils/constants";

const logger = Logger.getLogger("tm8");
const fileName = "local_data.txt";

App({
  globalData: {
    modeType: MENU_OPTIONS[0].type, //"menu1_type",
  },
  onCreate() {
    logger("app onCreate invoke");
    //const val = localStorage.getItem('test')
    const modeSaved = localStorage.getItem('type');
    //const modeSaved = localStorage.getItem(MENU_OPTIONS[0].type);
    if (modeSaved){
      //odczytalem
      this.globalData.modeType = modeSaved;
    }    
  },

  onDestroy() {
    logger("app onDestroy invoke");
    //const modeForSave = this.globalData.modeType;
    //localStorage.setItem('test', 'test value')
    localStorage.setItem('type', MENU_OPTIONS[3].type);//zapisuje 3ke czy odczytam 3rke
  },
});
