<template>
  <v-container>
    <v-row>
      <v-col sm="12">
        <div>
          <v-row>
            <v-col cols="12" sm="12" md="5" order-md="1" order-lg="1" order="2">
              <div
                class="
                  d-flex
                  justify-center
                  align-center
                  with-top-margin
                  con-height
                "
              >
                <div class="text-center">
                  <h1>Jhomar Supero Baluca</h1>
                  <h4>Junior Web Developer</h4>
                  <h5>Information Technology</h5>
                </div>
              </div>
            </v-col>

            <v-col cols="12" sm="12" md="7" order-md="2" order="1">
              <div class="d-flex justify-center">
                <v-img
                  lazy-src="@/assets/me.png"
                  max-height="400"
                  max-width="400"
                  class="img-rounded"
                  src="@/assets/me.png"
                >
                </v-img>
              </div>
            </v-col>
          </v-row>
        </div>

        <v-row>
          <v-col cols="12">
            <div>
              <h1>About Myself</h1>
              <p class="text-justify">
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
              <p class="text-right mt-2">-- Partially cloned.</p>
            </div>

            <div>
              <h1>Programming Background</h1>

              <p class="text-justify">
                CSS - CSS / CSS 3 / Bootstrap / Material UI
              </p>

              <p class="text-justify">
                HTMl - HTML / HTML5
              </p>

              <p class="text-justify">
                React - ReactJS / Native [ current ]
              </p>

              <p class="text-justify">
                PHP - laravel and pure php
              </p>

              <p class="text-justify">
                NODE - as api only.
              </p> 

              <p class="text-justify">
                VUE - beginner
              </p> 

              <p class="text-justify">
                DATABASE -  mysql/mongodb/postgsql
              </p> 

              <p class="text-justify mt-5">
                  I'm a web developer since 2012, I started with simple dynamic website built with html and css. After a while I started to use php and javacript for almost every activity then...
              </p>

              <p class="text-right mt-2">-- Autodidacticism</p>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutComponent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.con-height {
  height: "100%";
}
.img-rounded {
  border-radius: "50%";
}

@media only screen and (min-width: 960px) {
  .with-top-margin {
    margin-top: 30%;
  }
}
</style>
