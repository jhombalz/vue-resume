<template>
  <v-card tile elevation="1">
    <div
      id="nav"
      class="d-flex justify-end"
      v-bind:class="theme === 'dark' ? 'sample' : 'sample-dark'"
    >
      <router-link to="/"> Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/build-with">Build With</router-link>
      <a v-on:click="toggleTheme">{{ mode }} Mode</a>
    </div>
  </v-card>

  <div class="ma-3">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["toggleTheme", "mode", "theme"],
};
</script>

<style>
#nav {
  padding: 20px;
  z-index: 999;
  position: relative;
}

#nav a {
  margin-left: 10px;
  margin-right: 10px;
  text-decoration: none;
  font-size: 14px;
  text-transform: uppercase;
}

.sample-dark a {
  color: #888;
}

.sample a {
  color: #fff;
}

#nav a.router-link-exact-active {
  color: red;
}
</style>
