<template>
  <div class="container">
    <navBar/>
    <router-view/>
  </div>
</template>

<script>
import header from './components/header.vue';

export default {
  components: {
    navBar: header,
  },
};

</script>

<style lang="scss">
</style>
