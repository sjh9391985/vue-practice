<template>
  <div class="main-container">
    <div class="login-card">
      <form>
        <div class="form-group">
          <label for="email" class="form-label">아이디:</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="이메일을 입력하세요."
            name="email"
            autocomplete="off"
          />
        </div>
        <div class="form-group">
          <label for="pwd" class="form-label">비밀번호:</label>
          <input
            type="password"
            class="form-control"
            id="pwd"
            placeholder="비밀번호를 입력하세요."
            name="pwd"
            autocomplete="off"
          />
        </div>
        <div class="form-buttons">
          <button type="button" class="btn btn-primary btn-block">로그인</button>
          <router-link to="/join" class="btn btn-secondary btn-block">회원가입</router-link>
          <router-link to="/user" class="btn btn-secondary btn-block">비밀번호 찾기</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const uForm = { no: 1, name: '손재현', email: 'sjh9391985@gmail.com', pwd: '1234', gender: true };

export default {
  name: 'MainView',
  methods: {
    getData() {
      axios
        .put('http://localhost:8080/', uForm)
        .then((response) => {
          console.log('response: ', response);
        })
        .catch((error) => {
          console.log('error: ', error);
        });
    },
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-card {
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.form-group {
  margin-bottom: 20px; /* 입력 필드 간의 간격 조정 */
}

.form-buttons {
  display: flex;
  flex-direction: column;
}

.form-buttons .btn {
  margin-bottom: 15px; /* 버튼 간의 간격 추가 */
}

.form-buttons .btn:last-child {
  margin-bottom: 0; /* 마지막 버튼 아래쪽 여백 제거 */
}

.btn-block {
  width: 100%;
  font-size: 16px;
  padding: 10px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #5a6268;
  border-color: #545b62;
}
</style>
