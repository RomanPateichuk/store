import { createApp } from "vue";
import root from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(root, {});
app.use(store).use(router).mount("#app");
