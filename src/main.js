import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import "vue3-carousel/dist/carousel.css";

const app = createApp(App);
app.use(router);
app.use(vuetify);

app.mount("#app");
