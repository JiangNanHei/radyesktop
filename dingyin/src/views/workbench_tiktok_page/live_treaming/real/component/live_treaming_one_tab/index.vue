<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="onehandleClick">
            <el-tab-pane label="销售额榜" name="tableone"></el-tab-pane>
            <el-tab-pane label="销量榜" name="tabletow"></el-tab-pane>
            <el-tab-pane label="观看榜" name="tablethree"></el-tab-pane>
            <el-tab-pane label="礼物收入榜" name="tablefour"></el-tab-pane>
            <el-tab-pane label="点赞榜" name="tablefive"></el-tab-pane>
            <el-tab-pane label="主播粉丝榜" name="tablesix"></el-tab-pane>
        </el-tabs>
        <components :is="activeName"></components>
    </div>
</template>

<script>
import tableone from './component/saleslist_table'
import tabletow from './component/salesvolume_table'
import tablethree from './component/watchlist_table'
import tablefour from './component/giftIncomelist_table'
import tablefive from './component/thumbuplist_table'
import tablesix from './component/anchorfanslist_table'
    export default {
        components: {
            tableone,
            tabletow,
            tablethree,
            tablefour,
            tablefive,
            tablesix,
        },
        props: {

        },
        data() {
            return {
                activeName : 'tableone'
            };
        },
        methods: {
            // 实时直播榜 tab切换
            onehandleClick(tab, event) {
                console.log(tab, event);
            },
        },
        mounted () {
            
        }
    };
</script>

<style lang="less" scoped>
    /deep/.underway {
        animation: container 1.2s infinite linear;
    }
    /deep/.el-table {
        margin-top: 30px;
        border-radius: 10px;
        background: #144174;
    }
    /deep/.hint_empty {
        text-align: center;
        font-size: 22px;
        color: #409EFF;
        margin-top: 10px;
    }
    // 身体
    /deep/.el-table__row {
        background-color: #082C55 !important;

        td {
            border-bottom: 1px solid #326CAD !important;
            height: 88px;
        }

        &:last-child {
            td {
                border: none !important;
            }
        }
    }
</style>