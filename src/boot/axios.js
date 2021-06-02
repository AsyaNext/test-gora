import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios
// Установим фейковый api для примера запроса
const API_URL = 'http://localhost:8080/api/'

const api = axios.create({
  baseURL: API_URL
})

api.interceptors.request.use(
  function (config) {
    const token = document.cookie.get('token')
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default api
