import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { getToken } from "@/utils/auth";
import {Toast} from 'vant'
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "hash",
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.name === "login" && getToken()) {
    Toast.success('当前已登录')
    next({ name: "my" });
  }
  // 如果用户未能验证身份，则 `next` 会被调用两次
  next();
});
export default router;
