<script>
import HomeView from "./HomeView.vue";

export default {
  name: "HeaderView",
  components: {
    HomeView,
  },
};
</script>
<template>
  <div>
    <div id="main-header">
      <h1 id="title">App Store</h1>
      <button>Cart</button>
    </div>
    <HomeView />
  </div>
</template>
