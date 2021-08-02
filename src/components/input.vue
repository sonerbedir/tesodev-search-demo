<template>
    <div class="display-inline-block">
        <input 
        type="text" 
        class="search-input"
        :class="width"
        v-model="term"
        @keyup="searchKeyPressed" >
    </div>
</template>
<script>
export default {
  props: ["width"],
  data() {
    return {
        term: null,
    };
  },
  methods: {
    searchKeyPressed () {
      this.$emit('keyPressed', this.term)
    }
  },
};
</script>