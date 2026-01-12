<template>
  <dialog 
    v-if="showModal"
    class="modal-overlay" 
    ref="modalOverlay" 
    open
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
  >
    <div class="modal-header">
      <h2 id="modal-title">Your Cart</h2>
      <button class="close-icon" @click="$emit('close')" aria-label="Close modal">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    
    <div class="modal-content">
      <slot>
        <p>Cart is empty</p>
      </slot>
      <div class="modal-actions">
        <button @click="$emit('close')">Close</button>
        <button class="checkout-btn">Checkout</button>
      </div>
    </div>
  </dialog>
</template>

<script>
export default {
  name: "CartModal",
  props: {
    showModal: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  right:50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background-color: white;
  z-index: 1000;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 90vw;
  max-height: 90vh;
}

.modal-overlay::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.close-icon {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
}

.close-icon:hover {
  color: #000;
}

.close-icon svg {
  width: 24px;
  height: 24px;
}
</style>