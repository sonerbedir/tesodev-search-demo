<template>
  <li>
    <div class="list-item">
      <div :class="listItemCountry">
        <span>{{listData[4]}}</span>
        -
        <span>{{listData[5]}}</span>
        <p class="list-item-country-date">
          <span>{{listData[0]}}</span>
          -
          <span>{{getYear}}</span>
        </p>
      </div>
      <div class="list-item-email">
        <span>Email:</span>
        <span>{{listData[2]}}</span>
      </div>
    </div>
    <hr />
  </li>

  

  
</template>

<script>

export default {
 
   props: ['data', 'listData', "listItemCountry"],
   created() {
     console.log(this.listData)
   },
   computed: {
     getYear() {
       return this.listData[3].substr(this.listData[3].length-4,4);
     }
   }
}
</script>