<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6"> </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <div class="pa-5">
            <p class="text-h6 text-primary">Registration</p>
            <p class="text-disabled">
              Provide your information to explore my app.
            </p>

            <div class="my-3">
              <p class="text-error" v-for="(error, i) in errors" :key="i">
                &bull; {{ error }}
              </p>
            </div>

            <div class="my-3">
              <span class="text-disabled"> Fullname: </span>
              <input
                class="border border-primary wd-100 pa-3 rounded text-primary"
                v-model="data.fullname"
              />
            </div>

            <div class="my-3">
              <span class="text-disabled"> Address: </span>
              <input
                class="border border-primary wd-100 pa-3 rounded text-primary"
                v-model="data.address"
              />
            </div>

            <div class="my-3">
              <span class="text-disabled"> Mobile: </span>
              <input
                class="border border-primary wd-100 pa-3 rounded text-primary"
                v-model="data.mobile"
              />
            </div>

            <div class="my-3">
              <span class="text-disabled"> Email: </span>
              <input
                class="border border-primary wd-100 pa-3 rounded text-primary"
                v-model="data.email"
              />
            </div>

            <div class="my-3">
              <span class="text-disabled"> Password: </span>
              <input
                type="password"
                class="border border-primary wd-100 pa-3 rounded text-primary"
                v-model="data.password"
              />
            </div>

            <div class="my-3">
              <span class="text-disabled"> Password Confirm: </span>
              <input
                type="password"
                class="border border-primary wd-100 pa-3 rounded text-primary"
                v-model="data.password_confirm"
              />
            </div>

            <div class="my-3">
              <v-btn
                color="primary"
                variant="contained"
                type="submit"
                @click="handleRegistration"
              >
                <v-icon left>mdi-account-plus-outline</v-icon>
                Register
              </v-btn>
              <v-btn
                color="default"
                type="reset"
                variant="contained"
                class="ml-3"
              >
                Clear
              </v-btn>
            </div>

            <div class="my-3">
              <p class="text-center">
                Already have an account?
                <router-link to="/" class="text-secondary"> Login </router-link>
              </p>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import router from "../../router";
export default {
  name: "Registration",
  data: () => ({
    errors: [],
    data: {
      fullname: "",
      address: "",
      email: "",
      mobile: "",
      password: "",
      password_confirm: "",
    },
  }),

  methods: {
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    handleRegistration() {
      this.errors = [];

      if (!this.data.fullname.trim()) {
        this.errors.push("Fullname is a required field.");
      }

      if (!this.data.address.trim()) {
        this.errors.push("Address is a required field.");
      }

      if (!this.data.email.trim()) {
        this.errors.push("Email is a required field.");
      }

      if (!this.data.password.trim()) {
        this.errors.push("Password is a required field.");
      }

      if (!this.data.password_confirm.trim()) {
        this.errors.push("Password confirm is a required field.");
      }

      if (!this.validEmail(this.data.email)) {
        this.errors.push("Email is invalid.");
      }

      if (this.data.password.trim() !== this.data.password_confirm.trim()) {
        this.errors.push("Password is not match.");
      }

      if (this.errors.length > 0) {
      } else {
        this.$http
          .post(`/api/registration/process-registration`, this.data)
          .then((response) => {
            const data = response.data;
            console.log(data);
            if (data.status) {
              if (data.message === "email-exist") {
                this.errors.push("Email address is not available.");
              }

              if (data.message === "success") {
                this.errors.push(
                  "Registration successfuly. Redirect to login."
                );
                setTimeout(() => {
                  router.push("/");
                }, 5000);
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style scoped>
.wd-100 {
  width: 100%;
}
</style>