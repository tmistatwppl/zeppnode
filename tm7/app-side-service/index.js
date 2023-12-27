import { gettext } from 'i18n'

AppSideService({
  onInit() {
    console.log(gettext('log from OnInit() AppSideService app-side-service/index.js'))
  },

  onRun() {
  },

  onDestroy() {
  }
})

