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
</template>
<script>
export default {
  props: {
    execution: {
      type: Boolean
    }
  },
  data: () => ({
    visible: false,
    message: '',
    color: '',
    timeout: 10000
  }),
  methods:{
    notify(payload){
      this.visible = false;
      this.color = payload.type;
      this.message = payload.message;
      if(payload.hasOwnProperty('persistent') && payload.persistent){
        this.timeout = 0;
      }
      this.$nextTick(() => {
        this.visible = true;
      })
    }
  },
  mounted(){
    if (this.execution == true) notify()
  }
}
</script>