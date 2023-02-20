<template>
  <!-- main picture -->
  <div>
    <v-img
      src="/public/images/main-img.jpg"
      max-height="100vh"
      cover
      class="bg-grey-lighten-2"
    >
      <v-card class="main-title">
        <v-card-text class="text-center text-h5 pa-6">
          <span class="font-italic text-h2">Daniel & Jhovana</span><br><br>
          <span class="text-h4">¡Nos casamos!</span><br><br>
          <span class="text-h3 pt-6" id="countdown"></span>
        </v-card-text>
      </v-card>
    </v-img>
  </div>

  <!-- instructions modal -->
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
            @click="dialog = false"
            class="pb-6"
          >Comencemos</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

  <!-- verse && grettings -->
  <div class="text-center py-10">
    <span
      class="text-h4 font-italic text-grey-darken-2 pa-2"
    >
      "Asi que, no son ya más dos, si no una sola carne; por tanto, lo que Dios<br>ha unido no lo separe el hombre" - Mateo 19:6
    </span>
    <v-card class="main-color elevation-0">
      <v-img
        src="/public/images/abrazo.jpg"
        max-height="6 0vh"
        cover
        class="ma-12 rounded"
      >
      </v-img>
    </v-card>
    <span
      class="text-h5 font-italic text-grey-darken-2 pa-6"
    >
      Hola familia y/o amigos les enviamos un gran saludo y esperamos en el Señor<br> que se encuentren bien.
      Nosotros estamos muy contentos y emocionados ya que este año cumpliremos<br> la promesa que nos hicimos un 31 de Diciembre Jhovana y yo. <br>Han sido meses de mucha espera pero el momento ha llegado, Gracias a Dios.<br>
      Tenemos la dicha de invitarles este 30 de Diciembre a que nos acompañes a la celebración de nuestra boda,<br> de parte de Jhova & yo esperamos que puedas asistir.
    </span>
  </div>

  <!-- button to details -->
  <v-btn
    align="center"
  >
    Detalle de la Boda
  </v-btn>
</template>
<script>
  export default {
    data () {
      return {
        dialog: true,
      }
    },
  }

  var countDownDate = new Date("Feb 28, 2023 19:00:00").getTime()

  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "Gracias por su asistencia!";
    }
  }, 1000);
</script>
<style>
  .main-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: black;
    opacity: 0.7;
    color: #FDFDBD;
  }

  .main-color {
    background-color: #ffdddd;
  }
</style>