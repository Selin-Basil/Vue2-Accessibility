<script>
import { getAllProducts } from "@/services/productService";
import ButtonView from "./UI/ButtonView.vue";

export default {
  name: "HomeView",
  components:{
    ButtonView
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async fetchProducts() {
      try {
        // 'data' is now the actual object returned from the service
        const data = await getAllProducts();
        console.log("component resp:", data);

        // DummyJSON returns an object with a 'products' array
        this.products = data.products || [];
      } catch (error) {
        console.error("Component error:", error);
      }
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<template>
  <div>
    <h1>Products</h1>

    <ui id="products">
      <li v-for="product in products" :key="product.id" class="meal-item">
        <article>
          <img :src="product.thumbnail" :alt="product.title" />
          <h2>{{ product.title }}</h2>
          <p class="meal-item-description">{{ product.description }}</p>
          <p class="meal-item-price">${{ product.price }}</p>
          <div class="meal-item-actions">
            <ButtonView children="Add to Cart"></ButtonView>
          </div>
        </article>
      </li>
    </ui>
  </div>
</template>
<style scoped></style>
