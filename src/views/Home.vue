<template>
  <section class="home-page">
    <DataTable :packages="packagesDelivr.objects" />
    <div>
      <h2 v-if="!packagesDelivr.objects.length">
        THERE IS NO PACKAGES!!! <br />
        please try to search another package :)
      </h2>
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
h2 {
  color: #e91e63;
  text-align: center;
}
</style>
