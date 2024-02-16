// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@renderer/router'
import '@renderer/assets/global.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')
