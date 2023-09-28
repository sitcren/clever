<template>
  <!-- <HeaderHome/>
  <BannerHome/>
  <ComGarantia/> -->
  <HeaderHomee/>
  <BannerHomee/>
</template>

<script>
import BannerHomee from './components/BannerHomee.vue'
import HeaderHomee from './components/HeaderHomee.vue'
// import HeaderHome from './components/HeaderHome.vue'
// import BannerHome from './components/BannerHome.vue'
// import ComGarantia from './components/ComGarantia.vue'



export default{
  name: 'App',
  components: {
    // HeaderHome, 
    // BannerHome,
    // ComGarantia,
    HeaderHomee,
    BannerHomee
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}

*{
  font-family: inter;
}

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

</style>