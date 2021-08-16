import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import "vue3-carousel/dist/carousel.css";
import axios from "axios";
import VueAxios from "vue-axios";

const baseURL = "https://vue-resume-api.herokuapp.com";

if (typeof baseURL !== "undefined") {
  Vue.axios.defaults.baseURL = baseURL;
}

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.use(VueAxios, axios);

app.mount("#app");
