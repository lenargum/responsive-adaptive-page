<template>
  <main class="page">
    <Header/>
    <div class="main-screen">
      <div class="main-screen__bg ibg">
      </div>
    </div>
    <SinglePost/>
  </main>
</template>

<script>
import Header from "@/components/Page/Header";
import SinglePost from "@/components/Page/SinglePost";

export default {
  name: "Page",
  components: {
    SinglePost,
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

.container {
  max-width: 1130px;
  padding: 0 15px;
  margin: 0 auto;
}
</style>