<template>
  <main class="page">
    <Header/>
    <AboutUs/>
    <Brands/>
    <AboutUs/>
    <Shop/>
    <Subscribe/>
    <Footer/>
  </main>
</template>

<script>
import Header from "@/components/page/Header";
import AboutUs from "@/components/page/content/AboutUs";
import Brands from "@/components/page/content/Brands";
import Shop from "@/components/page/content/Shop";
import Subscribe from "@/components/page/content/Subscribe";
import Footer from "@/components/page/Footer";

export default {
  name: "Page",
  components: {
    Footer,
    Subscribe,
    Shop,
    Brands,
    AboutUs,
    Header
  }
}
</script>

<style lang="scss">
.page {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1130px;
  padding: 0 15px;
  margin: 0 auto;
}
</style>