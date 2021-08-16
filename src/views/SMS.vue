
<template>
  <div class="sms-messaging">
    <smsmessaging />
  </div>
</template>

<script>
// @ is an alias to /src
import SMSMessaging from "../components/sms-messaging/index.vue";
export default {
  name: "SMS",
  components: {
    smsmessaging: SMSMessaging,
  },
};
</script>
