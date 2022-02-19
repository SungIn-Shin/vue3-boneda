<template>
  <div>
    <span v-if="isUserEmpty">
      어서오세요. 메인 화면입니다. 로그인을 시도하세요.
    </span>
    <span v-else> {{ $global.state.userId }} 님의 메인화면입니다.</span>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue';
import { computed } from 'vue';
export default {
  setup() {
    const app = getCurrentInstance();
    const $global = app.appContext.config.globalProperties.$global;

    const isUserEmpty = computed(() => {
      return $global.state.userId == '' ? true : false;
    });
    return {
      isUserEmpty,
    };
  },
};
</script>

<style></style>
