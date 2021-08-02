<template>
  <div class="infolist">
    <Logo :size="small" :display="logoTitleDisplay" />
    <Input :width="smallInput" @keyPressed="getTerm" />
    <Button :size="buttonSize" @buttonClicked="searchTerm" />
  </div>
  <div>
    <Sort @sortClicked="sortData" v-if="searchData.length" />
    <List
      :border="listBorder"
      :searchData="searchData"
      :size="plSize"
      :list-item-style="listItemStyle"
    />
    <Page :dataLength="dataLength" @pageBoxClicked="pageBoxClicked" />
  </div>
</template>

<script>
import Logo from "@/components/logo.vue";
import Input from "@/components/input.vue";
import Button from "@/components/button.vue";
import List from "@/components/List.vue";
import Sort from "@/components/sort.vue";
import Page from "@/components/page.vue";
import { appAxios } from "@/utils/securedAxios";
export default {
  components: {
    Logo,
    Input,
    Button,
    List,
    Sort,
    Page,
  },
  data() {
    return {
      small: "logo-small logo-small-margin",
      smallInput: " search-input-list",
      buttonSize: "mt-40",
      logoTitleDisplay: "display-none",
      listBorder: "list-border-none list-width",
      searchData: [],
      term: null,
      plSize: "pl-664",
      listItemStyle: "list-item-country-list",
      dataLength: 0,
      pageStartIndex: 0,
      pageEndIndex: 6,
    };
  },
  methods: {
    searchTerm() {
      if (this.term !== "" && this.term !== null) {
        appAxios.get("/data").then((response) => {
          const data = response.data.filter((x) => {
            if (x[4].toLowerCase().indexOf(this.term.toLowerCase()) > -1) {
              return x;
            }
          });
          this.searchData = data.slice(this.pageStartIndex, this.pageEndIndex);
          this.dataLength = data.length;
          this.searchInputClass = "search-input-landing";
        });
      } else {
        this.searchData = [];
        this.searchInputClass += " search-input-error";
      }
    },
    getTerm(value) {
      if (value !== "") {
        this.term = value;
      } else {
        this.searchData = [];
        this.term = "";
      }
    },
    sortData(sort) {
      if (sort == "N1") {
        console.log(
          this.searchData.sort((a, b) => {
            return a[0] > b[0] ? 1 : -1;
          })
        );
      } else if (sort == "N0") {
        console.log(
          this.searchData.sort((a, b) => {
            return a[0] > b[0] ? -1 : 1;
          })
        );
      } else if (sort == "Y1") {
        console.log(
          this.searchData.sort((a, b) => {
            return a[3].substr(a[3].length - 4, 4) >
              b[3].substr(b[3].length - 4, 4)
              ? 1
              : -1;
          })
        );
      } else if (sort == "Y0") {
        console.log(
          this.searchData.sort((a, b) => {
            return a[3].substr(a[3].length - 4, 4) >
              b[3].substr(b[3].length - 4, 4)
              ? -1
              : 1;
          })
        );
      }
    },
    pageBoxClicked(index) {
      this.pageStartIndex = (index - 1) * 6;
      this.pageEndIndex = index * 6;
      this.searchTerm();
    },
  },
};
</script>
