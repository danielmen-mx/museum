<template>
  <Main />
  <InstructionModal />
  <Verse />
  <Details />
  <Moments />
  <Invitation />
  <Plan />
  <Map />
  <Advice class="mt-10" />
  <Answer class="mb-10" />
  <!-- <Form :request="openForm"/> -->
  <Footer />
</template>
<script>
import Main from "@/components/Main.vue";
import InstructionModal from "@/components/InstructionModal.vue";
import Verse from "@/components/Verse.vue";
import Details from "@/components/ButtonDetails.vue";
import Moments from "@/components/Moments.vue";
import Invitation from "@/components/Invitation.vue";
import Plan from "@/components/Plan.vue";
import Map from "@/components/Map.vue";
import Advice from "@/components/Advice.vue";
import Answer from "@/components/Answer.vue";
import Footer from "@/components/Footer.vue";
import Form from "@/components/Form.vue";

export default {
  components: {
    Main,
    InstructionModal,
    Verse,
    Details,
    Moments,
    Invitation,
    Plan,
    Map,
    Advice,
    Answer,
    Form,
    Footer
  },
  data() {
    return {
      openForm: true
    }
  },
}
</script>
<style scoped>
>>> .main-title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      background-color: black;
      opacity: 0.7;
      color: #FDFDBD;
    }

>>> .second-title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      color: white;
    }

>>> .main-color {
      background-color: #ffdddd;
    }
</style>