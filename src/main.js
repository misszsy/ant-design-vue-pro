import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入antd全部组件和css
//import {Button} from "ant-design-vue";
//import "ant-design-vue/dist/antd.less";
//单独引入某个组件,结合babel.config.js的plugins 配置
import { Button, Layout, Icon, Drawer, Radio, Menu } from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
