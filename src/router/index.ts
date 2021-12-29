import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { Middleware } from "./interfaces/middleware";

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  if (to.meta?.middleware) {
    const middleware = to.meta.middleware as Middleware
    const redirect = middleware.handler() ? middleware.onSuccess() : middleware.onFailure()
    if (redirect) {
      return redirect
    }
  }
  return
})

export { router }