import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Particles from "particles.vue3";
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(Particles).use(store).use(router).use(ElementPlus).mount('#app')
