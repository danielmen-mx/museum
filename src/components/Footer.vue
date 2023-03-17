<template>
  <!-- dialog -->
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      activator="parent"
      width="300"
      height="170"
    >
      <v-card>
        <v-text-field
          :disabled="fail"
          v-model="secret"
          class="pa-2"
          label="Key"
          :hint="hint"
          type="password"
        >
        </v-text-field>
        <v-card-actions>
          <v-btn
            :disabled="fail"
            :color="btn_color"
            block
            @click="handleSecretKey()"
          >
            {{btn_title}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

  <div class="main-color d-flex flex-column">
    <div class="d-flex w-100 align-center px-4 mb-1">
      <div>
        <v-btn
          color="black"
          variant="plain"
          @click="redirect()"
        >
          Siguenos!
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
      ></v-btn>
    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Daniel & Jhovana</strong>
    </div>
  </div>
</template>
<script>
  export default {
    data: () => ({
      secret: '',
      hint: 'Enter your secret-key to access to the manager',
      btn_title: 'send',
      btn_color: 'success',
      fail: false,
      dialog: false,
      icons: [
        'mdi-facebook',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
    methods: {
      redirect() {
        this.dialog = true
      },
      handleSecretKey() {
        if (this.secret == '') return

        if (this.secret.includes('secret-table')) {
          this.dialog = false

          setTimeout(() => {
            this.$router.push({ path: '/admin'})
          }, 3000);
        } else {
          this.fail = true
          this.btn_color = 'red'
          this.btn_title = "You're not the admin"
          setTimeout(() => {
            this.secret = ''
            this.dialog = false
            this.fail = false
            this.btn_color = 'success'
            this.btn_title = "send"
          }, 2000);
        }
      }
    },
  }
</script>