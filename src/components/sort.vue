<template>
  <div class="d-flex cursor-pointer">
    <div class="order-logo">
      <img src="../assets/sort-icon.png" alt="" />
      <p @click="orderClicked">Order By</p>
    </div>
     <div v-if="isOpen" class="position-relative">
    <div class="position-absolute order-container">
      <ul>
        <li @click="sortClicked('N1')">Name ascending</li>
        <li @click="sortClicked('N0')">Name descending</li>
        <li @click="sortClicked('Y1')">Year ascending</li>
        <li @click="sortClicked('Y0')">Year descending</li>
      </ul>
    </div>
  </div>
  </div>
 
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    orderClicked() {
      this.isOpen = !this.isOpen;
    },
    sortClicked(sortData) {
        this.$emit("sortClicked", sortData);
    }
  },
};
</script>