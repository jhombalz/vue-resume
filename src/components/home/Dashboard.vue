<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="8">
        <featured />
      </v-col>

      <v-col cols="12" md="4">
        <login />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Login from "../login/index.vue";
import Featured from "../featured/index.vue";

export default {
  name: "Dashboard",
  components: {
    login: Login,
    featured: Featured,
  },
  data() {
    return {
      resources: [
        {
          name: "Vue JS",
          path: "sample.com",
          icon: "https://vuejs.org/images/logo.svg",
          description:
            "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.",
        },
        {
          name: "Vue Router",
          path: "sample.com",
          icon: "https://vuejs.org/images/logo.svg",
          description: "Vue Router is the official router for Vue.js",
        },
        {
          name: "Vuetify",
          path: "sample.com",
          icon: "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light.svg",
          description:
            "Vuetify is a Vue UI Library with beautifully handcrafted Material Components",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 3em;
}
</style>
