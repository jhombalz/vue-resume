<template>
  <v-card>
    <div class="pa-5 fullwith-input">
      <p class="text-h6 mb-3">Send SMS</p>
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
        <v-btn type="submit" color="primary"> Send message </v-btn>
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
    };
  },
  methods: {
    handleSentSMS() {
      this.$http
        .post(`https://vue-resume-api.herokuapp.com/api/sms/messaging/sent`, {
          to: this.to,
          body: `+639${this.body}`,
        })
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

<style scoped>
.fullwith-input input {
  width: 100%;
}
</style>