<template>
  <section class="search-bar">
    <base-input id="1" v-model="searchText" type="search" />
    <base-button @click="searchDelivr"> Пойск </base-button>
  </section>
</template>

<script>
import BaseInput from "../components/base/baseInput";
import BaseButton from "../components/base/baseButton";
import { mapActions } from "vuex";
export default {
  name: "Header",
  components: { BaseButton, BaseInput },
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    ...mapActions({
      fetchPackages: "fetchDelivrPackagesActions",
    }),
    searchDelivr() {
      this.fetchPackages(this.searchText);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-bar {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
