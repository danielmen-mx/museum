<template>
  <v-snackbar
    v-model="visible"
    :color="color"
    :timeout="timeout"
    @snackbar-notify="notify($data)"
  >
    <div class="d-flex align-center justify-space-between">
      <span class="body-1">{{message}}</span>
      <v-btn
          dark
          text
          icon
          @click="visible = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
	</v-snackbar>
</template>
<script>
export default {
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
    // how listen event dispatch from form ?
  }
}
</script>