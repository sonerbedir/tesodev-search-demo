<template>
  <div class="home">
    <Logo :size="logoSize"/>
    <Input v-bind:width="searchInputClass" @keyPressed="getTerm" />
    <Button @buttonClicked="searchTerm" />
    <List border="list-landing" :searchData="searchData" :size="plSize" :listItemStyle="listItemStyle"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from "@/components/logo.vue";
import Input from "@/components/input.vue";
import Button from "@/components/button.vue";
import List from "@/components/List.vue";
import { appAxios } from "@/utils/securedAxios";

export default {
  name: "Home",
  components: {
    Logo,
    Input,
    Button,
    List,
  },
  data() {
    return {
      searchData: [],
      term: null,
      searchInputClass: "search-input-landing",
      logoSize: "logo",
      plSize: "pl-522",
      listItemStyle: "list-item-country",
    };
  },
  methods: {
    searchTerm() {
      if (this.term !== "" && this.term !== null) {
        appAxios.get("/data").then((response) => {
          this.searchData = response.data
            .filter((x) => {
              if (x[4].toLowerCase().indexOf(this.term.toLowerCase()) > -1) {
                return x;
              }
            })
            .slice(0, 3);
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
  },
};
</script>
