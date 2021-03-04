<template>
  <div class="content">
    <section class="generation">
      <div class="container">
        <div class="generation__block block">
          <div class="block__icon">
            <img src="@/assets/img/icons/icon_about_us.png" alt="">
          </div>
          <h1 class="block__title">
            A NEW GENERATION OF VINTAGE BIKE
          </h1>
          <div class="block__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutUs"
}
</script>

<style lang="scss">
.content {

}

.generation {
  background-color: #f7f7f7;
  padding: 120px 0;

  &__block {

  }

  @media (max-width: 900px) {
    padding: 80px 0;
  }
  @media (max-width: 600px) {
    padding: 30px 0;
  }
}

.block {
  text-align: center;

  &__icon {
    display: flex;
    justify-content: center;
    margin: 0 0 30px 0;
  }

  &__title {
    font-family: 'Lato', sans-serif;
    color: #353738;
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
    letter-spacing: 3.6px;
    text-transform: uppercase;
    margin: 0 0 18px 0;
  }

  &__text {
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    line-height: 34px;
    color: #848789;

    &_j {
      text-align: justify;
      font-size: 16px;
      line-height: 30px;

      &:after {
        content: '';
        display: block;
        margin: 35px auto 0 auto;
        width: 50px;
        height: 1px;
        background-color: #ebebeb;

      }
    }
  }
  @media (max-width: 1500px) {
    &__text{
      &_j{
        &:after{
          margin: 15px auto 0 auto;
        }
      }
    }
  }
}
</style>