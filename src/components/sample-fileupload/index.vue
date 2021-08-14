<template>
  <div>
    <v-img
      :lazy-src="uploadedImage"
      max-height="400"
      max-width="400"
      :src="uploadedImage"
    >
    </v-img>
  </div>
  <br />
  <br />
  <form @submit.prevent="handleUpload" enctype="multipart/form-data">
    <input type="file" name="samplefile" />
    <button type="submit">Upload</button>
  </form>
</template>

<script>
export default {
  name: "FileUploadSample",
  data() {
    return {
      uploadedImage:
        "https://vue-resume-api.herokuapp.com/attachments/968cf50be9ad28bc7185acee7e06ee2e",
    };
  },
  methods: {
    handleUpload(event) {
      let formdata = new FormData(event.target);
      this.$http
        .post(
          `https://vue-resume-api.herokuapp.com/api/file/upload-sample`,
          formdata
        )
        .then((response) => {
          console.log(response.data);
          this.uploadedImage = `https://vue-resume-api.herokuapp.com/attachments/${response.data.requestParams.filename}`;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>