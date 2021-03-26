<template>
    <div>
        <el-tabs v-model="activeName">
            <el-tab-pane label="直播流量概览" name="liveoverview"></el-tab-pane>
        </el-tabs>
        
        <components :is="activeName"></components>
        <towactiveNameonebotm></towactiveNameonebotm>
    </div>
</template>

<script>
import liveoverview from './component/liveoverview'
import towactiveNameonebotm from './component/liveoverviewsort'
    export default {
        components: {
            liveoverview,
            towactiveNameonebotm,
        },
        props: {

        },
        data() {
            return {
                activeName : 'liveoverview',
            };
        },
        methods: {

        },
    };
</script>

<style lang="less" scoped>
    /deep/.el-table__header-wrapper {
        th {
            &:nth-child(2){
                text-align: center !important;
            }
            &:nth-child(3){
                text-align: center !important;
            }
        }
    }
    /deep/.el-table {
        margin-top: 30px;
        border-radius: 10px 10px 0px 0px;
        background: #144174;
    }
    /deep/.el-tabs__active-bar {
        height: 3px !important;
        background: #248FFF !important;
    }
    // 身体
    /deep/.el-table__row {
        background-color: #082C55 !important;

        td {
            border-bottom: 1px solid #326CAD !important;
            height: 88px;
        }
    }
</style>