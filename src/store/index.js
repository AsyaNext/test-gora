import { createStore } from 'vuex'
import cookies from 'vue-cookies'

export default createStore({
  state: {
    token: cookies.get('token') || ''
  },
  getters: {
    isLogin: state => !!state.token
  },
  mutations: {
  },
  actions: {
  }
})
