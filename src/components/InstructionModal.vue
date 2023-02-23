<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card>
        <v-card-text class="text-center px-10">
          <h1 class="text-red-lighten-1">¡Bienvenido!</h1><br>
          <span class="text-h6">Esta página es para confirmar tu asistencia a<br> la boda.</span><br>
          <span class="text-h6">Por favor siga las intrucciones al final de la<br> pagina para registrarse correctamente.</span><br>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="success"
            block
            variant="elevated"
            @click="dialog = false"
            class="mt-2 elevation-6"
          >Comencemos</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialog: true,
    }
  },
}
</script>