<template>
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
        <Form :request="updateDialog" />
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
      dialog: false
    }
  },
  methods: {
    updateDialog() {
      this.dialog = false
    }
  },
}
</script>