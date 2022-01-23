<template>
  <div>
    <input
      :id="id"
      v-model="model"
      :type="type"
      :inputmode="type"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "baseInput",
  props: {
    id: {
      type: String,
      default: "",
      required: true,
    },
    type: {
      type: String,
      default: "text",
      required: true,
    },
    placeholder: {
      type: String,
      default: "Search",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isError: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style scoped>
input {
  width: 550px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #e91e63;
}
</style>
