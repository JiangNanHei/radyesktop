<template>
    <div class="sellgoods_box">
        <el-tabs class="tabheader" v-model="activeName">
            <el-tab-pane label="我的关注" name="attentionuser"></el-tab-pane>
            <el-tab-pane label="关注视频" name="attentionvideo"></el-tab-pane>
            <el-tab-pane label="关注音乐" name="attentionmusic"></el-tab-pane>
            <el-tab-pane label="关注话题" name="attentiontopic"></el-tab-pane>
            <el-tab-pane label="关注商品" name="attentioncommodity"></el-tab-pane>
        </el-tabs>
        <components :is="activeName"></components>
    </div>
</template>

<script>
// 关注用户
import attentionuser from './component/attentionuser'
// 关注视频
import attentionvideo from './component/attentionvideo'
// 关注音乐
import attentionmusic from './component/attentionmusic'
// 关注话题
import attentiontopic from './component/attentiontopic'
// 关注商品
import attentioncommodity from './component/attentioncommodity'
export default {
    components: {
        attentionuser,
        attentionvideo,
        attentionmusic,
        attentiontopic,
        attentioncommodity,
    },
    props: {

    },
    data() {
        return {
            activeName : 'attentionuser'
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
