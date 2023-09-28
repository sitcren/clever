<template>
  <!-- <HeaderHome/>
  <BannerHome/>
  <ComGarantia/> -->
  <HeaderHomee/>
  <BannerHomee/>
  <MethodsHome/>
  <CategoriaHome/>
  <NossosProductos/>
  <BannerApp/>
  <LastNews/>
  <NewsLetter/>
  <FooterHome/>
</template>

<script>
import BannerHomee from './components/BannerHomee.vue'
import HeaderHomee from './components/HeaderHomee.vue'
import MethodsHome from './components/MethodsHome.vue'
import CategoriaHome from './components/CategoriaHome.vue'
import NossosProductos from './components/NossosProductos.vue'
import BannerApp from './components/BannerApp.vue'
import LastNews from './components/LastNews.vue'
import NewsLetter from './components/NewsLetter.vue'
import FooterHome from './components/FooterHome.vue'
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
    BannerHomee,
    MethodsHome,
    CategoriaHome,
    NossosProductos,
    BannerApp,
    LastNews,
    NewsLetter,
    FooterHome
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