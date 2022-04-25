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
        name: 'Privacy',
        components: { NavBar, SiteFooter },
        setup() {
            const privacy = `
# 旦夕隐私政策

旦夕App是一个面向复旦大学学生的第三方集成式校园服务平台，由旦夕 App 前端、复旦大学 UIS、FDU Hole 树洞平台构成。旦夕隐私政策由这三个部分的隐私政策构成。

## 旦夕 App 前端

旦夕 App 前端将您的数据存储在本地，不会上传至任何服务器。在任何情况下，您通过UIS账号查询到的信息（例如您的校园卡消费和成绩信息）都不会离开您的设备，开发团队和第三方均不可能获得这些信息。  
如果您打开了“支持我们”选项（默认关闭），您的部分非敏感数据（如手机型号，当前时区等）将会被发送给第三方用于向您展示广告。此功能完全自愿开启，开启后不会为您带来任何功能上的好处，但您可以通过此方式支持我们的开发工作。

## 复旦大学 UIS

您的隐私数据由复旦大学采集，旦夕 App 仅在经过您的允许后读取有限数据。相关政策请访问[复旦大学官网](https://www.fudan.edu.cn)了解。本 App 系第三方作品，与复旦大学无关。

## FDUHole 树洞平台

旦夕提供对于匿名论坛 FDUHole 的访问。您的隐私数据由 FDUHole 按照[FDUHole 隐私政策](https://www.fduhole.com/#/licence)采集并使用。如果您不使用 FDU Hole 服务，则旦夕不会采集您的隐私数据。
        `
            const article = computed(() => {
            return marked(privacy)
           })

           return {article}
        }
    })
</script>

<style lang="less">

</style>