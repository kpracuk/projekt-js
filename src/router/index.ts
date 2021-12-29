import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { Middleware } from "./interfaces/middleware";

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta?.middleware) {
    const middleware = to.meta.middleware as Middleware
    if(middleware.handler()){
      next(middleware.onSuccess())
    } else {
      next(middleware.onFailure())
    }
    return
  }
  next()
})

export { router }