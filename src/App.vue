<template>
  <div id="container">
    <router-view></router-view>
  </div>
</template>


<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: 'App',
    components: {}
  })
</script>


<style>
 #container {
    min-height: 100vh;
 }
</style>
