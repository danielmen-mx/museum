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
        Si tus apellidos o nombre son (ejemplo) "de Maria", "De los Santos" etc... escribelo dentro del mismo input.
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
                v-model="form.first_name"
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
                v-model="form.second_name"
                label="Segundo nombre"
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
                v-model="form.first_last_name"
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
                v-model="form.second_last_name"
                label="Segundo apellido"
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
            <v-select
              v-model="form.assistance"
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
        first_name: null,
        second_name: null,
        first_last_name: null,
        second_last_name: null,
        assistance: null,
      },
      options: [
        'Asistiremos',
        'No asistiremos'
      ]
    }
  },
  methods: {
    async submit() {
      try {
        this.loading = true

        const resp = await axios.post('http://localhost:8000/api/guests', this.form) // test request

        this.request()
        this.$emit('snackbarNotify', {type: 'success', message: resp.data.message})
        this.redirect(resp.data.data.id)
      } catch (error) {
        console.log(error)
        this.$emit('snackbarNotify', {type: 'error', message: error.response.data.exception})
      }

      this.loading = false
    },
    redirect(id) {
      setTimeout( () => this.$router.push({ path: `/invitados/${id}`}), 5000);
    },
    required (v) {
      return !!v || 'Field is required'
    },
  },
}
</script>