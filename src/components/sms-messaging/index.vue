<template>
  <v-card>
    <div class="pa-5 fullwith-input">
      <p class="text-h6 mb-3">Send SMS</p>
      <p>
        {{ message.error }}
      </p>
      <p>
        {{ message.success }}
      </p>
      <form @submit.prevent="handleSentSMS">
        <div>
          <label htmlFor="to">To:(+63)</label>
          <input
            v-model="to"
            name="to"
            id="to"
            type="text"
            class="pa-5 text-primary border border-primary rounded-lg mb-10"
            placeholder="9012345678"
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <input
            v-model="body"
            name="body"
            id="body"
            type="text"
            class="pa-5 text-primary border border-primary rounded-lg mb-10"
          />
        </div>
        <v-btn type="submit" color="primary" :disabled="loading">
          Send message
        </v-btn>
      </form>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "SMSMessaging",
  data() {
    return {
      to: "",
      body: "",
      loading: false,
      message: {
        error: "",
        success: "",
      },
    };
  },
  methods: {
    handleSentSMS() {
      this.loading = true;
      this.$http
        .post(`https://vue-resume-api.herokuapp.com/api/sms/messaging/sent`, {
          to: `+63${this.to}`,
          body: this.body,
        })
        .then((response) => {
          if (response.data.success) {
            this.message.success = "Message successfully sent.";
          } else {
            this.message.error =
              "Message unsuccessfull. Unable to send sms to unrigestered number.";
          }
        })
        .catch((error) => {
          this.message.error =
            error.message || "Unable to send sms to unrigestered number.";
          console.log(error);
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<style scoped>
.fullwith-input input {
  width: 100%;
}
</style>