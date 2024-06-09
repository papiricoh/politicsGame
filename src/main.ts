import { createApp } from 'vue'
import App from './App.vue'
import HighchartsVue from 'highcharts-vue';

import './style.css'

import './demos/ipc'
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
//import './demos/node'

const app = createApp(App);
app.use(HighchartsVue);

app.mount('#app').$nextTick(() => {
  postMessage({ payload: 'removeLoading' }, '*')
})
