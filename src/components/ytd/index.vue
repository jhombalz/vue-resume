<template>
  <search />
</template>

<script>
import Search from "./search.vue";
export default {
  name: "YoutubeDownloader",
  components: {
    search: Search,
  },
};
</script> 

<style scoped>
.wd-100 {
  width: 100%;
}
</style>
