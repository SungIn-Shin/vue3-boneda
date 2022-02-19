import { reactive, readonly } from 'vue';

const state = reactive({
  userId: '',
  userName: '',
  cellPhone: '',
  role: '',
  balance: '',
  setting: {},
});

function setUsers(resData) {
  state.userId = resData.userId === undefined ? '' : resData.userId;
  state.userName = resData.userName;
  state.cellPhone = resData.cellPhone;
  state.role = resData.role;
  state.balance = resData.balance;
  state.setting = resData.setting;
}

function clearUserData() {
  state.userId = '';
  state.userName = '';
  state.cellPhone = '';
  state.role = '';
  state.balance = '';
  state.setting = {};
}

// const increment = () => state.count++;

export default { state: readonly(state), setUsers, clearUserData };
