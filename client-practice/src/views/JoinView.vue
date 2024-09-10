<template>
  <div class="signup-container">
    <div class="signup-card">
      <h2 class="text-center mb-4">회원가입</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username" class="form-label">사용자 이름:</label>
          <input
            type="text"
            class="form-control"
            id="username"
            v-model="form.username"
            placeholder="사용자 이름을 입력하세요."
            required
          />
        </div>
        <div class="form-group">
          <label for="userId" class="form-label">아이디:</label>
          <input
            class="form-control"
            type="text"
            id="userId"
            v-model="form.userId"
            placeholder="이메일을 입력하세요."
            required
          />
        </div>
        <div class="form-group">
          <label for="password" class="form-label">비밀번호:</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="form.password"
            placeholder="비밀번호를 입력하세요."
            required
          />
        </div>
        <div class="form-group">
          <label for="confirmPassword" class="form-label">비밀번호 확인:</label>
          <input
            type="password"
            class="form-control"
            id="confirmPassword"
            v-model="form.confirmPassword"
            placeholder="비밀번호를 다시 입력하세요."
            required
          />
        </div>
        <div class="form-buttons">
          <button type="submit" class="btn btn-primary btn-block">회원가입</button>
          <router-link to="/" class="btn btn-secondary btn-block">로그인으로 돌아가기</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'JoinView',
  data() {
    return {
      form: {
        username: '',
        userId: '',
        password: '',
        confirmPassword: '',
      },
      isDuplicated: false,
    };
  },
  watch: {
    'form.username': function (newVal) {
      console.log('사용자 이름 입력 중:', newVal);
    },
    'form.userId': function (userId) {
      this.checkDuplicateId(userId);
    },
    'form.password': function (newVal) {
      console.log('비밀번호 입력 중:', newVal);
    },
    'form.confirmPassword': function (newVal) {
      console.log('비밀번호 확인 입력 중:', newVal);
    },
  },
  methods: {
    checkDuplicateId(userId) {
      axios
        .put('http://localhost:8080/', userId)
        .then((response) => {
          console.log('response: ', response);
        })
        .catch((error) => {
          console.log('error: ', error);
        });
    },
    handleSubmit() {
      if (this.form.password !== this.form.confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }
      // 여기서 회원가입 요청을 처리할 수 있습니다.
      // 예를 들어, Axios 등을 사용해 서버에 데이터를 보낼 수 있습니다.
      alert('회원가입이 완료되었습니다!');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.signup-card {
  background: #ffffff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  margin-bottom: 10px;
  font-weight: bold;
}

.form-buttons {
  display: flex;
  flex-direction: column;
}

.form-buttons .btn {
  margin-bottom: 15px;
}

.form-buttons .btn:last-child {
  margin-bottom: 0;
}

.btn-block {
  width: 100%;
  font-size: 16px;
  padding: 10px;
}
</style>
