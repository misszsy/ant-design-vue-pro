//获取当前用户
export function getCurrentAuthority() {
  return ["admin"];
}

//校验用户权限，Array some方法用于检测数组元素是否满足指定条件,如果没有满足指定条件则返回false
export function check(authority) {
  const current = getCurrentAuthority();
  return current.some(item => authority.includes(item));
}

//当前用户不等于guest则已登录
export function isLogin() {
  const current = getCurrentAuthority();
  return current && current[0] !== "guest";
}
