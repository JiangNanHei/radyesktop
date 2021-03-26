<template>
    <div class="box-wrapper">
        <detailed-left></detailed-left>
        <div class="d-right">
            <div class="d-right-title">
                <el-tabs class="tabheader" v-model="activeName">
                    <el-tab-pane label="数据分析" name="detailed-data"></el-tab-pane>
                    <el-tab-pane label="评论分析" name="detailed-comment"></el-tab-pane>
                    <el-tab-pane label="商品分析" name="detailed-commodity"></el-tab-pane>
                    <el-tab-pane label="观众分析" name="detailed-fans"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="d-right-content">
                <components :is="activeName"></components>
            </div>
        </div>
    </div>
</template>

<script>
import detailedLeft from './components/detailed-left'
import detailedData from './components/detailed-data'
import detailedComment from './components/detailed-comment'
import detailedCommodity from './components/detailed-commodity'

import detailedFans from './components/detailed-fans'
export default {
    naem : '实时直播榜',
    components: {
        detailedLeft,
        detailedFans,
        detailedData,
        detailedComment,
        detailedCommodity,
        detailedFans 
    },
    props: {

    },
    data() {
        return {
            activeName: 'detailed-data',
        };
    },
    computed: {
        
    },
    created() {
        
    },
    methods: {
        
    },
};
</script>

<style lang="less" scoped>
    .box-wrapper{
        color: #fff;
        position: relative;
        display: flex;
        .d-bg-purple{
            padding: 20px;
            background: #051C36;
            // overflow: hidden;
        }
        .d-right{
            flex: 1;
            .d-right-title{
                .tabheader{
                    /deep/.el-tabs__header{
                        .el-tabs__active-bar{
                            display: none;
                        }
                        .el-tabs__nav-wrap::after{
                            background: none;
                        }
                        .el-tabs__item{
                            padding:0px;
                            margin-right:20px;
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
                            &:hover{
                                border-color: hsla(0,0%,100%,.5);
                            }
                        }
                        .is-active{
                            background-image: -webkit-linear-gradient(45deg,#248FFF,#4AC2FF);
                            border:none;
                        }
                    }
                }
            }
        }
    }
</style>