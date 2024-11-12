import { createApp } from 'vue'
import { createRouter, createWebHashHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import router from '@/router/index'

createApp(App)
.use(router)
.mount('#app')
