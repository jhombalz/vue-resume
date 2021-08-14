<template>
  <div class="d-flex login-container justify-center align-center">
    <v-card elevation="2">
      <div class="pa-4 my-5 px-10 login-form">
        <p class="text-primary text-h5 font-weight-medium">Login</p>
        <input
          type="text"
          class="pa-5 text-primary border border-primary rounded-lg my-7"
          placeholder="Email Address"
        />

        <input
          type="text"
          class="pa-5 text-primary border border-primary rounded-lg mb-10"
          placeholder="Password"
        />

        <div class="mb-10">
          <v-btn color="primary" elevation="2" block size="x-large">
            Login
          </v-btn>
        </div>

        <div>
          <p class="text-center">
            No account yet? <router-link to="/">Click here.</router-link>
          </p>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
.login-container {
  height: calc(100vh - 160px) !important;
}
.login-form {
  height: 450px;
}
input {
  width: 100%;
}
</style>
