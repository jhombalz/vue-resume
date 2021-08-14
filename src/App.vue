<template>
  <v-app :theme="theme">
    <v-main>
      <navbar
        v-bind:toggle-theme="toggleTheme"
        v-bind:mode="mode"
        v-bind:theme="theme"
      />
    </v-main>
  </v-app>
</template>

<script>
import { ref } from "vue";
import Navbar from "./components/navbar/index.vue";
export default {
  name: "App",
  components: {
    navbar: Navbar,
  },
  setup() {
    const theme = ref("dark");

    return {
      theme,
    };
  },

  data() {
    return {
      mode: this.theme === "light" ? "dark" : "light",
    };
  },

  methods: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      this.mode = this.theme === "light" ? "dark" : "light";
    },
  },
};
</script>

<style>
#app {
  font-family: "Atkinson Hyperlegible", sans-serif;
  font-family: "Gowun Dodum", sans-serif;
}
</style>

