<template>
  <div>
    <h1>Model page</h1>
    <!-- <p>{{ getModel.id }}</p>
    <p>{{ getModel.photos }}</p> -->
    <!-- <p>{{ getModel["price"]["retail"] }}</p> -->
    <!-- <p v-for="item in this.$store.getters.getModel" :key="item">{{ item }}</p> -->
    <div class="wrapper">
      <header class="header">
        <Slider />
      </header>
      <main>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </main>
      <footer>
        <nav></nav>
      </footer>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/SliderPage.vue";
import { mapGetters } from "vuex";
export default {
  name: "ModelPage",
  components: {
    Slider,
  },
  computed: {
    ...mapGetters(["getModel", "getFoto"]),
  },
};
</script>

<style scoped lang="scss"></style>
