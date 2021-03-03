<template>
  <div class="navbar">
    <img class="navbar__background" src="@/assets/img/navbar/nav-background.png" alt="">
    <div class="navbar-container">
      <div class="navbar__menu-item">
        <a href="#">ABOUT US</a>
      </div>
      <div class="navbar__dot">.</div>
      <div class="navbar__menu-item">
        <a href="#">WORK</a>
      </div>
      <div class="navbar__logo">
        <img src="@/assets/img/navbar/Logo.png" alt="">
      </div>
      <div class="navbar__menu-item">
        <a href="#">SHOP</a>
      </div>
      <div class="navbar__dot">.</div>
      <div class="navbar__menu-item">
        <a href="#">CONTACT</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style lang="scss" scoped>

.navbar {
  position: relative;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  &__background {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &-container {
    position: absolute;
    top: 3%;

    display: flex;
    flex-flow: row nowrap;
    width: 40%;
    min-width: 405px;

    align-items: center;
    justify-content: space-evenly;
  }

  &__menu-item {
    font-family: "Lato", sans-serif;
    font-size: 13px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 2.6px;
    color: #4d4959;

    & a {
      display: inline-block;
      font: inherit;
      color: inherit;
      text-decoration: none;
      text-align: center;
    }
  }

  &__dot {
    padding: 5px;
    font: inherit;
    color: inherit;
  }

  &__logo {
    margin: 10px;

    & img {
      width: 10vw;
      height: 100%;
      min-width: 50px;
      max-width: max-content;
    }
  }
}
</style>