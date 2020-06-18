import axios from "axios";
import { notification } from "ant-design-vue";

function request(options) {
  return axios(options)
    .then(res => {
      return res;
    })
    .catch(error => {
      const {
        response: { state, description }
      } = error;
      notification.error({
        message: state,
        description: description
      });
      return Promise.reject(error);
    });
}

export default request;
