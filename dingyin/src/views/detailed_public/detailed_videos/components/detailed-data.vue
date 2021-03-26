<template>
    <div class="basic-wrapper">
        <detailed-time></detailed-time>
        <el-row :gutter="10" class="d-basic-title">
            <el-col :span="12">
                <div class="grid-content bg-purple d-grid-show">
                    <p>点赞数据</p>
                    <div class="d-electric-desc-item-echart">
                        <div class="d-myChartn d-myChartn-right" id="d-thumbs-up-data"  :style="{width: '100%', height: '250px'}"></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple d-grid-show">
                    <p>评论数据</p>
                    <div class="d-electric-desc-item-echart">
                        <div class="d-myChartn d-myChartn-right" id="d-comment-data"  :style="{width: '100%', height: '250px'}"></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple d-grid-show">
                    <p>转发数据</p>
                    <div class="d-electric-desc-item-echart">
                        <div class="d-myChartn d-myChartn-right" id="d-forward-data"  :style="{width: '100%', height: '250px'}"></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple d-grid-show">
                    <p>视频使用音乐</p>
                    <div class="d-music-show">
                        <div class="d-music-img">
                            <img :src="music_message.imgUrl">
                        </div>
                        <div class="d-music-content">
                            <span class="d-music-content-title">{{music_message.title}}</span>
                            <p class="d-music-content-message"><span>作者 </span>{{music_message.autor}}  <span>时长 </span>{{music_message.time}}</p>
                            <span class="d-music-content-desc">{{music_message.desc}}</span>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import detailedTime from '@/components/page/douyin/detailed-time'
import { echartsLine } from '@/assets/js/echarts_self.js'
import { dateKey, dateValue } from '@/assets/js/independent_self.js'
export default {
    naem : '实时直播榜',
    name: "detailed-data",
    components: {
        detailedTime
    },
    props: {

    },
    data() {
        return {
            music_message: {},
        };
    },
    computed: {
        
    },
    created() {
        
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            const _this = this
            this.$http({
                url: "/videos_detailed_data.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.music_message = data.music_message
                // 点赞数据--折线图
                echartsLine(document.getElementById('d-thumbs-up-data'), data.thumbs_up_data.dataX, data.thumbs_up_data.dataY1, data.thumbs_up_data.dataY2)
                // 点赞数据--折线图
                echartsLine(document.getElementById('d-comment-data'), data.comment_data.dataX, data.comment_data.dataY1, data.comment_data.dataY2)
                // 点赞数据--折线图
                echartsLine(document.getElementById('d-forward-data'), data.forward_data.dataX, data.forward_data.dataY1, data.forward_data.dataY2)
                if(data.code == 200){
                    
                }else if(data.code == 401){
                    
                }
                else{
                    
                }

            }).catch(err => {
                console.log(err)
            })
        }
    },
};
</script>

<style lang="less" scoped>
    .basic-wrapper{
        // width: 100%;
        .d-grid-show{
            background: #051C36;
            padding: 20px;
            height: 310px;
            overflow: hidden;
            border-radius: 6px;
            margin-bottom: 10px;
            .d-music-show{
                display: flex;
                align-items: center;
                margin-top: 20px;
                .d-music-img{
                    width: 100px;
                    height: 100px;
                    background: url("../../../../assets/images/cards_icon/record.png");
                    line-height: 100px;
                    text-align: center;
                    margin-right: 10px;
                    >img{
                        width: 70px;
                        height: 70px;
                        border-radius: 35px;
                        vertical-align: middle;
                    }
                }
                .d-music-content{
                    .d-music-content-title{
                        font-size: 16px;
                        color: #FFFFFF;
                    }
                    .d-music-content-message{
                        color: #FFFFFF;
                        font-size: 14px;
                        >span{
                            color: #CCCCCC;
                        }
                    }
                    .d-music-content-desc{
                        color: #CCCCCC;
                        font-size: 14px;
                    }
                }

            }
        }
        .d-basic-title{
            margin-top: 10px;
            p{
                font-size: 16px;
                color: #FFFFFF;
                line-height: 32px;
            }
            
        }
        
    }
</style>