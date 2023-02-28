<template>
  <v-card class="pa-4">
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        width="auto"
      >
        <v-card>
          <v-card-title class="text-h5">Hola {{name}}!</v-card-title>
          <v-card-text class="text-center">Su numero de pases es {{tickets}}.</v-card-text>
          <v-card-text class="text-center">Gracias por confirmar.</v-card-text>
          <!-- <span class="text-h3 pt-6 text-center" id="countdown"></span> -->
          <v-card-text class="text-center">Esperamos emocionados ese gran día.</v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row>
      <v-col
        v-for="n in 20"
        :key="n"
        class="d-flex child-flex"
        cols="3"
      >
        <v-img
          :src="`/public/images/caroussel/${n}.jpg`"
          aspect-ratio="1"
          cover
          :id="`index-${n}`"
          class="bg-grey-lighten-2 rounded"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      dialog: true,
      guestId: null,
      name: '',
      tickets: ''
    }
  },
  methods: {
    getGuest() {
      console.log('the id is: ',this.guestId)
      this.name = 'Daniel'
      this.tickets = 2
    }
  },
  computed: {
    startJourney() {
      this.pageScroll
    },
    pageScroll() {
      window.scrollBy(0,1)
      let scrolldealy = setTimeout(this.pageScroll, 30);
    }
  },
  mounted() {
    this.guestId = this.$route.params.id
    this.getGuest()
    this.startJourney
  },
}
</script>