<template>
    <div class="attention_box">
        <el-row class="attentionlist">
            <el-col class="attentionitem" :span="8" v-for="(item,i) in genius_data" :key="i">
                <div class="grid-content">
                    <div class="grid-content-top">
                        <div class="box_img">
                            <img :src="item.head_portrait">
                        </div>
                        <div class="box_text">
                            <div class="box_text1"><span class="textname">{{item.name}}</span></div>
                            <div class="box_text2">音乐时长:<span>{{item.tiem}}</span>s</div>
                        </div>
                        <div class="box_but">
                            <el-button class="unfollow" plain>取消关注</el-button>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    naem : '我的关注-关注音乐',
    components: {

    },
    props: {

    },
    data() {
        return {
            genius_data : [
                {
                    head_portrait : 'https://p6-dy-ipv6.byteimg.com/aweme/1080x1080/313eb0007f3342c05bded.jpeg?from=4010531038',
                    name : '@神居动漫@大创作的原生',
                    tiem : 12
                },
                {
                    head_portrait : 'https://p6-dy-ipv6.byteimg.com/aweme/1080x1080/313eb0007f3342c05bded.jpeg?from=4010531038',
                    name : '@神居动漫@大创作的原生',
                    tiem : 12
                },
                {
                    head_portrait : 'https://p6-dy-ipv6.byteimg.com/aweme/1080x1080/313eb0007f3342c05bded.jpeg?from=4010531038',
                    name : '@神居动漫@大创作的原生',
                    tiem : 12
                },
                {
                    head_portrait : 'https://p6-dy-ipv6.byteimg.com/aweme/1080x1080/313eb0007f3342c05bded.jpeg?from=4010531038',
                    name : '@神居动漫@大创作的原生',
                    tiem : 12
                },
                {
                    head_portrait : 'https://p6-dy-ipv6.byteimg.com/aweme/1080x1080/313eb0007f3342c05bded.jpeg?from=4010531038',
                    name : '@神居动漫@大创作的原生',
                    tiem : 12
                },
                {
                    head_portrait : 'https://p6-dy-ipv6.byteimg.com/aweme/1080x1080/313eb0007f3342c05bded.jpeg?from=4010531038',
                    name : '@神居动漫@大创作的原生',
                    tiem : 12
                },
                {
                    head_portrait : 'https://p6-dy-ipv6.byteimg.com/aweme/1080x1080/313eb0007f3342c05bded.jpeg?from=4010531038',
                    name : '@神居动漫@大创作的原生',
                    tiem : 12
                },
                {
                    head_portrait : 'https://p6-dy-ipv6.byteimg.com/aweme/1080x1080/313eb0007f3342c05bded.jpeg?from=4010531038',
                    name : '@神居动漫@大创作的原生',
                    tiem : 12
                },
                {
                    head_portrait : 'https://p6-dy-ipv6.byteimg.com/aweme/1080x1080/313eb0007f3342c05bded.jpeg?from=4010531038',
                    name : '@神居动漫@大创作的原生',
                    tiem : 12
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
            margin: 0 auto;
            .attentionitem{
                margin-bottom:20px;
                &:nth-child(3n){
                    padding-left: 20px;
                }
                &:nth-child(3n-2){
                    padding-right: 20px;
                }
                .grid-content{
                    background: #072240;
                    padding: 20px;
                    color:#fff;
                    border-radius: 6px;
                    .grid-content-top{
                        display: flex;
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
                            margin-top: 7px;
                            .box_text1{
                                margin-bottom:3px;
                                white-space:nowrap; 
                                overflow:hidden;
                                text-overflow:ellipsis;
                                .textname{
                                    margin-right: 10px;
                                }
                            }
                            .box_text2{
                                font-size: 12px;
                                color:#ccc;
                            }
                        }
                        .box_but{
                            text-align: right;
                            .unfollow{
                                display: block;
                                margin: 0px;
                                background: none !important;
                                border:1px solid #F0A847 !important;
                                color:#F0A847;
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
