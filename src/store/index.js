import { createStore } from "vuex";
import getData from "../services/getData.js";
export default createStore({
  state: {
    model: null,
    reviews: null,
    model_url:
      "https://rest.bellavka.by/api/v1/products/57791673?include=brand,category,collections,colors,fabrics,heights,kits,season,sizes,photos,videos,styles",
    reviews_url:
      "https://rest.bellavka.by/api/v1/feedbacks?type=review&product=57791673&include=answers,characteristics",
  },
  getters: {
    getModel(state) {
      return state.model;
    },

    getReviews(state) {
      return state.reviews;
    },
  },
  mutations: {
    SET_MODEL: (state, response) => {
      state.model = response;
    },

    SET_REVIEWS: (state, response) => {
      state.reviews = response;
    },
  },
  actions: {
    GET_MODEL_FROM_API({ commit }) {
      return getData(this.state.model_url, "SET_MODEL", commit);
    },

    GET_REVIEWS_FROM_API({ commit }) {
      return getData(this.state.reviews_url, "SET_REVIEWS", commit);
    },
  },
  modules: {},
});
