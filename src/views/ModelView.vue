<template>
  <div class="home">
    <ModelPage />
    <p>{{ this.$store.getters.getModel }}</p>
  </div>
</template>

<script>
import ModelPage from "@/components/ModelPage.vue";

export default {
  name: "ModelView",
  components: {
    ModelPage,
  },
};
</script>
