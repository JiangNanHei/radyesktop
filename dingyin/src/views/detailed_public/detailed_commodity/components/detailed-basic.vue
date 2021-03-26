<template>
    <div class="basic-wrapper">
        <detailed-time></detailed-time>
        <el-row :gutter="10" class="d-basic-title">
            <el-col :span="12">
                <div class="grid-content bg-purple d-grid-show">
                    <p>热推达人趋势</p>
                    <div class="d-star-desc-item-echarts">
                        <div class="d-myChart" ref="star" id="d-hot-talent" :style="{width: '100%', height: '250px'}"></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple d-basic-share d-grid-show">
                    <p>热推达人趋势</p>
                    <div class="d-star-desc-item-echarts">
                        <div class="d-myChart" ref="star" id="d-day-video" :style="{width: '100%', height: '250px'}"></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="24">
                <div class="grid-content bg-purple d-basic-share d-grid-show">
                    <p>订单数趋势</p>
                    <div class="d-star-desc-item-echarts">
                        <div class="d-myChart" ref="star" id="d-orders-number" :style="{width: '100%', height: '250px'}"></div>
                    </div>
                </div>
            </el-col>
        </el-row>
        
        <div class="d-live-record">
            <p>详细信息</p>
            <basic-table :content="live_table"></basic-table>
        </div>
    </div>
</template>

<script>
import { echartsLine, echartsLine2 } from '@/assets/js/echarts_self.js'
import { dateKey, dateValue } from '@/assets/js/independent_self.js'
import detailedTime from '@/components/page/douyin/detailed-time'
import basicTable from './detailed-basic-table'
export default {
    naem : '实时直播榜',
    name: "detailed-basic",
    components: {
        detailedTime,
        basicTable
    },
    props: {

    },
    data() {
        return {
            live_table: []
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
                url: "/goods_detailed_basic.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.live_table = data.live_table
                // 点赞数据--折线图
                echartsLine2(document.getElementById('d-hot-talent'), data.hot_talent.dataX, data.hot_talent.dataY)
                // 点赞数据--折线图
                echartsLine(document.getElementById('d-day-video'), data.day_video.dataX, data.day_video.dataY1, data.day_video.dataY2)
                // 点赞数据--折线图
                echartsLine(document.getElementById('d-orders-number'), data.orders_number.dataX, data.orders_number.dataY1, data.orders_number.dataY2)
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
            padding: 10px;
            // height: 280px;
            overflow: hidden;
            border-radius: 6px;
            margin-top: 10px;
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