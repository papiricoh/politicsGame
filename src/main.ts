import { createApp } from 'vue'
import App from './App.vue'
import HighchartsVue from 'highcharts-vue';

import './style.css'

import './demos/ipc'
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
//import './demos/node'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBuildingColumns, faHouse, faChartPie, faMoneyBills, faPersonMilitaryRifle, faUsersViewfinder, faBalanceScale, faForward, faBookBookmark, faUserTie, faPersonDigging, faPersonCane, faChildren, faUserGraduate, faPersonRifle, faUserSecret, faGlobe, faMapLocationDot, faIndustry, faGear, faDollarSign, faTruck, faMountainCity, faChair, faTractor, faMicrochip, faHouseChimney, faEarthEurope } from '@fortawesome/free-solid-svg-icons/index'

/* add icons to the library */
library.add(faBuildingColumns)
library.add(faHouse)
library.add(faChartPie)
library.add(faUsersViewfinder)
library.add(faMoneyBills)
library.add(faPersonMilitaryRifle)
library.add(faBalanceScale)
library.add(faForward)
library.add(faBookBookmark)
library.add(faUserTie)
library.add(faPersonDigging)
library.add(faTractor)
library.add(faChair)
library.add(faPersonDigging)
library.add(faHouseChimney)
library.add(faEarthEurope)
library.add(faMicrochip)
library.add(faPersonCane)
library.add(faChildren)
library.add(faUserGraduate)
library.add(faPersonRifle)
library.add(faUserSecret)
library.add(faGlobe)
library.add(faMapLocationDot)
library.add(faIndustry)
library.add(faGear)
library.add(faMountainCity)
library.add(faTruck)
library.add(faDollarSign)


const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(HighchartsVue);

app.mount('#app').$nextTick(() => {
  postMessage({ payload: 'removeLoading' }, '*')
})
