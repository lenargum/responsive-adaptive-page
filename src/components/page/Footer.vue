<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__row">
        <div class="footer__column">
          <div class="footer__address">
            <p>AOD New York</p>
            <p>2250 Lexington Avenue</p>
            <p>New York, NY 10035 - info@domain.com</p>
          </div>
        </div>
        <div class="footer__column">
          <div class="footer__social social">
            <a href="" class="social__link">
              <img src="@/assets/img/socials/twitter.png" alt="">
            </a>
            <a href="" class="social__link">
              <img src="@/assets/img/socials/facebook.png" alt="">
            </a>
            <a href="" class="social__link">
              <img src="@/assets/img/socials/pinterest.png" alt="">
            </a>
          </div>
        </div>
        <div class="footer__column">
          <div class="footer__dev dev">
            <span class="dev__text">Handcrafted by</span>
            <span class="dev__icon">
              <img src="@/assets/img/socials/yebo.png" alt="">
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss">
.footer {
  font-family: 'Lato', sans-serif;
  background-color: #f7f7f7;

  &__row {
    display: flex;
    padding: 100px 0;
    align-items: center;
  }

  &__column {
    flex: 0 1 33.333%;
  }

  &__address {
    color: #848789;
    font-size: 14px;
    line-height: 18px;
    p {
      &:first-child {
        font-weight: bold;
      }
    }
  }

  &__social {

  }

  &__dev {

  }

  @media (max-width: $desktopMinWidth) {
    padding: 50px 0;
  }
  @media (max-width: $mobileWidth){
    padding: 30px 0;
    &__row {
      flex-direction: column;
      text-align: center;
    }
    &__address{
      padding: 0;
    }
    &__social {
      margin: 15px 0;
    }
  }
}

.social {
  display: flex;
  justify-content: center;
  align-items: center;

  &__link {
    margin: 0 7.5px;
  }
}

.dev {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &__text {
    color: #848789;
    font-size: 14px;
    font-style: italic;
    padding: 0 9px 0 0;
  }

  &__icon {

  }
}
</style>