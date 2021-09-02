
<template>
  <div class="sms-messaging">
    <smsmessaging />
  </div>
</template>

<script>
// @ is an alias to /src
import SMSMessaging from "../components/sms-messaging/index.vue";
export default {
  components: {
    smsmessaging: SMSMessaging,
  },
};
</script>
