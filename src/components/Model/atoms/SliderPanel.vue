<template>
  <div class="slider_panel">
    <div class="like">
      <img src="../../../assets/images/like.png" alt="like image" />
    </div>
    <div class="share">
      <img src="../../../assets/images/share-one.png" alt="share image" />
    </div>
    <div class="btn_wrapper">
      <button class="btn best">#Лучшее</button>

      <button class="btn in_stock">
        {{ getModel.status }}
      </button>
      <button class="btn material">
        <img src="../../../assets/images/green-new-energy.png" alt="icon" />
        {{ getModel.fabrics[0].value }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SliderPanel",
  computed: {
    ...mapGetters(["getModel", "getFoto"]),
  },
};
</script>

<style style scoped lang="scss">
.slider_panel {
  font-family: "Gilroy";
  font-style: normal;
  display: flex;
  flex-wrap: no-wrap;
  margin: 0 5vw;
  margin-top: 8px;
  justify-content: space-between;

  .btn_wrapper {
    .btn {
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 0.875rem;
      padding: 0 0.5rem;
      border-radius: 0.3125rem;
      color: #ffffff;
      min-height: 1.25rem;

      text-transform: uppercase;
      &:not(:first-child) {
        margin-left: 0.5rem;
      }
    }

    .best {
      background: #8b123b;
    }

    .in_stock {
      background: #bd9365;
    }

    .material {
      background: #282828;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      img {
        margin-right: 0.1875rem;
      }
    }
  }
}
</style>
