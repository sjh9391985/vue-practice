<template>
  <router-view />
</template>

<script>
export default {
  created() {
    const user = sessionStorage.getItem('setUser');
    console.log(JSON.parse(user));
    if (user) {
      console.log('사용자 정보 O');
      this.$store.commit('setUser', JSON.parse(user));
    } else {
      console.log('사용자 정보 X');
    }
  },
  methods: {
    base64(user) {
      return JSON.parse(decodeURIComponent(window.atob(user)));
    },
  },
};
</script>
