<template>
    <div class="table_box">
        <!-- 数据分类 -->
        <classificationdata :classification_data="classification_data" ref="classificationdata"></classificationdata>
        <!-- table 列表 -->
        <el-table v-infinite-scroll="load" infinite-scroll-disabled="disabled" :data="tableData" style="width: 100%">
            <el-table-column width="100px" align="center" label="排名">
                <template slot-scope="scope">
                    <div class="columnone">
                        <span v-if="scope.row.ranking === 1" class="The_first_three">{{scope.row.ranking}}
                            <i style="color:#FF4A4A" class="iconfont icon-paimingbiaoqian"></i>
                        </span>
                        <span v-else-if="scope.row.ranking === 2" class="The_first_three">{{scope.row.ranking}}
                            <i style="color:#4AA5FF" class="iconfont icon-paimingbiaoqian"></i>
                        </span>
                        <span v-else-if="scope.row.ranking === 3" class="The_first_three">{{scope.row.ranking}}
                            <i style="color:#FFAC4A" class="iconfont icon-paimingbiaoqian"></i>
                        </span>
                        <span v-else>{{scope.row.ranking | capitalize}}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" label="达人">
                <template slot-scope="scope">
                    <div class="columntow">
                        <div class="userImg">
                            <el-image :src="scope.row.user.imgurl"></el-image>
                            
                        </div>
                        <div class="userName">
                            {{scope.row.user.title}}
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" label="分类">
                <template slot-scope="scope">
                    <span>{{scope.row.classify}}</span>
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="粉丝数">
                <template slot-scope="scope">
                    <span>{{scope.row.fansnumber | NumToUnitNum}}</span>
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="收入音浪">
                <template slot-scope="scope">
                    <div class="rise_fans">
                        <span>{{scope.row.sound_wave | NumToUnitNum}}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column width="140px" align="center" label="操作">
                <div class="table_button_group">
                    <el-button type="primary" @click="goRealdetailscreen">达人详情</el-button>
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
        naem : '音浪收入榜',
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
                classification_data : {
                    title : '商品分类',
                    data : [
                        {
                            name:'全部',
                        },
                        {
                            name:'手机数码',
                        },
                        {
                            name:'电脑办公',
                        },
                        {
                            name:'服装饰品',
                        },
                        {
                            name:'美妆个护',
                        },
                        {
                            name:'户外运动',
                        },
                        {
                            name:'家用电器',
                        },
                        {
                            name:'食品百货',
                        },
                        {
                            name:'母婴玩具',
                        },
                        {
                            name:'鞋靴箱包',
                        },
                        {
                            name:'珠宝文玩',
                        },
                        {
                            name:'生活厨具',
                        },
                        {
                            name:'卧室家具',
                        },
                        {
                            name:'图书文娱',
                        },
                        {
                            name:'汽配摩托',
                        },
                        {
                            name:'其他商品',
                        },
                    ]
                },

                // 初始数组
                tableData: [

                ],
                // 列表数据
                tableDataobj : {
                    // 一共多少 页面 
                    totalPages : 3,
                    // 后端返回的数组
                    tabDatalistone: [
                        {
                            ranking : 1,
                            user : {
                                imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                                title : '画画的BABY下落不明',
                            },
                            classify : '搞笑,剧情', 
                            fansnumber : 5542000, 
                            sound_wave : 6225000,
                        },
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
            getMessage() {
                // 数组拼接上后端返回的数组
                this.tableData = this.tableData.concat(this.tableDataobj.tabDatalistone);
                // 一共多少 页面 
                this.totalPages = this.tableDataobj.totalPages;
                this.loading = false;
            },
            //主要按钮前往
            goRealdetailscreen() {
                this.$router.replace('/intelligentdetailed');
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
        mounted(){
            this.getMessage();
        },
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
        .rise_fans{
            font-size: 14px;
            color:#FF2424;
        }
        .columnone {
            span {
                position: relative;
                z-index: 1;
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
            // 前3名
            .The_first_three{
                i{
                    position: absolute;
                    z-index: -1;
                    left: 50%;
                    top:50%;
                    transform: translate(-50%,-50%);
                    font-size: 22px;
                }
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
                width: 50px;
                height: 50px;
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
                    border-radius: 50%;
                    object-fit: contain;
                    width: 50px;
                    height: 50px;
                    object-fit: contain;
                }
            }

            .userName {
                font-size: 14px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                text-align: left;
            }
        }
    }

</style>