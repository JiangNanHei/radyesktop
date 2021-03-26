<template>
    <div class="box">
        <!-- 筛选 -->
        <!-- table 列表 -->
        <el-table :data="businesscooperationdata.slice((currpage -1) * pagesize, currpage * pagesize)"
            :default-sort="{prop: 'tow', order: 'descending'}">
            <el-table-column width="240px" align="center" label="订单编号" prop="orderreference"></el-table-column>
            <el-table-column align="center" label="购买的产品名称" prop="productname"></el-table-column>
            <el-table-column align="center" label="支付金额" prop="payment_sum">
                <template slot-scope="scope">
                    ￥{{scope.row.payment_sum}}
                </template>
            </el-table-column>
            <el-table-column align="center" label="下单时间" prop="order_time"></el-table-column>
            <el-table-column align="center" label="支付时间" prop="payment_time"></el-table-column>
            <el-table-column align="center" label="支付状态" prop="payment_status"></el-table-column>
            <el-table-column align="center" label="支付方式" prop="payment_way"></el-table-column>
            <el-table-column align="center" label="支付端" prop="payment_terminal"></el-table-column>
        </el-table>
        <div class="el_pagination_box clearfix">
            <el-pagination @size-change="handleSizeChange" @curren-change="handleCurrentChange"
                :page-sizes="[10,20,30,40,50,100]" :page-size="pagesize" background layout="prev, pager, next"
                :total="businesscooperationdata.length">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        naem:'我的订单',
        components: {
        },
        props: {

        },
        data() {
            return {
                // 分页器
                pagesize: 10,
                currpage: 1,
                // 列表数据数组
                businesscooperationdata: [
                    {
                        orderreference : 'H1339549328957952378358532',
                        productname : '购买1个月的豪华会员套餐',
                        payment_sum : 1399,
                        order_time : '2020-12-17 18:57:42',
                        payment_time : '2020-12-17 18:57:56',
                        payment_status : '支付成功',
                        payment_way : '微信支付',
                        payment_terminal : 'PC端'
                    },
                ],

                // 取后端返回内容的总页数
                totalPages: '',
            };
        },
        methods: {
            handleSizeChange(val) {
                console.log(val);
                this.pagesize = val;
            },
            handleCurrentChange(val) {
                console.log(val);
                this.currpage = val;
            },
        },
        mounted(){
        },
    };
</script>

<style lang="less" scoped>
    .box {

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
            &:nth-child(1){
                text-align: left ;
                
                .cell{
                    padding-left: 10px;
                }
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
                    &:first-child{
                        text-align: left;
                    }
                    .cell {
                        font-size: 14px;
                        .table_td_one{
                            text-align: left;
                            margin-left: 30px;
                        }
                    }
                }
            }
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

/deep/.el_pagination_box {
    background-color: #082C55;
    padding: 30px 0;

    .el-pagination {
        float: right;
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