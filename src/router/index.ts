import routes from './routes'
import { App as Application } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  routes,
  history: createWebHashHistory(import.meta.env.BASE_URL)
})

router.beforeEach((to, _, next) => {
  document.title = to.meta.title as string
  next()
})

export const install = (app: Application) => {
  app.use(router)
}
export default router
