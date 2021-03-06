<template>
  <div class="subscribe">
    <div class="container">
      <div class="subscribe__body">
        <div class="subscribe__logo">
          <img src="@/assets/img/logos/logo.png" alt="">
        </div>
        <div class="subscribe__label">Stay on the saddle!</div>
        <form action="#" class="subscribe__form">
          <div class="subscribe__input">
            <input type="text" name="form[]" placeholder="enter your email... ">
          </div>
          <div class="subscribe__button">
            <button type="submit" class="subscribe__btn">GO</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subscribe"
}
</script>

<style lang="scss">
.subscribe {
  &__body {
    padding: 110px 0;
    max-width: 534px;
    margin: 0 auto;
    text-align: center;
  }

  &__logo {
    display: flex;
    justify-content: center;
    margin: 0 0 39px 0;
  }

  &__label {
    color: #848789;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-style: italic;
    margin: 0 0 35px 0;

  }

  &__form {
    display: flex;
  }

  &__input {
    font-family: 'Lato', sans-serif;
    flex: 1 1 auto;
    padding: 0 8px 0 0;
    input {
      width: 100%;
      height: 69px;
      border: solid 1px #d3d7d9;
      background-color: #ffffff;
      padding: 0 28px;
      color: #929292;
      font-size: 20px;
      font-style: italic;

      &:hover {
        outline: solid 1.5px #d3d7d9;
      }
      &:focus {
        font-style: normal;
        color: #333;
        outline: solid 2px #d3d7d9;
      }
    }
  }

  &__button {
    flex: 0 0 126px;
  }

  &__btn {
    font-family: 'Lato', sans-serif;
    width: 100%;
    height: 69px;
    line-height: 69px;
    color: #ffffff;
    font-size: 24px;
    font-weight: 300;
    text-transform: uppercase;
    background-color: #64c29e;
    border: 0;
    &:focus {
      outline: 0;
    }
  }

  @media (max-width: $tabletWidth) {
    &__body {
      padding: 50px 0;
    }
  }
  @media (max-width: $mobileWidth) {
    &__form {
      display: block;
    }
    &__input{
      padding: 0 0 8px 0;
    }
  }
}
</style>