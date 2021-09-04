<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <div>
          <p class="text-h4">Youtube Downloader</p>
        </div>

        <div class="my-3">
          <span class="text-disabled text-caption"> YOUTUBE Search: </span>
          <input
            class="border border-primary wd-100 pa-3 rounded text-primary"
            v-model="url"
            placeholder="Search or https://www.youtube.com/watch?v=dUgNvsJnw2E"
          />

          <div class="d-flex justify-end">
            <v-btn
              color="primary mt-2"
              @click="searchVideo"
              :disabled="loading.search"
            >
              <span v-if="loading.search"> Search... </span>
              <span v-else> Search </span>
            </v-btn>
          </div>
        </div>

        <div class="mt-10">
          <p v-for="(error, key) in errors" :key="key" class="text-error">
            {{ error }}
          </p>

          <div v-if="searchData">
            <div
              class="my-7"
              v-for="(item, key) in searchData.items"
              :key="key"
            >
              <v-card>
                <v-row>
                  <v-col cols="12" sm="4" md="3" lg="2">
                    <v-img
                      :lazy-src="item.snippet.thumbnails.default.url"
                      :src="item.snippet.thumbnails.default.url"
                    >
                    </v-img>
                  </v-col>
                  <v-col cols="12" sm="8" md="9" lg="10">
                    <div class="pa-2">
                      <p class="text-subtitle-1">{{ item.snippet.title }}</p>
                      <p class="text-body-2 text-disabled">
                        {{ item.snippet.description }}
                      </p>
                    </div>

                    <!-- trigger -->
                    <a
                      ref="musicTag"
                      target="_blank"
                      :href="dowloadTag"
                      download
                      class="text-subtitle-2"
                    />
                    <div class="pa-2">
                      <v-btn
                        variant="text"
                        color="secondary"
                        @click="handleDownloadMusic($event, item.id.videoId)"
                        :disabled="
                          item.id.videoId === downloadVideoId && loading.mp3
                        "
                      >
                        <span
                          v-if="
                            item.id.videoId === downloadVideoId && loading.mp3
                          "
                        >
                          Generate MP3 ...
                        </span>
                        <span v-else> Generate MP3 </span>
                      </v-btn>

                      <v-btn
                        variant="text"
                        color="primary"
                        @click="handleDownloadVideo($event, item.id.videoId)"
                        :disabled="
                          item.id.videoId === downloadVideoId && loading.video
                        "
                      >
                        <span
                          v-if="
                            item.id.videoId === downloadVideoId && loading.video
                          "
                        >
                          Generate Video ...
                        </span>
                        <span v-else> Generate Video </span>
                      </v-btn>

                      <div
                        class="pa-2"
                        v-bind:style="
                          item.id.videoId === downloadVideoId && downloadReady
                            ? 'display: block'
                            : 'display: none'
                        "
                      >
                        <v-btn
                          color="primary"
                          variant="contained"
                          @click="handleDownloadFile"
                        >
                          {{ downloadSize }} MB - DOWNLOAD
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </div>
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
    searchData: null,
    downloadSize: 0,
    downloadVideoId: null,
    loading: {
      search: false,
      mp3: false,
      video: false,
    },
  }),

  methods: {
    searchVideo: function () {
      this.errors = [];
      this.searchData = null;
      if (this.url) {
        this.loading.search = true;
        this.$http
          .get(`/api/ytd/search`, {
            params: {
              search: this.url,
            },
          })
          .then((response) => {
            const result = response.data;
            this.searchData = result.data;
          })
          .catch((error) => console.log("error: ", error))
          .finally(() => (this.loading.search = false));
      } else {
        this.errors.push("Search field is required.");
      }
    },

    handleDownloadMusic: function (event, videoId) {
      this.dowloadTag = "";
      this.downloadReady = false;

      this.downloadVideoId = videoId;

      var xuri = `https://www.youtube.com/watch?v=${videoId}`;
      this.loading.mp3 = true;

      this.$http
        .get(`/api/ytd/check-url`, {
          params: {
            url: xuri,
            type: "music",
          },
        })
        .then((response) => {
          const data = response.data;
          if (data.status) {
            this.dowloadTag = `${process.env.VUE_APP_API}/api/ytd/download-url-mp3?URL=${xuri}&downloadFormat=audioonly&title=${data.title}&quality=highestaudio`;

            this.downloadReady = true;

            this.downloadSize = (
              Math.round(parseInt(data.audioFormats[0].contentLength) / 1000) /
              1000
            ).toFixed(2);
          } else {
            this.errors.push(data.message);
          }
        })
        .catch((error) => console.log("error: ", error))
        .finally(() => (this.loading.mp3 = false));
    },

    handleDownloadVideo: function (event, videoId) {
      this.dowloadTag = "";
      this.downloadReady = false;

      var xuri = `https://www.youtube.com/watch?v=${videoId}`;
      this.downloadVideoId = videoId;
      this.loading.video = true;

      this.$http
        .get(`/api/ytd/check-url`, {
          params: {
            url: xuri,
            type: "video",
          },
        })
        .then((response) => {
          const data = response.data;
          if (data.status) {
            this.dowloadTag = `${process.env.VUE_APP_API}/api/ytd/download-url-video?URL=${xuri}&downloadFormat=audioandvideo&title=${data.title}&quality=highestvideo`;
            this.downloadReady = true;

            this.downloadSize = (
              Math.round(parseInt(data.audioFormats[0].contentLength) / 1000) /
              1000
            ).toFixed(2);
          } else {
            this.errors.push(data.message);
          }
        })
        .catch((error) => console.log("error: ", error))
        .finally(() => (this.loading.video = false));
    },

    handleDownloadFile: function () {
      console.log("this.$refs.musicTag.href:", this.dowloadTag);
      this.$refs.musicTag.click();
    },
  },
};
</script> 

<style scoped>
.wd-100 {
  width: 100%;
}
</style>
