<template>
  <div>
    <form @submit.prevent="submitForm" class="form">
      <label for="userid">userid:</label>
      <input type="text" name="userid" v-model="state.userdata.userId" />
      <label for="password">password:</label>
      <input type="text" name="password" v-model="state.userdata.password" />
      <button type="submit">submit</button>
    </form>
    <span class="log"></span>
  </div>
</template>

<script>
import { reactive, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  setup() {
    // main.js에 정의한 전역변수에 접근하기 위한 선언
    const app = getCurrentInstance();
    const $global = app.appContext.config.globalProperties.$global;
    const router = useRouter();

    const state = reactive({
      userdata: { userId: '', password: '' },
      logMessage: '',
    });

    async function submitForm() {
      try {
        const res = await axios.post('/api/auth/login', state.userdata);
        $global.setUsers(res.data);
        router.push('/home').catch(err => {
          console.log(err);
          if (!err.name == 'NavigationDuplicated') throw err;
        });
      } catch (err) {
        console.log(err);
      }
    }
    return {
      state,
      submitForm,
    };
  },
};
</script>

<style scoped>
.log {
  color: red;
}
</style>
