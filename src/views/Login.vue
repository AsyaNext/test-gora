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
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    user: {
      email: '',
      password: ''
    }
  })
}
</script>

<style lang="scss">
body {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  #app {
    width: 100%;
    height: 100%;
    .login {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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
  }
}
</style>
