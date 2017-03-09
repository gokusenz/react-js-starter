import axios from 'axios';
import { TIMEOUT_REQUEST } from '../constants/Request';

const domain = `${process.env.SERVICE_URL}`;

export default {
  getHeader() {
    const headers = { Accept: 'application/json' };
    return headers;
  },

  get(path, params = {}) {
    return axios.get(`${domain}${path}`, {
      headers: this.getHeader(),
      params,
      timeout: TIMEOUT_REQUEST,
    });
  },

  post(path, params = {}) {
    return axios.post(`${domain}${path}`,
      params,
      { headers: this.getHeader(), timeout: TIMEOUT_REQUEST },
    );
  },

  put(path, params = {}) {
    return axios.put(`${domain}${path}`,
      params,
      { headers: this.getHeader(), timeout: TIMEOUT_REQUEST },
    );
  },

  delete(path, params = {}) {
    return axios.delete(`${domain}${path}`, {
      headers: this.getHeader(),
      params,
      timeout: TIMEOUT_REQUEST,
    });
  },
};
