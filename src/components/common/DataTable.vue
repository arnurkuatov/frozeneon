<template>
  <section class="data-table">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Version</th>
          <th>Homepage</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in pageOfItems"
          :key="item.name"
          @click="openModal(item.package.name)"
        >
          <td>{{ item.package.name }}</td>
          <td>{{ item.package.description }}</td>
          <td>{{ item.package.version }}</td>
          <td>
            <a :href="item.package.links.homepage" target="_blank" class="blue"
              >Go to</a
            >
          </td>
        </tr>
      </tbody>
    </table>
    <jw-pagination :items="packages" @changePage="onChangePage"></jw-pagination>
  </section>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "DataTable",
  props: {
    packages: {
      type: [Array, Object],
      required: false,
    },
  },
  data() {
    return {
      pageOfItems: [],
    };
  },
  methods: {
    ...mapMutations({
      setOpenModal: "SET_MODAL",
      setPackageModal: "SET_PACKAGE_MODAL",
    }),
    openModal(itemName) {
      const sortedPackage = this.packages.filter((item) => {
        if (item.package.name === itemName) {
          return item;
        }
      });
      this.setPackageModal(sortedPackage);
      this.setOpenModal(true);
    },
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
  },
};
</script>

<style scoped>
table {
  width: 75%;
  margin: 20px auto;
  font-family: sans-serif;
  border-bottom: 5px solid #e91e63;
}
th,
td {
  padding: 10px;
}
tr {
  cursor: pointer;
}
th {
  background-color: #e55959;
  color: white;
}
td {
  background-color: #ffdddd;
}
span {
  padding: 5px 10px;
  margin: 3px;
  color: white;
}
a {
  text-decoration: none;
  color: #315495;
}
</style>
