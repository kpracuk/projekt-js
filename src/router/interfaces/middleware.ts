import { RouteLocationRaw } from "vue-router";

export interface Middleware {
  handler: () => boolean,
  onSuccess: () => RouteLocationRaw | undefined,
  onFailure: () => RouteLocationRaw | undefined,
}