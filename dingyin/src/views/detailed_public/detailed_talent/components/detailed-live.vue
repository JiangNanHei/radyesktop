<template>
    <div class="live-wrapper">
        <detailed-time></detailed-time>
        <div class="d-live-overview">
            <p>直播数据概览</p>
            <el-row :gutter="20">
                <el-col :span="3" v-for="(item, index) of live_overview" :key="index">
                    <div class="grid-content bg-purple d-basic-electric-item">
                        <p class="d-electric-item-left">{{item.number}}</p>
                        <span class="d-electric-item-right">{{item.desc}}</span>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="d-live-trend">
            <p>直播观看人数趋势</p>
            <div class="d-star-desc-item-echart">
                <div class="d-myChart" id="d-myChart-star" :style="{width: '100%', height: '240px'}"></div>
            </div>
        </div>
        <el-row :gutter="20" class="d-live-duration">
            <el-col :span="12">
                <div class="grid-content bg-purple d-basic-overview-left d-grid-show">
                    <p>直播时长分布</p>
                     <div class="d-electric-desc-item-echarts">
                        <div class="d-myChart" id="d-myChart1"  :style="{width: '100%', height: '100%'}"></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple d-basic-overview-left d-grid-show">
                    <p>直播时长分布</p>
                    <div class="d-electric-desc-item-echart">
                        <div class="d-myChartn d-myChartn-right" id="d-myChart2"  :style="{width: '100%', height: '160px'}"></div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <div class="d-live-record">
            <p>直播记录</p>
            <detailed-livetable :content="live_table"></detailed-livetable>
        </div>
    </div>
</template>

<script>
import detailedLivetable from './detailed-live-table'
import detailedTime from '@/components/page/douyin/detailed-time'
import { echartsBar, echartsPie } from '@/assets/js/echarts_self.js'
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
            live_overview: [],
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
                url: "/detailed_talent_live.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.live_overview = data.live_overview
                _this.live_table = data.live_table
                // 直播观看人数趋势--柱状图
                echartsBar(document.getElementById('d-myChart-star'), dateKey(data.live_watch), dateValue(data.live_watch))
                // 直播时长分布--柱状图
                echartsBar(document.getElementById('d-myChart2'), dateKey(data.live_time), dateValue(data.live_time))
                // 直播时长分布--饼状图
                echartsPie(document.getElementById('d-myChart1'), data.live_pie)
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
    .live-wrapper{
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
        .d-live-trend{
            border-radius: 6px;
            padding: 20px;
            background: #051C36;
            margin-bottom: 10px;
            >p{
                font-size: 16px;
                color: #FFFFFF;
            }
        }
        .d-live-duration{
            .d-grid-show{
                background: #051C36;
                padding: 20px;
                height: 220px;
                overflow: hidden;
                border-radius: 6px;
            }
            .d-electric-desc-item-echarts{
                height: 160px;
                overflow: hidden;
                .d-myChart{
                    display: flex;
                    justify-content: center;
                }
                .d-myChartn-right{
                    margin-top: -40px;
                }
            }
        }
        .d-live-record{
            border-radius: 6px;
            padding: 20px;
            background: #051C36;
            overflow: hidden;
            margin-top: 10px;
            >p{
                font-size: 16px;
                margin-bottom: 20px;
                color:#FFFFFF;
            }
        }
    }
    
</style>