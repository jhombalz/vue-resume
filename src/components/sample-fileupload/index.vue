<template>
  <form @submit.prevent="handleUpload" enctype="multipart/form-data">
    <input type="file" name="samplefile" />
    <button type="submit">Upload</button>
  </form>
</template>

<script>
export default {
  name: "FileUploadSample",
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
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>