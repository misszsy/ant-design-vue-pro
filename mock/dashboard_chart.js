function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = [20, 57, 90, 30, 78, 10];
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = chart;
