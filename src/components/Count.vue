<template>
  <div>
    <p>Count: {{ $store.state.count }}</p>
    <button @click="increment">Add</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}
</script>