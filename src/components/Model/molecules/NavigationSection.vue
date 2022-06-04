<template>
  <nav class="navigation">
    <div class="navigation_item">
      <div class="header">
        <img src="../../../assets/images/video.svg" alt="" />
        <p class="count">+{{ getModel.videosCount }}</p>
        <img
          class="arrow-right"
          src="../../../assets/images/arrow-right.svg"
          alt="arrow-right"
        />
      </div>
      <p class="title">Смотреть видеобзоры</p>
    </div>
    <div class="navigation_item" v-on:click="go">
      <div class="header">
        <img src="../../../assets/images/message.svg" alt="" />
        <p class="count">+{{ getModel.reviewsCount }}</p>
        <img
          class="arrow-right"
          src="../../../assets/images/arrow-right.svg"
          alt="arrow-right"
        />
      </div>
      <p class="title">Отзывы покупателей</p>
    </div>
    <div class="navigation_item">
      <div class="header">
        <img src="../../../assets/images/help.svg" alt="" />
        <p class="count">+{{ getModel.questionsCount }}</p>
        <img
          class="arrow-right"
          src="../../../assets/images/arrow-right.svg"
          alt="arrow-right"
        />
      </div>
      <p class="title">Вопросы по модели</p>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavigationSection",
  components: {},
  computed: {
    ...mapGetters(["getModel", "getFoto"]),
  },

  methods: {
    go: function () {
      this.$router.push("/reviews");
    },
  },
};
</script>

<style scoped lang="scss">
.navigation {
  font-family: "Gilroy";
  font-style: normal;
  display: flex;
  padding: 0;
  margin: 1rem auto;
  justify-content: space-between;

  .navigation_item {
    border: 1px solid #dddddd;
    background: #f5f5f5;
    width: 31.6%;
    .header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 0.5625rem 0.3125rem 0 0.4375rem;
      .arrow-right {
        margin-left: auto;
      }
      .count {
        color: #bd9365;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.0625rem;
        margin-left: 0.25rem;
      }
    }

    .title {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #282828;
      text-align: left;
      margin: 8px 8px 12px;
    }
  }
}
</style>
