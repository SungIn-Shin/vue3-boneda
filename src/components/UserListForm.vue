<template>
  <div>
    <li v-if="isUserEmpty">
      <div>{{ user.userId }}</div>
      <div>{{ user.userName }}</div>
      <div>{{ user.cellPhone }}</div>
      <div>{{ $filters.formatDate(user.createdAt) }}</div>
      <div>{{ $filters.formatDate(user.updatedAt) }}</div>
    </li>
    <li v-else>data is empty</li>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  props: ['user'],
  setup(props) {
    const isUserEmpty = computed(() => {
      return props.user !== null ? true : false;
    });
    return {
      isUserEmpty,
    };
  },
};
</script>

<style></style>
