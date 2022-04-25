<template>
 <nav-bar></nav-bar>
 <main>
        <div class="page" id="page-1">
            <div class="hero-container">
                <div class="app-icon">
                    <img src="../assets/image/egg-cat.webp" alt="DanXi icon" height="300" width="300">
                </div>
                <div class="other">
                    <div class="title">
                        旦夕<span id="neweast_version_id">v1.3.8</span>
                    </div>
                    <div class="slogan">
                        可能是复旦学生最好的第三方校园服务 APP
                    </div>
                    <div class="btns">
                        <a href="https://apps.apple.com/cn/app/旦夕/id1568629997" target="_blank"><img
                                src="../assets/image/appstore.svg" alt="从 AppStore 下载旦夕"></a>
                        <!-- <a href="https://hub.fastgit.org/DanXi-Dev/DanXi/releases/latest" target="_blank">
                            <div class="custom-btn">
                                <div class="cb-icon"
                                    style="background-image: url(https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/73/ed/4b/73ed4b61-c988-b23b-b381-cb09330d511f/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/152x152bb-80.png);">
                                </div>
                                <div class="text">
                                    GitHub Release<br>
                                    <span class="l2">通过 FastGit 下载</span>
                                </div>
                            </div>
                        </a> -->
                        <a href="https://www.pgyer.com/danxi" target="_blank">
                            <div class="custom-btn">
                                <div class="cb-icon" style="background-image: url(https://assets.pgyer.com/static-20210717/images/newHome/header/pgyer@2x.png);background-repeat:no-repeat;
                                    background-size:100% 100%;">
                                </div>
                                <div class="text">
                                    Android<br>
                                    <span class="l2">通过蒲公英下载</span>
                                </div>
                            </div>
                        </a>
                        <a href="https://danxi.fduhole.com/DanXi">
                            <div class="custom-btn">
                                <div class="cb-icon" id="danxi-icon">
                                </div>
                                <div class="text">
                                    旦夕 Web 版<br>
                                    <span class="l2">处于早期测试状态中</span>
                                </div>
                            </div>
                        </a>
                        <!-- <a href="https://play.google.com/store/apps/details?id=io.github.w568w.dan_xi
                    " target="_blank"><img src="/assets/image/googleplay.svg" alt="从 Google Play 下载旦兮"></a> -->
                    </div>
                    <div class="tips">
                        <ul>
                            <li>iOS/watchOS/iPadOS/macOS 用户请前往 App Store 下载</li>
                            <li>安卓用户与 Windows 用户请前往<a href="https://www.pgyer.com/danxi">蒲公英</a>、<a
                                    href="https://www.github.com/DanXi-Dev/DanXi/releases/latest" target="_blank">GitHub
                                    Release</a> 或 <a href="https://hub.fastgit.xyz/DanXi-Dev/DanXi/releases/latest"
                                    target="_blank">FastGit 镜像</a> 下载
                            </li>
                            <li>强烈不建议安卓用户通过 <a
                                    href="https://play.google.com/store/apps/details?id=io.github.danxi_dev.dan_xi">Google
                                    Play</a> 下载</li>
                            <li>安卓 FOSS 版请前往 <a
                                    href="https://f-droid.org/packages/io.github.danxi_dev.dan_xi/">F-Droid</a>
                                下载</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="page" id="page-2">
            <h2 data-aos="fade-up">
                体积不大，功能很强大
                <p>查询饭卡余额、空教室、食堂拥堵情况...更多特性还在活跃更新中</p>
            </h2>
            <div id="iphone">
                <div id="hardware"></div>
                <div id="ui">
                    <img src="../assets/image/top-iphone12-ui.webp" class="top-ui" alt="" />
                    <ul>
                        <li><img src="../assets/image/1-iphone12-ui.webp" /></li>
                        <li><img src="../assets/image/2-iphone12-ui.webp" /></li>
                        <li><img src="../assets/image/3-iphone12-ui.webp" /></li>
                        <li><img src="../assets/image/4-iphone12-ui.webp" /></li>
                        <li><img src="../assets/image/5-iphone12-ui.webp" /></li>
                        <li><img src="../assets/image/6-iphone12-ui.webp" /></li>
                        <li><img src="../assets/image/7-iphone12-ui.webp" /></li>
                    </ul>
                </div>
            </div>
            <div id="page-2-end-blank"></div>
        </div>

        <div class="page" id="page-3">
            <div class="hole-img">
                <h2>
                    树洞集成，<br />嘘...里面请！
                    <p>内置 FDU Hole 树洞服务，<br />匿名的世界里，<br />让大家听见你的声音</p>
                </h2>
                <img src="../assets/image/danxi-icon.webp" height="200" width="200" alt="旦夕 Logo" id="danxi-logo" />
                <img src="../assets/image/webhole-favicon.svg" height="200" width="200" alt="树洞 Logo" id="hole-logo" />
            </div>

            <div class="hole-screenshot">
                <img src="../assets/image/hole-ss-headbar.webp" id="hole-iphone-head" />
                <img src="../assets/image/hole-ss-posts.webp" alt="内建 FDU Hole 截屏" id="hole-screenshot" />
            </div>
        </div>

        <div class="page" id="page-4">
            <!-- <div class="check-mark"></div> -->
            <h2>
                开源，<br />安全有保障
                <p data-aos="fade-up">旦夕作为开源软件，所有的行为都在项目首页的代码里明文给出。欢迎前往 GitHub 项目首页提供反馈。</p>
            </h2>
            <img src="../assets/image/repository-page.webp">
        </div>
        <div id="user-comment">
            <h2 data-aos="fade-up">
                用用看？用过都说好！
                <p>你的近 8000 名同学都在用</p>
            </h2>
            <ul>
                <li data-aos="fade-up">用户：用上啦！目前体验很好，终于摆脱了ehall小程序😁</li>
                <li data-aos="fade-up">用户：感谢开发同学，辛苦了~</li>
                <li data-aos="fade-up">用户：旦夕太方便了！Ehall 再见!</li>
                <li data-aos="fade-up">用户：这是要让ehall无地自容吗(꒪꒫꒪ )</li>
                <li data-aos="fade-up">用户：太美好了 希望有这样的平台很久了 感谢初创团队</li>
                <li data-aos="fade-up">用户：旦兮很好用啊啊w不用存那么多个小程序在桌面上了 也不用自己导课表了x</li>
                <li data-aos="fade-up">用户：有了旦夕，我成功摆脱了响应极慢的小程序...尤其是复活码，体验极佳！无事氵树洞也是极好的！还能随时随地看课表~</li>
                <li data-aos="fade-up">用户：dd旦兮太爱了</li>
            </ul>
        </div>

        <div id="developers">
            <h2 data-aos="fade-up">
                用心打造
                <p>我们是来自复旦大学的本科生</p>
            </h2>
            <div class="card-container">
                <a href="https://github.com/w568w" target="_blank" data-aos="fade-up">
                    <div class="developer-card">
                        <img src="https://avatars.githubusercontent.com/u/8389787" />
                        <div class="developer-text">
                            <div class="developer-work">开发者 管理员</div>
                            <div class="developer-displayname">w568w</div>
                            <div class="developer-name">w568w</div>
                            <div class="developer-organization">旦夕</div>
                            <div class="developer-saying">旦夕是一个我的问题</div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/kavinzhao" target="_blank" data-aos="fade-up">
                    <div class="developer-card">
                        <img src="https://avatars.githubusercontent.com/u/12184989" />
                        <div class="developer-text">
                            <div class="developer-work">开发者</div>
                            <div class="developer-displayname">singularity</div>
                            <div class="developer-name">kavinzhao</div>
                            <div class="developer-organization">旦夕</div>
                            <div class="developer-saying">存在还是虚无？</div>
                        </div>

                    </div>
                </a>
                <a href="https://github.com/KYLN24" target="_blank" data-aos="fade-up">
                    <div class="developer-card">
                        <img src="https://avatars.githubusercontent.com/u/54014142" />
                        <div class="developer-text">
                            <div class="developer-work">开发者 公关与联络</div>
                            <div class="developer-displayname">Kylin24Kwok</div>
                            <div class="developer-name">KYLN24</div>
                            <div class="developer-organization">旦夕 树洞</div>
                            <div class="developer-saying">我不会 我不懂 我不知道</div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/hasbai" target="_blank" data-aos="fade-up">
                    <div class="developer-card">
                        <img src="https://avatars.githubusercontent.com/u/34417826" />
                        <div class="developer-text">
                            <div class="developer-work">开发者</div>
                            <div class="developer-displayname">蛤失败</div>
                            <div class="developer-name">hasbai</div>
                            <div class="developer-organization">树洞</div>
                            <div class="developer-saying">凡是过往，皆为序章</div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/dest1n1s" target="_blank" data-aos="fade-up">
                    <div class="developer-card">
                        <img src="https://avatars.githubusercontent.com/u/13075143" />
                        <div class="developer-text">
                            <div class="developer-work">开发者 管理员</div>
                            <div class="developer-displayname">Dest1n1</div>
                            <div class="developer-name">dest1n1</div>
                            <div class="developer-organization">树洞</div>
                            <div class="developer-saying">無謀な夢から始まって</div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/ivanfei-1" target="_blank" data-aos="fade-up">
                    <div class="developer-card">
                        <img src="https://avatars.githubusercontent.com/u/67986259" />
                        <div class="developer-text">
                            <div class="developer-work">开发者</div>
                            <div class="developer-displayname">ivanfei-1</div>
                            <div class="developer-name">ivanfei-1</div>
                            <div class="developer-organization">树洞</div>
                            <div class="developer-saying">All novelty is but oblivion.</div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/Frankstein73" target="_blank" data-aos="fade-up">
                    <div class="developer-card">
                        <img src="https://avatars.githubusercontent.com/u/90556362" />
                        <div class="developer-text">
                            <div class="developer-work">管理员</div>
                            <div class="developer-displayname">Frankstein73</div>
                            <div class="developer-name">Frankstein73</div>
                            <div class="developer-organization">树洞</div>
                            <div class="developer-saying">凡是合乎理性的东西都是现实的；凡是现实的东西都是合乎理性的</div>
                        </div>
                    </div>
                </a>
            </div>

        </div>

        <div id="download-now">
            <button data-aos="fade-up"
                onclick="document.documentElement.scrollTo({top: 0, behavior: 'smooth'})">立即下载</button>
        </div>
 </main>
 <site-footer></site-footer>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import NavBar from '../components/NavBar.vue';
    import SiteFooter from "../components/SiteFooter.vue";
    export default defineComponent({
        name: 'Home',
        components: { NavBar, SiteFooter },
        mounted() {
            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = '/src/assets/home.js';
            document.body.appendChild(script);
        },
    })
