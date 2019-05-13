<template>
  <div>
    <navBar/>
    <div class="container">
      <router-view/>
    </div>
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
