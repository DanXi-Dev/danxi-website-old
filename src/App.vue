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


<style lang="less">
 #container {
    min-height: 100vh;
 }
 * {
    margin: 0;
    padding: 0;
    font-family: "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro",
        "SF Pro Icons", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial",
        sans-serif;
}

html {
    height: 100vh;
    width: 100vw;
    position: relative;
}

body {
    width: 100vw;
    overflow-x: hidden;
    position: relative;
}

main {
    width: 100vw;
    overflow: hidden;
    padding-bottom: 80px;
    .page {
        width: 100vw;
        overflow: hidden;
    }
}

article {
    height: 100%;
    width: min(90vw, 960px);
    margin: 32px;
    padding: 70px 32px 80px 32px;
    margin: auto;
    line-height: 1.7rem;
    h1 {
        font-size: 2rem;
        line-height: 2.5rem;
    }
    h2 {
        margin-top: 1rem;
        font-size: 1.5rem;
        line-height: 2rem;
        border-left: 5px solid #517999;
        padding-left: 12px;
    }
    h3 {
        margin-top: 0.5rem;
        line-height: 1.5rem;
    }
    p {
        padding: 0.5rem;
    }
    a {
        color: #517999;
        text-decoration: none;
    }
    ul {
        margin-top: 8px;
        margin-left: 1rem;
        padding-left: 16px;
        list-style-type: circle;
    }
    ol {
        margin-top: 8px;
        margin-left: 1rem;
        padding-left: 16px;
    }
}
</style>
