<template>
  <button class="search-btn" @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: "baseButton",
  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-btn {
  display: block;
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid white;
  cursor: pointer;
  background: #e91e63;
  color: white;
  margin-left: 20px;
}
</style>
