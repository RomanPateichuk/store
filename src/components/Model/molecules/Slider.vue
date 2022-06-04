<template>
  <carousel class="carousel" :items-to-show="1" :wrap-around="true">
    <slide class="slide" v-for="item in getFoto" :key="item">
      <div class="slide_item">
        <img
          v-on:click="increase"
          class="increase"
          src="../../../assets/images/increase.png"
          alt="increase"
        />
        <img class="slide_image" v-bind:src="item" alt="slide image" />
        <div class="discount">-{{ getModel.salePercent }}%</div>
      </div>
    </slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
  <SliderPanel />
</template>

<script>
import "../../../assets/styles/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import SliderPanel from "@/components/Model/atoms/SliderPanel.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    SliderPanel,
  },

  methods: {
    increase: function () {
      alert("Здесь должно быть модальное окно!");
    },
  },
  computed: {
    ...mapGetters(["getModel", "getFoto"]),
  },
};
</script>

<style scoped lang="scss">
.carousel {
  .slide {
    position: relative;
    .slide_item {
      position: relative;
      @media (max-width: 375px) {
        width: 100%;
      }
      .slide_image {
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
        top: 1%;
        left: 1%;

        @media (max-width: 375px) {
          top: 85%;
          left: 5%;
        }
      }
    }
  }
}
</style>
