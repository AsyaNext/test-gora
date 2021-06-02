import { createStore } from 'vuex'

export default createStore({
  state: {
    token: ''
  },
  getters: {
    isLogin: state => !!state.token
  },
  mutations: {
  },
  actions: {
  }
})
