<template>
    <div class="box">
        <!-- 搜索框 -->
        <div class="demo-input-suffix">
            <div class="search_box">
                <el-input
                    v-model = "broadcastsearchvalue"
                    placeholder="请输入商品标题"
                    >
                </el-input>
                <el-button type="primary" @click="broadcastsearchbut">搜索</el-button>
            </div>
            <p class="clickp" @click="eliminate"><i class="iconfont icon-icon--"></i><span>清空所选中的条件</span></p>
        </div>
        <!-- 数据分类 -->
        <classificationdata :classification_data="classification_data" ref="classificationdata"></classificationdata>
        <!-- 筛选 -->
        <div class="filtrate">
            <p class="title_p">筛选</p>
            <el-checkbox-group v-model="checkList" class="check_box">
                <el-checkbox label="有视频带货"></el-checkbox>
                <el-checkbox label="有直播带货"></el-checkbox>
            </el-checkbox-group>
            <div class="saleroombox">
                <p>近30天销售额</p>
                <div class="iptbox">
                    <el-input v-model="startvalue">
                        <span slot="prefix">￥</span>
                    </el-input>
                    <!-- <el-divider direction="horizontal"></el-divider> -->
                    <div class="cutoffrule"></div>
                    <el-input v-model="endvalue">
                        <span slot="prefix">￥</span>
                    </el-input>
                </div>
            </div>
        </div>
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
            <el-table-column min-width="100px" align="center" label="抖音小店">
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
            <el-table-column align="center" label="小店分类">
                <template slot-scope="scope">
                    <div class="classification">
                        <span>{{scope.row.classification}}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="昨日销量" prop="sales_volume">
                <template slot-scope="scope">
                    <div class="rise_fans">
                        <span>{{scope.row.sales_volume | NumToUnitNum}}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="昨日销售额" prop="saleroom">
                <template slot-scope="scope">
                    <span>{{scope.row.saleroom | NumToUnitNum}}</span>
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="关联视频" prop="relevancy_video">
                <template slot-scope="scope">
                    <span>{{scope.row.relevancy_video | NumToUnitNum}}</span>
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="关联直播" prop="relevancy_live">
                <template slot-scope="scope">
                    <span>{{scope.row.relevancy_live | NumToUnitNum}}</span>
                </template>
            </el-table-column>
            <el-table-column width="140px" align="center" label="操作">
                <div class="table_button_group">
                    <el-button type="primary" @click="goRealdetailscreen">小店详情</el-button>
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
        naem:'小店库',
        components: {
            classificationdata
        },
        props: {

        },
        data() {
            return {
                // 搜索框 value
                broadcastsearchvalue : '',
                // 复选框数据
                checkList: ['选中且禁用','复选框 A'],

                startvalue : '',
                endvalue : '',
                //起始页数值为0
                count: 0,
                loading: false,
                // 数据分类 数据
                classification_data : {
                    title : '分类',
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
                                title : '交个朋友抖音小店',
                            },
                            classification : '手机数码,运动户外,家用电器',
                            sales_volume : 123,
                            saleroom : 28314000,
                            relevancy_video : 2298,
                            relevancy_live : 1298,

                        },
                        {
                            ranking : 2,
                            user : {
                                imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                                title : '交个朋友抖音小店',
                            },
                            classification : '手机数码,运动户外,家用电器',
                            sales_volume : 124,
                            saleroom : 28314000,
                            relevancy_video : 2298,
                            relevancy_live : 1298,

                        },
                        {
                            ranking : 3,
                            user : {
                                imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                                title : '交个朋友抖音小店',
                            },
                            classification : '手机数码,运动户外,家用电器',
                            sales_volume : 123.5,
                            saleroom : 28314000,
                            relevancy_video : 2298,
                            relevancy_live : 1298,

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
                let routeUrl = this.$router.resolve({
                    path: "/detailedshop"
                });
                window.open(routeUrl.href, '_blank');
            },
            // input 搜索框 but按钮
            broadcastsearchbut(){

            },
            // 清空所有条件
            eliminate(){

            }
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
    .box {
        // 搜索框
        .demo-input-suffix{
            margin-top: 20px;
            margin-bottom: 20px;
            /deep/.search_box{
                display: inline-block;
                position: relative;
                input {
                    width: 320px;
                    height: 32px;
                    border-radius: 25px;
                    background: #0D2F55;
                    font-size: 14px;
                    color: #999;
                    border: 1px solid #999;
                }
                .el-button{
                    width: 65px;
                    line-height: 0px;
                    height: 80%;
                    position: absolute;
                    right: -28px;
                    border-radius: 20px;
                    top: 50%;
                    transform: translate(-50%,-50%);
                }
            }
            .clickp{
                cursor: pointer;
                color: #248FFF;
                display: inline-block;
                margin-left: 20px;
                i{
                    margin-right: 10px;
                }
                span{
                    font-size: 14px;
                    text-decoration:underline
                }
            }
        }
        // 筛选
        .filtrate{
            margin-bottom: 20px;
            margin-top: 10px;
            color:#ccc;
            font-size: 12px;
            .title_p{
                display: inline-block;
                margin-right: 20px;
                color:#fff;
            }
            /deep/.check_box{
                display: inline-block;
                margin-right: 20px;
                .el-checkbox__label{
                    color:#ccc;
                }
            }
            /deep/.saleroombox{
                display: inline-block;
                p{
                    margin-right: 10px;
                    display: inline-block;
                }
                .iptbox{
                    display: inline-block;
                    .el-input{
                        display: inline-block;
                        width: 100px;
                        line-height: 32px;
                        .el-input__inner{
                            width: 100px;
                            background: #0D2F55;
                            border:1px solid #999999;
                            color: #fff;
                        }
                    }
                    .cutoffrule{
                        margin: 0px 5px;
                        display: inline-block;
                        width: 14px;
                        height: 2px;
                        margin-bottom: 4px;
                        background: #979797;
                    }
                }
            }
        }
    }
</style>
<style lang="less" scoped>
.el-table{
    border:none !important;
    // 伪元素
    &::before,&::after{
        display: none;
    }
    // 头部
    /deep/.el-table__header-wrapper{
        height: 64px;
        line-height: 64px;
        background: #144174 !important;
        th {
            background: #144174 !important;
            padding:0 !important;
            border: none;
            font-size: 14px;
            text-align: center;
            color: #ccc;
            &:nth-child(2){
                text-align: left ;
            }
        }
        .is-sortable,.is-leaf{
            border:none !important;
        }
    }
    // 身体
    /deep/.el-table__body-wrapper{
        .el-table__body{
            .el-table__row{
                background-color: #082C55 !important;
                &:hover{
                    
                    td{
                        // background: none !important;
                        background-color: hsla(0, 0%, 100%, .02);
                    }
                }
                td{
                    color:#fff;
                    border:none;
                    border-bottom: 1px solid #326CAD;
                    text-align: center;
                    height: 88px;
                    // background: none !important;
                    .cell {
                        >span {
                            font-size: 14px;
                            color: #fff;
                            font-weight: 500;
                        }
                        .intelligent{
                            .p2{
                                color:#999;
                            }
                        }
                        .table_button_group{
                            .el-button{
                                display: block;
                                margin:0 auto;
                            }
                            .but1{
                                margin-top: 10px;
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
                        .classification{
                            white-space: normal !important;
                            span{
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
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
                                border-radius: 5px;
                                overflow: hidden;
                                img {
                                    object-fit: contain;
                                    border-radius: 3px;
                                    width: 50px;
                                    height: 50px;
                                    object-fit: contain;
                                    border-radius: 3px;
                                }
                            }

                            .userName {
                                font-size: 14px;

                                text-align: left;
                                .userName_p1{
                                    .span1{
                                        display: inline-block;
                                        width: 80px;
                                        white-space: nowrap;
                                        text-overflow: ellipsis;
                                        overflow: hidden;
                                    }
                                    .span2{
                                        display: inline-block;
                                        overflow: hidden;
                                    }
                                }
                                .userName_p2{
                                    font-size: 12px;
                                    color:#F0A847;
                                    padding: 0 10px;
                                    border-radius: 15px;
                                    display: inline-block;
                                    border:1px solid #F0A847;
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
                }
                &:last-child{
                    td{
                        border:none;
                    }
                }
            }
        }
    }
}
// 加载
/deep/.hint_empty {
    text-align: center;
    font-size: 22px;
    color: #409EFF;
    margin-top: 10px;
}
/deep/.underway {
    animation: container 1.2s infinite linear;
}

</style>