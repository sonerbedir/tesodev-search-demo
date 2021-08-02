<template>
  <div :class="size" v-if="searchData.length">
    <div class="list-border" :class="border">
      <ul>
        <ListItem
          v-for="listData in searchData"
          :key="listData[2]"
          :listData="listData"
          :listItemCountry="listItemStyle"
        />
      </ul>
      <span v-if="isShowMore">
        <router-link to="/infolist">Show More...</router-link>
      </span>
    </div>
  </div>
</template>

<script>

import ListItem from "@/components/listItem.vue";
export default {
  props: ["border", "searchData", "size", "listItemStyle"],
  components: {
    ListItem,
    
  },
  data() {
    return {
      // isShowMore: true
    };
  },
  computed: {
    isShowMore() {
      if (this.$router.currentRoute.value.fullPath == "/infolist") {
        console.log(this.$router);
        return false;
      }
      else {
        return true;
      }
    }
  },
};
</script>