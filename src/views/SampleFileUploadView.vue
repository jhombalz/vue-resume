<template>
  <div class="sample-file-upload">
    <SampleFileUpload />
  </div>
</template>

<script>
// @ is an alias to /src
import SampleFileUpload from "../components/sample-fileupload/index.vue";
export default {
  name: "SampleFileUploadView",
  components: {
    SampleFileUpload,
  },
};
</script>
