import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入antd全部组件和css
//import {Button} from "ant-design-vue";
//import "ant-design-vue/dist/antd.less";
//单独引入某个组件,结合babel.config.js的plugins 配置
import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Menu,
  Form,
  Input,
  Select,
  Avatar
} from "ant-design-vue";
import Authorized from "./components/Authorized";
import Auth from "./directives/auth";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Form);
Vue.use(Input);
Vue.use(Avatar);
Vue.use(Select);
//全局注册权限指令
Vue.use(Auth);
//注册全局权限控制组件
Vue.component("Authorized", Authorized);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
