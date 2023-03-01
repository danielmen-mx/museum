<template>
  <v-card class="ma-2 pt-4 mt-2 elevation-5 bg-blue-darken-3">
    <div class="d-flex justify-space-between bg-blue-darken-3">
      <v-card-title
        class="text-h6 text-md-h5 text-lg-h4 bg-blue-darken-3"
      >
        Lista de invitados
      </v-card-title>
      <v-btn 
        class="mr-4"
        x-small
        color="success"
        @click="create()"
      >
        Crear
      </v-btn>
    </div>
    <v-divider></v-divider>
    <v-table
      height="80vh"
      fixed-header
    >
      <thead>
        <tr>
          <th class="text-left text-h6">
            Nombre
          </th>
          <th class="text-left text-h6">
            Pases
          </th>
          <th class="text-right text-h6">
            <span class="mr-10">Opciones</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="guest in guests"
          :key="guest.name"
        >
          <td>
            <span class="text-body-1">{{ guest.name }}</span>
          </td>
          <td>
            <v-chip class="text-body-1">{{ guest.tickets }}</v-chip>
          </td>
          <td class="text-right">
            <v-btn
              variant="flat"
              color="blue"
              class="mr-1"
              @click="edit(guest.id)"
            >
              <span class="text-subtitle-2">Editar</span>
            </v-btn>
            <v-btn
              variant="flat"
              color="red"
              class="ml-1"
              @click=""
            >
              <span class="text-subtitle-2">Eliminar</span>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    <v-divider></v-divider>
    <div>
      <v-sheet class="d-flex bg-blue-darken-3">
        <v-sheet class="ma-2 pa-2 me-auto text-h6 text-md-h5 text-lg-h4 bg-blue-darken-3">Boda Daniel & Jhovana</v-sheet>
        <v-sheet class="ma-2 pa-2 mr-16 text-h6 text-md-h5 text-lg-h4 bg-blue-darken-3"></v-sheet>
      </v-sheet>
    </div>
  </v-card>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      loading: false,
      guests: {},
    }
  },
  methods: {
    create() {
      this.$emit('createEdit', {guestId: null})
    },
    edit(id) {
      this.$emit('createEdit', {guestId: id})
    },
    async remove(id) {
      try {
        this.loading = true

        const resp = await axios.get('http://localhost:8000/api/guest-lists')
      } catch (error) {
        console.log(error);
      }

      this.loading = false
    }
  },
  computed: {
    async getGuestList() {
      try {
        this.loading = true

        const resp = await axios.get('http://localhost:8000/api/guest-lists')
        this.guests = resp.data.data

      } catch (error) {
        console.log(error);
      }

      this.loading = false
    }
  },
  mounted() {
    this.getGuestList
  },
}
</script>