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
      <span v-if="isShowMore" @click="showMoreClicked">
        <router-link :to="`/infolist/${term}`" >Show More...</router-link>
      </span>
    </div>
  </div>
</template>

<script>

import ListItem from "@/components/listItem.vue";
export default {
  props: ["border", "searchData", "size", "listItemStyle", "term"],
  components: {
    ListItem,
    
  },
  data() {
    return {
    };
  },
  computed: {
    isShowMore() {
      if (this.$router.currentRoute.value.fullPath.indexOf("/infolist") > -1 ) {
        console.log(this.$router);
        return false;
      }
      else {
        return true;
      }
    }
  }
};
</script>