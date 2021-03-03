<template>
  <div class="wrapper">
    <main class="page">
      <NavBar/>
      <ContentPost/>
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import ContentPost from "@/components/ContentPost";
export default {
name: "Wrapper",
  components: {ContentPost, NavBar}
}
</script>

<style lang="scss">
.wrapper {
  @extend ;
  overflow: hidden;
  min-height: 100%;
}
</style>