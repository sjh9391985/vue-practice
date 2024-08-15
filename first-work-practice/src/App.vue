<template>
  <div class="menu">
    <a v-for="(menu, index) in menus" :key="index">{{ menu }}</a>
  </div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <!-- product와 price를 함께 출력 -->
    <div v-for="(product, index) in products" :key="index">
      <h4>{{ product }}</h4>
      <p>{{ prices[index] }} 만원</p>
      <button @click="increase(index)">허위매물신고</button> <span>신고수 : {{ counts[index] }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // 데이터 보관함
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      prices: [30, 40, 50],
      menus: ['HOME', 'SHOP', 'ABOUT'],
      counts: [0, 0, 0],
    };
  },
  methods: {
    increase(i) {
      this.counts[i]++;
    },
  },
  components: {},
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

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
