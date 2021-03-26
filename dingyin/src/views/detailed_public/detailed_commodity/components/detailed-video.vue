<template>
    <div class="video-wrapper">
        <detailed-time></detailed-time>
        <el-row :gutter="10" class="d-live-duration">
            <el-col :span="24">
                <div class="grid-content bg-purple d-basic-overview-left d-grid-show">
                    <p>视频销量趋势</p>
                     <div class="d-electric-desc-item-echarts">
                        <div class="d-myChart" id="d-video-sales"  :style="{width: '100%', height: '250px'}"></div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <div class="d-live-record">
            <p>视频列表</p>
            <detailed-livetable :content="live_table"></detailed-livetable>
        </div>
    </div>
</template>

<script>
import detailedLivetable from './detailed-video-table'
import detailedTime from '@/components/page/douyin/detailed-time'
import { echartsLine2 } from '@/assets/js/echarts_self.js'
import { dateKey, dateValue } from '@/assets/js/independent_self.js'
export default {
    naem : '实时直播榜',
    name: "detailed-live",
    components: {
        detailedLivetable,
        detailedTime
    },
    props: {

    },
    data() {
        return {
            live_table: []
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
                url: "/goods_detailed_video.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                console.log(data)
                _this.live_table = data.live_table
                 // 点赞数据--折线图
                echartsLine2(document.getElementById('d-video-sales'), data.video_sales.dataX, data.video_sales.dataY)
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
        .d-live-overview{
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
      
        .d-live-duration{
            margin-top: 10px;
            .d-grid-show{
                background: #051C36;
                padding: 20px;
                // height: 220px;
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
                // height: 160px;
                overflow: hidden;
                .d-myChart{
                    display: flex;
                    justify-content: center;
                }
                // .d-myChartn-right{
                //     // margin-top: -40px;
                // }
            }
        }
        .d-live-record{
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