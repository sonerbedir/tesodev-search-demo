<template>
  <div>
    <div>
      <img src="../assets/tesodev.png" alt="tesodev" :class="size"/>
    </div>
    <div class="project-title" :class="display">
      <p><b>Search web app</b></p>
    </div>
  </div>
</template>
<script>
export default {
  name: "logo",
  props: ["size", "display"]
};
</script>