<template>
<!-- <div> -->
    <HomeView />
    <loginPage />
    <CadastrarPage />
    <router-view/>
<!-- </div> -->
</template>

<script>
import HomeView from './views/HomeView.vue'
import loginPage from './views/loginPage.vue'
import CadastrarPage from './views/CadastrarPage.vue'

export default {
  // name: 'App',
  components: {
    HomeView,
    loginPage,
    CadastrarPage
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

* {
  font-family: inter;
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style>
