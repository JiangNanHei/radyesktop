<template>

    <div class="headerBox">
        <div class="header containernav">
            <div class="logo"><img src="@/assets/images/logo.png"></div>

                <el-menu 
                class="el-menu-demo"
                mode="horizontal" 
                router
                :default-active="onRoutes"
                @select="selectMenu"
                >
                    <el-submenu :popper-append-to-body="false" v-for="(item,i) in items" :key="i" :index="'#'+item.index">
                        <template slot="title">{{item.title}}</template>
                        <el-menu-item  v-for="(item,i) in item.subs" :key="i" :index="'#'+item.index">{{item.title}}</el-menu-item>
                    </el-submenu>

                </el-menu>

            <div class="header-right">
                <div class="header-user-con">
                    <!-- 登录/个人头像 -->
                    <div class="user-avator">
                        <div v-if="this.$cookie.get('token')" class="useravatorBox">
                            <img src="@/assets/images/img.jpg" />
                            <div class="positionBox" style="width:240px">
                                <div class="home_menu">
                                    <div class="VipBox">
                                        <div class="gozuot">
                                            <div class="vip_left">
                                                <div class="vipText">免费版</div>
                                            </div>
                                            <div class="vip_right">
                                                <div class="update_vip">
                                                    <p>升级续费</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <router-link tag="a" target="_blank" :to="{path:'/workbench'}" class="btn_list blueitem">
                                        <!-- <i class="iconfont icon-shangpin"></i> -->
                                        <div class="btn_list_right">
                                            <a href="javascript:;" class="fe_cursor">
                                                <span>个人中心</span>
                                            </a>
                                        </div>
                                    </router-link>
                                    <router-link tag="a" target="_blank" :to="{path:'/pay'}" class="btn_list blueitem">
                                        <!-- <i class="iconfont icon-shangpin"></i> -->
                                        <div class="btn_list_right">
                                            <a href="javascript:;" class="fe_cursor">
                                                <span>VIP中心</span>
                                            </a>
                                        </div>
                                    </router-link>
                                    <router-link tag="a" target="_blank" :to="{path:'/meattention'}" class="btn_list blueitem">
                                        <!-- <i class="iconfont icon-shangpin"></i> -->
                                        <div class="btn_list_right">
                                            <a href="javascript:;" class="fe_cursor">
                                                <span>我的关注</span>
                                            </a>
                                        </div>
                                    </router-link>
                                    <router-link tag="a" target="_blank" :to="{path:'/workbench'}" class="btn_list blueitem">
                                        <!-- <i class="iconfont icon-shangpin"></i> -->
                                        <div class="btn_list_right">
                                            <a href="javascript:;" class="fe_cursor">
                                                <span>我的收藏</span>
                                            </a>
                                        </div>
                                    </router-link>
                                    <router-link tag="a" target="_blank" :to="{path:'/meorderform'}" class="btn_list blueitem">
                                        <!-- <i class="iconfont icon-shangpin"></i> -->
                                        <div class="btn_list_right">
                                            <a href="javascript:;" class="fe_cursor">
                                                <span>我的订单</span>
                                            </a>
                                        </div>
                                    </router-link>
                                    <router-link tag="a" target="_blank" :to="{path:'/personalsetting'}" class="btn_list blueitem">
                                        <!-- <i class="iconfont icon-shangpin"></i> -->
                                        <div class="btn_list_right">
                                            <a href="javascript:;" class="fe_cursor">
                                                <span>个人设置</span>
                                            </a>
                                        </div>
                                    </router-link>
                                    <div @click="quitlogin()" class="logout_but">
                                        <i class="iconfont icon-guanji"></i>
                                        <span>退出登录</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <el-button v-if="!this.$cookie.get('token')" class="loginButann" @click="dialogchange()" type="primary">登录/注册</el-button>
                    </div>
                    <el-button type="primary" @click="tostudio()">临时登录</el-button>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                fullscreen: false,
                name: 'linxin',
                message: 2,

                index: null,

                sidebarstatus: true,
                collapse: false,
                items: [
                    {
                        icon: 'iconfont icon-zhibo',
                        index: '1',
                        title: '抖音平台',
                        subs: [{
                                index: '/workbenchtiktokpagehome',
                                title: '抖音平台',
                            },
                            {
                                index: '/workbenchquickpagehome',
                                title: '快手平台',
                            },
                            {
                                index: '/workbenchtaobaopagehome',
                                title: '淘宝平台',
                            },
                        ]
                    },
                    {
                        icon: 'iconfont icon-zhibo',
                        index: '2',
                        title: '直播',
                        subs: [
                            {
                                index: '/real',
                                title: '实时直播榜',
                            },
                            {
                                index: '/fashion',
                                title: '热门直播间',
                            },
                            {
                                index: '/sellgoods',
                                title: '直播带货榜',
                            },
                            {
                                index: '/drainage',
                                title: '直播引流榜',
                            },
                            {
                                index: '/broadcastsearch',
                                title: '直播搜索',
                            },
                        ]
                    },
                    {
                        icon: 'iconfont icon-zhibo',
                        index: '3',
                        title: '达人',
                        subs: [
                            {
                                index: '/talentlist',
                                title: '达人榜',
                            },
                            {
                                index: '/talentsearch',
                                title: '达人搜索',
                            },
                        ]
                    },
                    {
                        icon: 'iconfont icon-zhibo',
                        index: '4',
                        title: '电商',
                        subs: [
                            {
                                index: '/ecommercemarket',
                                title: '电商销售榜',
                            },
                            {
                                index: '/ecommercegenius',
                                title: '电商牛人榜',
                            },
                            {
                                index: '/ecommercesearch',
                                title: '商品搜索',
                            },
                        ]
                    },
                    {
                        icon: 'iconfont icon-zhibo',
                        index: '5',
                        title: '小店',
                        subs: [
                            {
                                index: '/tinyshopwarehouse',
                                title: '小店库',
                            },
                            {
                                index: '/tinyshopranking',
                                title: '小店排行榜',
                            },
                        ]
                    },
                    {
                        icon: 'iconfont icon-zhibo',
                        index: '6',
                        title: '工具',
                        subs: [
                            {
                                index: '/videosdewatering',
                                title: '视频去水印',
                            },
                            {
                                index: '/extractvideo',
                                title: '提取视频',
                            },
                            {
                                index: '/shortvideo',
                                title: '短视频素材库',
                            },
                            {
                                index: '/accountvaluation',
                                title: '账号估值',
                            },
                            {
                                index: '/sensitivewords',
                                title: '敏感词查询',
                            },
                        ]
                    },
                    {
                        icon: 'iconfont icon-zhibo',
                        index: '7',
                        title: '资源库',
                        subs: [
                            {
                                index: '/businesscooperation',
                                title: '商业合作资源',
                            },
                            {
                                index: '/premiumaccount',
                                title: '优质账号资源',
                            },
                        ]
                    },
                ]
            };
        },
        computed: {
            username() {
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            },
            onRoutes() {
                return this.$route.path.replace('/', '');
            }
        },
        methods: {
            // 打开新页面跳转工作台
            tostudio(){
                let link = this.$router.resolve({
                    path: '/workbench',
                });
                window.open(link.href, '_blank')
            },
            // 打开新页面进行跳转
            selectMenu(index, indexPath) {
                console.log(index)
                console.log(indexPath)
                let link = this.$router.resolve({
                    path: index.replace("#", ""),
                });
                window.open(link.href, '_blank')
            },
            // 控制login显示
            dialogchange() {
                this.$store.commit('loginflagchange', true)
            },
            // 退出登录
            quitlogin() {
                this.$http({
                    url: "/system/auth/logout",
                    method: "POST",
                    data: this.$http.adornData({

                    }, true, 'form')
                }).then(({
                    data
                }) => {
                    console.log(data)
                    if (data.status == 200) {
                        this.$cookie.remove('token')
                        this.$message.success('退出成功');
                        window.location.reload()
                    }

                }).catch(err => {
                    console.log(err)
                })
            },
        },
        mounted() {
            // if (document.body.clientWidth < 1500) {
            //     this.collapseChage();
            // }
        }
    };
