<template>
  <div class="wrapper">
    <carousel :items-to-show="1" :wrap-around="true">
      <slide
        class="slider_wrapper"
        v-for="item in this.$store.getters.getFoto"
        :key="item"
      >
        <img
          v-on:click="increase"
          class="increase"
          src="../assets/images/increase.png"
          alt=""
        />
        <img class="slide_item" v-bind:src="item" alt="slider image" />
        <div class="discount">-12%</div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  methods: {
    increase: function () {
      alert("Здесь должно быть модальное окно!");
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  width: 85vw;
  margin: 0 auto;

  position: relative;
  .slide_item {
    @media (max-width: 375px) {
      width: 100%;
    }
  }
  .increase {
    position: absolute;
    top: 3%;
    left: 85%;
  }
  .discount {
    width: 3.125rem;
    height: 1.5rem;
    border-radius: 19%;
    background-color: #8b123b;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 700;
    font-family: "Gilroy";
    position: absolute;
    top: 90%;

    @media (max-width: 375px) {
      top: 85%;
      left: 5%;
    }
  }
}
</style>
