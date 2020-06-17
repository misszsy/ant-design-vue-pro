//自定义权限指令编写,使用效果类似v-if,v-on等
import { check } from "../utils/auth";

function install(Vue, options = {}) {
  Vue.directive(options.name || "auth", {
    inserted(el, binding) {
      if (!check(binding.value)) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  });
}

export default { install };
