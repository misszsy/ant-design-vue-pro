<!-- 提供权限控制元素的函数式组件 -->
<script>
import { check } from "../utils/auth";

/**
 * 函数式组件定义如下：
 * functional:使组件无状态 (没有 data) 和无实例 (没有 this 上下文),设置为true
 * render(h, context)： h是作为createElement 的参数别名，是JSX要求的
 *                      组件需要的一切都由context提供，它是一个包括如下字段的对象：
 *                      props：提供所有 prop 的对象
 *                      children：VNode 子节点的数组
 *                      slots：一个函数，返回了包含所有插槽的对象
 *                      scopedSlots： 一个暴露传入的作用域插槽的对象。向子组件中传递作用域插槽。
 *                      data：传递给组件的整个数据对象，作为 createElement 的第二个参数传入组件
 *                      parent：对父组件的引用
 *                      listeners：一个包含了所有父组件为当前组件注册的事件监听器的对象。这是 data.on 的一个别名。
 *                      injections： 如果使用了 inject 选项，则该对象包含了应当被注入的 property。
 *
 */
export default {
  functional: true,
  props: {
    authority: {
      type: Array,
      required: true
    }
  },
  render(h, context) {
    const { props, scopedSlots } = context;
    return check(props.authority) ? scopedSlots.default() : null;
  }
};
</script>
