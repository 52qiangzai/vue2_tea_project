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
  Swipe, SwipeItem 
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
  Swipe, SwipeItem 
];
export default {
  install(Vue) {
    vantUIs.forEach((vantUI) => {
      //   Vue.component(vantUI.name, vantUI)
      Vue.use(vantUI);
    });
  },
};
