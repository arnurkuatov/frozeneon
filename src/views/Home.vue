<template>
  <section class="home-page">
    <DataTable :packages="packagesDelivr.objects" />
    <div>
      <h1 v-if="!packagesDelivr.objects">
        THERE IS NO PACKAGES!!! <br />
        please try to search another package :)
      </h1>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import DataTable from "../components/common/DataTable";

export default {
  name: "Home",
  components: { DataTable },
  computed: {
    ...mapGetters({
      packagesDelivr: "getDelivrPackages",
      status: "getDelivrPackagesStatus",
      error: "getDelivrPackagesgError",
      errorMessage: "getDelivrPackagesErrorMessage",
    }),
  },
};
</script>

<style scoped>
h1 {
  color: #e91e63;
  text-align: center;
}
</style>
