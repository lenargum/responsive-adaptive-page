<template>
  <div class="shop">
    <div class="shop__body">
      <div class="shop__column shop__column_b">
        <div class="shop__block block-shop">
          <div class="block-shop__row">
            <div class="block-shop__column">
              <a href="#" class="block-shop__item block-shop__item_l item">
                <span class="item__logo">
                  <img src="@/assets/img/icons/icon_shop_now.png" alt="">
                  <span>Shop now</span>
                </span>
                <span class="item__image ibg">
                  <img src="@/assets/img/shopwindow/bycicle1_shopwindow.png" alt="">
                </span>
              </a>
            </div>
            <div class="block-shop__column">
              <a href="#" class="block-shop__item block-shop__item_l item">
                <span class="item__logo">
                  <img src="@/assets/img/icons/icon_shop_now.png" alt="">
                  <span>Shop now</span>
                </span>
                <span class="item__image ibg">
                  <img src="@/assets/img/shopwindow/bycicle3_shopwindow.png" alt="">
                </span>
              </a>
            </div>
          </div>
          <a href="#" class="block-shop__item item">
                <span class="item__logo">
                  <img src="@/assets/img/icons/icon_shop_now.png" alt="">
                  <span>Shop now</span>
                </span>
            <span class="item__image ibg">
                  <img src="@/assets/img/shopwindow/bycicle2_shopwindow.png" alt="">
                </span>
          </a>
        </div>

      </div>
      <div class="shop__column">
        <a href="#" class="block-shop__item block-shop__item_b item">
                <span class="item__logo">
                  <img src="@/assets/img/icons/icon_shop_now.png" alt="">
                  <span>Shop now</span>
                </span>
          <span class="item__image ibg">
                  <img src="@/assets/img/shopwindow/bycicle4_shopwindow.png" alt="">
                </span>
        </a>
      </div>
      <div class="shop__column">
        <a href="#" class="block-shop__item block-shop__item_b item">
                <span class="item__logo">
                  <img src="@/assets/img/icons/icon_shop_now.png" alt="">
                  <span>Shop now</span>
                </span>
          <span class="item__image ibg">
                  <img src="@/assets/img/shopwindow/bycicle5_shopwindow.png" alt="">
                </span>
        </a>
      </div>
      <div class="shop__column shop__column_b">
        <div class="shop__block block-shop">
          <a href="#" class="block-shop__item item">
                <span class="item__logo">
                  <img src="@/assets/img/icons/icon_shop_now.png" alt="">
                  <span>Shop now</span>
                </span>
            <span class="item__image ibg">
                  <img src="@/assets/img/shopwindow/bycicle6_shopwindow.png" alt="">
                </span>
          </a>
          <div class="block-shop__row">
            <div class="block-shop__column">
              <a href="#" class="block-shop__item block-shop__item_l item">
                <span class="item__logo">
                  <img src="@/assets/img/icons/icon_shop_now.png" alt="">
                  <span>Shop now</span>
                </span>
                <span class="item__image ibg">
                  <img src="@/assets/img/shopwindow/bycicle7_shopwindow.png" alt="">
                </span>
              </a>
            </div>
            <div class="block-shop__column">
              <a href="#" class="block-shop__item block-shop__item_l item">
                <span class="item__logo">
                  <img src="@/assets/img/icons/icon_shop_now.png" alt="">
                  <span>Shop now</span>
                </span>
                <span class="item__image ibg">
                  <img src="@/assets/img/shopwindow/bycicle8_shopwindow.png" alt="">
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shop__footer">
      <div class="container">
        <a href="" class="shop__btn">DISCOVER THE SHOP</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shop"
}
</script>

<style lang="scss">
.shop {
  &__body {
    display: flex;
  }

  &__column {
    flex: 0 1 16.666%;

    &_b {
      flex: 0 1 33.333%;
    }
  }

  &__block {
  }

  &__footer {
    padding: 75px 0;
    text-align: center;
    background-color: #282f35;
  }

  &__btn {
    font-family: 'Lato', sans-serif;
    display: inline-block;
    height: 50px;
    line-height: 48px;
    letter-spacing: 2.8px;
    color: #fff;
    padding: 0 60px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    border: 1px solid rgba(255,255,255,0.5);
    text-decoration: none;
  }

  @media (max-width: 1100px) {
    &__body{
      flex-wrap: wrap;
    }
    &__column{
      flex: 0 1 50%;
      &:first-child{
        flex: 1 1 100%;
      }
      &:last-child{
        flex: 1 1 100%;
      }
    }
    &__footer{
      padding: 50px 0;
    }
    &__btn {
      padding: 0 30px;
    }
  }
}

.block-shop {
  height: 100%;

  &__row {
    display: flex;
  }

  &__column {
    flex: 0 1 50%;
  }

  &__item {
    height: auto;
    padding: 0 0 50% 0;

    &_b {
      padding: 0 0 200.5% 0;
    }

    &_l {
      padding: 0 0 100% 0;

    }
  }
}
</style>