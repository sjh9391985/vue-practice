<template>
  <div class="black-bg" v-if="isOpen">
    <div class="white-bg">
      <h4>상세 페이지</h4>
      <p>상세 페이지 내용</p>
      <button @click="close">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="(menu, index) in menus" :key="index">{{ menu }}</a>
  </div>
  <div>
    <!-- product와 price를 함께 출력 -->
    <div v-for="(roomInfo, index) in rooms" :key="index">
      <img :src="roomInfo.image" class="room-img" />
      <h4 @click="this.isOpen = true">{{ roomInfo.title }}</h4>
      <h5>{{ roomInfo.content }}</h5>
      <p>{{ roomInfo.price }} 원</p>
      <button @click="increase(index)">허위매물신고</button> <span>신고수 : {{ counts[index] }}</span>
    </div>
  </div>
</template>

<script>
import data from './data/oneroom.js';

export default {
  name: 'App',
  data() {
    return {
      // 데이터 보관함
      rooms: data,
      isOpen: false,
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
    close() {
      this.isOpen = false;
    },
  },
  components: {},
};
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: 0, 0, 0, 0.5;
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.room-img {
  width: 70%;
  margin-top: 40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 20%;
  margin-right: 20%;
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
