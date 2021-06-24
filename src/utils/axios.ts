import Axios from 'axios';
import { ElMessage } from 'element-plus';

const baseURL = 'https://api.github.com';

const axios = Axios.create({
  baseURL,
  // 请求超时 20s
  timeout: 200000
});

axios.interceptors.request.use(
  response => {
    /** 根据项目实际情况来对config做处理, 这里对config不做任何处理, 直接返回 */

    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

// 后置拦截器(获取到相应时的拦截)
axios.interceptors.response.use(
  response => {
    /** * 根据你的项目实际情况来对 response 和 error 做处理 *
     * 这里对 response 和 error 不做任何处理，直接返回 */
    return response;
  },
  error => {
    if (error.response && error.response.data) {
      const msg = error.response.data.message;
      ElMessage.error(msg);

      console.error(error.response);
    } else {
      ElMessage.error(error);
    }

    return Promise.reject(error);
  }
);

export default axios;
