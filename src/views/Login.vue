<template>
  <div class="login">
    <form class="login-form" @submit.prevent="login">
      <h1>Авторизация</h1>
      <label>Email</label>
      <input required v-model="user.email" type="email" placeholder="E-mail"/>
      <label>Password</label>
      <input required v-model="user.password" type="password" placeholder="Password"/>
      <button type="submit">Войти</button>
    </form>
    <span v-if="isWarning" class="login-warning">Невозможно выполнить вход!</span>
  </div>
</template>

<script>
import cookies from 'vue-cookies'
import api from '../boot/axios'

export default {
  name: 'Login',
  data: () => ({
    isWarning: false,
    user: {
      email: '',
      password: ''
    }
  }),
  methods: {
    login () {
      this.$store.dispatch('login', this.user)
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => {
          // Заглушка на авторизацию
          if (error.response.status === 404) {
            if (this.user.email === 'gora@studio.ru' && this.user.password === '2021') {
              this.isWarning = false
              const token = 'example1234access8765token'
              cookies.set('token', token)
              api.defaults.headers.common.Authorization = token
              this.$store.commit('AUTH_SUCCESS', token)
              this.$router.push('/')
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
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-warning {
    color: red;
  }
  &-form {
    display: flex;
    flex-direction: column;
    gap: 4px;
    h1 {
      margin: 0 auto 8px;
    }
    button {
      margin-top: 8px;
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
    input{
      padding: 0 8px;
      width: 250px;
      height: 30px;
      border: 1.5px solid #CCCCCC;
      border-radius: 4px;
      &:focus-visible, &:focus {
        outline-color: #1e88e5;
      }
    }
  }
}
</style>
