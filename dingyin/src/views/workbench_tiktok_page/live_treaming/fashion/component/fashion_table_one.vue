<template>
    <div class="table_box">
        <el-dialog :visible.sync="dialogTableVisible" :append-to-body="true">
            <i class="iconfont icon-cuowu1 closebut" @click="closebut"></i>
            <div class="table_header">
                <div class="header_left">
                    <img :src="clickdata.imgurl">
                </div>
                <div class="header_right">
                    <p class="p1">
                        {{clickdata.name}}
                        <img src="@/assets//images/fashion/authentication.png">
                    </p>
                    <p class="p2">
                        <span>{{clickdata.livetitle}}</span>
                    </p>
                </div>
            </div>
            <p class="header_title">共{{clickdata.history}}场直播</p>
            <el-table :data="towtableData.slice((currpage -1) * pagesize, currpage * pagesize)">
                <el-table-column min-width="180px" align="center" label="直播内容">
                    <template slot-scope="scope">
                        <div class="columntow">
                            <div class="userImg">
                                <img :src="scope.row.video_content.imgurl">
                            </div>
                            <div class="userName">
                                <p>{{scope.row.video_content.title}}</p>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column align="center" label="开播时间" prop="release_time"></el-table-column>
                <el-table-column align="center" label="直播时长" prop="estimate_sales"></el-table-column>
                <el-table-column align="center" label="音浪" prop="estimate_saleroom">
                    <template slot-scope="scope">
                        {{scope.row.estimate_saleroom | NumToUnitNum}}
                    </template>
                </el-table-column>
                <el-table-column align="center" label="销量" prop="give">
                    <template slot-scope="scope">
                        {{scope.row.give | NumToUnitNum}}
                    </template>
                </el-table-column>
                <el-table-column align="center" label="预估销售额" prop="comment">
                    <template slot-scope="scope">
                        ￥{{scope.row.comment | NumToUnitNum}}
                    </template>
                </el-table-column>
                <el-table-column min-width="100px" align="center" label="操作" prop="saleroom">
                    <template>
                        <div class="table_button_group">
                            <el-button type="primary">直播详情</el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <div class="el_pagination_box clearfix">
                <el-pagination @size-change="handleSizeChange" @curren-change="handleCurrentChange"
                    :page-sizes="[10,20,30,40,50,100]" :page-size="pagesize" background layout="prev, pager, next"
                    :total="towtableData.length">
                </el-pagination>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        components: {

        },
        props: {
            clickdata : Object
        },
        data() {
            return {
                dialogTableVisible: false,
                // 分页器
                pagesize: 6,
                currpage: 1,
                // 初始列表数据数组
                towtableData_master : [
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                ],
                // 列表数据数组
                towtableData : [
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                    {
                        video_content: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '这是一段直播内容啊啊啊啊'
                        },
                        release_time: '12-27 21:53',
                        estimate_sales: '4小时52分钟',
                        estimate_saleroom: 89000,
                        give: 12000,
                        comment: 14202000,
                    },
                ],
            };
        },
        methods: {
            // 弹窗关闭
            closebut(){
                this.dialogTableVisible = false;
            },
            handleSizeChange(val) {
                console.log(val);
                this.pagesize = val;
            },
            handleCurrentChange(val) {
                console.log(val);
                this.currpage = val;
            },
        },
    };
</script>

<style lang="less" scoped>
    .table_box {
        position: relative;
    }
    /deep/.el-dialog {
        background: #051C36;
        width: 800px;
        border-radius: 6px;
        .closebut{
            cursor: pointer;
            font-size: 30px;
            position:absolute;
            right: 10px;
            top: 10px;
            color:#285F9E;
        }
        .el-dialog__header{
            display: none;
        }
        .header_title{
            color:#fff;
            text-align: right;
            font-size: 16px;
            margin-top: -20px;
        }
        .table_header{
            position: relative;
            display: flex;
            .header_left{
                margin-right: 20px;
                img{
                    display: block;
                    width: 50px;
                    border-radius: 50%;
                }
            }
            .header_right{
                flex: 1;
                .p1{
                    font-size: 15px;
                    color:#fff;
                    margin-top: 3px;
                    margin-bottom: 5px;
                    img{
                        width: 14px;
                    }
                }
                .p2{
                    font-size: 13px;
                    color:#ccc;
                }
            }
        }
    }

</style>
<style lang="less" scoped>
    
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

            &:nth-child(1) {
                text-align: left;
            }
        }
    }

    // 分页器
    /deep/.el_pagination_box {
        background-color: #082C55;
        padding: 27px 0;
        border-radius: 0 0 6px 6px;
        .el-pagination {
            float: right;
        }
    }

    .btn-next,
    .btn-prev,
    .el-pager li {
        background: none;
        color: #fff;
        border: 1px solid #E1EAF7;
    }

    .el-pagination.is-background .el-pager li:not(.disabled).active {
        background: #248FFF;
    }

    // 身体
    /deep/.el-table__row {
        background-color: #082C55 !important;

        td {
            border-bottom: 1px solid #326CAD !important;
            height: 88px;
        }
    }

    /deep/.el-table {
        border-radius: 5px 5px 0 0;
        background: #144174;
        margin-top: 20px;
        tr {
            td {
                color: #fff;
            }

            &:hover {
                td {
                    background-color: hsla(0, 0%, 100%, .02);
                }
            }
        }
        .table_button_group{
            .el-button{
                padding: 6px 8px;
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
                margin-right: 6px;
                -ms-flex-negative: 0;
                flex-shrink: 0;
                position: relative;
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
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;

                p {
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    font-size: 14px;
                }
            }
        }
    }

    /deep/.el-pagination.is-background .btn-next,
    /deep/.el-pagination.is-background .btn-prev,
    /deep/.el-pagination.is-background .el-pager li {
        background: none;
        color: #fff;
        border: 1px solid #E1EAF7;
    }

    /deep/.el-pagination.is-background .el-pager li:not(.disabled).active {
        background: #248FFF;
        border: 1px solid #248FFF;
    }
</style>