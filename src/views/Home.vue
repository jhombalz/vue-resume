<template>
  <div class="home">
    <dashboard />
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
import Dashboard from "../components/home/Dashboard.vue";
export default {
  name: "Home",
  components: {
    Dashboard,
  },
  setup() {
    const theme = ref("dark");

    return {
      theme,
      toggleTheme: () =>
        (theme.value = theme.value === "light" ? "dark" : "light"),
    };
  },
};
</script>
