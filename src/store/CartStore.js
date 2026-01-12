import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const cartStore = new Vuex.Store({
  state() {
    return {
      items: [],
    };
  },
  getters: {
    cartTotalPrice: (state) => {
      return state.items.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
    cartItemCount: (state) => {
      return state.items.reduce((count, item) => {
        return count + item.quantity;
      }, 0);
    },
  },
  actions: {
    addProductToCart({ state, commit }, product) {
      // FIX: Compare the list item's ID with the passed product's ID
      const cartItem = state.items.find((item) => item.id === product.id);

      if (!cartItem) {
        commit("pushProductToCart", product);
      } else {
        commit("incrementItemQuantity", cartItem);
      }
    },
    removeProductFromCart({ commit }, itemId) {
      commit("removeItem", itemId);
    },
  },
  mutations: {
    pushProductToCart(state, item) {
      state.items.push({
        ...item,
        quantity: 1,
      });
    },
    incrementItemQuantity(state, { id }) {
      const cartItem = state.items.find((item) => item.id === id);
      cartItem.quantity++;
    },
    removeItem(state, id) {
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});
