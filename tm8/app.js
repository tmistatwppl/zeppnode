import { log as Logger } from "@zos/utils";
import myLocalStorage from "./utils/storage";
//import { localStorage } from '@zos/storage'

import { MENU_OPTIONS } from "./utils/constants";

//const logger = Logger.getLogger("tm8");
const fileName = "local_data.txt";
const appStorage = new myLocalStorage(fileName);

App({
  globalData: {
    persistentData: MENU_OPTIONS[3], //"menu1_type",
  },
  onCreate() {
    //logger("app onCreate invoke");
    //const val = localStorage.getItem('test')
    //let data = appStorage.getData();//BUG_ON
    let data = { //watermark data specjalnie zmiksowane
      name: MENU_OPTIONS[4],
      type: MENU_OPTIONS[1].type,
      value: 666666,
     };

    //data.name = "dane po appStorage.getData w onCreate"
    //const data = localStorage.getItem(MENU_OPTIONS[0].type);
    if (data){
      //odczytalem      
      this.globalData.persistentData = data;
      data.name = "dane zapisane do persistentData w onCreate"
    }    
  },

  onDestroy() {
    //logger("app onDestroy invoke");
    //const modeForSave = this.globalData.persistentData;
    //localStorage.setItem('test', 'test value')
    let data = MENU_OPTIONS[3];
    data.name = "MENU_OPT3 zapisane w onDestroy()";
    data.value = 777777; //nigdzie tej wartosci nie zapisuje , gdyby sie pojawila to tylko z odczytu storage
    appStorage.flashData(data);//zapisuje 3ke czy odczytam 3rke
  },
});
