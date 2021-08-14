<template>
  <div class="d-flex featured-container justify-center align-center">
    <div class="pa-16">
      <div>
        <carousel :autoplay="5000" :wrapAround="true">
          <slide v-for="slide in slides" :key="slide">
            <div>
              <div class="d-flex justify-center">
                <v-img
                  :lazy-src="slide.logo"
                  max-height="400"
                  max-width="400"
                  :src="slide.logo"
                >
                </v-img>
              </div>

              <p>{{ slide.name }}</p>
              <p>{{ slide.title }}</p>
              <p class="text-wrap">{{ slide.description }}</p>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import ImageOne from "../../assets/image-one.jpg";
import ImageTwo from "../../assets/image-two.jpg";
import ImageThree from "../../assets/image-three.jpg";
import { Carousel, Slide } from "vue3-carousel";

export default {
  name: "Featured",
  components: {
    carousel: Carousel,
    slide: Slide,
    ImageOne,
    ImageTwo,
    ImageThree,
  },

  data: function () {
    return {
      slides: [
        {
          name: "Kwenkwang",
          title: "Page one",
          description:
            "contents are for testing only. credit to the owner of resources.",
          logo: ImageOne,
        },

        {
          name: "Kwenkwan g2",
          title: "Page one 2",
          description:
            "contents are for testing only. credit to the owner of resources.",
          logo: ImageTwo,
        },

        {
          name: "Kwenkwang 3",
          title: "Page one 3",
          description:
            "contents are for testing only. credit to the owner of resources.",
          logo: ImageThree,
        },

        {
          name: "Kwenkwang 4",
          title: "Page one 4",
          description:
            "contents are for testing only. credit to the owner of resources.",
          logo: ImageTwo,
        },
      ],
    };
  },
};
</script>

<style scoped>
.featured-container {
  height: calc(100vh - 160px) !important;
}
</style>
