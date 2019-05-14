<template>
  <div>
    <navBar/>
    <div class="container">
      <router-view/>
    </div>
    <modal-popup/>
  </div>
</template>

<script>
import header from './components/header.vue';
import modal from './components/modal.vue';

export default {
  components: {
    navBar: header,
    modalPopup: modal,
  },
};

</script>

<style lang="scss">
</style>
