<template>
  <PageBox
    :index="'Previous'"
    v-if="dataLength > 1 && activePage > 1"
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
    v-if="dataLength > 1 && activePage < pageCount"
    @pageBoxClicked="pageBoxClicked"
  />
</template>


<script>
import PageBox from "@/components/pageBox.vue";
export default {
  props: ["dataLength"],
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
      if (parseInt(this.dataLength / 6) < this.dataLength / 6) {
        count = parseInt(this.dataLength / 6) + 1;
      } else {
        count = parseInt(this.dataLength / 6);
      }

    //   if (count > 6) {
    //     for (let index = 1; index <= 3; index++) {
    //       this.pageArray.push(index);
    //     }

    //     for (let index = count - 2; index <= count; index++) {
    //       this.pageArray.push(index);
    //     }

    //     console.log(this.pageArray);
    //   }

      return count;
    },
  },
  created() {
    console.log(this.dataLength);
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