</script>

<style lang="less">
    .page {
            width: 100vw;
            overflow: hidden;
        }
    #page-1 {
        --progress-page-1: 0;
        text-align: center;
        height: calc(200vh - 50px);
        #neweast_version_id {
            font-size: 1.2rem;
            vertical-align: top;
        }
        background-color: rgba(
            0,
            0,
            0,
            calc(var(--progress-page-1) * 3.34 - 0.67)
        );
        .hero-container {
            position: -webkit-sticky;
            position: sticky;
            top: 50vh;
            transform: translateY(-50%);
            .app-icon {
                    margin: 3px;
                    transform: scale(calc(var(--progress-page-1) * 10 + 1));
                    opacity: calc(1.67 - var(--progress-page-1) * 3.34);
            }
            .other {
                opacity: calc(1 - 5 * var(--progress-page-1));
                .title {
                    font-size: 4rem;
                    margin: 2px;
                }
                .slogan {
                    font-size: 1.5rem;
                    margin: 2px;
                }
                .btns {
                    display: flex;
                    text-align: center;
                    justify-content: center;
                    flex-flow: row wrap;
                    * {
                        height: 50px;
                        padding: 2px;
                    }
                    .custom-btn {
                        border-radius: 8px;
                        border: 1px solid #a6a6a6;
                        padding: 4px 12px;
                        height: 40px;
                        color: #ffffff;
                        background-color: #000000;
                        // width: 168px;
                        .cb-icon {
                            position: relative;
                            top: 50%;
                            transform: translate(0, -50%);
                            float: left;
                            -webkit-mask-size: 100% 100%;
                            mask-size: 100% 100%;
                            width: 32px;
                            height: 32px;
                            background-size: 32px 32px;
                            -webkit-backface-visibility: hidden;
                            backface-visibility: hidden;
                        }
                        .text {
                            float: left;
                            text-align: left;
                            .l2 {
                                font-size: 0.8rem;
                            }
                        }
                    }
                }
                #danxi-icon {
                    background-image: url(../assets/image/egg-cat.webp);
                    background-repeat:no-repeat;
                    background-size:100% 100%;
                }
                .tips {
                    font-size: 0.8rem;
                    color: #6e6e73;
                    padding-top: 32px;
                }
            }
        }
    }
    #page-2 {
        background-color: #000000;
        // color: #ffffff;
        --device-width: min(95vw, 770px);
        --device-height: calc(var(--device-width) * 1336 / 770);
        --ui-width: calc(var(--device-width) * 640 / 770);
        font-size: 15px;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        h2 {
            color: #6e6e73;
            text-align: center;
            font-size: 3rem;
            font-weight: 600;
            margin: 6rem 0;
            p {
                margin: 5px;
                font-size: 1.5rem;
                color: #fff;
            }
        }
        #iphone {
            position: relative;
            width: var(--device-width);
            height: var(--device-height);
            #hardware {
                width: 100%;
                height: 100%;
                background-image: url(../assets/image/iphone12-case.webp);
                background-size: var(--device-width) var(--device-height);
            }
            #ui {
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                .top-ui {
                    display: block;
                    width: var(--ui-width);
                    height: auto;
                    margin: 70px auto 0;
                }
                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    --progress-page-2: 0;
                    li img {
                        display: block;
                        width: var(--ui-width);
                        height: auto;
                        transform: scale(
                                calc(1.8 - 0.8 * var(--progress-page-2))
                            )
                            translateY(
                                calc(-60px * (1 - var(--progress-page-2)))
                            );
                        opacity: var(--progress-page-2);
                    }
                }
            }
        }
        #page-2-end-blank {
            height: 20vh;
        }
    }
    #page-3 {
        background-color: #000000;
        color: #ffffff;
        padding: 48px 0 0;
        --scrolled-page-3: 0;
        --progress-page-3: 0;
        --imgtrans-x-page-3: 0;
        .hole-img {
            height: 100vh;
            position: relative;
            margin-bottom: 32px;
            h2 {
                position: -webkit-sticky;
                position: sticky;
                top: 50%;
                left: 50%;
                transform: translateY(-120%);
                color: #6e6e73;
                text-align: center;
                font-size: 2rem;
                font-weight: 600;
                margin: 6rem 0;
                opacity: calc(var(--scrolled-page-3) * 50 + 2);
                p {
                    margin: 5px;
                    font-size: 1.5rem;
                    color: #fff;
                    opacity: calc(var(--scrolled-page-3) * 100 + 0.5);
                }
            }
            #hole-logo {
                position: -webkit-sticky;
                position: sticky;
                top: 50%;
                left: 50%;
                // transform: translate(-50%, -50%);
                transform: translateX(
                    calc(var(--imgtrans-x-page-3) * 61.8% - 50%)
                );
                opacity: calc(var(--scrolled-page-3) * 10 + 1);
            }
            #danxi-logo {
                position: -webkit-sticky;
                position: sticky;
                border-radius: 64px;
                top: 50%;
                left: 50%;
                // transform: translate(-50%, -50%);
                // display: none;
                transform: translateX(
                    calc(var(--imgtrans-x-page-3) * (-61.8%) - 50%)
                );
                opacity: calc(var(--scrolled-page-3) * 10 + 0.1);
            }
        }

        .hole-screenshot {
            // height: 100vh;
            width: min(100vw, 700px);
            // display: flex;
            // flex-direction: column;
            align-items: center;
            margin: auto;
            #hole-iphone-head {
                position: -webkit-sticky;
                position: sticky;
                top: 50px;
                width: 100%;
                display: block;
            }
            #hole-screenshot {
                width: 100%;
                display: block;
            }
        }
    }
    #page-4 {
        position: relative;
        color: #ffffff;
        background-color: #000000;
        height: 120vh;
        padding: 200px 0 48px 48px;
        h2 {
            position: -webkit-sticky;
            position: sticky;
            top: 50%;
            transform: translateY(-50%);
            margin: 0 32px;
            width: 38.2vw;
            font-size: 2rem;
            p {
                font-size: 18px;
                color: #6e6e73;
            }
        }
        img {
            position: -webkit-sticky;
            position: sticky;
            top: 50%;
            transform: translate(60vw, -50%);
            height: 60vh;
        }
    }
    #user-comment {
        background-color: #000000;
        color: #ffffff;
        text-align: center;
        padding-top: 192px;
        padding-bottom: 192px;
        h2 {
            color: #6e6e73;
            text-align: center;
            font-size: 3rem;
            font-weight: 600;
            p {
                margin: 5px;
                font-size: 1.5rem;
                color: #fff;
            }
        }
        ul {
            margin: auto;
            list-style-type: none;
            width: min(80%, 960px);
            li {
                border-radius: 24px;
                text-align: left;
                margin-top: 36px;
                padding: 24px;
                border: 3px solid #ffffff;
            }
        }
    }
    #developers {
        background-color: #000000;
        color: #ffffff;
        h2 {
            color: #6e6e73;
            text-align: center;
            font-size: 3rem;
            font-weight: 600;
            p {
                margin: 5px;
                font-size: 1.5rem;
                color: #fff;
            }
        }
        .card-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            padding: 24px 0;
            a {
                text-decoration: none;
                .developer-card {
                    position: relative;
                    width: min(80vh, 240px);
                    border: 2px solid #ffffff;
                    border-radius: 32px;
                    margin: 12px;
                    overflow: hidden;
                    transition: 0.2s;
                    &:hover {
                        transform: scale(1.01);
                        transition: 0.2s;
                        box-shadow: 0px 5px 512px -64px #ffffff;
                    }
                    img {
                        width: 100%;
                    }
                    .developer-text {
                        position: relative;
                        padding: 5px 12px 12px;
                        color: #ffffff;
                        .developer-work {
                            color: #6e6e73;
                            font-size: 0.8rem;
                        }
                        .developer-displayname {
                            font-size: 1.5rem;
                        }
                        .developer-name {
                            color: #6e6e73;
                        }
                        .developer-organization {
                            text-align: right;
                        }
                        .developer-saying {
                            &::before {
                                content: '"';
                                color: #6e6e73;
                                position: -webkit-sticky;
                                position: sticky;
                                left: 0;
                                top: 0;
                                font-size: 3rem;
                            }
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
    #download-now {
        background-color: #000000;
        text-align: center;
        padding: 64px;
        button {
            background-color: #000000;
            border: 1px solid #ffffff;
            color: #ffffff;
            padding: 32px 64px;
            font-size: 1.5rem;
            transition: 0.2s;
            &:hover {
                transform: scale(1.01);
                transition: 0.2s;
                box-shadow: 0px 5px 512px -32px #ffffff;
            }
        }
    }
   
</style>