<template>
  <div>
    <div id="main-header">
      <h1 id="title">App Store</h1>
      <button ref="cartButton" @click="openModal">Cart({{ cartItemCount }})</button>
    </div>

    <HomeView />

    <Cart 
      :showModal="showModal" 
      @close="closeModal" 
      ref="cartComponent" 
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HomeView from "./Home.vue";
import Cart from "./Cart.vue";

export default {
  name: "HeaderLayout",
  components: { HomeView, Cart },
  data() {
    return {
      showModal: false,
      previousActiveElement: null,
    };
  },
  computed: {
    ...mapGetters(["cartItemCount"])
  },
  methods: {
    openModal() {
      this.previousActiveElement = document.activeElement;
      this.showModal = true;
      this.initFocusTrap();
    },
    closeModal() {
      this.removeFocusTrap();
      this.showModal = false;
      this.$nextTick(() => {
        this.previousActiveElement?.focus();
      });
    },
    initFocusTrap() {
      this.$nextTick(() => {
        // Accessing the element inside the child component
        const modal = this.$refs.cartComponent.$el;
        if (modal) {
          modal.addEventListener('keydown', this.handleKeyDown);
          const firstButton = modal.querySelector('button');
          firstButton?.focus();
        }
      });
    },
    removeFocusTrap() {
      const modal = this.$refs.cartComponent?.$el;
      if (modal) modal.removeEventListener('keydown', this.handleKeyDown);
    },
    handleKeyDown(event) {
      if (event.key === 'Tab') {
        const modal = this.$refs.cartComponent.$el;
        const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
      if (event.key === 'Escape') this.closeModal();
    }
  }
};
</script>