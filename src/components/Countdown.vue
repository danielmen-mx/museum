<template>
  <span class="text-h3 pt-6" id="countdown"></span>
</template>
<script>
export default {
  data() {
    return {
      finishDate: "Feb 23, 2023 00:00:00",
      interval: null
    }
  },
  methods: {
    setCountdown() {
      const countDownDate = new Date(this.finishDate).getTime();
      this.interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (document.getElementById("countdown")) {
          document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

          if (distance < 0) {
            clearInterval(this.interval);
            document.getElementById("countdown").innerHTML = "Gracias por acompañarnos!";
          }
        }

      }, 1000);
    },
  },
  watch: {
    '$route.params': {
        handler: function(params) {
          let path = this.$route.path;

          if (path == '/') {
            this.setCountdown()
          }
        },
        deep: true,
        immediate: true
      }
  },
}
</script>