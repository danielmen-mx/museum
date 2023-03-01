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
          <th class="text-left text-h6">
            Nombre
          </th>
          <th class="text-left text-h6">
            Asistencia
          </th>
          <th class="text-right text-h6">
            Pases
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="guest in responses"
          :key="guest.name"
        >
          <td>
            <span class="text-body-1">{{ guest.name }}</span>
          </td>
          <td>
            <v-chip dense small color="green" class="text-body-1" v-if="guest.assistance == true">
              Asistirá
            </v-chip>
            <v-chip dense small color="red" class="text-body-1" v-else>
              No Asistirá
            </v-chip>
          </td>
          <td class="text-right pr-10">
            <span class="text-body-1">{{ guest.tickets }}</span>
          </td>
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
import axios from 'axios'

export default {
  data () {
    return {
      loading: false,
      totals: 0,
      responses: {},
    }
  },
  computed: {
    async getResponses() {
      try {
        this.loading = true

        const resp = await axios.get('http://localhost:8000/api/responses')
        this.responses = resp.data.data

        this.calculateTotals
      } catch (error) {
        console.log(error);
      }

      this.loading = true
    },
    calculateTotals() {
      this.responses.forEach(response => {
        if (response.assistance == true) {
          this.totals += response.tickets
        }
      });
    }
  },
  mounted() {
    this.getResponses
  },
}
</script>