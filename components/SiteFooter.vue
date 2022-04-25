<template>
    <footer style="background-color: #000000;color: #ffffff">
        <p>©2021~present <a style="color: #ffffff;" href="https://github.com/DanXi-Dev">DanXi-Dev</a></p>
        <p>友情链接
        <ul>
            <li><a style="color: #ffffff;" href="https://www.fduhole.com" target="_blank">
                    FDUHole 树洞
                </a></li>
            <li><a style="color: #ffffff;" href="https://github.com/fduhole" target="_blank">
                    FDUHole-Dev
                </a></li>
            <li><a style="color: #ffffff;" href="https://KYLN24.github.io/Elsewhere/" target="_blank">
                    I'm KYLN: Elsewhere
                </a></li>
            <li><a style="color: #ffffff;" href="https://w568w.eu.org/" target="_blank">
                    行云小站
                </a></li>
            <li><a style="color: #ffffff;" href="https://blog.salve.cf/" target="_blank">
                    拾遗录
                </a></li>
            <li><a style="color: #ffffff;" href="https://kavinzhao.github.io" target="_blank">
                    无处
                </a></li>
        </ul>
        </p>

    </footer>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    export default defineComponent({
        name: 'SiteFooter'
    })
</script>

<style lang="less">
footer {
    position: absolute;
    bottom: 0;
    width: 100%;

    padding: 5px;
    text-align: center;
    a {
        color: #000000;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style-type: none;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        li {
            padding: 5px;
            &::before {
                content: "# ";
            }
            &:hover {
                color: #6e6e73;
            }
        }
    }
}

</style>