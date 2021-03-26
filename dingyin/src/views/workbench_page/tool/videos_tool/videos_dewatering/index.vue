<template>
    <div class="videos-dewatering-wrapper">
        <tableone></tableone>
    </div>
</template>

<script>
import tableone from './component/drainage_table_one'

export default {
    components: {
        tableone
    },
    props: {

    },
    data() {
        return {
            
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
