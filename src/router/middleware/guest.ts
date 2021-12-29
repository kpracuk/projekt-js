import { useAuthStore } from "../../store/modules/auth";
import { Middleware } from "../interfaces/middleware";

const middleware: Middleware = {
  handler: () => {
    const authStore = useAuthStore();
    return !authStore.isLoggedIn
  },

  onSuccess: () => {
    return undefined
  },

  onFailure: () => {
    return { path: '/' }
  }
}

export default middleware