<template>
    <div class="attention_box">
        <el-row class="attentionlist">
            <el-col class="attentionitem" :span="12" v-for="(item,i) in genius_data" :key="i">
                <div class="grid-content">
                    <div class="grid-content-top">
                        <div class="box_img">
                            <img :src="item.head_portrait">
                        </div>
                        <div class="box_text">
                            <div class="box_text1"><span class="textname">{{item.name}}</span><span class="classtype">{{item.type}}</span></div>
                            <div class="box_text2">抖音号:<span>{{item.kikkok}}</span></div>
                            <div class="box_text3">简介:<span>{{item.synopsis}}</span></div>
                        </div>
                        <div class="box_but">
                            <el-button class="transfer" plain>达人详情</el-button>
                            <el-button class="unfollow" plain>取消关注</el-button>
                        </div>
                    </div>
                    <div class="grid-content-bottom">
                        <div class="messageitem" v-for="(item,i) in item.informationdata" :key="i">
                            <p class="quantity">{{item.quantity | NumToUnitNum}}</p>
                            <p class="channel">{{item.channel}}</p>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    naem : '我的关注-关注用户',
    components: {

    },
    props: {

    },
    data() {
        return {
            genius_data : [
                {
                    head_portrait : 'https://p6-dy-ipv6.byteimg.com/aweme/1080x1080/313eb0007f3342c05bded.jpeg?from=4010531038',
                    name : '湖南辣妹子啊',
                    type : '穿搭',
                    kikkok : 'HUNAZIA543',
                    synopsis : '一个女演员的生活日常。辣妹子直播间售后方式。私信我关注的:辣妹子客服',
                    informationdata : [
                        {
                            quantity : 44443000,
                            channel : '抖音粉丝',
                        },
                        {
                            quantity : 3434,
                            channel : '作品数',
                        },
                        {
                            quantity : 34343000,
                            channel : '评论数',
                        },
                        {
                            quantity : 720000000,
                            channel : '点赞数',
                        },
                        {
                            quantity : 34343000,
                            channel : '分享数',
                        },
                    ]
                },
                {
                    head_portrait : 'https://p6-dy-ipv6.byteimg.com/aweme/1080x1080/313eb0007f3342c05bded.jpeg?from=4010531038',
                    name : '湖南辣妹子啊',
                    type : '穿搭',
                    kikkok : 'HUNAZIA543',
                    synopsis : '一个女演员的生活日常。辣妹子直播间售后方式。私信我关注的:辣妹子客服',
                    informationdata : [
                        {
                            quantity : 44443000,
                            channel : '抖音粉丝',
                        },
                        {
                            quantity : 3434,
                            channel : '作品数',
                        },
                        {
                            quantity : 34343000,
                            channel : '评论数',
                        },
                        {
                            quantity : 720000000,
                            channel : '点赞数',
                        },
                        {
                            quantity : 34343000,
                            channel : '分享数',
                        },
                    ]
                },
                {
                    head_portrait : 'https://p6-dy-ipv6.byteimg.com/aweme/1080x1080/313eb0007f3342c05bded.jpeg?from=4010531038',
                    name : '湖南辣妹子啊',
                    type : '穿搭',
                    kikkok : 'HUNAZIA543',
                    synopsis : '一个女演员的生活日常。辣妹子直播间售后方式。私信我关注的:辣妹子客服',
                    informationdata : [
                        {
                            quantity : 44443000,
                            channel : '抖音粉丝',
                        },
                        {
                            quantity : 3434,
                            channel : '作品数',
                        },
                        {
                            quantity : 34343000,
                            channel : '评论数',
                        },
                        {
                            quantity : 720000000,
                            channel : '点赞数',
                        },
                        {
                            quantity : 34343000,
                            channel : '分享数',
                        },
                    ]
                },
            ]
        };
    },
    methods: {

    },
};
</script>

<style lang="less" scoped>
    .attention_box{
        width: 100%;
        .attentionlist{
            width: 100%;
            .attentionitem{
                margin-bottom:20px;
                &:nth-child(even){
                    padding-left: 10px;
                }
                &:nth-child(odd){
                    padding-right: 10px;
                }
                .grid-content{
                    background: #072240;
                    padding: 20px;
                    color:#fff;
                    border-radius: 6px;
                    .grid-content-top{
                        display: flex;
                        margin-bottom:20px;
                        .box_img{
                            margin-right: 10px;
                            img{
                                display: block;
                                width: 60px;
                                border-radius: 50%;
                            }
                        }
                        .box_text{
                            flex: 1;
                            line-height: 20px;
                            .box_text1{
                                .textname{
                                    margin-right: 10px;
                                }
                                .classtype{
                                    font-size: 12px;
                                    color:#F0A847;
                                    padding: 0 10px;
                                    border-radius: 15px;
                                    display: inline-block;
                                    border:1px solid #F0A847;
                                }
                            }
                            .box_text2{
                                font-size: 12px;
                                color:#ccc;
                            }
                            .box_text3{
                                font-size: 12px;
                                color:#ccc;
                                white-space:nowrap;
                                overflow:hidden;
                                text-overflow:ellipsis;
                            }
                        }
                        .box_but{
                            text-align: right;
                            .transfer{
                                display: block;
                                margin: 0px;
                                margin-bottom:5px;
                                background: none !important;
                                border:1px solid #248fff !important;
                                color:#248fff;
                            }
                            .unfollow{
                                display: block;
                                margin: 0px;
                                background: none !important;
                                border:1px solid #F0A847 !important;
                                color:#F0A847;
                            }
                        }
                    }
                    .grid-content-bottom{
                        display: flex;
                        text-align: center;
                        .messageitem{
                            flex: 1;
                            .quantity{
                                font-size: 18px;
                                margin-bottom:3px;
                            }
                            .channel{
                                color:#ccc;
                                font-size: 12px;
                            }
                        }
                    }
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
</style>
