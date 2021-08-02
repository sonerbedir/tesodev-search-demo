<template>
  <div class="display-inline-block">
    <button class="search-button" :class="size" @click="onClick">Search</button>
  </div>
</template>
<script>
export default {
  props: ["size"],
  methods: {
    onClick() {
      this.$emit("buttonClicked");
    },
  },
};
</script>