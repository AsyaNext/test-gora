import { createStore } from 'vuex'
import cookies from 'vue-cookies'
import api from '../boot/axios'

export default createStore({
  state: {
    token: cookies.get('token') || ''
  },
  getters: {
    isLogin: state => !!state.token
  },
  mutations: {
    AUTH_SUCCESS (state, payload) {
      state.token = payload
    }
  },
  actions: {
    login ({ commit }, data) {
      return new Promise((resolve, reject) => {
        // Пример отправления запроса на авторизацию
        api.post('/login', data)
          .then((response) => {
            // Обработка успешного запроса
            const token = 'example1234access8765token'
            cookies.set('token', token)
            api.defaults.headers.common.Authorization = token
            commit('AUTH_SUCCESS', token)
            resolve(response)
          })
          .catch((error) => {
            // Обратботка ошибки
            reject(error)
          })
      })
    }
  }
})
