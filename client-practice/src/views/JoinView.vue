<template>
  <div class="signup-container">
    <div class="signup-card">
      <h2 class="text-center mb-4">회원가입</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name" class="form-label">사용자 이름:</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="form.name"
            placeholder="사용자 이름을 입력하세요."
            required
          />
        </div>
        <div class="form-group">
          <label for="userid" class="form-label">아이디:</label>
          <input
            class="form-control"
            type="text"
            id="userid"
            v-model="form.userid"
            placeholder="아이디를 입력하세요."
            required
          />
        </div>
        <div class="form-group">
          <label for="pwd" class="form-label">비밀번호:</label>
          <input
            type="password"
            class="form-control"
            id="pwd"
            v-model="form.pwd"
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
        name: '',
        userid: '',
        pwd: '',
        confirmPassword: '',
      },
      isDuplicated: false,
    };
  },
  watch: {
    'form.name': function (newVal) {
      console.log('사용자 이름 입력 중:', newVal);
    },
    'form.userid': function (userid) {
      this.checkDuplicateId(userid);
    },
    'form.pwd': function (newVal) {
      console.log('비밀번호 입력 중:', newVal);
    },
    'form.confirmPassword': function (newVal) {
      console.log('비밀번호 확인 입력 중:', newVal);
    },
  },
  methods: {
    validateUserId(userid) {
      const userIdPattern = /^[a-zA-Z][a-zA-Z0-9]{2,19}$/;
      if (!userIdPattern.test(userid)) {
        alert('아이디는 영문자로 시작하고 3자 이상, 20자 이하이며 숫자와 영문자만 포함할 수 있습니다.');
        this.form.userid = '';
        return false;
      }
      return true;
    },

    checkDuplicateId(userid) {
      axios
        .get(process.env.VUE_APP_BASEURL + '/userid', {
          params: {
            userID: userid,
          },
        })
        .then((response) => {
          if (response.data) {
            alert('이미 있는 아이디 입니다.');
            this.form.userid = '';
          }
        })
        .catch((error) => {
          console.log('error: ', error);
        });
    },
    handleSubmit() {
      if (this.form.pwd !== this.form.confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }
      if (!this.validateUserId(this.form.userid)) return;

      axios
        .put(process.env.VUE_APP_BASEURL + '/save', this.form)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log('error: ', error);
        });

      alert('회원가입이 완료되었습니다!');
      this.$router.push('/');
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
