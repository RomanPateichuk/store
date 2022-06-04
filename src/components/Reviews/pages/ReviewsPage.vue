<template>
  <div class="reviews">
    <div class="wrapper">
      <div class="reviews_statistics">
        <div class="stars_wrapper">
          <div class="star_item">
            <img
              v-for="star in average_rating"
              :key="star"
              src="../../../assets/images/star_active.png"
              alt=""
            />
            <img
              v-for="star in 5 - average_rating"
              :key="star"
              src="../../../assets/images/star_unactive.png"
              alt=""
            />
          </div>
        </div>
        <p class="reiews_count">
          {{ getReviews.statistics.rating.total }}
          {{ num_word(getReviews.statistics.rating.total) }}
        </p>

        <div
          class="reviews_index"
          v-for="item in getReviews.statistics.size"
          :key="item"
        >
          <div class="reviews_index-item">
            <p class="index_name">{{ item.name }}</p>
            <div class="index_indicator"></div>
            <p class="index_value">{{ Math.round(item.percent) }}%</p>
          </div>
        </div>
      </div>
      <div class="reviews_wrapper">
        <div class="reviews_item" v-for="item in getReviews.data" :key="item">
          <div class="reviews_item-header">
            <img
              class="user_foto"
              v-bind:src="item.user.photo"
              alt="user photo"
            />
            <p class="user_name">{{ item.user.name }}</p>
            <p class="reviews_date">{{ item.createdDate.slice(0, 10) }}</p>
          </div>
          <div class="size_description">{{ item.characteristics[0] }}</div>
          <div class="stars">
            <div class="star_item">
              <img
                v-for="star in item.rating"
                :key="star"
                src="../../../assets/images/star_active.png"
                alt=""
              />
              <img
                v-for="star in 5 - item.rating"
                :key="star"
                src="../../../assets/images/star_unactive.png"
                alt=""
              />
            </div>
          </div>
          <div class="reviews_text">{{ item.value }}</div>
          <div class="reviews_foto">
            <img
              v-for="photo in item.photos"
              :key="photo"
              v-bind:src="photo"
              alt="reviews photo"
            />
          </div>

          <div class="review_answer-wrapper" v-if="item.answers[0]?.value">
            <img src="../../../assets/images/corner-up-right.svg" alt="" />
            <div class="review_answer-main">
              <div class="answer_name">
                <img src="../../../assets/images/Bellavka.png" alt="" />
                <p class="answer_autor">Беллавка</p>
              </div>
              <p class="answer_text">
                {{ item.answers[0]?.value }}
              </p>
            </div>
          </div>

          <div class="reviews_wrapper_end"></div>
        </div>
      </div>
      <button class="review_btn">Оставить отзыв</button>
      <Menu />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Menu from "@/components/Model/molecules/MenuSection.vue";
export default {
  name: "ReviewsPage",
  components: {
    Menu,
  },
  computed: {
    ...mapGetters(["getReviews", "average_rating"]),
    num_word() {
      return (number) =>
        this.words[
          number % 100 > 4 && number % 100 < 20
            ? 2
            : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
        ];
    },
  },
  data() {
    return { words: ["отзыв", "отзыва", "отзывов"] };
  },
};
</script>

<style lang="scss">
.wrapper {
  font-family: "Gilroy";
  font-style: normal;
  margin: 0 16px;
  .reviews_statistics {
    background: #faf1e8;
    border-radius: 10px;
    width: 95vw;
    margin: 0 auto;
    padding-left: 11px;
    padding-right: 7px;
    font-weight: 500;
    padding-bottom: 1.625rem;
    .stars_wrapper {
      padding-top: 0.625rem;
      .star_item {
        display: flex;
        justify-content: center;

        img {
          display: block;
          margin: 0.3125rem;
        }
      }
    }

    .reiews_count {
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      font-size: 14px;
      line-height: 17px;
      color: #282828;
    }

    .reviews_index {
      .reviews_index-item {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
        .index_name {
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          color: #282828;
        }

        .index_indicator {
          border: 2px solid #dddddd;
          width: 35%;
          height: 0px;
          margin-left: auto;
        }

        .index_value {
          width: 10%;
          margin-left: 1%;
          font-size: 14px;
          line-height: 17px;
          color: #282828;
        }
      }
    }
  }

  .reviews_wrapper {
    .reviews_item {
      margin-top: 15px;
      .reviews_item-header {
        display: flex;
        align-items: center;

        img {
          font-size: 10px;
          width: 32px;
          height: 32px;
          margin-right: 10px;
        }

        .user_name {
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: #282828;
        }

        .reviews_date {
          margin-left: auto;

          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          color: #b0afab;
        }
      }

      .size_description {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-align: start;
        color: #282828;
        margin: 9px 0;
      }

      .stars {
        margin-top: 10px;
        .star_item {
          display: flex;
          img {
            width: 20px;
            height: 20px;
            margin-right: 5px;
          }
        }
      }

      .reviews_text {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #282828;
        text-align: justify;
        margin-top: 16px;
        margin-bottom: 8px;
      }

      .reviews_foto {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
        img {
          border-radius: 4px;
          width: 104px;
          height: 156px;
        }
      }

      .reviews_wrapper_end {
        border: 1px solid #eeeeee;
        width: 100%;
        margin-top: 16px;
      }
    }

    .review_answer-wrapper {
      display: flex;
      align-items: flex-start;
      .review_answer-main {
        background: #faf1e8;
        border-radius: 10px;
        width: 100%;
        padding-top: 7px;
        padding-left: 16px;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #282828;
        .answer_name {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          .answer_autor {
            padding-left: 8px;
          }
        }

        .answer_text {
          text-align: justify;
          margin-top: 8px;
        }
      }
    }
  }

  .review_btn {
    width: 100%;
    min-height: 48px;
    background: #bd9365;
    border-radius: 35px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #ffffff;
    margin-top: 32px;
    margin-bottom: 10px;
  }
}
</style>
