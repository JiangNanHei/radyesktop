<template>
    <div class="table_box">
        <!-- 数据分类 -->
        <classificationdata :classification_data="classification_data" ref="classificationdata"></classificationdata>
        <!-- table 列表 -->
        <el-table v-infinite-scroll="load" infinite-scroll-disabled="disabled" :data="tableData" style="width: 100%">
            <el-table-column min-width="40px" align="center" label="排名">
                <template slot-scope="scope">
                    <div class="columnone">
                        <span>{{scope.row.ranking}}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column min-width="180px" align="center" label="视频">
                <template slot-scope="scope">
                    <div class="columntow">
                        <div class="userImg">
                            <el-image :src="scope.row.video.imgurl"></el-image>   
                        </div>
                        <div class="userName">
                            <p class="userName_p1">{{scope.row.video.title}}</p>
                            <p class="userName_p1">{{scope.row.video.desc}}</p>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" label="达人">
                <template slot-scope="scope">
                    <div class="intelligent">
                        <el-image :src="scope.row.talent.imgUrl"></el-image>  
                        <span>{{scope.row.talent.name}}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="点赞数" prop="five">
                <template slot-scope="scope">
                    <span>{{scope.row.thumbs_up}}</span>
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="转发数" prop="six">
                <template slot-scope="scope">
                    <span>{{scope.row.forward}}</span>
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="评论数" prop="seven">
                <template slot-scope="scope">
                    <span>{{scope.row.comment}}</span>
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="销售" prop="seven">
                <template slot-scope="scope">
                    <span>{{scope.row.sale}}</span>
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="销售额" prop="seven">
                <template slot-scope="scope">
                    <span>{{scope.row.sales_volume}}</span>
                </template>
            </el-table-column>
            <el-table-column min-width="100px" align="center" label="操作">
                <div class="table_button_group clearfix">
                    <el-button class="but1" type="primary" @click="goVideodetailscreen">视频详情</el-button>
                    <el-button class="but1" type="primary" @click="goRealdetailscreen">播放视频</el-button>
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
                classification_data : {
                    title : '商品分类',
                    data : [
                        {
                            name:'全部',
                        },
                        {
                            name:'颜值达人',
                        },
                        {
                            name:'音乐',
                        },
                        {
                            name:'运动健身',
                        },
                        {
                            name:'财经投资',
                        },
                        {
                            name:'萌宠',
                        },
                        {
                            name:'艺术文化',
                        },
                        {
                            name:'舞蹈',
                        },
                        {
                            name:'美食',
                        },
                        {
                            name:'美妆',
                        },
                        {
                            name:'科技数码',
                        },
                        {
                            name:'生活',
                        },
                        {
                            name:'游戏',
                        },
                        {
                            name:'测评',
                        },
                        {
                            name:'汽车',
                        },
                        {
                            name:'母婴亲子',
                        },
                        {
                            name:'才艺技能',
                        },
                        {
                            name:'情感',
                        },
                        {
                            name:'影视娱乐',
                        },
                        {
                            name:'家居家装',
                        },
                        {
                            name:'园艺',
                        },
                        {
                            name:'剧情搞笑',
                        },
                        {
                            name:'二次元',
                        },
                        {
                            name:'三农',
                        }
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
                            ranking: 1,

                            video : {
                                imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                                title : '爱情最初的模样，这又是多少人的青春年少',
                                desc: '#少年说 #青春校园 @DOU+小助手'
                            },

                            talent : {
                                name : '长沙小美',
                                imgUrl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image'
                            },
                            
                            thumbs_up: '554.2W',
                            forward: '154.2W',
                            comment: '54.2W',
                            sale: '4.2W',
                            sales_volume: '1434.2W'
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
            //主要按钮前往视频详情
            goVideodetailscreen() {
                this.$router.replace('/videosshow');
            },
            //主要按钮前往详情大屏
            goRealdetailscreen() {
                this.$router.replace('/detailsscreen');
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
            this.getMessage()
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
            .intelligent{
                display: flex;
                align-items: center;
                img{
                    width: 50px;
                    height: 50px;
                    border-radius: 25px;
                    margin-right: 10px;
                }
                
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
            // padding-bottom: 8px;
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
            }

            .userName {
                font-size: 14px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                text-align: left;
                .userName_p1{
                    width: 240px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
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