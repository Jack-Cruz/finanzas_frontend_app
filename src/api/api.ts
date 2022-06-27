import axios from "axios";

axios.defaults.baseURL = "https://finanzasapp2022.herokuapp.com/";
//axios.defaults.baseURL = "https://localhost:7207/";

const request = { 
  get: async <T>(url: string) => await axios.get<T>(url),
  post: async <T>(url: string, body: {}) => await axios.post<T>(url, body),
  put: async <T>(url: string, body: {}) => await axios.put<T>(url, body),
  delete: async <T>(url: string) => await axios.delete<T>(url),
}

export default request;