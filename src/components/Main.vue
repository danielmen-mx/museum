<template>
  <div>
    <v-img
      src="/images/main-img.jpg"
      max-height="100vh"
      cover
      class="bg-grey-lighten-2"
    >
      <v-card class="main-title">
        <v-card-text class="text-center text-h5 pa-6">
          <span class="font-italic text-h2">Daniel & Jhovana</span><br><br>
          <span class="text-h4">¡Nos casamos!</span><br><br>
          <Countdown />
        </v-card-text>
      </v-card>
    </v-img>
  </div>
</template>
<script>
import Countdown from "../components/Countdown.vue";

export default {
  components: {
    Countdown
  }
}

</script>