<template>
  <div>
    <nav>
      <router-link to="/">HOME</router-link> | <router-link to="/about">ABOUT</router-link> |
      <router-link to="/user">UserList</router-link> | <router-link to="/user/findById">UserSelect</router-link> |
      <router-link to="/user/editById">UserUpdate</router-link> |
      <router-link to="/user/save">UserCreate</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
