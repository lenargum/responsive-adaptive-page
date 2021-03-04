<template>
  <main class="page">
    <Header/>
    <div class="main-screen">
      <div class="main-screen__bg ibg">
        <img src="@/assets/img/main-fullscreen.png" alt="">
      </div>
    </div>
    <AboutUs/>
    <Brands/>
  </main>
</template>

<script>
import Header from "@/components/Page/Header";
import AboutUs from "@/components/Page/AboutUs";
import Brands from "@/components/Page/Brands";

export default {
  name: "Page",
  components: {
    Brands,
    AboutUs,
    Header
  }
}
</script>

<style lang="scss">
.page {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
}

.main-screen {
  flex: 1 0 100%;
  position: relative;

  &__bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}

.container {
  max-width: 1130px;
  padding: 0 15px;
  margin: 0 auto;
}
</style>