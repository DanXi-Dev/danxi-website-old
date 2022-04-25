<template>
    <nav>
        <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/version">更新记录</router-link></li>
            <li><router-link to="/privacy">隐私政策</router-link></li>
            <li><router-link to="/terms-and-condition">使用条款</router-link></li>
            <li><router-link to="/support">支持</router-link></li>
            <li><router-link to="/about">关于</router-link></li>
        </ul>
    </nav>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    export default defineComponent({
        name: 'NavBar'
    })
</script>

<style lang="less">
nav {
    z-index: 9999;
    height: 50px;
    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.8);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        backdrop-filter: saturate(180%) blur(20px);
    }
    position: fixed;
    top: 0;
    width: 100%;
    text-align: center;
    ul {
        display: flex;
        justify-content: center;
    }

    li {
        a {
            color: #6e6e73;
            text-decoration: none;
            font-size: 1.25rem;
            &:hover{
                color: #000;
            }
        }
        .router-link-active {
                color: #000;
        }
        // &.current{
        //     a {
        //         color: #000;
        //     }
        // }
        padding: 10px;
        position: relative;
        list-style: none;
    }
}
</style>