<template>
  <div>
    <HeaderHomee />
    <BannerHomee />
    <MethodsHome />
    <CategoriaHome />
    <NossosProductos />
    <BannerApp />
    <LastNews />
    <NewsLetter />
    <FooterHome />
  </div>
</template>

<script lang="ts">
import BannerHomee from '../components/BannerHomee.vue'
import HeaderHomee from '../components/HeaderHomee.vue'
import MethodsHome from '../components/MethodsHome.vue'
import CategoriaHome from '../components/CategoriaHome.vue'
import NossosProductos from '../components/NossosProductos.vue'
import BannerApp from '../components/BannerApp.vue'
import LastNews from '../components/LastNews.vue'
import NewsLetter from '../components/NewsLetter.vue'
import FooterHome from '../components/FooterHome.vue'

export default {
  name: 'HomeView',
  components: {
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
