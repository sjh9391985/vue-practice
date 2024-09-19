<template>
  <div class="product-list">
    <div class="product-card" v-for="product in products" :key="product.productId" @click="goToDetail(product)">
      <img :src="product.imageUrl" alt="Product Image" class="product-image" />
      <h3>{{ product.productName }}</h3>
      <p>{{ formatPrice(product.basePrice) }}원</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MainView',
  data() {
    return {
      products: [], // 상품 리스트 초기화
    };
  },
  methods: {
    // 가격 포맷팅 함수 (예: 1,000원 형식으로 표시)
    formatPrice(price) {
      return price.toLocaleString();
    },
    // API 호출로 데이터 가져오기
    fetchProducts() {
      axios
        .get('http://localhost:8081/product')
        .then((response) => { 
          console.log(response)
          this.products = response.data.resultData; // 백엔드로부터 받은 데이터를 products에 저장
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
    },
     goToDetail(product) {
      this.$router.push({ name: 'ProductDetail', params: { product } }); // Vue Router 사용
    },
  },
  mounted() {
    this.fetchProducts(); // 컴포넌트가 로드되면 API 호출
  },
};
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3개의 열 */
  gap: 20px; /* 각 상품 카드 간의 간격 */
  padding: 20px;
  background-color: #f9f9f9;
}

.product-card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.product-card h3 {
  margin-bottom: 10px;
  font-size: 18px;
  color: #333;
}

.product-card p {
  font-size: 16px;
  color: #666;
}

.product-image {
  max-width: 100%; /* 이미지가 카드의 너비를 초과하지 않도록 */
  height: auto; /* 비율 유지 */
  border-radius: 5px; /* 이미지 모서리 둥글게 */
  margin-bottom: 10px; /* 제목과 간격 조정 */
}
</style>
