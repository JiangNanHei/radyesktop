<template>

    <div class = "headerBox">
        <div class="header">
            <div @click="enterhome()" class="logo"><img src = "@/assets/images/logo.png"></div>
            <span class="workbenchtitle">{{this.$store.state.worktitle}}</span>
            <div class="header-right">
                <div class="header-user-con">
                    <div class="demo-input-suffix">
                        <el-input
                            v-model = "workbenipt"
                            placeholder="请输入关键词搜索"
                            prefix-icon="el-icon-search">
                        </el-input>
                    </div>
                    <!-- 登录/个人头像 -->
                    <div class="user-avator">
                        <div v-if="this.$cookie.get('token')" class="useravatorBox">
                            <img src="@/assets/images/img.jpg" />
                            <div class="positionBox" style="width:240px">
                                <div class="home_menu">
                                    <div class="VipBox">
                                        <div class="vip_left">
                                            <div class="vipText">免费版</div>
                                        </div>
                                        <div class="vip_right">
                                            <div class="update_vip">
                                                <p>升级续费</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="btn_list blueitem">
                                        <i class="iconfont icon-shangpin"></i>
                                        <div class="btn_list_right">
                                            <a href="javascript:;" class="fe_cursor">
                                                <span>工作台</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="btn_list blueitem">
                                        <i class="iconfont icon-shangpin"></i>
                                        <div class="btn_list_right">
                                            <a href="javascript:;" class="fe_cursor">
                                                <span>监测抖音号</span>
                                            </a>
                                            <a href="javascript:;" class="fe_cursor">
                                                <span>视频监测</span>
                                            </a>
                                            <a href="javascript:;" class="fe_cursor">
                                                <span>直播监测</span>
                                            </a>
                                            <a href="javascript:;" class="fe_cursor">
                                                <span>监测商品</span>
                                            </a>
                                            <a href="javascript:;" class="fe_cursor">
                                                <span>授权抖音号</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="btn_list blueitem">
                                        <i class="iconfont icon-shangpin"></i>
                                        <div class="btn_list_right">
                                            <a href="javascript:;" class="fe_cursor">
                                                <span>监测抖音号</span>
                                            </a>
                                            <a href="javascript:;" class="fe_cursor">
                                                <span>视频监测</span>
                                            </a>
                                            <a href="javascript:;" class="fe_cursor">
                                                <span>直播监测</span>
                                            </a>
                                            <a href="javascript:;" class="fe_cursor">
                                                <span>监测商品</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="btn_list blueitem">
                                        <i class="iconfont icon-shangpin"></i>
                                        <div class="btn_list_right">
                                            <a href="javascript:;" class="fe_cursor">
                                                <span>监测抖音号</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="btn_list blueitem">
                                        <i class="iconfont icon-shangpin"></i>
                                        <div class="btn_list_right">
                                            <a href="javascript:;" class="fe_cursor">
                                                <span>监测抖音号</span>
                                            </a>
                                            <a href="javascript:;" class="fe_cursor">
                                                <span>视频监测</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div @click="quitlogin()" class="logout_but">
                                        <i class="iconfont icon-shangpin"></i>             
                                        退出登录
                                    </div>
                                </div>
                            </div>
                        </div>
                        <el-button v-if="!this.$cookie.get('token')" class="loginButann" @click="dialogchange()" type="primary">登录/注册</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            workbenipt : '',
            collapse: false,
            fullscreen: false,
            name: 'linxin',
            message: 2,

            index : null,
        };
    },
    computed: {
        username() {
            let username = localStorage.getItem('ms_username');
            return username ? username : this.name;
        }
    },
    methods: {
        enterhome(){
            this.$router.push('/')
        },
        // 控制login显示
        dialogchange(){
            this.$store.commit('loginflagchange', true)
        },
        quitlogin(){
          this.$http({
                url: "/system/auth/logout",
                method: "POST",
                data : this.$http.adornData({
                    
                },true,'form')
            }).then(({data}) => {
                if(data.status == 200){
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
.headerBox{
    width:100%;
    background: #161823;
    position: fixed;
    z-index:999;
    // border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 20px #072240;
    background: rgb(28, 31, 42);
}
.header {
    position: relative;
    box-sizing: border-box;
    height: 60px;
    font-size: 22px;
    color: #fff;
    background: #072240;
}
.workbenchtitle{
    margin-left: 10px;
    line-height: 60px;
    font-size: 16px;
}
.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 60px;
}
.header .logo {
    cursor: pointer;
    float: left;
    width: 214px;
    height:100%;
    line-height: 60px;
    padding:0 25px;
    img{
        height:100%;
        margin-right:100px;
    }
    i{
        font-size: 16px;
        color: #fff;
        position: absolute;
        top: 0;
        left: 180px;
    }
}
.header-right {
    float: right;
    padding-right: 10px;
}
/deep/.header-user-con {
    display: flex;
    height: 60px;
    align-items: center;
    .demo-input-suffix{
        margin-right: 25px;
        input {
            width: 260px;
            height: 36px;
            border-radius: 25px;
            background: #0D2F55;
            font-size: 14px;
            color: #999;
            border: 1px solid #999;
            padding-left: 45px;
        }
        i{
            line-height: 36px;
            font-size: 16px;
            margin-left: 10px;
        }
    }
}
.user-name {
    margin-left: 10px;
}
.user-avator {
    height: 100%;
    position: relative;
    margin-left: 20px;
    .el-button{
        height: 40px;
        margin: 10px 10px;
        padding: 12px 15px!important;
        min-width: 115px;
        border-radius: 20px;
        background-color: #2997ff;
        border-color: #2997ff;
        background-image: -webkit-linear-gradient(45deg,#1d6dff,#0dafff);
        /deep/span{
            line-height: 1;
            white-space: nowrap;
            cursor: pointer;
            text-align: center;
            font-size: 14px;
            font-weight: 500;
        }
    }
    .useravatorBox{
        height: 100%;
        width: 100%;
        >img{
            cursor: pointer;
            margin-top: 10px;
        }
        &:hover{
            color:#2997ff !important;
            >i{
                color:#2997ff !important;
            }
            .positionBox{
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
.el-menu-demo{
    position: absolute;
    left:12%;
}
.el-menu.el-menu--horizontal{
    border:none;
}
.el-menu--horizontal{
    .el-menu{
        .el-menu-item{
            // display: inline-block;
        }
        .menuBox{
                width: 100%;
                margin: 0 0;
                margin-bottom: 30px;
            .el-menu-item{
                float: left;
            }
            >a{
                width: 50%;
                text-align: center;
                display: inline-block;
                p{
                    width: 54px;
                    height: 54px;
                    border-radius: 12px;
                    background-color: hsla(0,0%,100%,.05);
                    text-align: center;
                    padding: 2px;
                    margin: 10px auto 5px;
                    i{
                        font-size: 36px;
                        line-height: 54px;
                        position: relative;
                        top: -2px;
                    }
                }
                span{
                    font-size: 15px;
                    color: #fff;
                    margin: 5px auto;
                    display: inline-block;
                }
            }
        }
        .floatBox{
            float: left;
        }
    }
}

.elmenuitemBox{
    border:none !important;
    position: relative;
    >i{
        display: inline-block;
        margin-top: -3px;
        margin-left: 4px;
        color: hsla(0, 0%, 100%, 0.8);
        font-weight: 400;
    }
    &:hover{
        color:#2997ff !important;
        >i{
            color:#2997ff !important;
        }
        .positionBox{
            animation: fadeio .3s linear;
            display: block;
        }
    }
}
.dn{
    display: none;
}
.positionBox{
    display: none;
    // animation: fadeout 2s infinite;
    transition: all 1s linear;
    transform-origin: center top;
    z-index: 2147;
    position: absolute;
    top: 60px;
    right: 0px;
    background: #3a404f;
    min-width: 150px;
    border: 1px solid hsla(0,0%,100%,0);
    // padding: 12px;
    z-index: 2000;
    color: #fff;
    text-align: justify;
    font-size: 14px;
    -webkit-box-shadow: 0 2px 20px 0 rgba(0,0,0,.2);
    box-shadow: 0 2px 20px 0 rgba(0,0,0,.2);
    word-break: break-all;
    border-radius: 8px;
    &::after{
        content: "";
        border-bottom: 9px solid #3a404f;
        border-right: 6px solid transparent;
        border-left: 6px solid transparent;
        display: block;
        height: 0;
        width: 0;
        position: absolute;
        top: -10px;
        right: 12px;
    }
    .VipBox{
        width: 100%;
        height: 54px;
        background: #4c4b4b;
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
        padding: 10px 12px;
        .vip_left{
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
            .vipText{
                font-size: 15px;
                font-family: PingFang SC Bold,PingFang SC Bold-Bold;
                font-weight: 700;
                color: #fbc16d;
            }
        }
        .vip_right{
            flex-shrink: 0;
            .update_vip{
                width: 80px;
                height: 24px;
                border-radius: 12px;
                background: linear-gradient(45deg,#fbcb6f,#fc8c63);
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
    .btn_list{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding: 17px 0 0;
        border-bottom: 1px solid #474b58;
        width: 100%;
        .btn_list_right{
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
        i{
            top: -1px;
            margin-right: 12px;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            position: relative;
        }
        div{
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
            a{
                width: 50%;
                margin-bottom: 15px;
                ont-size: 14px;
                font-weight: 500;
                color: #d8d9dc;
                margin-bottom:15px;
                span{
                    &:hover{
                        color: #2997ff;
                    }
                }
            }
        }
        .blueitem{
            width: 50% !important;
            margin-bottom: 15px;
            font-size: 14px;
            font-weight: 500;
            color: #d8d9dc;
            a{

            }
            i{
                margin-right: 12px;
                -ms-flex-negative: 0;
                flex-shrink: 0;
                position: relative;
                top: -1px;
                font-weight: 400;
                font-size: 16px;
            }
            span{
                cursor: pointer;
            }
        }
    }
    .logout_but{
        width: 100px;
        height: 24px;
        background: #555c71;
        border-radius: 12px;
        font-size: 13px;
        font-weight: 700;
        text-align: left;
        color: #d8d9dc;
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
        i{
            font-size: 17px;
            font-weight: 400;
        }
        &:hover{
            background: hsla(0,0%,100%,.4);
        }
    }
}
.fenzhiBox{
    padding:0;
}
.home_menu{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    padding: 8px 15px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    .home_menu_main{
        width: 100%;
        margin: 0 0;
        margin-bottom: 30px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        .fe_cursor{
            width: 50%;
            text-align: center;
            display: inline-block;
            line-height: 20px;
            &:hover{
                color: #2997ff;
                span{
                    color: #2997ff;
                }
                i{
                    background-color: hsla(0,0%,100%,.2);
                }
            }
            p{
                width: 54px;
                height: 54px;
                border-radius: 12px;
                background-color: hsla(0,0%,100%,.05);
                text-align: center;
                padding: 2px;
                margin: 10px auto 5px;
                i{
                    color: hsla(0,0%,100%,.8);
                    font-size: 36px;
                    line-height: 54px;
                    position: relative;
                    top: -2px;
                }
            }
            span{
                font-size: 15px;
                color: #fff;
                margin: 5px auto;
                display: inline-block;
            }
        }
    }
    .home_menu_list{
        .fe_cursor{
            display: block;
            line-height: 45px;
            font-size: 15px;
            color: hsla(0,0%,100%,.8);
            &:hover{
                color: #2997ff;
                span{
                    color: #2997ff;
                }
                i{
                    color: #2997ff;
                }
            }
            cursor: pointer;
            i{
                color: hsla(0,0%,100%,.8);
                margin-right: 3px;
                font-weight: 400;
            }
            span{
                font-size: 15px;
                color: #fff;
                display: inline-block;
            }
        }
    }
}
</style>
