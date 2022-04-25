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
        name: 'Support',
        components: { NavBar, SiteFooter },
        setup() {
            const support = `
# 支持

## 旦夕 App FAQ

*   Q：旦夕安全吗？

    A：旦夕基于 [GPL-3.0 License](https://github.com/DanXi-Dev/DanXi/blob/main/LICENSE) 协议在 [GitHub](https://github.com/DanXi-Dev/DanXi) 开源，项目的所有代码都可以查看。这意味着，旦夕可以接受所有人的审查，不会包含任何恶意代码。

*   Q：我的 UIS 账号安全吗？

    A：你的学号和密码只会保存在本地，不会上传至旦夕的服务器。事实上，除去 FDUHole 的服务器，旦夕本身并不存在自己的服务器。

*   Q：我的个人校园数据安全吗？

    A：你的个人校园数据是通过你保存在本地的 UIS 账号直接从复旦大学服务器获取并在旦夕里显示的。你的任何个人数据都不会被上传至复旦大学以外的服务器。

*   Q：遇到了 BUG 怎么办？

    A：请给我们[发送邮件(dev@fduhole.com)](mailto:dev@fduhole.com)，或直接前往 [GitHub](https://github.com/DanXi-Dev/DanXi/issues) 提交 Issue。请注意，你的反馈中应该包含

    > 1.  设备系统版本
    > 2.  设备型号
    > 3.  旦夕 App 版本号
    > 4.  问题及复现手段
    > 5.  其他补充描述

*   Q：想要提前获取新功能！可以让我提前获取早期发布（内测/公测）的版本吗？

    A：感谢支持！请通过[邮件(dev@fduhole.com)](mailto:dev@fduhole.com)联系我们。

*   Q：你们好可爱，想给你们打钱。

    A：来吧！[旦夕 App | 爱发电 (afdian.net)](https://afdian.net/@danxi-dev)

## 联系我们

DanXi-Dev GitHub 首页：[https://github.com/DanXi-Dev](https://github.com/DanXi-Dev)

DanXi-Dev 邮箱：[dev@fduhole.com](mailto:dev@fduhole.com)

DanXi App 开源仓库 Issue：[https://github.com/DanXi-Dev/DanXi/issues](https://github.com/DanXi-Dev/DanXi/issues)

        `
            const article = computed(() => {
            return marked(support)
           })

           return {article}
        }
    })
</script>

<style lang="less">

</style>