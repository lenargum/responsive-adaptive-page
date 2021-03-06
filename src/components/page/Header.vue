<template>
  <div>
    <div class="main-screen">
      <div class="main-screen__bg ibg">
        <img src="@/assets/img/main-fullscreen.png" alt="">
      </div>
    </div>
    <header class="header">
      <div class="header__row">
        <nav class="header__menu menu">
          <div class="menu__icon icon-menu" v-bind:class="{ active: isActive }"
               v-on:click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="menu__body" v-bind:class="{ active: isActive }">
            <ul class="menu__list">
              <li><a href="" class="menu__link">about us</a></li>
              <li><a href="" class="menu__link">work</a></li>
              <li><a href="" class="menu__link">shop</a></li>
              <li><a href="" class="menu__link">contact</a></li>
            </ul>
          </div>
        </nav>
        <div class="header__logo">
          <img src="@/assets/img/logos/logo.png" alt="">
        </div>
      </div>
    </header>
  </div>

</template>

<script>
export default {
  name: "Header",
  data: function () {
    return {
      isActive: false
    };
  },
  methods: {
    toggleMenu: function () {
      this.isActive = !this.isActive;
      document.body.style.overflow = this.isActive ? 'hidden' : ''
    }
  }
}
</script>

<style lang="scss">
@media (max-width: $tabletWidth) {
  body.lock {
    overflow: hidden;
  }
}

.main-screen {
  flex: 1 0 100%;
  position: relative;
  height: 100vh;

  &__bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}

.header {
  position: absolute;
  width: 100%;
  z-index: 50;
  left: 0;
  top: 35px;

  &__row {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85px;
  }

  &__menu {

  }

  &__logo {
    position: absolute;
    left: 50%;
    top: 0;
    z-index: 2;

    transform: translateX(-50%);
  }

  @media (max-width: $tabletWidth) {
    top: 15px;
  }
}

.menu {
  &__icon {

  }

  &__body {

  }

  &__list {
    display: flex;

    li {
      position: relative;
      padding: 0 37.5px;

      &:nth-child(2) {
        padding: 0 110px 0 37.5px;
      }

      &:nth-child(3) {
        padding: 0 37.5px 0 110px;
      }

      &:after {
        content: "";
        width: 2px;
        height: 2px;
        background-color: #4d4959;
        border-radius: 50%;
        position: absolute;
        right: 0;
        top: 50%;
        margin: -1.5px 0 0 0;
      }

      &:nth-child(2), &:last-child {
        &:after {
          display: none;
        }
      }
    }
  }

  &__link {
    font-family: 'Lato', sans-serif;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2.6px;
    color: #4d4959;
    text-decoration: none;
  }

  @media (max-width: $tabletWidth) {
    &__body {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      overflow: auto;
      background-color: #4d4959;
      padding: 150px 0 20px 0;

      transform: translate(0, -100%);
      transition: all 0.3s ease 0s;
      &.active{
        transform: translate(0, 0);
      }
    }

    &__list {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      li {
        padding: 0 0 45px 0;

        &:nth-child(2),
        &:nth-child(3) {
          padding: 0 0 45px 0;

          &:after {
            display: block;
          }
        }

        &:last-child {
          padding: 0;
        }

        &:after {
          content: "";
          width: 4px;
          height: 4px;
          background-color: #fff;
          border-radius: 50%;
          position: absolute;
          right: 50%;
          top: 50px;
          margin: 0 -2px 0 0;
        }
      }
    }

    &__link {
      color: #fff;
      font-size: 20px;
    }
  }
}

.icon-menu {
  @media (max-width: $tabletWidth) {
    display: block;
    position: absolute;
    top: 33px;
    right: 33px;
    width: 30px;
    height: 18px;
    cursor: pointer;
    z-index: 5;
    span {
      transition: all 0.3s ease 0s;
      top: 8px;
      left: 0;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #4d4959;

      &:first-child {
        top: 0;
      }

      &:last-child {
        top: auto;
        bottom: 0;
      }
    }
    &.active {
      span {
        background-color: #fff;
        transform: scale(0);

        &:first-child {
          transform: rotate(-45deg);
          top: 8px;
        }

        &:last-child {
          transform: rotate(45deg);
          bottom: 8px;
        }

      }
    }
  }
}
</style>