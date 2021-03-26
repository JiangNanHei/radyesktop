<template>

    <div class="headerBox">
        <div class="header containernav">
            <div class="logo"><img src="@/assets/images/logo.png"></div>
            <el-menu class="el-menu-demo" mode="horizontal" 
                router
                :default-openeds=itemslose
                :default-active="onRoutes"
                background-color="#161823" 
                text-color="#fff"
                active-text-color="#fff">
                <!-- <el-menu-item class="elmenuitemBox" index="98">抖音平台<i class="iconfont icon-xiajiantou"></i>
                    <div class="positionBox" style="width:450px">
                        <div class="home_menu">
                            <div class="home_menu_main">
                                <a href="javascript:;" class="fe_cursor">
                                    <p><i class="iconfont icon-shangpin"></i></p>
                                    <span>实时直播榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <p><i class="iconfont icon-shangpin"></i></p>
                                    <span>爆款直播间</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <p><i class="iconfont icon-shangpin"></i></p>
                                    <span>直播流量大盘</span>
                                </a>
                            </div>
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播观众喜好</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播分享榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>监测直播</span>
                                </a>
                            </div>
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>视频引流榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>音浪榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播热销商品榜</span>
                                </a>
                            </div>
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播带货榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>PK涨粉榜</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </el-menu-item>
                <el-menu-item class="elmenuitemBox" index="98">直播<i class="iconfont icon-xiajiantou"></i>
                    <div class="positionBox" style="width:450px">
                        <div class="home_menu">
                            <div class="home_menu_main">
                                <a href="javascript:;" class="fe_cursor">
                                    <p><i class="iconfont icon-shangpin"></i></p>
                                    <span>实时直播榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <p><i class="iconfont icon-shangpin"></i></p>
                                    <span>爆款直播间</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <p><i class="iconfont icon-shangpin"></i></p>
                                    <span>直播流量大盘</span>
                                </a>
                            </div>
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播观众喜好</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播分享榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>监测直播</span>
                                </a>
                            </div>
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>视频引流榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>音浪榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播热销商品榜</span>
                                </a>
                            </div>
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播带货榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>PK涨粉榜</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </el-menu-item>
                <el-menu-item class="elmenuitemBox" index="98">小店<i class="iconfont icon-xiajiantou"></i>
                    <div class="positionBox" style="width:450px">
                        <div class="home_menu">
                            <div class="home_menu_main">
                                <a href="javascript:;" class="fe_cursor">
                                    <p><i class="iconfont icon-shangpin"></i></p>
                                    <span>实时直播榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <p><i class="iconfont icon-shangpin"></i></p>
                                    <span>爆款直播间</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <p><i class="iconfont icon-shangpin"></i></p>
                                    <span>直播流量大盘</span>
                                </a>
                            </div>
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播观众喜好</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播分享榜</span>
                                </a>
                            </div>
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>视频引流榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>音浪榜</span>
                                </a>
                            </div>
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播带货榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>PK涨粉榜</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </el-menu-item>
                <el-menu-item class="elmenuitemBox" index="98">工具<i class="iconfont icon-xiajiantou"></i>
                    <div class="positionBox" style="width:450px">
                        <div class="home_menu">
                            <div class="home_menu_main">
                                <a href="javascript:;" class="fe_cursor">
                                    <p><i class="iconfont icon-shangpin"></i></p>
                                    <span>实时直播榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <p><i class="iconfont icon-shangpin"></i></p>
                                    <span>爆款直播间</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <p><i class="iconfont icon-shangpin"></i></p>
                                    <span>直播流量大盘</span>
                                </a>
                            </div>
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播观众喜好</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播分享榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>监测直播</span>
                                </a>
                            </div>
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>视频引流榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>音浪榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播热销商品榜</span>
                                </a>
                            </div>
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播带货榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>PK涨粉榜</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </el-menu-item>
                <el-menu-item class="elmenuitemBox" index="98">服务<i class="iconfont icon-xiajiantou"></i>
                    <div class="positionBox" style="width:450px">
                        <div class="home_menu">
                            <div class="home_menu_main">
                                <a href="javascript:;" class="fe_cursor">
                                    <p><i class="iconfont icon-shangpin"></i></p>
                                    <span>实时直播榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <p><i class="iconfont icon-shangpin"></i></p>
                                    <span>爆款直播间</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <p><i class="iconfont icon-shangpin"></i></p>
                                    <span>直播流量大盘</span>
                                </a>
                            </div>
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播观众喜好</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播分享榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>监测直播</span>
                                </a>
                            </div>
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>视频引流榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>音浪榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播热销商品榜</span>
                                </a>
                            </div>
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播带货榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>PK涨粉榜</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </el-menu-item>
                <el-menu-item class="elmenuitemBox" index="98">资源库<i class="iconfont icon-xiajiantou"></i>
                    <div class="positionBox" style="width:450px">
                        <div class="home_menu">
                            <div class="home_menu_main">
                                <a href="javascript:;" class="fe_cursor">
                                    <p><i class="iconfont icon-shangpin"></i></p>
                                    <span>实时直播榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <p><i class="iconfont icon-shangpin"></i></p>
                                    <span>爆款直播间</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <p><i class="iconfont icon-shangpin"></i></p>
                                    <span>直播流量大盘</span>
                                </a>
                            </div>
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播观众喜好</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播分享榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>监测直播</span>
                                </a>
                            </div>
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>视频引流榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>音浪榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播热销商品榜</span>
                                </a>
                            </div>
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播带货榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>PK涨粉榜</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </el-menu-item>
                <el-menu-item class="elmenuitemBox" index="98">商务合作<i class="iconfont icon-xiajiantou"></i>
                    <div class="positionBox" style="width:450px">
                        <div class="home_menu">
                            <div class="home_menu_main">
                                <a href="javascript:;" class="fe_cursor">
                                    <p><i class="iconfont icon-shangpin"></i></p>
                                    <span>实时直播榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <p><i class="iconfont icon-shangpin"></i></p>
                                    <span>爆款直播间</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <p><i class="iconfont icon-shangpin"></i></p>
                                    <span>直播流量大盘</span>
                                </a>
                            </div>
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播观众喜好</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播分享榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>监测直播</span>
                                </a>
                            </div>
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>视频引流榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>音浪榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播热销商品榜</span>
                                </a>
                            </div>
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>直播带货榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <i class="iconfont icon-shangpin"></i>
                                    <span>PK涨粉榜</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </el-menu-item> -->
                <el-menu-item class="elmenuitemBox" index="98">抖音平台<i class="iconfont icon-xiajiantou"></i>
                    <div class="positionBox fenzhiBox">
                        <div class="home_menu">
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <span>抖音平台</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <span>快手平台</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </el-menu-item>
                <el-menu-item class="elmenuitemBox" index="98">直播<i class="iconfont icon-xiajiantou"></i>
                    <div class="positionBox fenzhiBox">
                        <div class="home_menu">
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <span>实时直播榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <span>爆款直播间</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <span>直播带货榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <span>直播引流榜</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <span>直播搜索</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <span>带货推广搜索</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </el-menu-item>
                <el-menu-item class="elmenuitemBox" index="98">小店<i class="iconfont icon-xiajiantou"></i>
                    <div class="positionBox fenzhiBox">
                        <div class="home_menu">
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <span>小店库</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <span>小店排行榜</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </el-menu-item>
                <el-menu-item class="elmenuitemBox" index="98">工具<i class="iconfont icon-xiajiantou"></i>
                    <div class="positionBox fenzhiBox">
                        <div class="home_menu">
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <span>达人</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <span>牛人</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <span>机构</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <span>商品</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </el-menu-item>
                <el-menu-item class="elmenuitemBox" index="98">服务<i class="iconfont icon-xiajiantou"></i>
                    <div class="positionBox fenzhiBox">
                        <div class="home_menu">
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <span>达人</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <span>牛人</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <span>机构</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <span>商品</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </el-menu-item>
                <el-menu-item class="elmenuitemBox" index="98">资源库<i class="iconfont icon-xiajiantou"></i>
                    <div class="positionBox fenzhiBox">
                        <div class="home_menu">
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <span>达人</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <span>牛人</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <span>机构</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <span>商品</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </el-menu-item>
                <el-menu-item class="elmenuitemBox" index="98">商务合作<i class="iconfont icon-xiajiantou"></i>
                    <div class="positionBox fenzhiBox">
                        <div class="home_menu">
                            <div class="home_menu_list">
                                <a href="javascript:;" class="fe_cursor">
                                    <span>达人</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <span>牛人</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <span>机构</span>
                                </a>
                                <a href="javascript:;" class="fe_cursor">
                                    <span>商品</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </el-menu-item>
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
                                                <span @click="tostudio()">工作台</span>
                                                <!-- <router-link tag="span" to="/workbench">工作台</router-link> -->
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
                        <el-button v-if="!this.$cookie.get('token')" class="loginButann" @click="dialogchange()"
                            type="primary">登录/注册</el-button>
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
                itemslose: ['1', '2', '3', '4', '5'],
                collapse: false,
                items: [{
                        icon: 'iconfont icon-gongzuotai',
                        index: '/workbenchtiktokpagehome',
                        title: '抖音工作台',
                    },
                    {
                        icon: 'iconfont icon-zhibo',
                        index: '1',
                        title: '直播',
                        subs: [{
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
                        index: '2',
                        title: '达人',
                        subs: [{
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
                        icon: 'iconfont icon-23',
                        index: '3',
                        title: '电商',
                        subs: [{
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
                        icon: 'iconfont icon-gongjuxiang',
                        index: '4',
                        title: '热门视频音乐',
                        subs: [{
                                index:'/hotvideos',
                                title: '热门视频榜',
                            },
                            {
                                index:'/hotmusic',
                                title: '热门音乐榜',
                            },
                            {
                                index:'/hottopics',
                                title: '热门话题榜',
                            },
                        ]
                    },
                    {
                        icon: 'iconfont icon-wodedangxuan',
                        index: '5',
                        title: '数据监控',
                        subs: [{
                                index : '/livemonitoring',
                                title: '直播监控',
                            },
                            {
                                index : '/videosmonitoring',
                                title: '视频监控',
                            },
                            {
                                index : '/commentmonitoring',
                                title: '评论监控',
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
    .el-menu-demo {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        .elmenuitemBox {
            border: none !important;
            position: relative;
            >i {
                display: inline-block;
                margin-top: -3px;
                margin-left: 4px;
                color:#fff;
                font-weight: 400;
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

    .el-menu.el-menu--horizontal {
        border: none;
    }

    .el-menu--horizontal {
        .el-menu {
            .el-menu-item {
                // display: inline-block;
            }

            .menuBox {
                width: 100%;
                margin: 0 0;
                margin-bottom: 30px;

                .el-menu-item {
                    float: left;
                }

                >a {
                    width: 50%;
                    text-align: center;
                    display: inline-block;

                    p {
                        width: 54px;
                        height: 54px;
                        border-radius: 12px;
                        background-color: hsla(0, 0%, 100%, .05);
                        text-align: center;
                        padding: 2px;
                        margin: 10px auto 5px;

                        i {
                            font-size: 36px;
                            line-height: 54px;
                            position: relative;
                            top: -2px;
                        }
                    }

                    span {
                        font-size: 15px;
                        color: #fff;
                        margin: 5px auto;
                        display: inline-block;
                    }
                }
            }

            .floatBox {
                float: left;
            }
        }
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
        background: #3a404f;
        min-width: 150px;
        border: 1px solid hsla(0, 0%, 100%, 0);
        padding: 12px;
        z-index: 2000;
        color: #fff;
        text-align: justify;
        font-size: 14px;
        -webkit-box-shadow: 0 2px 20px 0 rgba(0, 0, 0, .2);
        box-shadow: 0 2px 20px 0 rgba(0, 0, 0, .2);
        word-break: break-all;
        border-radius: 8px;

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
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            padding: 17px 0 0;
            border-bottom: 1px solid #474b58;
            width: 100%;

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

            i {
                font-size: 17px;
                font-weight: 400;
            }

            &:hover {
                background: hsla(0, 0%, 100%, .4);
            }
        }
    }

    .fenzhiBox {
        padding: 0;
    }

    /deep/.fe_cursor {
        cursor: default !important;
    }

    .home_menu {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        padding: 8px 15px;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        .home_menu_main {
            width: 100%;
            margin: 0 0;
            margin-bottom: 30px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;

            .fe_cursor {
                width: 50%;
                text-align: center;
                display: inline-block;
                line-height: 20px;
                cursor: default !important;

                &:hover {
                    color: #2997ff;

                    span {
                        color: #2997ff;
                    }

                    i {
                        background-color: hsla(0, 0%, 100%, .2);
                    }
                }

                p {
                    width: 54px;
                    height: 54px;
                    border-radius: 12px;
                    background-color: hsla(0, 0%, 100%, .05);
                    text-align: center;
                    padding: 2px;
                    margin: 10px auto 5px;

                    i {
                        color: hsla(0, 0%, 100%, .8);
                        font-size: 36px;
                        line-height: 54px;
                        position: relative;
                        top: -2px;
                    }
                }

                span {
                    font-size: 15px;
                    color: #fff;
                    margin: 5px auto;
                    display: inline-block;
                }
            }
        }

        .home_menu_list {
            width: 100%;
            .fe_cursor {
                display: block;
                line-height: 45px;
                font-size: 15px;
                color: hsla(0, 0%, 100%, .8);
                &:hover {
                    color: #2997ff;

                    span {
                        color: #2997ff;
                    }

                    i {
                        color: #2997ff;
                    }
                }

                i {
                    color: hsla(0, 0%, 100%, .8);
                    margin-right: 3px;
                    font-weight: 400;
                }

                span {
                    cursor: pointer;
                    font-size: 15px;
                    color: #fff;
                    display: inline-block;
                }
            }
        }
    }
</style>