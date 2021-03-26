<template>
    <div :class="sidebarstatus == true?'box clearfix':'box now clearfix'">

        <div @click="stateManagement"
            :class="sidebarstatus == false?'setting_down_box setting_down_box_tow':'setting_down_box'">
            <i :class="sidebarstatus == true?'iconfont icon-shouqi- shos':'iconfont icon-ziyuan shos'"></i>
        </div>
        <el-scrollbar class="sidebar" style="height:100% ">
            <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" :default-openeds=itemslose
                router>
                <template v-for="item in items">
                    <template v-if="item.subs">
                        <el-submenu :index="item.index" :key="item.index">
                            <template slot="title">
                                <i :class="item.icon"></i>
                                <span slot="title">{{ item.title }}</span>
                            </template>
                            <template v-for="subItem in item.subs">
                                <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                    <template slot="title">{{ subItem.title }}</template>
                                    <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i"
                                        :index="threeItem.index">{{ threeItem.title }}</el-menu-item>
                                </el-submenu>
                                <el-menu-item v-else class="listitem" :index="subItem.index" :key="subItem.index">
                                    {{ subItem.title }}
                                </el-menu-item>
                            </template>
                        </el-submenu>
                    </template>
                    <template v-else>
                        <el-menu-item :index="item.index" :key="item.index">
                            <div class="nosubsBox">
                                <i :class="item.icon"></i>
                                <span slot="title">{{ item.title }}</span>
                            </div>
                        </el-menu-item>
                    </template>
                </template>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
    import bus from '@/components/common/bus';
    export default {
        data() {
            return {
                sidebarstatus: true,
                itemslose: ['1', '2', '3', '4'],
                collapse: false,
                items: [{
                        icon: 'iconfont icon-gongzuotai',
                        index: '/workbench_taobao',
                        title: '淘宝工作台',
                    },
                    {
                        icon: 'iconfont icon-zhibo',
                        index: '1',
                        title: '未知',
                        subs: [{
                            // index: '/',
                            title: '未知',
                        }, ]
                    },
                    {
                        icon: 'iconfont icon-zhibo',
                        index: '2',
                        title: '未知',
                        subs: [{
                            // index: '/',
                            title: '未知',
                        }, ]
                    },
                    {
                        icon: 'iconfont icon-zhibo',
                        index: '3',
                        title: '未知',
                        subs: [{
                            // index: '/',
                            title: '未知',
                        }, ]
                    },
                    {
                        icon: 'iconfont icon-zhibo',
                        index: '4',
                        title: '未知',
                        subs: [{
                            // index: '/',
                            title: '未知',
                        }, ]
                    },
                ]
            };
        },
        computed: {
            onRoutes() {
                return this.$route.path.replace('/', '');
            }
        },
        created() {
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
                bus.$emit('collapse-content', msg);
            });
        },
        methods: {
            stateManagement() {
                this.sidebarstatus = !this.sidebarstatus;
            },
        },
    };
</script>

