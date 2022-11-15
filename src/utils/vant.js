import {
  Tabbar,
  TabbarItem,
  NavBar,
  Icon,
  Field,
  Button,
  Image as VanImage,
  Lazyload,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  TreeSelect,
  Form,
  Toast
} from "vant";
import "@vant/touch-emulator";
let vantUIs = [
  Tabbar,
  TabbarItem,
  NavBar,
  Icon,
  Field,
  Button,
  VanImage,
  Lazyload,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  TreeSelect,
  Form
];
export default {
  install(Vue) {
    Vue.$toast = Toast;
    vantUIs.forEach((vantUI) => {
      //   Vue.component(vantUI.name, vantUI)
      Vue.use(vantUI);
    });
  },
};
