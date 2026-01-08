<script>
export default {
  name: "ButtonView",
  props: {
    // Define the type for better validation
    children: {
      type: String,
      default: "Default Button Text"
    },
  },
};
</script>

<template>
  <button>{{ children }}</button>
</template>