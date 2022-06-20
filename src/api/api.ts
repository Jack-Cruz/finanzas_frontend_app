import axios, { AxiosResponse } from "axios";
 //axios.defaults.baseURL = "https://letskole.herokuapp.com/api/v1";
axios.defaults.baseURL = "https://localhost:5001/api/v2/";

export const request = { 
  get: async <T>(url: string) => await axios.get<T>(url),
  post: async <T>(url: string, body: {}) => await axios.post<T>(url, body),
  put: async <T>(url: string, body: {}) => await axios.put<T>(url, body),
  delete: async <T>(url: string) => await axios.delete<T>(url),
}