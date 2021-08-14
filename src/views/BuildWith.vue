<template>
  <div class="build-with">
    <dashboard />
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
import Dashboard from "../components/build-with/Dashboard.vue";
export default {
  name: "BuildWith",
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
