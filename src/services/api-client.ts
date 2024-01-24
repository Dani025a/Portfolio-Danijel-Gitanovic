import { AxiosRequestConfig } from "axios";
import axiosInstance from "./axiosInstace";

export interface FetchResponse<T> {
  results: T[];
}



class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data);

}

export default ApiClient;
