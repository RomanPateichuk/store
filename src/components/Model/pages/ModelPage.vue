<template>
  <div>
    <!-- <p>{{ getModel.id }}</p>
    <p>{{ getModel.photos }}</p> -->
    <!-- <p>{{ getModel["price"]["retail"] }}</p> -->
    <!-- <p v-for="item in this.$store.getters.getModel" :key="item">{{ item }}</p> -->
    <div class="wrapper">
      <header class="header">
        <Slider />
      </header>
      <main>
        <div class="_content_wrapper">
          <Navigation />
          <div class="main_title">
            <h1 class="fullName">{{ getModel.fullName }}</h1>
            <p class="kits">
              {{ getModel.kits[0].value }},{{ getModel.kits[1].value }}
            </p>
          </div>

          <div class="price_wrapper">
            <p class="retail">{{ getModel.price.retail }}&#8381;</p>
            <p class="retailOld">{{ getModel.price.retailOld }}&#8381;</p>
            <p class="more">
              Подробнее<img
                src="../../../assets/images/circle-double-down.png"
                alt="button read more"
              />
            </p>
          </div>

          <div class="sizes">
            <div class="sizes_title-wrapper">
              <p class="sizes_title">Размеры:</p>
              <a class="sizes_table" href="" title="">Таблица размеров</a>
            </div>
            <div class="sizes_items">
              <div
                class="sizes_items-item"
                v-bind:class="{ isActual: item.isActual }"
                v-for="item in getModel.sizes"
                :key="item"
              >
                {{ item.value }}
              </div>
            </div>
          </div>

          <div class="heights">
            <p class="heights_title">Рост:</p>
            <div class="heights_items">
              <div
                class="heights_items-item"
                v-for="item in getModel.heights"
                :key="item"
              >
                {{ item.value }}
              </div>
            </div>
          </div>

          <button class="buy_btn btn">
            <img
              src="../../../assets/images/turn-on.png"
              alt="buy turn on"
            />Купить в один клик
          </button>

          <button class="add_btn btn">
            <img src="../../../assets/images/in_box.png" alt="buy turn on" />В
            корзину
          </button>

          <div class="colors">
            <p class="colors_title">Цвета:</p>
            <div class="colors_items">
              <div
                v-bind:style="{ background: item.hex }"
                class="colors_items-item"
                v-for="item in getModel.colors"
                :key="item"
              >
                {{ item.value }}
              </div>
            </div>
          </div>

          <div class="watched">
            <p class="watched_title">Вы недавно смотрели</p>
            <div class="watched_item">
              <img src="../../../assets/images/Rectangle629.png" alt="" />
              <p class="price">6420 &#8381;</p>
              <p class="name">Asv</p>
              <p class="category">Платье</p>
            </div>
          </div>
        </div>
      </main>
      <Menu />
    </div>
  </div>
</template>

<script>
import Slider from "@/components/Model/molecules/SliderSection.vue";
import Menu from "@/components/Model/molecules/MenuSection.vue";
import Navigation from "@/components/Model/molecules/NavigationSection.vue";
import { mapGetters } from "vuex";
export default {
  name: "ModelPage",
  components: {
    Slider,
    Navigation,
    Menu,
  },
  computed: {
    ...mapGetters(["getModel", "getFoto"]),
  },
};
</script>

<style scoped lang="scss">
@mixin title {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #282828;
  text-align: left;
}

@mixin value {
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #282828;
  border: 1px solid #dddddd;
  border-radius: 7px;
  width: 64px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eeeeee;

  &:not(:last-child) {
    margin-right: 4px;
  }
}

.wrapper {
  font-family: "Gilroy";
  font-style: normal;
  width: 65vw;
  margin: 0 auto;
  @media (max-width: 375px) {
    width: 100vw;
  }
  main {
    ._content_wrapper {
      margin: 0 1.0625rem;

      .main_title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 1rem;
        line-height: 1.1875rem;
        .fullName {
          font-weight: 500;

          color: #282828;
        }

        .kits {
          font-weight: 400;
          color: #b0afab;
        }
      }

      .price_wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        margin-top: 1rem;
        font-size: 0.875rem;
        line-height: 17px;
        .retail {
          font-weight: 600;
          font-size: 1.5rem;
          line-height: 1.8125rem;
          color: #bd9365;
        }

        .retailOld {
          font-weight: 400;
          text-decoration-line: line-through;
          color: #b0afab;
          margin-left: 0.25rem;
        }

        .more {
          font-weight: 500;
          color: #c49e74;
          margin-left: auto;

          img {
            margin-left: 0.25rem;
          }
        }
      }

      .sizes {
        margin-top: 2rem;
        .sizes_title-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;

          .sizes_title {
            @include title;
          }

          .sizes_table {
            font-size: 14px;
            line-height: 17px;
            text-decoration-line: underline;
            color: #c49e74;
          }
        }

        .sizes_items {
          display: flex;
          flex-wrap: wrap;
          .sizes_items-item {
            @include value;
            &.isActual {
              background: white;
            }
          }
        }
      }

      .heights {
        margin-top: 2rem;
        .heights_title {
          margin-bottom: 0.5rem;
          @include title;
        }

        .heights_items {
          display: flex;
          flex-wrap: wrap;
          .heights_items-item {
            @include value;
            background: white;
          }
        }
      }

      .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 310px;
        height: 60px;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        text-transform: uppercase;
        color: #282828;
        border-radius: 25px;
        margin: 1.5rem auto;
        &.add_btn {
          background: #ffc543;
        }
        img {
          margin-right: 0.5rem;
        }
        &.buy_btn {
          background: #ffffff;
          border: 1.5px solid #282828;
        }
      }

      .colors {
        .colors_title {
          @include title;
        }

        .colors_items {
          display: flex;
          flex-wrap: wrap;
          margin-top: 8px;
          .colors_items-item {
            @include value;
            width: 71px;
            height: 103px;
          }
        }
      }

      .watched {
        margin-top: 2.9375rem;
        .watched_title {
          @include title;
          color: #bd9365;
          margin-bottom: 0.5rem;
        }

        .watched_item {
          .price {
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            color: #bd9365;
          }

          .name {
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: #141414;
          }

          .category {
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            color: #b0afab;
          }
        }
      }
    }
  }
}
</style>
