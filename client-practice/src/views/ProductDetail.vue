<template>
  <div class="product-detail">
    <div class="image-section">
      <img :src="product.imageUrl" alt="Product Image" class="detail-image" />
    </div>
    <div class="info-section">
      <h2>{{ product.productName }}</h2>
      <p>{{product.basePrice }}원</p>
      
      <div class="quantity-control">
        <button @click="decrementQuantity">-</button>
        <span>{{ quantity }}</span>
        <button @click="incrementQuantity">+</button>
      </div>

      <div class="options">
        <label for="options">추가 옵션 선택:</label>
        <select v-model="selectedOption">
          <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
        </select>
      </div>

      <button @click="addToCart">장바구니에 추가</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProductDetail',
  props: {
    productId: String,
  },
  data() {
    return {
      product: {}, // 상품 상세 정보
      quantity: 1,
      selectedOption: '',
      options: ['색상', '크기', '추가 보증'], // 추가 옵션 예시
    };
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString();
    },
    fetchProductDetail() {
      axios
        .get(`http://localhost:8081/product/${this.productId}`) // 상품 ID로 상세 정보 가져오기
        .then((response) => {
          this.product = response.data.resultData; // 상품 데이터 저장
        })
        .catch((error) => {
          console.error('Error fetching product detail:', error);
        });
    },
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    addToCart() {
      console.log(`Added ${this.quantity} of ${this.product.productName} to cart with option ${this.selectedOption}`);
    },
  },
  mounted() {
    this.fetchProductDetail(); // 컴포넌트가 로드될 때 상품 상세 정보 가져오기
  },
};
</script>

<style scoped>
.product-detail {
  display: flex;
  padding: 20px;
  background-color: #fff;
}

.image-section {
  flex: 1;
}

.info-section {
  flex: 2;
  padding-left: 20px;
}

.detail-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.quantity-control {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.quantity-control button {
  margin: 0 5px;
}

.options {
  margin: 10px 0;
}
</style>
