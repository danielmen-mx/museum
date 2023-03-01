<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
        color="blue-darken-4"
      >
        <v-list>
          <v-list-item
            prepend-avatar="/public/images/bar.jpg"
            title="Daniel & Jhovana"
            @click="changeLayout()"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-table-large" title="Tabla de confirmados" value="shared" @click="changeLayout('response')"></v-list-item>
          <v-list-item prepend-icon="mdi-table-edit" title="Tabla de invitados" value="myfiles" @click="changeLayout('table')"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Añadir invitado" value="shared" @click="changeLayout('edit')"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100vh">
        <Responses v-if="response" />
        <Table v-if="table" @snackbarNotify="notify" @createEdit="openCreateEdit" />
        <Edit v-if="edit" :guest-id="guestId" @snackbarNotify="notify" @closeAll="changeLayout" />
        <Span v-if="response == false && table == false && edit == false" class="text-h3 "/>
      </v-main>
    </v-layout>
    <v-snackbar
      v-model="visible"
      :color="color"
      :timeout="timeout"
    >
      {{message}}
      <template v-slot:actions>
        <v-btn
            @click="visible = false"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>
<script>
import Table from "@/components/Table.vue"
import Edit from "@/components/CreateEdit.vue"
import Responses from "@/components/ResponsesTable.vue"
import Snackbar from "@/components/Snackbar.vue"
import Span from "@/components/Span.vue"

export default {
  components: {
    Table,
    Edit,
    Responses,
    Snackbar,
    Span
  },
  data() {
    return {
      table: false,
      edit: false,
      response: false,
      guestId: null,
      visible: false,
      message: '',
      color: '',
      timeout: 10000
    }
  },
  methods: {
    changeLayout(component = null) {
      this.table = component == 'table' ? true : false
      this.edit = component == 'edit' ? true : false
      this.response = component == 'response' ? true : false
    },
    openCreateEdit(data = null) {
      this.guestId = data ? data.guestId : data
      this.changeLayout('edit')
    },
    notify(payload){
      this.visible = false;
      this.color = payload.type;
      this.message = payload.message;
      this.$nextTick(() => {
        this.visible = true;
      })

      this.changeLayout('table')
    }
  },
  mounted() {
    
  },
}
</script>