<style lang="less" scoped>
    /deep/.el-scrollbar__bar {
        display: none;
    }

    .box {
        z-index: 99;
        height: 100%;
        position: relative;
        display: block;
        float: left;
        width: 214px;
        padding: 0px;
        color: #fff;
        animation: cebianl .3s ease 1 forwards;
        transition: all .3s linear;

        .setting_down_box {
            cursor: pointer;
            width: 15px;
            height: 80px;
            position: absolute;
            top: 50%;
            right: 0px;
            z-index: 999;
            transform: translateY(-50%);
            background: #072240;

            .shos {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
            }
        }

        .setting_down_box_tow {
            position: fixed;
            right: -15px;
        }
    }

    .now {
        width: 0px !important;
    }

    .sidebar {
        position: relative;
        display: block;
        float: left;
        overflow-y: scroll;
        width: 100%;
        padding: 0px;
        color: #fff;
        background: #051C36;
        overflow-x: hidden;
        overflow-y: auto;
        animation: cebianl .3s ease 1 forwards;
        transition: all .3s linear;

        >.sidebar-el-menu {
            border-right: 0px;
            padding: 0px;

            >.el-submenu {
                border-bottom: 1px solid hsla(0, 0%, 100%, .1) !important;
                padding: 0px 15px;
                margin: 0 5px;
            }

            >.el-menu-item {
                margin: 0 5px !important;
                border-bottom: 1px solid hsla(0, 0%, 100%, .1) !important;
                // padding: 2px 0 !important;
            }

        }

        .el-menu {
            border: none;
        }
    }

    .sidebar::-webkit-scrollbar {
        width: 0;
    }

    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 250px;
    }

    .sidebar>ul {
        height: 100%;
    }

    /deep/.sidebar-el-menu {
        width: 100% !important;
        background: #051C36;
        padding: 0 10px;
        color: #fff;

        >li {
            border-bottom: 1px solid hsla(0, 0%, 100%, .1);
            padding: 2px 0;
            background: none;

            &:last-child {
                border: none;
            }
        }

        .el-menu-item {
            height: 50px;
            line-height: 50px;
            padding: 0 !important;
            margin: 0 !important;

            .nosubsBox {
                height: 50px;
                // background: #303441;
                // border-radius: 5px;
            }

            i {
                color: #fff !important;
                font-weight: 600;
                font-size: 16px;
                margin-right: 10px;
                vertical-align: bottom;
            }

            span {
                color: #fff !important;
                font-weight: 600;
                font-size: 14px;
            }
        }

        >.el-menu-item {
            border-bottom: 1px solid hsla(0, 0%, 100%, 0.1) !important;
            padding: 0 !important;

            // background: #303441  !important;
            &:hover {
                background: none;
            }
        }

        .el-submenu__title {
            height: 50px;
            line-height: 50px;
            padding: 0px !important;
            font-size: 14px;
            font-weight: 600;
            height: 50px;
            line-height: 50px;
            color: #fff !important;

            .el-icon-arrow-down {
                font-size: 14px;
                font-weight: 400;

                &:before {
                    font-family: 'iconfont';
                    content: "\e633";
                }
            }

            i {
                color: #fff !important;
                font-weight: 600;
                // font-size: 20px;
                margin-right: 10px;
                vertical-align: bottom;
            }

            p {
                color: #fff !important;
                font-weight: 600;
                font-size: 14px;
            }

            &:hover {
                background: none;
            }
        }

        .el-menu .el-submenu__title {
            font-weight: 400 !important;
            font-size: 14px;
            text-align: left;
            padding-left: 14px;
            color: #ccc !important;
            cursor: pointer;

            .el-icon-arrow-down {
                font-size: 14px;
                font-weight: 400;

                &:before {
                    font-family: 'iconfont';
                    content: "\e642";
                }
            }
        }

        .el-menu--inline {
            background: none;
        }
    }

    /deep/.el-menu--inline {
        padding-left: 30px;
        display: flex;
        flex-flow: column;

        .listitem {
            display: inline-block;
            min-width: 0;
            text-align: left;
            font-size: 13px;
            height: 30px;
            line-height: 30px;
            text-align: left;
            padding-left: 14px;
            color: #ccc !important;
            cursor: pointer;

            &:hover {
                background: none;
                color: #2997ff !important;
            }

            &:focus {
                background: none !important;
            }
        }
    }

    // 第一层箭头 旋转
    /deep/.el-scrollbar__view>.sidebar-el-menu>.el-submenu.is-opened>.el-submenu__title .el-submenu__icon-arrow {
        transform: rotateZ(90deg) !important;
    }

    // 第2层箭头 旋转
    /deep/.el-submenu.is-opened>.el-submenu__title .el-submenu__icon-arrow {
        transform: rotateZ(180deg) !important;
    }
</style>