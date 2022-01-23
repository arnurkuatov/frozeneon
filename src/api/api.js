import axios from "axios";

export const axiosInstance = axios.create();

export const apiBaseUrl = "https://registry.npmjs.org/-/v1";

const didAbort = (error) => axios.isCancel(error);

const getCancelSource = () => axios.CancelToken.source();

const withAbort =
  (fn) =>
  async (...args) => {
    const originalConfig = args[args.length - 1];
    let { abort, ...config } = originalConfig;

    if (typeof abort === "function") {
      const { cancel, token } = getCancelSource();
      config.cancelToken = token;
      abort(cancel);
    }

    try {
      return await fn(...args.slice(0, args.length - 1), config);
    } catch (error) {
      didAbort(error) && (error.aborted = true);
      throw error;
    }
  };

const api = (axios) => {
  return {
    get: (url, config = {}) => withAbort(axios.get)(url, config),
    post: (url, payload, config = {}, isFormData = false) => {
      let body;
      if (isFormData) {
        body = new FormData();
        if (payload) {
          for (const key of Object.keys(payload)) {
            body.append(key, payload[key]);
          }
        }
      } else {
        body = payload;
      }
      return axios.post(url, body, config);
    },
    delete: (url, config = {}) => axios.delete(url, config),
  };
};

export default api(axiosInstance);
