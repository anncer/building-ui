import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueKonva from 'vue-konva'

import './assets/main.css'

const app = createApp(App)
console.log(VueKonva, 'VueKonva')
app.use(createPinia())
app.use(router)
app.use(VueKonva)
app.mount('#app')
