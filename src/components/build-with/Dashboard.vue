<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <div class="pa-16">
            <h1>Welcome to my page</h1>
            <h4>This is page is for VueJS practice only.</h4>
            <h5>
              contents are for testing only. credit to the owner of resources.
            </h5>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12">
        <div>
          <h2>Build with:</h2>
        </div>
      </v-col>

      <v-col
        cols="12"
        sm="4"
        v-for="resource in resources"
        v-bind:key="resource.name"
      >
        <v-card elevation="5" shaped>
          <div class="pa-10">
            <v-img height="250" v-bind:src="resource.icon"></v-img>
            <v-card-title> {{ resource.name }} </v-card-title>
            <v-card-text>
              <p class="text-truncate">
                {{ resource.description }}
              </p>
            </v-card-text>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12">
        <div class="text-center mt-5">
          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_blank"
          >
            <input
              type="hidden"
              name="hosted_button_id"
              value="6GHF6G7X47B5J"
            />

            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
            />

            <img
              alt=""
              border="0"
              src="https://www.paypal.com/en_PH/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",

  data() {
    return {
      resources: [
        {
          name: "Vue JS",
          path: "sample.com",
          icon: "https://vuejs.org/images/logo.svg",
          description:
            "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.",
        },
        {
          name: "Vue Router",
          path: "sample.com",
          icon: "https://vuejs.org/images/logo.svg",
          description: "Vue Router is the official router for Vue.js",
        },
        {
          name: "Vuetify",
          path: "sample.com",
          icon: "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light.svg",
          description:
            "Vuetify is a Vue UI Library with beautifully handcrafted Material Components",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 3em;
}
</style>
