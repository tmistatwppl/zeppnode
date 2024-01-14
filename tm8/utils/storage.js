import { statSync, writeFileSync, readFileSync } from "@zos/fs";
import { MENU_OPTIONS } from "./constants";


export default class myLocalStorage {
  constructor(fileName = "") {
    this.fileName = fileName;
    this.contentObj = {};
  }


/*
import { writeFileSync } from '@zos/fs'

const buffer = new ArrayBuffer(4)
writeFileSync({
  path: 'test.txt',
  data: buffer,
})

writeFileSync({
  path: 'content.txt',
  data: 'some content...',
  options: {
    encoding: 'utf8',
  },
})
*/

  flushData(obj) {
    //watermarki dbg
    obj.name = "flushData myLocalStorage"
    const buffer = obj;
    writeFileSync({
      path: this.fileName,
      data: JSON.stringify(buffer),
      options: {
        encoding: "utf8",
      },
    });
  }


  /*
  import { readFileSync } from '@zos/fs'

const contentBuffer = readFileSync({
  path: 'test.txt',
})

const contentString = readFileSync({
  path: 'test.txt',
  options: {
    encoding: 'utf8',
  },
})
  */
  getData() {
    const fStat = statSync({
      path: this.fileName,
    });
    //debug
    this.contentObj = {
        name: ('fN:'+ this.fileName + 'fS:' + fStat),        
        type: MENU_OPTIONS[4].type,
        value: 123123123,
    };
    if (fStat) {
      try {
        this.contentObj = JSON.parse(
          readFileSync({
            path: this.fileName,
            options: {
              encoding: "utf8",
            },
          })
        );
      } catch (error) {
        this.contentObj = {
          name: "error myLocalStorage w getData",
          type: MENU_OPTIONS[4].type,
          value: error
        };
      }
    }

    return this.contentObj;
  }
}
