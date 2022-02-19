<template>
  <div class="app">
    <AppHeader></AppHeader>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
export default {
  components: {
    AppHeader,
  },
};
</script>

<style></style>
