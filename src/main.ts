import App from './App.vue'
import store from './store'
import router from './router'
import { createApp } from 'vue'
import '@/static/font/iconfont.css'
import '@/static/styles/index.scss'

const app = createApp(App).use(store).use(router)

router.isReady().then(() => {
  app.mount('#app')
})
