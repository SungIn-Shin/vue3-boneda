<template>
  <div>
    <UserListForm
      v-for="user in state.users"
      :key="user.userId"
      :user="user"
    ></UserListForm>
  </div>
</template>

<script>
import { reactive } from 'vue';
// import { useRouter } from 'vue-router';
import axios from 'axios';

import UserListForm from '@/components/UserListForm.vue';
export default {
  setup() {
    const state = reactive({
      count: 0,
      users: [],
    });
    async function fetchUsers() {
      //
      try {
        const res = await axios.get('/api/users');
        console.log(res);
        state.count = res.data.count;
        state.users = res.data.rows;
      } catch (err) {
        console.log(err);
      }
    }

    fetchUsers();

    return {
      state,
      fetchUsers,
    };
  },
  components: {
    UserListForm,
  },
};
</script>

<style></style>
