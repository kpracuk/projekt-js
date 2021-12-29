import guest from "./middleware/guest";
import auth from "./middleware/auth";

export default [
  {
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
    meta: {
      middleware: guest
    }
  },
  {
    path: '/register',
    component: () => import('../views/Register.vue'),
    meta: {
      middleware: guest
    }
  },
  {
    path: '/profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      middleware: auth
    }
  },
  {
    path: '/products',
    component: () => import('../views/Products.vue'),
    meta: {
      middleware: auth
    }
  },
  {
    path: '/orders',
    component: () => import('../views/Orders.vue'),
    meta: {
      middleware: auth
    }
  }
]