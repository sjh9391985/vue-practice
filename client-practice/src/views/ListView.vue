<template>
  <div class="container mt-3">
    <h1 class="display-1 text-center">사용자 목록</h1>
    <div class="btn-group">
      <router-link to="/user/save" class="btn btn-primary">사용자 추가</router-link>
    </div>
    <table class="table table-hover mt-3">
      <thead class="table-dark">
        <tr>
          <th>이름</th>
          <th>이메일</th>
          <th>가입날짜</th>
        </tr>
      </thead>
      <tbody>
        <tr class="cursor-pointer" v-for="row in result" v-bind:key="row.no" v-on:click="($event) => href(row)">
          <td>{{ row.name }}</td>
          <td>{{ row.email }}</td>
          <td>{{ row.regDate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import store from '../store';
export default {
  name: 'ListView',
  data() {
    return {
      result: [{ no: 1, name: '손재현', email: 'sjh9391985@gmail.com', regDate: '2024-08-19' }],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .post(process.env.VUE_APP_BASEURL + '/findAll')
        .then((response) => {
          console.log('response: ', response.data.result);
          this.result = response.data.result;
        })
        .catch((error) => {
          console.log('error: ', error);
        });
    },
    href(row) {
      console.log('row : ', row);
      store.commit('setUser', row);
      sessionStorage.setItem('setUser', JSON.stringify(row));
      this.$router.push({ name: 'SelectView' });
    },
  },
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
