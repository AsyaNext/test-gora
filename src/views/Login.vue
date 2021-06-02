<template>
  <div class="login">
    <form class="login-form" @submit.prevent="login">
      <h1>Авторизация</h1>
      <label>Email</label>
      <input required v-model="user.email" type="email" placeholder="E-mail"/>
      <label>Password</label>
      <input required v-model="user.password" type="password" placeholder="Password"/>
      <hr/>
      <button class="login-form__submit" type="submit">Войти</button>
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

<style scoped lang="scss">

</style>
