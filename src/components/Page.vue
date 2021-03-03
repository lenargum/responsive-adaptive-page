<template>
  <main class="page">
    <Header/>
    <div class="main-screen">
      <div class="main-screen__bg ibg">
      </div>
    </div>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias assumenda consequuntur dignissimos dolor
      dolore eligendi eveniet, expedita ipsum iusto magni nihil obcaecati officia officiis ratione rem totam ut vero.
    </div>
  </main>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "Page",
  components: {
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
    background-image: url("~@/assets/img/main-fullscreen.png");
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}
</style>