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
  created() {
    if (this.$router.currentRoute.value.fullPath.indexOf("/infolist") > -1 ) {
      this.term = this.$route.params.term;
    }
  }
};
</script>