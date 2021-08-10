<template>
  <PageBox
    :index="'Previous'"
    v-if="dataLength > 6 && activePage > 1"
    @pageBoxClicked="pageBoxClicked"
  />
  <PageBox
    v-for="index in pageCount"
    :key="index"
    :index="index"
    :activePage="activePage"
    @pageBoxClicked="pageBoxClicked"
    :pageCount="pageCount"
  />
  <PageBox
    :index="'Next'"
    v-if="dataLength > 6 && activePage < pageCount"
    @pageBoxClicked="pageBoxClicked"
  />
</template>


<script>
import PageBox from "@/components/pageBox.vue";
export default {
  props: ["dataLength", "isNewSearch"],
  components: {
    PageBox,
  },
  data() {
    return {
      activePage: 1,
      //   pageArray: [],
    };
  },
  computed: {
    pageCount() {
      let count = 0;
      if (this.dataLength < 7) {
        count = 1;
      } else {
        if (parseInt(this.dataLength / 6) < this.dataLength / 6) {
          count = parseInt(this.dataLength / 6) + 1;
        } else {
          count = parseInt(this.dataLength / 6);
        }
      }

      if (this.isNewSearch) {
        this.activePage = 1
      }

      return count;
    },
  },
  methods: {
    pageBoxClicked(index) {
      if (index == "Previous") {
        this.activePage -= 1;
      } else if (index == "Next") {
        this.activePage += 1;
      } else {
        this.activePage = index;
      }

      this.$emit("pageBoxClicked", this.activePage);
    },
  },
};
</script>