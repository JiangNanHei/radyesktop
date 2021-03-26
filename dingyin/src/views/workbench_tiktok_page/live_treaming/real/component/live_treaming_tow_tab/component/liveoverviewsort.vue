<template>
    <div>
        <!-- 2级 tab标签 -->
        <el-tabs class="tabheader" v-model="activeName">
            <el-tab-pane label="销售额排序" name="activeNameone">
                <el-tabs v-model="activeNameone" v-if="activeName == 'activeNameone'">
                    <el-tab-pane label="实时商品榜" name="saleroomcommodity"></el-tab-pane>
                    <el-tab-pane label="实时品牌榜" name="saleroombrand"></el-tab-pane>
                    <el-tab-pane label="实时类目榜" name="saleroomcategory"></el-tab-pane>
                </el-tabs>
                <components :is="activeNameone"></components>
            </el-tab-pane>
            <el-tab-pane label="销量排序" name="activeNametow">
                <el-tabs v-model="activeNametow" v-if="activeName == 'activeNametow'">
                    <el-tab-pane label="未知榜单1" name="salesvolumeone"></el-tab-pane>
                    <el-tab-pane label="未知榜单2" name="salesvolumetow"></el-tab-pane>
                    <el-tab-pane label="未知榜单3" name="salesvolumethree"></el-tab-pane>  
                </el-tabs>
                <components :is="activeNameone"></components>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
// 销售额度
import saleroomcommodity from "./page/saleroom_commodity_table"
import saleroombrand from "./page/saleroom_brand_table"
import saleroomcategory from "./page/saleroom_category_table"
// 销售量
import salesvolumeone from "./page/salesvolume_one_table"
import salesvolumetow from "./page/salesvolume_tow_table"
import salesvolumethree from "./page/salesvolume_three_table"
    export default {
        components: {
            saleroomcommodity,
            saleroombrand,
            saleroomcategory,


            salesvolumeone,
            salesvolumetow,
            salesvolumethree,
        },
        props: {

        },
        data() {
            return {
                activeName: 'activeNameone',

                activeNameone: 'saleroomcommodity',
                activeNametow: 'salesvolumeone',
            };
        },
        methods: {

        },
    };
</script>

<style lang="less" scoped>
    // 直播流量概览
    /deep/.el-table {
        .el-table__body-wrapper {
            .el-table__row {
                .salesamount_box {
                    color: #face15;
                }
            }
        }
    }
    /deep/.tabheader {
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

    // 分页器
    /deep/.el_pagination_box {
        background-color: #082C55;
        padding: 30px 0;

        .el-pagination {
            padding: 0 32px;
            float: right;
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
</style>