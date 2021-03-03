<template>
  <div class="content">
    <div class="content-container">

    </div>
  </div>
</template>

<script>
export default {
name: "ContentPost"
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;

  &-container {
    margin: 10px;
    max-width: 1080px;

    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    align-items: center;
  }
}
</style>