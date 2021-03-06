<template>
  <div class="wrapper">
    <Page/>
  </div>
</template>

<script>
import Page from "@/components/page/Page";

export default {
  name: "Wrapper",
  components: {
    Page,
  }
}
</script>

<style lang="scss">
.wrapper {
  overflow: hidden;
  min-height: 100%;
}


</style>