<template>
  <div>
    <section class="brands">
      <div class="brands__row">
        <div class="brands__column brands__column_b">
          <a href="#" class="brands__item item pe-none">
          <span class="item__logo">
            <img src="@/assets/img/logos/logo1.png" alt="">
          </span>
            <span class="item__image ibg">
            <img src="@/assets/img/content-grid/bycicle1.png" alt="">
          </span>
          </a>
        </div>
        <div class="brands__column">
          <div class="brands__content block">
            <div class="block__icon">
              <img src="@/assets/img/icons/icon_vintage_oliva.png" alt="">
            </div>
            <h2 class="block__title">
              vintage Oliva
            </h2>
            <div class="block__text block__text_j">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived.
            </div>
          </div>
          <div class="brands__image ibg">
            <img src="@/assets/img/content-grid/bycicle2.png" alt="">
          </div>
        </div>
        <div class="brands__column brands__column_tablet">
          <a href="#" class="brands__item item">
          <span class="item__logo">
            <img src="@/assets/img/logos/logo1.png" alt="">
          </span>
            <span class="item__image ibg">
            <img src="@/assets/img/content-grid/bycicle1.png" alt="">
          </span>
          </a>
        </div>
      </div>
    </section>
    <section class="brands brands">
      <div class="brands__row">
        <div class="brands__column brands__column_tablet">
          <a href="#" class="brands__item item">
          <span class="item__logo">
            <img src="@/assets/img/logos/logo2.png" alt="">
          </span>
            <span class="item__image ibg">
            <img src="@/assets/img/content-grid/bycicle4.png" alt="">
          </span>
          </a>
        </div>
        <div class="brands__column">
          <div class="brands__content block">
            <div class="block__icon">
              <img src="@/assets/img/icons/icon_la_boriosa.png" alt="">
            </div>
            <h2 class="block__title">
              La Boriosa
            </h2>
            <div class="block__text block__text_j">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived.
            </div>
          </div>
          <div class="brands__image ibg">
            <img src="@/assets/img/content-grid/bycicle3.png" alt="">
          </div>
        </div>
        <div class="brands__column brands__column_b">
          <a href="#" class="brands__item item">
          <span class="item__logo">
            <img src="@/assets/img/logos/logo2.png" alt="">
          </span>
            <span class="item__image ibg">
            <img src="@/assets/img/content-grid/bycicle4.png" alt="">
          </span>
          </a>
        </div>
      </div>
    </section>
    <section class="brands brands_last">
      <div class="brands__row">
        <div class="brands__column">
          <a href="#" class="brands__item item">
          <span class="item__logo">
            <img src="@/assets/img/logos/logo3.png" alt="">
          </span>
            <span class="item__image ibg">
            <img src="@/assets/img/content-grid/bycicle5.png" alt="">
          </span>
          </a>
        </div>
        <div class="brands__column">
          <div class="brands__content block">
            <div class="block__icon">
              <img src="@/assets/img/icons/icon_retro_bike.png" alt="">
            </div>
            <h2 class="block__title">
              retrò Bike - M. Hulot
            </h2>
            <div class="block__text block__text_j">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived.
            </div>
          </div>
          <div class="brands__image ibg">
            <img src="@/assets/img/content-grid/bycicle6.png" alt="">
          </div>
        </div>
        <div class="brands__column">
          <a href="#" class="brands__item item">
          <span class="item__logo">
            <img src="@/assets/img/logos/logo3.png" alt="">
          </span>
            <span class="item__image ibg">
            <img src="@/assets/img/content-grid/bycicle7.png" alt="">
          </span>
          </a>
        </div>
        <div class="brands__column brands__column_tablet">
          <a href="#" class="brands__item item">
          <span class="item__logo">
            <img src="@/assets/img/logos/logo3.png" alt="">
          </span>
            <span class="item__image ibg">
            <img src="@/assets/img/content-grid/bycicle5.png" alt="">
          </span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Brands"
}
</script>

<style lang="scss">
.brands {

  &__row {
    display: flex;
  }

  &__column {
    flex: 0 1 33.333%;

    &_b {
      flex: 0 1 66.667%;
    }
    &_tablet{
      display: none;
    }
  }

  &__item {
  }

  &__content {
    padding: 70px 65px 55px 65px;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      margin: 0 0 0 -10px;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid #fff;
      z-index: 2;
    }
  }

  &__image {
    padding: 0 0 37.51% 0;
  }

  @media (max-width: $desktopMaxWidth) {
    &__content {
      padding: 40px 35px 30px 35px;
    }
  }
  @media (max-width: $desktopMinWidth) {
    &_last{
      .brands__column{
        &:nth-child(1){
          order: 1;
        }
        &:nth-child(2){
          order: 2;
        }
        &:nth-child(3){
          order: 3;
        }
        &:nth-child(4){
          order: 4;
        }
      }
    }
    &__column{
      flex: 0 1 50%;
      &_b{
        flex: 0 1 100%;
      }
      &_tablet{
        display: block;
        & span {
          background-position: bottom right;
        }

      }
    }
    &__row {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
  @media (max-width: $tabletWidth) {
    &__column{
      &_tablet{
        display: none;
      }
    }
    &_last{
      .brands__column{
        &:nth-child(1){
          order: 2;
        }
        &:nth-child(2){
          order: 1;
        }
        &:nth-child(3){
          order: 3;
        }
      }
    }
    &__row {
      flex-direction: column;
      flex-wrap: nowrap;
    }
  }
}

.item {
  height: 100%;
  display: block;
  position: relative;

  &__logo {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;

    transition: all 0.3s ease 0s;

    justify-content: center;
    align-items: center;


    background-color: rgba(100, 194, 158, 0.5);
    z-index: 2;

    opacity: 0;
    visibility: hidden;

    span {
      font-family: "Lato", sans-serif;
      margin: 10px 0 0 0;
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 2.8px;
      display: block;
      text-transform: uppercase;
      color: #fff;
    }
  }

  &__image {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  &:hover {
    .item__logo {
      opacity: 1;
      visibility: visible;
    }
  }

  @media (max-width: $desktopMinWidth) {
    padding: 0 0 70% 0;
  }
  @media (max-width: $tabletWidth) {
    height: 100%;
  }
  @media (max-width: $mobileWidth) {
    height: auto;
    max-height: 50vh;
    padding: 0 0 70% 0;
  }
}

.pe-none{
  pointer-events: none;
}
</style>