<template>
  <v-card class="ma-2 pt-4 mt-2 elevation-5 bg-blue-darken-2">
    <span class="text-h4 pl-6">{{type}} invitado</span>
    <v-form
      v-model="formComplete"
      @submit.prevent
      class="ma-4"
    >
      <v-text-field
        v-model="form.first_name"
        label="Primer nombre"
        :rules="[required]"
        clearable
      ></v-text-field>

      <v-text-field
        v-model="form.second_name"
        label="Segundo nombre"
        clearable
      ></v-text-field>

      <v-text-field
        v-model="form.first_last_name"
        label="Primer apellido"
        :rules="[required]"
        clearable
      ></v-text-field>

      <v-text-field
        v-model="form.second_last_name"
        label="Segundo apellido"
        clearable
      ></v-text-field>

      <v-select
        v-model="form.tickets"
        :items="items"
        label="Entradas"
        :rules="[required]"
        clearable
      ></v-select>

      <v-btn
        :disabled="!formComplete"
        variant="flat"
        type="submit"
        color="success"
        @click="submit"
        class="mr-1"
      >
        <span class="text-subtitle-2">{{type}}</span>
      </v-btn>

      <v-btn
        variant="flat"
        small
        color="warning"
        @click="closeAll"
        class="ml-1"
      >
        <span class="text-subtitle-2">Cancelar</span>
      </v-btn>
    </v-form>
  </v-card>
</template>
<script>
import axios from 'axios'

export default {
  props: {
    guestId: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      formComplete: false,
      loading: false,
      items: ['1', '2', '3', '4', '5', '6'],
      type: 'Crear',
      action: null,
      form: {
        first_name: null,
        second_name: null,
        first_last_name: null,
        second_last_name: null,
        tickets: 0,
      },
    }
  },
  methods: {
    async submit() {
      try {
        this.loading = true

        let resp = null
        if (this.guestId) {
          resp = await axios.put("https://apishelter.webunderdevelopment.com/api/guest-lists/" + this.guestId, this.form)
          this.action = 'update'
        } else {
          resp = await axios.post("https://apishelter.webunderdevelopment.com/api/guest-lists", this.form)
          this.action = 'create'
        }

        this.$emit('snackbarNotify', {type: 'success', message: resp.data.message, action: this.action})
      } catch (error) {
        console.log(error)
        this.$emit('snackbarNotify', {type: 'error', message: error.response.data.exception})
      }

      this.loading = false
    },
    async getItem() {
      try {
        this.loading = true

        const resp = await axios.get("https://apishelter.webunderdevelopment.com/api/guest-lists/" + this.guestId)
        this.form = resp.data.data

        this.type = 'Editar'
      } catch (error) {
        console.log(error)
      }

      this.loading = false
    },
    closeAll() {
      this.$emit('closeAll')
    },
    required (v) {
      return !!v || 'Campo requerido'
    },
  },
  mounted() {
    if (this.guestId) {
      this.getItem()
    } 
  },
}
</script>