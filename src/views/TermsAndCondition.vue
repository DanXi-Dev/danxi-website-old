<template>
 <nav-bar></nav-bar>
 <main>
    <article id='article' v-html="article"></article>
 </main>
 <site-footer></site-footer>
</template>

<script lang="ts">
    import { defineComponent, computed } from "vue";
    import { marked } from 'marked';
    import NavBar from '../components/NavBar.vue';
    import SiteFooter from "../components/SiteFooter.vue";
    export default defineComponent({
        name: 'TermsAndCondition',
        components: { NavBar, SiteFooter },
        setup() {
            const terms = `

# 旦夕开发团队编译的旦夕副本使用条款

使用旦夕开发团队编译的旦夕副本意味着您同意本使用协议。

旦夕依据 GPL-3.0 协议在 GitHub 开源，您可以从[项目首页](https://github.com/DanXi-Dev/DanXi)获得旦夕的源代码。

此外，使用旦夕开发团队编译的旦夕副本，您还需要同意：

- [旦夕隐私政策](https://danxi-dev.github.io/privacy)；
- 旦夕开发团队编译的旦夕副本仅供学习交流使用，您对于您使用旦夕开发团队编译的旦夕副本的一切行为承担一切责任；
- 旦夕开发团队可以随时修改旦夕开发团队编译的旦夕副本使用协议而恕不另行通知，您在使用旦夕开发团队编译的旦夕副本时应履行注意本条款变更的义务。

注：FOSS 版或自行编译的版本不受此使用条款约束

        `
            const article = computed(() => {
            return marked(terms)
           })

           return {article}
        }
    })
</script>

<style lang="less">

</style>