<template>
  <v-card>
    <v-card-title class="text-h6 text-md-h5 text-lg-h4">Invitados confirmados</v-card-title>
    <v-divider></v-divider>
    <v-table
      height="85vh"
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
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.asistencia }}</td>
          <td>{{ item.pases }}</td>
        </tr>
      </tbody>
    </v-table>
    <v-divider></v-divider>
    <div>
      <v-sheet class="d-flex">
        <v-sheet class="ma-2 pa-2 me-auto text-h6 text-md-h5 text-lg-h4">Totales</v-sheet>
        <v-sheet class="ma-2 pa-2 mr-16 text-h6 text-md-h5 text-lg-h4">{{totals}}</v-sheet>
        
      </v-sheet>
    </div>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        totals: 15,
        desserts: [
          {
            name: 'Frozen Yogurt',
            asistencia: 'Si',
            pases: 2
          },
          {
            name: 'Ice cream sandwich',
            asistencia: 'Si',
            pases: 5
          },
          {
            name: 'Eclair',
            asistencia: 'No',
            pases: 7
          },
          {
            name: 'Cupcake',
            asistencia: 'Si',
            pases: 2
          },
          {
            name: 'Gingerbread',
            asistencia: 'No',
            pases: 3
          },
          {
            name: 'Jelly bean',
            asistencia: 'Si',
            pases: 5
          },
          {
            name: 'Lollipop',
            asistencia: 'No',
            pases: 4
          },
          {
            name: 'Honeycomb',
            asistencia: 'Si',
            pases: 4
          },
          {
            name: 'Donut',
            asistencia: 'No',
            pases: 1
          },
          {
            name: 'KitKat',
            asistencia: 'Si',
            pases: 5
          },
          {
            name: 'Frozen Yogurt',
            asistencia: 'Si',
            pases: 2
          },
          {
            name: 'Ice cream sandwich',
            asistencia: 'Si',
            pases: 5
          },
          {
            name: 'Eclair',
            asistencia: 'No',
            pases: 7
          },
          {
            name: 'Cupcake',
            asistencia: 'Si',
            pases: 2
          },
          {
            name: 'Gingerbread',
            asistencia: 'No',
            pases: 3
          },
          {
            name: 'Jelly bean',
            asistencia: 'Si',
            pases: 5
          },
          {
            name: 'Lollipop',
            asistencia: 'No',
            pases: 4
          },
          {
            name: 'Honeycomb',
            asistencia: 'Si',
            pases: 4
          },
          {
            name: 'Donut',
            asistencia: 'No',
            pases: 1
          },
          {
            name: 'KitKat',
            asistencia: 'Si',
            pases: 5
          },
        ],
      }
    },
  }
</script>