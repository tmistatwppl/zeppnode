import { log as Logger } from "@zos/utils";
import myLocalStorage from "./utils/storage";
//import { localStorage } from '@zos/storage'

import { MENU_OPTIONS } from "./utils/constants";

//const logger = Logger.getLogger("tm8");
const fileName = "tm8_local_data.txt";
const appStorage = new myLocalStorage(fileName);

App({
  globalData: {
    persistentData: MENU_OPTIONS[1], //"menu2",
  },
  onCreate() {
    //logger("app onCreate invoke");
       
    //const val = localStorage.getItem('test')
    //const data = localStorage.getItem(MENU_OPTIONS[0].type);
    
    let data = appStorage.getData();//BUG_ON
    this.globalData.persistentData = data;
        
  },

  onDestroy() {
    //logger("app onDestroy invoke");
    //const modeForSave = this.globalData.persistentData;
    //localStorage.setItem('test', 'test value')
    let data = { 
      name: this.globalData.persistentData.name,
      type: this.globalData.persistentData.type,
      value: this.globalData.persistentData.value,
     };
    //watermarki do danych
    data.value = 777777;
    appStorage.flashData(data);
  },
});
