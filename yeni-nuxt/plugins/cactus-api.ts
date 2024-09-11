import axios from 'axios';
import type { AxiosResponse, AxiosError } from 'axios';
import Toast, { POSITION, type PluginOptions } from 'vue-toastification';
import 'vue-toastification/dist/index.css'; 
 
const baseURL: string = 'https://api.cactustr.com/api/game/';

export interface ApiResponse { 
  status: number;
  message: string;
  value?: any;
  [key: string]: any; 
}

export const getData = async (url: string): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<any> = await axios.get(baseURL + url);
    return {
      status: response.status,
      message: response.statusText,  
      value: response.data,
      ...response.data
    };
  } catch (error) {
    const axiosError = error as AxiosError;
    return {
      status: axiosError.response?.status || 500,
      message: axiosError.response?.statusText || 'Internal Server Error',
      value: axiosError.response?.data || null
    };
  }
};

export const postData = async (url: string, data: any): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<any> = await axios.post(baseURL + url, data);
    return {
      status: response.status,
      message: response.statusText,
      value: response.data,
      ...response.data
    };
  } catch (error) {
    const axiosError = error as AxiosError;
    return {
      status: axiosError.response?.status || 500,
      message: axiosError.response?.statusText || 'Internal Server Error',
      value: axiosError.response?.data || null
    };
  }
};

export const patchData = async (url: string, data: any): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<any> = await axios.patch(baseURL + url, data);
    return {
      status: response.status, 
      message: response.statusText,
      value: response.data,
      ...response.data
    };
  } catch (error) {
    const axiosError = error as AxiosError;
    return {
      status: axiosError.response?.status || 500,
      message: axiosError.response?.statusText || 'Internal Server Error',
      value: axiosError.response?.data || null
    };
  }
};

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('getData', getData);
  nuxtApp.provide('postData', postData);
  nuxtApp.provide('patchData', patchData);

  const options: PluginOptions = {
    timeout: 5000,
    draggable: true,
    position: POSITION.TOP_RIGHT
  };
  nuxtApp.vueApp.use(Toast, options);
}); 
 