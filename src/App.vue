<template>
  <div id="app">
    <Header />
    <Home />
    <ModalView v-if="isOpenModal" />
    <Footer />
  </div>
</template>

<style lang="scss" src="@/styles/index.scss"></style>
<script>
import Header from "./layout/Header";
import Home from "./views/Home";
import Footer from "./layout/Footer";
import ModalView from "./components/common/ModalView";
import { mapGetters } from "vuex";
export default {
  components: { ModalView, Footer, Home, Header },
  computed: {
    ...mapGetters({
      isOpenModal: "isOpenModal",
    }),
  },
};
</script>
