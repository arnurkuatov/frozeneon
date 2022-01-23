<template>
  <section class="modal-view">
    <div class="modal-view__block">
      <button class="modal-view__close" @click="closeModal">X</button>
      <h3>{{ packageModal[0].package.name }}</h3>
      <p>{{ packageModal[0].package.description }}</p>
      <p>Author: {{ packageModal[0].package.author.name }}</p>
      <p>Email: {{ packageModal[0].package.author.email }}</p>
      <h4>
        View source:
        <a :href="packageModal[0].package.links.npm" target="_blank"
          >{{ packageModal[0].package.links.npm }}
        </a>
      </h4>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ModalView",
  computed: {
    ...mapGetters({
      packageModal: "packageModal",
    }),
  },
  methods: {
    ...mapMutations({
      setCloseModal: "SET_MODAL",
    }),
    closeModal() {
      this.setCloseModal(false);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-view {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
  &__block {
    background: #e82e6c;
    max-width: 650px;
    width: 100%;
    position: relative;
    margin: 200px auto;
    color: white;
    padding: 30px;
    border-radius: 8px;
    h3 {
      text-align: center;
      font-size: 28px;
      margin-bottom: 15px;
    }
    p {
      font-size: 24px;
      margin-bottom: 10px;
    }
    a {
      text-decoration: none;
      color: #315495;
    }
  }
  &__close {
    float: right;
    background: none;
    border: transparent;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
}
</style>
