<template>
    <div class="sellgoods_box">
        <el-tabs class="tabheader" v-model="activeName">
            <el-tab-pane label="视频引流榜" name="tableone"></el-tab-pane>
            <el-tab-pane label="PK涨粉榜" name="tabletow"></el-tab-pane>
            <el-tab-pane label="直播分享榜" name="tablethree"> </el-tab-pane>
            <el-tab-pane label="音浪打赏榜" name="tablefour"></el-tab-pane>
            <el-tab-pane label="音浪收入榜" name="tablefive"></el-tab-pane>
        </el-tabs>
        <components :is="activeName"></components>
    </div>
</template>

<script>
import tableone from './component/drainage_table_one'
import tabletow from './component/drainage_table_tow'
import tablethree from './component/drainage_table_three'
import tablefour from './component/drainage_table_four'
import tablefive from './component/drainage_table_five'
export default {
    components: {
        tableone,
        tabletow,
        tablethree,
        tablefour,
        tablefive,
    },
    props: {

    },
    data() {
        return {
            activeName : 'tableone'
        };
    },
    methods: {

    },
};
</script>

<style lang="less" scoped>
.sellgoods_box{
    /deep/.tabheader {
        .el-tabs__header {
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
</style>
