<template>
    <nav>
        <ul v-show="!mobile" class="pc-nav">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/version">更新记录</router-link></li>
            <li><router-link to="/privacy">隐私政策</router-link></li>
            <li><router-link to="/terms-and-condition">使用条款</router-link></li>
            <li><router-link to="/support">支持</router-link></li>
            <li><router-link to="/about">关于</router-link></li>
        </ul>
        <div class="menu-icon" @click=toggleMobileNavMenu()>
            <img src="../assets/image/icons8-menu-24.png" v-show="mobile">
        </div>
        <transition name="mobile-nav-menu">
             <ul v-show="mobileNav" class="dropdown-nav">
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/version">更新记录</router-link></li>
                <li><router-link to="/privacy">隐私政策</router-link></li>
                <li><router-link to="/terms-and-condition">使用条款</router-link></li>
                <li><router-link to="/support">支持</router-link></li>
                <li><router-link to="/about">关于</router-link></li>
            </ul>
        </transition>
    </nav>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    export default defineComponent({
        name: 'NavBar',
        data() {
            const mobile: boolean = false;
            const mobileNav: boolean = false;
            const windowWidth: number = 640;
            return {
                mobile, mobileNav, windowWidth
            }
        },
        created() {
            window.addEventListener("resize", this.checkScreen);
            this.checkScreen();
        },
        methods: {
            toggleMobileNavMenu(): void {
                this.mobileNav = !this.mobileNav
            },
            checkScreen(): void {
                this.windowWidth = window.innerWidth
                if (this.windowWidth < 640) {
                    this.mobile = true;
                    return;
                }
                this.mobile = false;
                this.mobileNav = false;
            }
        }
    })
</script>

<style lang="less">
nav {
    z-index: 9999;
    height: 50px;
    // &:before {
    //     content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.8);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        backdrop-filter: saturate(180%) blur(20px);
    // }
    position: fixed;
    top: 0;
    width: 100%;
    
    .pc-nav {
        display: flex;
        justify-content: center;
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
            padding: 10px;
            position: relative;
            list-style: none;
        }
    }  
    
    .menu-icon {
        height: 100%;
        display: flex;
        img {
            margin: 1em;
            align-self: center;
        }
    }

    .dropdown-nav {
        transition: .5s ease all;
        width: 150%;
        background-color: rgba(255, 255, 255, 0.8);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        backdrop-filter: saturate(180%) blur(20px);
        li {
            a {
                color: #6e6e73;
                text-decoration: none;
                padding-left: 0.5rem;
                font-size: 1rem;
                &:hover{
                    color: #000;
                }
            }
            .router-link-active {
                    color: #000;
            }
            padding: 10px;
            position: relative;
            list-style: none;
        }
    }
}

/* we will explain what these classes do next! */
.mobile-nav-menu-enter-active,
.mobile-nav-menu-leave-active { 
  transition: 1s ease all;
}

.mobile-nav-menu-enter-from { 
  transform: translateX(-50px);
  opacity: 0;
}

.mobile-nav-menu-leave-to { 
  transform: translateX(0);
  opacity: 0;
}

</style>