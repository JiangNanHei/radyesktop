<template>
    <div class="box">
        <!-- 筛选 -->
        <!-- table 列表 -->
        <el-table :data="businesscooperationdata"
            @selection-change="checkselect">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column width="240px" align="center" label="订单编号" prop="orderreference"></el-table-column>
            <el-table-column align="center" label="购买的产品名称" prop="productname"></el-table-column>
            <el-table-column align="center" label="支付金额" prop="payment_sum">
                <template slot-scope="scope">
                    ￥{{scope.row.payment_sum}}
                </template>
            </el-table-column>
            <el-table-column align="center" label="支付时间" prop="payment_time"></el-table-column>
            <el-table-column align="center" label="状态" prop="status"></el-table-column>
            <el-table-column width="140px" align="center" label="操作">
                <!-- <template slot-scope="scope"> -->
                <div class="table_button_group">
                    <el-button type="primary" @click="viewdetails">开发票</el-button>
                </div>
                <!-- </template> -->
            </el-table-column>
        </el-table>
        <div class="bypass_header">
            <div class="header_left">
                <el-popover
                    placement="bottom-start"
                    width="200"
                    trigger="hover">
                    <el-button slot="reference">
                        <i class="iconfont icon-wenhao"></i>开具发票说明
                    </el-button>
                    <p>发票基于订单开具,金额为实际支付金额,多个订单可以合并开票,单个订单不可分拆开票</p>
                </el-popover>
            </div>
            <div class="header_right">
                <span v-if="quantity>=1" class="pitchfeedback">已经选中{{quantity}}张发票</span>
                <el-button type="primary" @click="optforinvoice">开具选中发票</el-button>
            </div>
        </div>
        <frominvoicediolog ref="frominvoicediolog"></frominvoicediolog>
    </div>
</template>

<script>
// 开发票
import frominvoicediolog from './frominvoicediolog'
    export default {
        naem:'开具发票',
        components: {
            frominvoicediolog
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
                        payment_time : '2020-12-17 18:57:56',
                        status : '未开发票',
                    },
                    {
                        orderreference : 'H1339549328957952378358532',
                        productname : '购买1个月的豪华会员套餐',
                        payment_sum : 1399,
                        payment_time : '2020-12-17 18:57:56',
                        status : '未开发票',
                    },
                ],
                // 已经选中 多少张 发票
                quantity : 0,
            };
        },
        methods: {
            // 开发票
            viewdetails(){

            },
            // 开具选中发票
            optforinvoice(){
                this.$refs.frominvoicediolog.invoicevalue = true;
            },
            // table 多选框改变事件
            checkselect(array){
                this.quantity = array.length; 
            }
        },
        mounted(){
        },
    };
</script>

<style lang="less" scoped>
    .box {
        .bypass_header{
            margin-top: 20px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            .header_left{
                line-height: 32px;
                font-size: 12px;
                // display: inline-block;
                color: #ccc;
                /deep/.el-popover__reference-wrapper{
                    color: #999;
                    margin-right: 20px;
                    .el-button{
                        background: none !important;
                        color: #999;
                        background: none;
                        border:none;
                        i{
                            vertical-align: text-top;
                            margin-right: 5px;
                        }
                    }
                }
                span{
                    color:#fff;
                }
            }
            .header_right{
                .pitchfeedback{
                    color:#fff;
                    font-size: 14px;
                    margin-right: 20px;
                }
                >.el-button {
                    height: 34px;
                }
            }
        }
        // 多选框
        /deep/.el-checkbox__inner{
            background-color: #021428;
            border:1px solid #326CAD;
        }
        /deep/.is-checked{
            .el-checkbox__inner{
                background: #248FFF;
            }
        }
        /deep/.is-indeterminate{
            .el-checkbox__inner{
                background: #248FFF;
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
                        font-size: 14px;
                        .table_td_one{
                            text-align: left;
                            margin-left: 30px;
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
</style>
<style lang="less">
    .el-popover{
        width: 300px !important;
        background: #0D2F55;
        border:none;
        color:#ccc;
        font-size: 14px;
        line-height: 25px;
        .popper__arrow{
            display: none;
        }
    }
</style>