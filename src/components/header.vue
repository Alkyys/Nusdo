<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Nusdo</a>
    <button class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">about</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">Link 1</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">Link 2</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">Link 3</router-link>
        </li>
      </ul>

      <ul class="nav justify-content-end">
        <li class="nav-item text-left">
          <div class="font-weight-bold">John Doe</div>
          <router-link class="text-left" to="/about">Voir mon profil</router-link>
        </li>
        <li class="nav-item">
          <img src="../assets/logo.png" class="rounded float-right" alt="logo" height="50px">
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'header',
  };
</script>

<style scoped>

</style>
