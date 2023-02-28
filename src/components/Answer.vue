<template>
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

  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="success"
          size="large"
          v-bind="props"
        >
          Responder
        </v-btn>
      </template>

      <v-card class="pa-10">
        <Form :request="updateDialog" @snackbarNotify="notify" />
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import Form from "@/components/Form.vue";

export default {
  components: {
    Form
  },
  data() {
    return {
      dialog: false,
      visible: false,
      message: '',
      color: '',
      timeout: 10000
    }
  },
  methods: {
    updateDialog() {
      this.dialog = false
    },
    notify(payload){
      this.visible = false;
      this.color = payload.type;
      this.message = payload.message;
      this.$nextTick(() => {
        this.visible = true;
      })
    }
  },
}
</script>