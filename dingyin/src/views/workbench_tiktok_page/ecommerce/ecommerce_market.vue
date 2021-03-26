<template>
    <div class="table_box">
        <!-- 数据分类 -->
        <classificationdata :classification_data="classification_data" ref="classificationdata"></classificationdata>
        <el-table
            v-infinite-scroll="load" infinite-scroll-disabled="disabled"
            :data="tableData"
            style="width: 100%;">
            <el-table-column width="100px" align="center" label="排名">
                <template slot-scope="scope">
                    <div class="columnone">
                        <span v-if="scope.row.ranking === 1" class="The_first_three">
                            {{scope.row.ranking}}
                            <i style="color:#FF4A4A" class="iconfont icon-paimingbiaoqian"></i>
                        </span>
                        <span v-else-if="scope.row.ranking === 2" class="The_first_three">
                            {{scope.row.ranking}}
                            <i style="color:#4AA5FF" class="iconfont icon-paimingbiaoqian"></i>
                        </span>
                        <span v-else-if="scope.row.ranking === 3" class="The_first_three">
                            {{scope.row.ranking}}
                            <i style="color:#FFAC4A" class="iconfont icon-paimingbiaoqian"></i>
                        </span>
                        <span v-else>{{scope.row.ranking | capitalize}}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" label="商品">
                <template slot-scope="scope">
                    <div class="columntow">
                        <div class="userImg">
                            <el-image :src="scope.row.commodity.imgurl"></el-image>   
                        </div>
                        <div class="userName">
                            <p class="userName_p1">
                            {{scope.row.commodity.title}}
                            </p>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" label="价格">
                <template slot-scope="scope">
                    <div class="intelligent">
                        <p class="p1">￥{{scope.row.selling_price}}</p>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" label="佣金比例">
                <template slot-scope="scope">
                    <div class="intelligent">
                        <p class="p1">{{scope.row.commission_scale}}%</p>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" label="销量" prop="sales_volume">
                <template slot-scope="scope">
                    <div class="sales_volume">
                        <span>{{scope.row.sales_volume | NumToUnitNum}}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column width="140px" align="center" label="操作">
                <div class="table_button_group clearfix">
                    <el-button class="but1" type="primary" @click="goRealdetailscreen">商品详情</el-button>
                </div>
            </el-table-column>
        </el-table>
        <p class="hint_empty underway" v-show="loading">加载中...</p>
        <p class="hint_empty" v-if="noMore">已经到底了0.0</p>
    </div>
</template>
<script>
import classificationdata from '@/components/page/classification_data'
import { dateToStr } from '@/utils/validate.js'
import { regionDataPlus,CodeToText } from 'element-china-area-data'
  export default {
    naem : '商品销售榜',
    components: {
        classificationdata,
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
                title : '分类',
                data: [
                    {
                        index:0,
                        name:'全部',
                    },
                    {
                        index:1,
                        name:'手机数码',
                    },
                    {
                        index:2,
                        name:'电脑办公',
                    },
                    {
                        index:3,
                        name:'服装饰品',
                    },
                    {
                        index:4,
                        name:'美妆个护',
                    },
                    {
                        index:5,
                        name:'运动户外',
                    },
                    {
                        index:6,
                        name:'家用电器',
                    },
                    {
                        index:7,
                        name:'食品百货',
                    },
                    {
                        index:8,
                        name:'母婴玩具',
                    },
                    {
                        index:9,
                        name:'鞋靴箱包',
                    },
                    {
                        index:10,
                        name:'珠宝文玩',
                    },
                    {
                        index:11,
                        name:'生活厨具',
                    },
                    {
                        index:12,
                        name:'卧室家具',
                    },
                    {
                        index:13,
                        name:'图书文娱',
                    },
                    {
                        index:14,
                        name:'汽配摩托',
                    },
                    {
                        index:15,
                        name:'综合商品',
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
                        ranking: 1,
                        commodity : {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title : '马克华菲潮流运动鞋男休闲鞋（现在全场7折）',
                        },
                        selling_price: 19.99,
                        commission_scale : 10,
                        sales_volume : 59000,
                    },
                    {
                        ranking: 2,
                        commodity : {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title : '马克华菲潮流运动鞋男休闲鞋（现在全场7折）',
                        },
                        selling_price: 19.99,
                        commission_scale : 10,
                        sales_volume : 59000,
                    },
                    {
                        ranking: 3,
                        commodity : {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title : '马克华菲潮流运动鞋男休闲鞋（现在全场7折）',
                        },
                        selling_price: 19.99,
                        commission_scale : 10,
                        sales_volume : 59000,
                    },
                    {
                        ranking: 4,
                        commodity : {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title : '马克华菲潮流运动鞋男休闲鞋（现在全场7折）',
                        },
                        selling_price: 19.99,
                        commission_scale : 10,
                        sales_volume : 59000,
                    },
                    {
                        ranking: 5,
                        commodity : {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title : '马克华菲潮流运动鞋男休闲鞋（现在全场7折）',
                        },
                        selling_price: 19.99,
                        commission_scale : 10,
                        sales_volume : 59000,
                    },
                ],
            },
            bbq : '',
            // 取后端返回内容的总页数
            totalPages: '',

            classindex1 : 0,
        };
    },
    methods: {
        load() {
            // 滑到底部时进行加载
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
        //主要按钮前往商品详情
        goRealdetailscreen() {
            this.$router.replace('/commoditydetailed');
        },
        classificationdatacommodity(i){
            this.classindex1 = i;
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
  }
</script>
<style lang="less" scoped>

    .table_box {
    }
    .active {
        color:#248FFF;
    }
</style>
<style lang="less" scoped>
// -------table-------
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
                            font-size: 14px;
                        }
                        .table_button_group{
                            .el-button{
                                display: block;
                                margin:0 auto;
                            }
                        }
                        .saleroom{
                            color:#FBAE46;
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
                                width: 50px;
                                height: 50px;
                                display: -webkit-box;
                                display: -ms-flexbox;
                                display: flex;
                                -webkit-box-align: center;
                                -ms-flex-align: center;
                                align-items: center;
                                cursor: pointer;
                                margin-right: 10px;
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
                                width:100%;
                                text-align: left;
                                font-size: 14px;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                // text-align: left;
                                white-space: nowrap;
                                .userName_p1{
                                    white-space: normal;
                                    text-overflow: -o-ellipsis-lastline;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    display: -webkit-box;
                                    -webkit-line-clamp: 2;
                                    -webkit-box-orient: vertical;
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
                        .sales_volume{
                            color:#FBAE46;
                            font-size: 14px;
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

<style lang="less">
// selsect 选择器
.el-select-dropdown{
    border:none !important;
    background:none !important;
    .popper__arrow{
        border-bottom-color: #19477A !important;
        &:after{
            // border: #0B315C;
            // border-bottom-color: #19477A !important;
            display: none;
        }
    }
    .el-scrollbar{
        border-radius: 6px;
    }
    .el-select-dropdown__wrap{
        background: #092A4D;
        border:none;
        .el-scrollbar__view{
            
            padding-bottom: 20px;
            background: #19477A;
            .el-select-dropdown__item{
                // line-height: normal !important;
                color:#fff;
                &:hover{
                    background: #0B315C;
                }
            }
            .selected{
                color:#248FFF;
            }
        }
    }
}
.el-select-dropdown__item.hover, .el-select-dropdown__item:hover{
    background: #0B315C !important;
}
.el-select{
    .el-input{
        .el-input__inner{
            color:#fff;
            width: 180px;
            background: #0D2F55 !important;
            border:1px solid #999 !important;
        }
    }
}
</style>