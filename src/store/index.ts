import { createPinia } from 'pinia'
import persistedstate from 'pinia-plugin-persistedstate'
import { App } from 'vue'

const pinia = createPinia()
pinia.use(persistedstate)

export const install = (app: App) => {
  app.use(pinia)
}
export default pinia
