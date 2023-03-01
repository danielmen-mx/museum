<template>
  <v-card class="ma-2 pt-4 mt-2 elevation-5 bg-blue-darken-3">
    <v-card-title class="text-h6 text-md-h5 text-lg-h4">Invitados confirmados</v-card-title>
    <v-divider></v-divider>
    <v-table
      height="80vh"
      fixed-header
    >
      <thead>
        <tr>
          <th class="text-left">
            Nombre
          </th>
          <th class="text-left">
            Asistencia
          </th>
          <th class="text-left">
            Pases
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="guest in guests"
          :key="guest.name"
        >
          <td>{{ guest.name }}</td>
          <td>{{ guest.asistencia }}</td>
          <td>{{ guest.pases }}</td>
        </tr>
      </tbody>
    </v-table>
    <v-divider></v-divider>
    <div>
      <v-sheet class="d-flex bg-blue-darken-3">
        <v-sheet class="ma-2 pa-2 me-auto text-h6 text-md-h5 text-lg-h4 bg-blue-darken-3">Totales</v-sheet>
        <v-sheet class="ma-2 pa-2 mr-16 text-h6 text-md-h5 text-lg-h4 bg-blue-darken-3">{{totals}}</v-sheet>
        
      </v-sheet>
    </div>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        loading: false,
        totals: 0,
        guests: {},
      }
    },
    computed: {
      async getResponses() {
        try {
          this.loading = true

          // request data from api

          this.calculateTotals
        } catch (error) {
          console.log(error);
        }

        this.loading = true
      },
      calculateTotals() {

      }
    },
    mounted() {
      this.getResponses
    },
  }
</script>