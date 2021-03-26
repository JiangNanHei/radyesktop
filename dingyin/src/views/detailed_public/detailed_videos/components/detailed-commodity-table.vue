<template>
    <div>
        <!-- table -->
        <el-table 
        :data="content.slice((currpage -1) * pagesize, currpage * pagesize)" 
        :default-sort = "{prop: 'release_time', order: 'descending'}"
        >
            <el-table-column min-width="180px" align="center" label="商品">
                <template slot-scope="scope">
                    <div class="columntow">
                        <div class="userImg">
                            <img :src="scope.row.video_content.imgUrl">
                        </div>
                        <div class="userName">
                            <p>{{scope.row.video_content.title}}</p>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" label="售价（元）" prop="estimate_saleroom">
                <template slot-scope="scope">
                    {{scope.row.price}}
                </template>
            </el-table-column>
            <el-table-column align="center" label="销量" prop="give">
                <template slot-scope="scope">
                    {{scope.row.sales_volume}}
                </template>
            </el-table-column>
            <el-table-column align="center" label="销售额" prop="sales_amount">
                <!-- <template slot-scope="scope">
                    {{scope.row.sales_amount}}
                </template> -->
            </el-table-column>
            <el-table-column  align="center" label="操作" prop="saleroom">
                <template>
                    <div class="table_button_group">
                        <el-button type="primary" @click="goGoodsdetailed">商品详情</el-button>
                    </div>
                </template>
            </el-table-column>
            <el-table-column type="expand">
                <template slot-scope="scope">
                    <video-table2 :content="scope.row.children"></video-table2>
                </template>
            </el-table-column>
        </el-table>
        <!-- <div class="el_pagination_box clearfix">
            <el-pagination @size-change="handleSizeChange" @curren-change="handleCurrentChange"
                :page-sizes="[10,20,30,40,50,100]" :page-size="pagesize" background layout="prev, pager, next"
                :total="content.length">
            </el-pagination>
        </div> -->
    </div>
</template>

<script>
    import videoTable2 from './detailed-commodity-table2'
    export default {
        components: {
           videoTable2
        },
        props: ['content',"video_table2"],
        data() {
            return {
                // 搜索框input
                videotablsearch : '',
                // 分页器
                pagesize: 10,
                currpage: 1,
                // activeNames: ''
                
            };
        },
        methods: {
            // table搜索框搜索按钮
            videotablebut(){
                // if(!this.videotablsearch){
                //     this.towtableData = this.towtableData_master;
                // }else{
                //     this.towtableData = this.towtableData_master;
                //     this.towtableData = this.towtableData.filter(data => !this.videotablsearch || data.video_content.title.toLowerCase().includes(this.videotablsearch.toLowerCase()))
                // }
                
            },
            handleSizeChange(val) {
                console.log(val);
                this.pagesize = val;
            },
            handleCurrentChange(val) {
                console.log(val);
                this.currpage = val;
            },
            goGoodsdetailed () {
                this.$router.replace('/commoditydetailed')
            }
        },
    };
</script>

<style lang="less" scoped>
    
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
        padding: 30px 0;

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
    /deep/.el-table{
        // margin-top: 30px;
        border-radius: 5px 5px 0 0;
        background: #144174;
        tr{
            td {
                color: #fff;
            }

            &:hover {
                td {
                    background-color: hsla(0, 0%, 100%, .02);
                }
            }
        }
    }

    /deep/.el-table::before {
        display: none !important;
    }
    /deep/.el-table__expanded-cell{
        padding: 0;
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
                p{
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
    /deep/.el-pagination.is-background .el-pager li{
        background: none;
        color: #fff;
        border: 1px solid #E1EAF7;
    }

    /deep/.el-pagination.is-background .el-pager li:not(.disabled).active {
        background: #248FFF;
        border:1px solid #248FFF;
    }
    //操作
    /deep/.el-collapse-item__wrap{
        display:none;
    }
    /deep/.el-collapse-item__header{
        background: #082C55;
        color: #248FFF;
        border-bottom: none;
        height: 20px;
        line-height: 20px;
    }
    /deep/.el-collapse{
        border-top: none;
    }
    /deep/.el-table__expand-icon{
        color: #FFFFFF;
    }
</style>