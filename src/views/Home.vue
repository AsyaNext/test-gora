<template>
  <div class="home">
    <img src="../assets/cats.gif" alt="cats" />
    <button @click="logout">Выйти</button>
    <span v-if="isWarning">Невозможно выйти!</span>
  </div>
</template>

<script>
import cookies from 'vue-cookies'
import api from '../boot/axios'

export default {
  name: 'Home',
  data: () => ({
    isWarning: false
  }),
  methods: {
    logout () {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => {
          // Заглушка на выход
          if (error.response.status === 404) {
            if (this.$store.getters.isLogin) {
              this.isWarning = false
              cookies.remove('token')
              delete api.defaults.headers.common.Authorization
              this.$store.commit('LOGOUT')
              this.$router.push('/login')
            } else {
              this.isWarning = true
            }
          } else {
            this.isWarning = true
          }
        })
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    align-self: flex-end;
    margin: 24px 16px 0 0;
    width: 100px;
    height: 30px;
    background-color: #1e88e5;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #2196f3;
    }
  }
  span {
    color: red;
    align-self: flex-end;
  }
}
</style>
