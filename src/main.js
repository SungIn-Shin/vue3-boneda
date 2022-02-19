import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import global from '@/global';
import filters from '@/utils/filters';

// 브라우저 Refresh시 서버에 인증처리 및 화면 권한별 접근제한
async function authMeAndUserRoleCheck() {
  //
  if (global.state.userId == '') {
    const res = await axios.get('/api/auth/me');
    global.setUsers(res.data);

    router.beforeEach((to, from, next) => {
      if (to.fullPath == '/login' && global.state.userId !== '') {
        // 로그인 화면 접근 제한
        alert('이미 로그인 하셨습니다.');
      } else if (to.meta.auth && to.meta.role !== global.state.role) {
        // 슈퍼관리자 화면 접근 제한
        alert('슈퍼관리자 권한만 접근 가능합니다.');
      } else {
        next();
      }
    });
  }
}

authMeAndUserRoleCheck();

const appConst = createApp(App).use(store).use(router);

// set global
appConst.config.globalProperties.$global = global;

// set filters
appConst.config.globalProperties.$filters = filters;

appConst.mount('#app');
