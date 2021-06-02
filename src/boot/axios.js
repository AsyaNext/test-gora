// import Vue from 'vue'
import axios from 'axios'

// Vue.prototype.$axios = axios
// Установим фейковый api для примера запроса
const API_URL = 'http://obsolete-fire.surge.sh/api/'

const api = axios.create({
  baseURL: API_URL
})

export default api
