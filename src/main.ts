import { createApp } from 'vue'
import './style.css'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import App from './App.vue'

import pinia from './store/index'
import router from './router'

import permission from './permission'
import directive from './directive'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }


app.use(pinia).use(router).use(ElementPlus)

permission(router)
directive(app)

app.mount('#app')
