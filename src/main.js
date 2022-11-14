import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vant from '@/utils/vant'
Vue.use(vant)
import "@/assets/css/common.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
