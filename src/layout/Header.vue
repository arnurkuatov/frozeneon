<template>
  <section class="search-bar">
    <h1>Find your desired package, Sir!</h1>
    <div class="search-bar__block">
      <base-input id="1" v-model="searchText" type="search" />
      <base-button @click="searchDelivr"> Search </base-button>
    </div>
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
  h1 {
    text-align: center;
    margin-bottom: 15px;
    color: #1a1818;
  }
  &__block {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
