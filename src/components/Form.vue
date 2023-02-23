<template>
  <v-card
    color=""
    class="elevation-0"
  >
    <v-card-text class="text-center">
      <span class="text-h2">
        Podras asistir?<br>
      </span>
      <span class="text-subtitle-1 grey-lighten-4">
        Ingresa tus nombres y apellidos y selecciona tu asistencia.<br>
      </span>
      <span class="text-subtitle-2 grey-lighten-4">
        Si tus apellidos son (ejemplo) "de la Cruz", "De los Santos" etc... escribelo dentro del mismo input.
      </span>
    </v-card-text>

    <v-sheet rounded width="800" class="mx-auto elevation-0">
      <v-form
        v-model="formComplete"
        @submit.prevent
      >
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                v-model="form.firstName"
                label="Primer nombre"
                :rules="[required]"
                clearable
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                v-model="form.secondName"
                label="Segundo nombre"
                :rules="[required]"
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                v-model="form.firstLastName"
                label="Primer apellido"
                :rules="[required]"
                clearable
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                v-model="form.secondLastName"
                label="Segundo apellido"
                :rules="[required]"
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
            <v-select
              v-model="form.option"
              :items="options"
              label="Asistira?"
              variant="solo"
              :rules="[required]"
            ></v-select>
        </v-container>
        <v-btn
          :disabled="!formComplete"
          :loading="loading"
          type="submit"
          block
          class="mt-2"
          variant="elevated"
          color="success"
          @click="submit"
        >
          Responder
        </v-btn>
      </v-form>
    </v-sheet>
  </v-card>
</template>
<script>
import axios from 'axios'

export default {
  props: {
    request: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      mock: false,
      loading: false,
      formComplete: false,
      form: {
        firstName: '',
        secondName: '',
        firstLastName: '',
        secondLastName: '',
        option: '',
      },
      options: [
        'Asistiremos',
        'No asistiremos'
      ]
    }
  },
  methods: {
    async submit() {  // complete with API when you finish the controller in laravel
      try {
        this.loading = true

        const resp = axios.get('https://travel-dummy-api.netlify.app/brazil.json') // dummy request

        if (resp) {
          this.request()
          this.redirect()
        }
      } catch (error) {
        console.log(error)
      }

      this.loading = false
    },
    redirect() {
      this.$router.push({ path: '/invitados'})
    },
    required (v) {
      return !!v || 'Field is required'
    },
  },
}
</script>