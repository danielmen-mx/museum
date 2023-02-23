<template>
  <v-card class="pa-4">
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        width="auto"
      >
        <v-card>
          <v-card-title class="text-h5">Hola inserte-nombre!</v-card-title>
          <v-card-text class="text-center">Su numero de pases es inserte-numero.</v-card-text>
          <v-card-text class="text-center">Gracias por confirmar.</v-card-text>
          <!-- <span class="text-h3 pt-6 text-center" id="countdown"></span> -->
          <v-card-text class="text-center">Esperamos emocionados ese gran día.</v-card-text>
          <!-- <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green-darken-1"
              variant="text"
              @click="dialog = false"
            >
              Entendido
            </v-btn>
          </v-card-actions> -->
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
      images: [

      ],
    }
  },
}
</script>