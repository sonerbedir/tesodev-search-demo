<template>

    <div class="page-box" :class="index == activePage ? 'page-box-active' : ''" @click="pageBoxClicked(index)">
       <p> {{index}} </p>
    </div>
</template>
<script>
export default {
    props: ["index","activePage","pageCount"],
    methods: {
        pageBoxClicked(index) {
            this.$emit("pageBoxClicked", index);
        }
    }
}
</script>

