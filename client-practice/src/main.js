import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 라우터 임포트
import store from './store';

const app = createApp(App);

app.use(router); // 라우터를 Vue 앱에 사용
app.use(store);
app.mount('#app');
