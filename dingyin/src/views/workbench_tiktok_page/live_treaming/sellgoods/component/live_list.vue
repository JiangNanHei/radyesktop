<template>
    <div class="table_box">
        <!-- 数据分类 -->
        <classificationdata :classification_data="classification_data1" ref="classificationdata"></classificationdata>
        <classificationdata :classification_data="classification_data2" ref="classificationdata"></classificationdata>
        <classificationdata :classification_data="classification_data3" ref="classificationdata"></classificationdata>
        <!-- table 列表 -->
        <el-table v-infinite-scroll="load" infinite-scroll-disabled="disabled" :data="tableData" style="width: 100%">
            <el-table-column min-width="60px" align="center" label="排名">
                <template slot-scope="scope">
                    <div class="columnone">
                        <span>{{scope.row.num}}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column min-width="180px" align="center" label="直播">
                <template slot-scope="scope">
                    <div class="columntow">
                        <div class="userImg">
                            <el-image :src="scope.row.live.towimgurl"></el-image>
                            <div class="live_button_ing">
                                <el-image :src="scope.row.live.towimggifurl"></el-image>
                                <span>直播中</span>
                            </div>
                        </div>
                        <div class="userName">
                            <p>
                                <span class="spanone">{{scope.row.live.towtitle1}}</span>
                                <span class="spantow"><i class="iconfont icon-gouwuchekong"></i></span>
                            </p>
                            <div>{{scope.row.live.towtitle2}}</div>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column min-width="180px" align="center" label="达人">
                <template slot-scope="scope">
                    <div class="columnthree">
                        <div class="ImgBox" @click="goRealdetailed">
                            <img :src="scope.row.expert.threeimgurl">
                        </div>
                        <div class="user_count">
                            <div class="name_box">
                                <div>{{scope.row.expert.threetitle1}}</div>
                            </div>
                            <div class="user_level_box">
                                <div class="rank_head_dyNum">粉丝 : {{scope.row.expert.threetitle2}}</div>
                                <div class="level">
                                    <span class="spanone">{{scope.row.expert.threetitle3}}</span>
                                    <span class="spantow">{{scope.row.expert.threetitle4}}</span>
                                    <span class="spanthree">{{scope.row.expert.threetitle5}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" label="热销类目">
                <template slot-scope="scope">
                    <span>{{scope.row.fourtitle}}</span>
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="最高观看人数" prop="fivetitle">
                <template slot-scope="scope">
                    <span>{{scope.row.fivetitle}}</span>
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="粉丝变化" prop="sixtitle">
                <template slot-scope="scope">
                    <span>{{scope.row.sixtitle}}</span>
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="直播销量" prop="seventitle">
                <template slot-scope="scope">
                    <span>{{scope.row.seventitle}}</span>
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="直播销售额" prop="eighttitle">
                <template slot-scope="scope">
                    <span>{{scope.row.eighttitle}}</span>
                </template>
            </el-table-column>
            <el-table-column min-width="100px" align="center" label="操作">
                <div class="table_button_group">
                    <el-button type="primary" @click="goRealdetailscreen">直播详情</el-button>
                </div>
            </el-table-column>
        </el-table>
        <p class="hint_empty underway" v-show="loading">加载中...</p>
        <p class="hint_empty" v-if="noMore">已经到底了0.0</p>
    </div>
</template>

<script>
import classificationdata from '@/components/page/classification_data'
    export default {
        components: {
            classificationdata
        },
        props: {

        },
        data() {
            return {
                //起始页数值为0
                count: 0,
                loading: false,
                // 数据分类 数据
                classification_data : [
                    // {
                    //     title : '热销类目',
                    //     data : [
                    //         {
                    //             name:'全部',
                    //         },
                    //         {
                    //             name:'手机数码',
                    //         },
                    //         {
                    //             name:'电脑办公',
                    //         },
                    //         {
                    //             name:'服装饰品',
                    //         },
                    //         {
                    //             name:'美妆个护',
                    //         },
                    //         {
                    //             name:'户外运动',
                    //         },
                    //         {
                    //             name:'家用电器',
                    //         },
                    //         {
                    //             name:'食品百货',
                    //         },
                    //         {
                    //             name:'母婴玩具',
                    //         },
                    //         {
                    //             name:'鞋靴箱包',
                    //         },
                    //         {
                    //             name:'珠宝文玩',
                    //         },
                    //         {
                    //             name:'生活厨具',
                    //         },
                    //         {
                    //             name:'卧室家具',
                    //         },
                    //         {
                    //             name:'图书文娱',
                    //         },
                    //         {
                    //             name:'汽配摩托',
                    //         },
                    //         {
                    //             name:'其他商品',
                    //         },
                    //     ]
                    // },
                    // {
                    //     title : '所属行业',
                    //     data : [
                    //         {
                    //             name:'全部',
                    //         },
                    //         {
                    //             name:'手机数码',
                    //         },
                    //         {
                    //             name:'电脑办公',
                    //         },
                    //         {
                    //             name:'服装饰品',
                    //         },
                    //         {
                    //             name:'美妆个护',
                    //         },
                    //         {
                    //             name:'户外运动',
                    //         },
                    //         {
                    //             name:'家用电器',
                    //         },
                    //         {
                    //             name:'美妆个护',
                    //         },
                    //         {
                    //             name:'户外运动',
                    //         },
                    //         {
                    //             name:'家用电器',
                    //         },
                    //         {
                    //             name:'食品百货',
                    //         },
                    //         {
                    //             name:'母婴玩具',
                    //         },
                    //         {
                    //             name:'鞋靴箱包',
                    //         },
                    //         {
                    //             name:'户外运动',
                    //         },
                    //         {
                    //             name:'家用电器',
                    //         },
                    //         {
                    //             name:'食品百货',
                    //         },
                    //         {
                    //             name:'母婴玩具',
                    //         },
                    //         {
                    //             name:'鞋靴箱包',
                    //         },
                    //         {
                    //             name:'食品百货',
                    //         },
                    //         {
                    //             name:'母婴玩具',
                    //         },
                    //         {
                    //             name:'鞋靴箱包',
                    //         },
                    //         {
                    //             name:'珠宝文玩',
                    //         },
                    //         {
                    //             name:'生活厨具',
                    //         },
                    //         {
                    //             name:'卧室家具',
                    //         },
                    //         {
                    //             name:'图书文娱',
                    //         },
                    //         {
                    //             name:'汽配摩托',
                    //         },
                    //         {
                    //             name:'其他商品',
                    //         },
                    //     ]
                    // },
                    // {
                    //     title : '粉丝数',
                    //     data : [
                    //         {
                    //             name : '全部'
                    //         },
                    //         {
                    //             name : '<1万'
                    //         },
                    //         {
                    //             name : '1万-10万'
                    //         },
                    //         {
                    //             name : '10万-50万'
                    //         },
                    //         {
                    //             name : '50万-100万'
                    //         },
                    //         {
                    //             name : '100万-500万'
                    //         },
                    //         {
                    //             name : '500万-1000万'
                    //         },
                    //         {
                    //             name : '>1000万'
                    //         },
                    //     ]
                    // },
                ],
                classification_data1 : {

                },
                classification_data2 : {

                },
                classification_data3 : {

                },

                // 初始数组
                tableData: [

                ],
                // 列表数据
                tableDataobj : {
                    // // 一共多少 页面 
                    totalPages : null,
                    // // 后端返回的数组
                    tabDatalistone: [
                        // {
                        //     num: '1',

                        //     towimgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                        //     towimggifurl: 'https://static.douchacha.com/img/living.297b2ad1.gif',
                        //     towtitle1: '羽绒服毛衣大衣一折起',
                        //     towtitle2: '直播时长:5小时53分钟',

                        //     threeimgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',

                        //     threetitle1: '清新女装穿搭服装设计',
                        //     threetitle2: '粉丝:103.4W',
                        //     threetitle3: '带货口碑 : ',
                        //     threetitle4: '4.75',
                        //     threetitle5: '中',

                        //     fourtitle: '数码3C',

                        //     fivetitle: 77.7,

                        //     sixtitle: 11.9,

                        //     seventitle: 1.6,

                        //     eighttitle: 546,
                        // },
                        // {
                        //     num: '1',

                        //     towimgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                        //     towimggifurl: 'https://static.douchacha.com/img/living.297b2ad1.gif',
                        //     towtitle1: '羽绒服毛衣大衣一折起',
                        //     towtitle2: '直播时长:5小时53分钟',

                        //     threeimgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',

                        //     threetitle1: '清新女装穿搭服装设计',
                        //     threetitle2: '粉丝:103.4W',
                        //     threetitle3: '带货口碑 : ',
                        //     threetitle4: '4.75',
                        //     threetitle5: '中',

                        //     fourtitle: '数码3C',

                        //     fivetitle: 77.7,

                        //     sixtitle: 11.9,

                        //     seventitle: 1.6,

                        //     eighttitle: 546,
                        // },
                        // {
                        //     num: '1',

                        //     towimgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                        //     towimggifurl: 'https://static.douchacha.com/img/living.297b2ad1.gif',
                        //     towtitle1: '羽绒服毛衣大衣一折起',
                        //     towtitle2: '直播时长:5小时53分钟',

                        //     threeimgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',

                        //     threetitle1: '清新女装穿搭服装设计',
                        //     threetitle2: '粉丝:103.4W',
                        //     threetitle3: '带货口碑 : ',
                        //     threetitle4: '4.75',
                        //     threetitle5: '中',

                        //     fourtitle: '数码3C',

                        //     fivetitle: 78,

                        //     sixtitle: 12,

                        //     seventitle: 1.5,

                        //     eighttitle: 547,
                        // },
                        // {
                        //     num: '1',

                        //     towimgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                        //     towimggifurl: 'https://static.douchacha.com/img/living.297b2ad1.gif',
                        //     towtitle1: '羽绒服毛衣大衣一折起',
                        //     towtitle2: '直播时长:5小时53分钟',

                        //     threeimgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',

                        //     threetitle1: '清新女装穿搭服装设计',
                        //     threetitle2: '粉丝:103.4W',
                        //     threetitle3: '带货口碑 : ',
                        //     threetitle4: '4.75',
                        //     threetitle5: '中',

                        //     fourtitle: '数码3C',

                        //     fivetitle: 4,

                        //     sixtitle: 8,

                        //     seventitle: 35,

                        //     eighttitle: 400,
                        // },
                        // {
                        //     num: '1',

                        //     towimgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                        //     towimggifurl: 'https://static.douchacha.com/img/living.297b2ad1.gif',
                        //     towtitle1: '羽绒服毛衣大衣一折起',
                        //     towtitle2: '直播时长:5小时53分钟',

                        //     threeimgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',

                        //     threetitle1: '清新女装穿搭服装设计',
                        //     threetitle2: '粉丝:103.4W',
                        //     threetitle3: '带货口碑 : ',
                        //     threetitle4: '4.75',
                        //     threetitle5: '中',

                        //     fourtitle: '数码3C',

                        //     fivetitle: 77.7,

                        //     sixtitle: 11.9,

                        //     seventitle: 1.6,

                        //     eighttitle: 546,
                        // },
                        // {
                        //     num: '1',

                        //     towimgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                        //     towimggifurl: 'https://static.douchacha.com/img/living.297b2ad1.gif',
                        //     towtitle1: '羽绒服毛衣大衣一折起',
                        //     towtitle2: '直播时长:5小时53分钟',

                        //     threeimgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',

                        //     threetitle1: '清新女装穿搭服装设计',
                        //     threetitle2: '粉丝:103.4W',
                        //     threetitle3: '带货口碑 : ',
                        //     threetitle4: '4.75',
                        //     threetitle5: '中',

                        //     fourtitle: '数码3C',

                        //     fivetitle: 78,

                        //     sixtitle: 12,

                        //     seventitle: 1.5,

                        //     eighttitle: 547,
                        // },
                        // {
                        //     num: '1',

                        //     towimgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                        //     towimggifurl: 'https://static.douchacha.com/img/living.297b2ad1.gif',
                        //     towtitle1: '羽绒服毛衣大衣一折起',
                        //     towtitle2: '直播时长:5小时53分钟',

                        //     threeimgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',

                        //     threetitle1: '清新女装穿搭服装设计',
                        //     threetitle2: '粉丝:103.4W',
                        //     threetitle3: '带货口碑 : ',
                        //     threetitle4: '4.75',
                        //     threetitle5: '中',

                        //     fourtitle: '数码3C',

                        //     fivetitle: 4,

                        //     sixtitle: 8,

                        //     seventitle: 35,

                        //     eighttitle: 400,
                        // },
                        // {
                        //     num: '1',

                        //     towimgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                        //     towimggifurl: 'https://static.douchacha.com/img/living.297b2ad1.gif',
                        //     towtitle1: '羽绒服毛衣大衣一折起',
                        //     towtitle2: '直播时长:5小时53分钟',

                        //     threeimgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',

                        //     threetitle1: '清新女装穿搭服装设计',
                        //     threetitle2: '粉丝:103.4W',
                        //     threetitle3: '带货口碑 : ',
                        //     threetitle4: '4.75',
                        //     threetitle5: '中',

                        //     fourtitle: '数码3C',

                        //     fivetitle: 77.7,

                        //     sixtitle: 11.9,

                        //     seventitle: 1.6,

                        //     eighttitle: 546,
                        // },
                        // {
                        //     num: '1',

                        //     towimgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                        //     towimggifurl: 'https://static.douchacha.com/img/living.297b2ad1.gif',
                        //     towtitle1: '羽绒服毛衣大衣一折起',
                        //     towtitle2: '直播时长:5小时53分钟',

                        //     threeimgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',

                        //     threetitle1: '清新女装穿搭服装设计',
                        //     threetitle2: '粉丝:103.4W',
                        //     threetitle3: '带货口碑 : ',
                        //     threetitle4: '4.75',
                        //     threetitle5: '中',

                        //     fourtitle: '数码3C',

                        //     fivetitle: 78,

                        //     sixtitle: 12,

                        //     seventitle: 1.5,

                        //     eighttitle: 547,
                        // },
                        // {
                        //     num: '1',

                        //     towimgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                        //     towimggifurl: 'https://static.douchacha.com/img/living.297b2ad1.gif',
                        //     towtitle1: '羽绒服毛衣大衣一折起',
                        //     towtitle2: '直播时长:5小时53分钟',

                        //     threeimgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',

                        //     threetitle1: '清新女装穿搭服装设计',
                        //     threetitle2: '粉丝:103.4W',
                        //     threetitle3: '带货口碑 : ',
                        //     threetitle4: '4.75',
                        //     threetitle5: '中',

                        //     fourtitle: '数码3C',

                        //     fivetitle: 4,

                        //     sixtitle: 8,

                        //     seventitle: 35,

                        //     eighttitle: 400,
                        // },
                    ],
                },

                // 取后端返回内容的总页数
                totalPages: '',
            };
        },
        methods: {
            load() {
                //滑到底部时进行加载
                this.loading = true;
                let timeout = setTimeout(() => {
                    this.count += 1; //页数+1
                    this.getMessage(); //调用接口，此时页数+1，查询下一页数据
                    clearInterval(timeout);
                }, 2000);
            },
            //主要按钮前往达人详情
            goRealdetailed() {
                this.$router.replace('/intelligentdetailed');
            },
            //主要按钮前往直播详情
            goRealdetailscreen() {
                this.$router.replace('/livedetailed');
            },
            // 获取列表数据 接口
            getMessage(){
                return this.$http({
                    url: "/sellgoods_table.json",
                    method: "get",
                }).then(({
                    data
                }) => {
                    // 数组列表拼接上后端返回的数组
                    this.tableData = this.tableData.concat(data.tableDataobj.tabDatalistone);
                    // 一共多少 页面 
                    this.totalPages = data.tableDataobj.totalPages;
                    this.loading = false;
                    // 数据分类 数据
                    this.classification_data1 = data.classification_data1;
                    this.classification_data2 = data.classification_data2;
                    this.classification_data3 = data.classification_data3;
                }).catch(err => {

                })
            },
        },
        computed: {
            noMore() {
                //当起始页数大于总页数时停止加载
                return this.count >= this.totalPages - 1;
            },
            disabled() {
                return this.loading || this.noMore;
            },
        },
        async mounted () {

            await this.getMessage();
            
        }
    };
</script>

<style lang="less" scoped>
    .table_box {
    }
</style>
<style lang="less" scoped>
    /deep/.hint_empty {
        text-align: center;
        font-size: 22px;
        color: #409EFF;
        margin-top: 10px;
    }
    /deep/.underway {
        animation: container 1.2s infinite linear;
    }
    /deep/.el-tabs__nav-wrap::after {
        background: #326CAD;
    }
    /deep/.el-tabs__active-bar {
        height: 3px;
        background: #248FFF;
    }
    /deep/.el-table__body-wrapper {
        overflow: hidden !important;

        .el-table__body {
            width: 100.1% !important;
        }
    }
    /deep/.content {
        overflow: hidden;
        user-select: none;
        padding: 0px;
        >.tabheader {
            >.el-tabs__header {
                .el-tabs__nav-wrap::after {
                    display: none !important;
                }

                .el-tabs__active-bar {
                    display: none;
                }

                .el-tabs__item {
                    padding: 0px;
                    margin-right: 20px;
                    display: inline-block;
                    white-space: nowrap;
                    cursor: pointer;
                    background: #103A6B;
                    border: 1px solid #103A6B;
                    color: #fff;
                    -webkit-transition: .1s;
                    transition: .1s;
                    font-weight: 500;
                    font-size: 14px;
                    border-radius: 4px;
                    width: 112px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;

                    &:hover {
                        border-color: hsla(0, 0%, 100%, .5);
                    }

                }

                .is-active {
                    background-image: -webkit-linear-gradient(45deg, #1d6dff, #0dafff);
                    border: none;
                }
            }
        }
    }
    /deep/.el-tabs__item {
        color: #fff !important;
    }
    /deep/.el-table__header-wrapper {
        .has-gutter {
            color: #ccc;
        }

        background: #144174 !important;

        tr {
            background: rgba(0, 0, 0, 0) !important;
        }

        th {
            background: rgba(0, 0, 0, 0) !important;
            padding: 20px 0 !important;
            border: none !important;
            font-size: 14px;
            &:nth-child(2){
                text-align: left ;
            }
            &:nth-child(3){
                text-align: left ;
            }
        }
    }
    // --------

    // 身体
    /deep/.el-table__row {
        background-color: #082C55 !important;

        td {
            border-bottom: 1px solid #326CAD !important;
            height: 88px;
        }
        &:last-child{
            td{
                border-bottom:none !important;
            }
        }
    }

    /deep/.el-table tr {
        td {
            color: #fff;
        }

        &:hover {
            td {
                background-color: hsla(0, 0%, 100%, .02);
            }
        }
    }

    /deep/.el-table::before {
        display: none !important;
    }

    /deep/.cell {
        white-space: normal;
        word-break: break-all;
        line-height: 23px;
        // padding: 0px !important;
    }

    /deep/.is-center {
        .cell {
            >span {
                font-size: 14px;
                color: #fff;
                font-weight: 500;
            }
        }

        .columnone {
            span {
                display: inline-block;
                font-size: 20px;
                color: #fff;
                height: 26px;
                width: 26px;
                text-align: center;
                padding-top: 2px;
                background-size: cover;
                background-position: 50% center;
                font-size: 12px;
                margin: 0 3px;
                line-height: 23px;
                
            }
        }

        .columntow {
        
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;

            /deep/.userImg {
                width: 60px;
                height: 60px;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                cursor: pointer;
                margin-right: 6px;
                -ms-flex-negative: 0;
                flex-shrink: 0;
                position: relative;

                img {
                    object-fit: contain;
                    border-radius: 3px;
                    width: 60px;
                    height: 60px;
                    object-fit: contain;
                    border-radius: 3px;
                }

                .live_button_ing {
                    padding: 0 2px;
                    position: absolute;
                    bottom: -8px;
                    left: 0;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    -webkit-box-pack: justify;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                    color: #fff;
                    width: 60px;
                    height: 17px;
                    background: linear-gradient(-42deg, #ff1167, #f1278a);
                    border-radius: 14px;
                    padding-left: 2px;
                    font-size: 12px;

                    img {
                        width: 28px;
                        float: left;
                        position: relative;
                        top: -1px;
                        left: -5px;

                    }

                    span {
                        position: absolute;
                        left: 20px;
                        font-size: 12px;
                        color: #fff;
                    }
                }
            }

            .userName {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                text-align: left;
                >p {
                    display: flex;
                    font-size: 14px;
                    .spanone {
                        cursor: pointer;
                        &:hover {
                            color: #2997ff;
                        }
                    }

                    .spantow {
                        display: inline-block;
                        padding-top: 1px;

                        i {
                            font-weight: 400;
                            margin: 0px 6px 0px 4px;
                            font-size: 16px;
                            color: rgb(255, 255, 255);
                        }
                    }
                }

                >div {
                    font-size: 12px;
                    color: #999;
                }
            }
        }

        .columnthree {
            position: relative;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;

            .ImgBox {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                overflow: hidden;
                -ms-flex-negative: 0;
                flex-shrink: 0;
                cursor: pointer;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .user_count {
                color: #fff;
                margin-left: 10px;
                -webkit-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
                overflow: hidden;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-box-pack: space-evenly;
                -ms-flex-pack: space-evenly;
                justify-content: space-evenly;

                .name_box {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;

                    >div {
                        max-width: 90%;
                        cursor: pointer;
                        font-size: 13px;
                    }
                }

                .user_level_box {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    color:#999;
                    .rank_head_dyNum {
                        font-size: 12px !important;
                    }

                    .level {
                        font-size: 12px;
                        color: #bebfc3;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-align: center;
                        -ms-flex-align: center;
                        align-items: center;

                        .spanone {
                            color:#999;
                            margin-right: 5px;
                        }

                        .spantow {
                            color: #fd2270;
                        }

                        .spanthree {
                            width: 16px;
                            height: 16px;
                            border-radius: 3px;
                            display: inline-block;
                            margin-left: 3px;
                            font-size: 12px;
                            text-align: center;
                            line-height: 16px;

                            background: rgba(239, 124, 57, .1);
                            color: #ef7c39;
                        }
                    }
                }
            }
        }

        .salesAmount {
            color: #face15 !important;
        }
    }

</style>