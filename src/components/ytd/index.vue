<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="5"> </v-col>

      <v-col cols="12" sm="12" md="7">
        <div>
          <p>Youtube Downloader</p>
        </div>

        <div class="my-3">
          <span class="text-disabled text-caption"> YOUTUBE URL / LINK: </span>
          <input
            class="border border-primary wd-100 pa-3 rounded text-primary"
            v-model="url"
            placeholder="https://www.youtube.com/watch?v=dUgNvsJnw2E"
          />

          <v-btn color="primary mt-2" @click="handleConvertUrl"> Go </v-btn>
        </div>

        <div class="mt-10">
          <p v-for="(error, key) in errors" :key="key" class="text-error">
            {{ error }}
          </p>
          <div v-if="downloadReady">
            <span class="mr-5 text-h6"> {{ dowloadTitle }} </span> -
            <a
              :href="dowloadTag"
              target="_blank"
              download
              class="text-secondary text-decoration-none text-subtitle-2 ml-6"
            >
              DOWLOAD
            </a>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "YoutubeDownloader",
  data: () => ({
    url: "",
    dowloadTag: "",
    dowloadTitle: "",
    downloadReady: false,
    errors: [],
  }),

  methods: {
    handleConvertUrl: function () {
      this.errors = [];
      this.dowloadTag = "";
      this.dowloadTitle = "";
      this.downloadReady = false;

      this.$http
        .get(`/api/ytd/check-url`, {
          params: {
            url: this.url,
          },
        })
        .then((response) => {
          const data = response.data;
          if (data.status) {
            this.downloadReady = true;
            this.dowloadTag = `${process.env.VUE_APP_API}/api/ytd/download-url?URL=${this.url}&downloadFormat=audio-only&title=${data.title}&quality=high`;
            this.dowloadTitle = data.title;
          } else {
            this.errors.push(data.message);
          }
        })
        .catch((error) => console.log("error: ", error));
    },
  },
};
</script> 

<style scoped>
.wd-100 {
  width: 100%;
}
</style>
