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
        name: 'About',
        components: { NavBar, SiteFooter },
        setup() {
            const about = `
# 关于我们

我们是来自复旦大学的本科生

本团队完全由来自复旦大学的本科生构成。本团队所有产品的开发、运营、维护等工作，皆由团队独立完成，不存在任何"外包"、"学校介入"、"资本介入"等情况。

本团队接受来自同学、教师等社会各界的无私赞助。赞助者除受到我们的真诚感激外，不拥有其他任何特权。

## 联系我们

### 公关联络部
*合作、活动、新闻、公告、招新...*  
团队邮箱 [pr@fduhole.com](mailto:pr@fduhole.com)  
负责人邮箱 [KYLN24@fduhole.com](mailto:KYLN24@fduhole.com)

### 开发部
*程序、软件、开发、技术...*  
团队邮箱 [dev@fduhole.com](mailto:dev@fduhole.com)  
负责人邮箱 [w568w@fduhole.com](mailto:w568w@fduhole.com)

### FDUHole 管理团队
*社区管理、违规处理、处罚申诉...*  
团队邮箱 [admin@fduhole.com](mailto:admin@fduhole.com)  
负责人邮箱 [Frankstein73@fduhole.com](mailto:Frankstein73@fduhole.com)

## 「旦夕」团队结构

字体含义：
<u>部门负责人</u> **负责人** 正式成员 *实习成员*

### 公关联络部 / Public Relations & Liaison

**<u>KYLN24</u>** sLoth Zhuo 107 summer

### 开发部 / Development Team

【旦夕 APP / DanXi-Dev】 **<u>w568w</u>** singularity *Phospheneser Boreas*  
【运维 / Maintenance】 **hasbai** KYLN24  
【FDUHole 前端 / FDUHole-Dev】 **dest1n1** ivanfei *gai gaia_y*  
【FDUHole 后端 / FDUHole-Dev】 **hasbai** *107 Jinny*  
【FDUCurriculum 前端 / FDUCurriculum-Dev】 **ivanfei** w568w *gai*  
【FDUCurriculum 后端 / FDUCurriculum-Dev】 **dest1n1** w568w  
【待命】 谢子飏

### FDUHole 管理团队 / FDUHole Admin

**<u>Frankstein73</u>** dest1n1 *107 Zhuo*

注：以上人员的工作邮箱为其 ID + @fduhole.com，如 KYLN24@fduhole.com

        `
            const article = computed(() => {
            return marked(about)
           })

           return {article}
        }
    })
</script>

<style lang="less">

</style>