</script>
<style lang="less" scoped>
    .headerBox {
        width: 100%;
        background: #161823;
        position: fixed;
        z-index: 999;
    }

    .header {
        position: relative;
        box-sizing: border-box;
        height: 60px;
        font-size: 22px;
        color: #343436;
        background: #161823;
    }

    .collapse-btn {
        float: left;
        padding: 0 21px;
        cursor: pointer;
        line-height: 60px;
    }

    .header .logo {
        float: left;
        // width: 250px;
        height: 100%;
        line-height: 60px;
        cursor: pointer;
        img {
            height: 100%;
        }
    }

    .header-right {
        float: right;
        // padding-right: 50px;
    }

    .header-user-con {
        display: flex;
        height: 60px;
        align-items: center;
    }

    .btn-fullscreen {
        transform: rotate(45deg);
        margin-right: 5px;
        font-size: 24px;
    }

    .btn-fullscreen {
        position: relative;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 15px;
        cursor: pointer;
    }

    .user-name {
        margin-left: 10px;
    }

    .user-avator {
        height: 100%;
        position: relative;
        margin-left: 20px;

        .el-button {
            height: 40px;
            margin: 10px 10px;
            padding: 12px 15px !important;
            min-width: 115px;
            border-radius: 20px;
            background-color: #2997ff;
            border-color: #2997ff;
            background-image: -webkit-linear-gradient(45deg, #1d6dff, #0dafff);

            /deep/span {
                line-height: 1;
                white-space: nowrap;
                cursor: pointer;
                text-align: center;
                font-size: 14px;
                font-weight: 500;
            }
        }

        .useravatorBox {
            height: 100%;
            width: 100%;

            >img {
                cursor: pointer;
                margin-top: 10px;
            }

            &:hover {
                color: #2997ff !important;

                >i {
                    color: #2997ff !important;
                }

                .positionBox {
                    animation: fadeio .3s linear;
                    display: block;
                }
            }
        }

    }

    .user-avator img {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .el-dropdown-link {
        color: #fff;
        cursor: pointer;
    }

    .el-dropdown-menu__item {
        text-align: center;
    }

    // 导航条样式
    /deep/.el-menu-demo {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        background: #161823;
        .el-submenu{
            position: relative;
            .el-submenu__title{
                position: relative;
                color:#fff;
                i{
                    color: #fff;
                }

                &:hover{
                    background: #072248;
                }
            }
            .el-menu--horizontal{
                position: absolute !important;
                top: 70px !important;
                border: none;
                .el-menu{
                    margin: 0px;
                    padding: 0px;
                    border-radius: 10px;
                    background: #0C2E55;
                    &::after {
                        content: "";
                        border-bottom: 9px solid #0C2E55;
                        border-right: 6px solid transparent;
                        border-left: 6px solid transparent;
                        display: block; //这个属性一定要加，如果不使用绝对定位的话
                        height: 0;
                        width: 0;
                        position: absolute;
                        top: -9px;
                        left: 20px;
                    }
                    .el-menu-item{
                        background: #0C2E55;
                        padding: 0 20px;
                        height: 50px;
                        line-height: 50px;
                        &:first-child{
                            border-radius: 10px 10px 0 0;
                        }
                        &:last-child{
                            border-radius: 0 0 10px 10px;
                        }
                        &:hover{
                            color:#fff;
                            background: #1C4778;
                        }
                    }
                }
            }
        }
    }

    .el-menu.el-menu--horizontal {
        border: none;
    }
    .dn {
        display: none;
    }

    .positionBox {
        display: none;
        // animation: fadeout 2s infinite;
        transition: all 1s linear;
        transform-origin: center top;
        z-index: 2147;
        position: absolute;
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
        background: #0C2E55;
        min-width: 150px;
        border: 1px solid hsla(0, 0%, 100%, 0);
        z-index: 2000;
        color: #fff;
        text-align: justify;
        font-size: 14px;
        -webkit-box-shadow: 0 2px 20px 0 rgba(0, 0, 0, .2);
        box-shadow: 0 2px 20px 0 rgba(0, 0, 0, .2);
        word-break: break-all;
        border-radius: 8px;
        padding-bottom: 20px;
        &::after {
            content: "";
            border-bottom: 9px solid #3a404f;
            border-right: 6px solid transparent;
            border-left: 6px solid transparent;
            display: block; //这个属性一定要加，如果不使用绝对定位的话
            height: 0;
            width: 0;
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
        }

        .VipBox {
            width: 100%;
            padding: 10px 12px;
            .gozuot{
                padding: 10px 12px;
                background: #3C404B;
                width: 100%;
                
                height: 54px;
                
                border-radius: 4px;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
                
            }
            .vip_left {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;

                .vipText {
                    font-size: 15px;
                    font-family: PingFang SC Bold, PingFang SC Bold-Bold;
                    font-weight: 700;
                    color: #fbc16d;
                }
            }

            .vip_right {
                flex-shrink: 0;

                .update_vip {
                    width: 80px;
                    height: 24px;
                    border-radius: 12px;
                    background: linear-gradient(45deg, #fbcb6f, #fc8c63);
                    font-size: 13px;
                    font-weight: 700;
                    text-align: left;
                    color: #fff;
                    cursor: pointer;
                    line-height: 23px;
                    text-align: center;
                }
            }
        }

        .btn_list {
            cursor: pointer;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            width: 100%;
            transition:all .5s;
            cursor: pointer;
            padding: 0 20px 0 20px;
            height: 50px;
            line-height: 50px;
            &:hover{
                background: #1C4778;
            }
            .btn_list_right {
                -webkit-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
            }

            i {
                top: -1px;
                margin-right: 12px;
                -ms-flex-negative: 0;
                flex-shrink: 0;
                position: relative;
            }

            div {
                -webkit-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;

                a {
                    width: 50%;
                    margin-bottom: 15px;
                    font-weight: 500;
                    color: #d8d9dc;
                    margin-bottom: 15px;

                    span {
                        cursor: pointer;

                        &:hover {
                            color: #2997ff;
                        }
                    }
                }
            }

            .blueitem {
                width: 50% !important;
                margin-bottom: 15px;
                font-weight: 500;
                color: #d8d9dc;

                a {}

                i {
                    margin-right: 12px;
                    -ms-flex-negative: 0;
                    flex-shrink: 0;
                    position: relative;
                    top: -1px;
                    font-weight: 400;
                    font-size: 16px;
                }

                span {
                    cursor: pointer;
                }
            }
        }

        .logout_but {
            width: 55%;
            padding: 5px 0px;
            background: #204773;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 500;
            text-align: left;
            color: #fff;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            margin: 16px auto 4px;
            cursor: pointer;

            i {
                font-size: 17px;
                font-weight: 400;
                font-size: 24px;
            }
            span{
                margin-left: 10px;
            }
            &:hover {
                background: hsla(0, 0%, 100%, .4);
            }
        }
    }

    /deep/.fe_cursor {
        pointer-events: none;
    }
    /deep/.el-submenu.is-active .el-submenu__title{
        border:none !important;
    }
</style>