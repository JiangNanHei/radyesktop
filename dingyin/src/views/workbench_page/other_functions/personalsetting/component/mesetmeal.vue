<template>
    <div class="box">
        <el-row class="list" :gutter="20">
            <el-col :span="8" class="item" v-for="(item,i) in combo_data" :key="i">
                <div class="grid-content bg-purple">
                    <div class="content-left">
                        <p class="title">{{item.title}}</p>
                        <p class="text_p1">
                            <span class="first_span">会员次数 : </span>
                            <span>{{item.member.residue_number}}</span><span>次</span><span class="xieg">/</span>
                            {{item.member.sum_number}}次
                        </p>

                        <p class="text_p2" v-if="item.recharge">
                            <span class="first_span">充值次数 : </span>
                            <span>{{item.recharge.residue_number}}</span><span>次</span><span class="xieg">/</span>
                            {{item.recharge.sum_number}}次
                        </p>
                    </div>
                    <div class="content-right">
                        <div class="canvas_box" :id="'canvas_box'+(i+1)">

                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
 import { echarts_annulus } from '@/assets/js/echarts_self.js'
export default {
    naem : '个人设置-我的套餐',
    components: {

    },
    props: {

    },
    data() {
        return {
            combo_data : [
                {
                    title : '监控直播次数',
                    // 会员
                    member : {
                        sum_number : 30,    // 总数
                        residue_number : 30 //当前数
                    },
                    // 充值
                    recharge : {
                        sum_number : 30,
                        residue_number : 30
                    }
                },
                {
                    title : '监控视频次数',
                    // 会员
                    member : {
                        sum_number : 200,    // 总数
                        residue_number : 200 //当前数
                    },
                    // 充值
                    recharge : {
                        sum_number : 0,
                        residue_number : 0
                    }
                },
                {
                    title : '监控评论次数',
                    // 会员
                    member : {
                        sum_number : 200,    // 总数
                        residue_number : 200 //当前数
                    },
                    // 充值
                    recharge : {
                        sum_number : 0,
                        residue_number : 0
                    }
                },
                {
                    title : '素材库脚本下载次数',
                    // 会员
                    member : {
                        sum_number : 10,    // 总数
                        residue_number : 7 //当前数
                    },
                    // 充值
                    recharge : {
                        sum_number : 0,
                        residue_number : 0
                    }
                },
                {
                    title : '账号估值次数',
                    // 会员
                    member : {
                        sum_number : 20,    // 总数
                        residue_number : 20 //当前数
                    },
                },
                {
                    title : '视频去水印次数',
                    // 会员
                    member : {
                        sum_number : 500,    // 总数
                        residue_number : 500 //当前数
                    },
                },
                {
                    title : '提取视频次数',
                    // 会员
                    member : {
                        sum_number : 500,    // 总数
                        residue_number : 500 //当前数
                    },
                },
                {
                    title : '资源合作详情信息查看次数',
                    // 会员
                    member : {
                        sum_number : 10,    // 总数
                        residue_number : 10 //当前数
                    },
                },
            ]
        };
    },
    methods: {

    },
    mounted() {
        echarts_annulus(document.getElementById('canvas_box1'),30,30,'100%');
        echarts_annulus(document.getElementById('canvas_box2'),200,200,'100%');
        echarts_annulus(document.getElementById('canvas_box3'),200,200,'100%');
        echarts_annulus(document.getElementById('canvas_box4'),10,7,'70%');
        echarts_annulus(document.getElementById('canvas_box5'),20,20,'100%');
        echarts_annulus(document.getElementById('canvas_box6'),500,500,'100%');
        echarts_annulus(document.getElementById('canvas_box7'),500,500,'100%');
        echarts_annulus(document.getElementById('canvas_box8'),10,10,'100%');
    }
};
</script>

<style lang="less" scoped>
.box{
    .list{
        .item{
            margin-bottom: 20px;
            .grid-content{
                min-height: 152px;
                overflow: hidden !important;
            }
        }
    }
}
</style>
<style lang="less" scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #051C36;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    display: flex;
    padding: 20px;
    color: #fff;
    overflow: hidden !important;
    .content-left{
        flex: 1;
        .title{
            font-size: 14px;
            margin-bottom: 30px;
        }
        .text_p1{
            font-size: 12px;
            margin-bottom: 10px;
            span{
                font-size: 20px;
            }
        }
        .text_p2{
            font-size: 12px;
            span{
                font-size: 20px;
            }
        }
        p{
            .first_span{
                font-size: 12px;
                margin-right: 20px;
            }
            .xieg{
                font-size: 16px;
                margin:0 2px;
            }
        }
    }
    .content-right{
        flex: 1;
        margin-right: -65px;
        .canvas_box{
            width: 100%;
            height: 100%;
        }
    }
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
