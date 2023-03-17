<template>
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
      icons: [
        'mdi-facebook',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
    methods: {
      redirect() {
        this.$router.push({ path: '/admin'})
      }
    },
  }
</script>