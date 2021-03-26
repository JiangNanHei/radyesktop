<template>
    <div class="video-wrapper">
        <detailed-time></detailed-time>
        <div class="d-video-overview">
            <p>直播数据概览</p>
            <el-row :gutter="20">
                <el-col :span="4" v-for="(item, index) of live_overview" :key="index">
                    <div class="grid-content bg-purple d-basic-electric-item">
                        <p class="d-electric-item-left">{{item.number}}</p>
                        <span class="d-electric-item-right">{{item.desc}}</span>
                    </div>
                </el-col>
            </el-row>
        </div>
        <el-row :gutter="10" class="d-video-duration">
            <el-col :span="12">
                <div class="grid-content bg-purple d-basic-overview-left d-grid-show">
                    <p>视频时长分布</p>
                     <div class="d-electric-desc-item-echarts">
                        <div class="d-myChart" id="d-video-time"  :style="{width: '100%', height: '100%'}"></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple d-basic-overview-left d-grid-show">
                    <p>视频发布时间统计</p>
                    <div class="d-electric-desc-item-echarts">
                        <div class="d-myChartn d-myChartn-right" id="d-video-total"  :style="{width: '100%', height: '160px'}"></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple d-basic-overview-left d-line-show">
                    <p>点赞数据</p>
                    <div class="d-line-desc">
                        <p>最多点赞视频<span>27.5w</span>最少点赞视频<span>4.8w</span></p>
                    </div>
                    <div class="d-electric-desc-item-echart">
                        <div class="d-myChartn d-myChartn-right" id="d-dianzan-data"  :style="{width: '100%', height: '250px'}"></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple d-basic-overview-left d-line-show">
                    <p>评论数据</p>
                    <div class="d-line-desc">
                        <p>最多点赞视频<span>27.5w</span>最少点赞视频<span>4.8w</span></p>
                    </div>
                    <div class="d-electric-desc-item-echart">
                        <div class="d-myChartn d-myChartn-right" id="d-comment-data"  :style="{width: '100%', height: '250px'}"></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple d-basic-overview-left d-line-show">
                    <p>转发数据</p>
                    <div class="d-line-desc">
                        <p>最多点赞视频<span>27.5w</span>最少点赞视频<span>4.8w</span></p>
                    </div>
                    <div class="d-electric-desc-item-echart">
                        <div class="d-myChartn d-myChartn-right" id="d-forward-data"  :style="{width: '100%', height: '250px'}"></div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <div class="d-video-record">
            <p>直播记录</p>
            <video-table :content="video_table"></video-table>
        </div>
    </div>
</template>

<script>
import videoTable from './detailed-video-table'
import detailedTime from '@/components/page/douyin/detailed-time'
import { echartsBar, echartsPie, echartsLine } from '@/assets/js/echarts_self.js'
import { dateKey, dateValue } from '@/assets/js/independent_self.js'
export default {
    naem : '实时直播榜',
    name: "detailed-live",
    components: {
        videoTable,
        detailedTime
    },
    props: {

    },
    data() {
        return {
            live_overview: [],
            video_table: []
        }
    },
    cmputed: {
      
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
                url: "/detailed_talent_video.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                console.log(data)
                _this.live_overview = data.live_overview
                _this.video_table = data.video_table
                 // 视频发布时间统计--柱状图
                echartsBar(document.getElementById('d-video-total'), dateKey(data.video_total), dateValue(data.video_total))
                // 视频时长分布--饼状图
                echartsPie(document.getElementById('d-video-time'), data.video_time)
                // 点赞数据--折线图
                echartsLine(document.getElementById('d-dianzan-data'), data.dianzan_data.dataX, data.dianzan_data.dataY1, data.dianzan_data.dataY2)
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
    .video-wrapper{
        width: 100%;
        .d-video-overview{
            border-radius: 6px;
            margin: 20px 0 10px 0;
            background: #051C36;
            padding: 20px;
            >p{
                font-size: 16px;
                line-height: 32px;
            }
            .d-basic-electric-item{
                .d-electric-item-left{
                    font-size: 14px;
                    color: #FFFFFF;
                }
                .d-electric-item-right{
                    font-size: 12px;
                    color: #CCCCCC;
                }
            }

        }
      
        .d-video-duration{
            .d-grid-show{
                background: #051C36;
                padding: 20px;
                height: 220px;
                overflow: hidden;
                border-radius: 6px;
                margin-bottom: 10px;
            }
            .d-line-show{
                background: #051C36;
                padding: 20px;
                // height: 300px;
                overflow: hidden;
                border-radius: 6px;
                margin-bottom: 10px;
                >p{
                    font-size: 16px;
                }
                .d-line-desc{
                    font-size: 12px;
                    color: #CCCCCC;
                    span{
                        color: #FFFFFF;
                        margin-left: 5px;
                        margin-right: 10px;
                    }
                }
            }
            .d-electric-desc-item-echarts{
                height: 160px;
                overflow: hidden;
                .d-myChart{
                    display: flex;
                    justify-content: center;
                }
                // .d-myChartn-right{
                //     margin-top: -40px;
                // }
            }
        }
        .d-video-record{
            border-radius: 6px;
            padding: 20px;
            background: #051C36;
            overflow: hidden;
            >p{
                font-size: 16px;
                margin-bottom: 20px;
                color:#FFFFFF;
            }
        }
    }
    
</style>