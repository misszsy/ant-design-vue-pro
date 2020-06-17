//自定义权限指令编写,使用效果类似v-if,v-on等
import { check } from "../utils/auth";
/**
 * 注册一个全局自定义指令v-auth
 *
 * directive: 自定义指令的方法，参数如下：
 *      el: 指令所绑定的元素，可以用来直接操作 DOM
 *
 *      binding : 一个对象，包含以下 property
 *          name：指令名，不包括 v- 前缀
 *          value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
 */
function install(Vue, options = {}) {
  Vue.directive(options.name || "auth", {
    // 当被绑定的元素插入到 DOM 中时…
    inserted(el, binding) {
      if (!check(binding.value)) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  });
}

export default { install };
