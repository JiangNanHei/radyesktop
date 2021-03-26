<template>
    <div class="detailed-talent-basic-wrapper">
        <detailed-time></detailed-time>
        <el-row :gutter="10" class="d-video-duration">
            <el-col :span="12">
                <div class="grid-content bg-purple d-basic-overview-left d-grid-show">
                    <p>销量与销售额增长趋势</p>
                    <div class="d-electric-desc-item-echart">
                        <div class="d-myChartn" id="d-sales-volume"  :style="{width: '100%', height: '250px'}"></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple d-basic-overview-left d-grid-show">
                    <p>推广商品趋势</p>
                    <div class="d-electric-desc-item-echart">
                        <div class="d-myChartn" id="d-promoters-data"  :style="{width: '100%', height: '250px'}"></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple d-basic-overview-left d-grid-show">
                    <p>关联视频趋势</p>
                    <div class="d-electric-desc-item-echart">
                        <div class="d-myChartn" id="d-associated-video"  :style="{width: '100%', height: '250px'}"></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple d-basic-overview-left d-grid-show">
                    <p>关联直播场次趋势</p>
                    <div class="d-electric-desc-item-echart">
                        <div class="d-myChartn" id="d-associated-live"  :style="{width: '100%', height: '250px'}"></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple d-basic-overview-left d-grid-show">
                    <p>商品分类占比</p>
                     <div class="d-electric-desc-item-echarts">
                        <div class="d-myChart" id="d-video-time"  :style="{width: '100%', height: '250px'}"></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple d-basic-overview-left d-grid-show d-talent-price-share">
                    <p>商品价格占比</p>
                    <div class="d-talent-progress-content" v-for="( item, index) of price_share" :key="index">
                        <span> {{item.message}} </span>
                        <el-progress :percentage="item.number"></el-progress>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import detailedTime from '@/components/page/douyin/detailed-time'
import { echartsPie, echartsLine, echartsLine2 } from '@/assets/js/echarts_self.js'
import { dateKey, dateValue } from '@/assets/js/independent_self.js'
export default {
    naem : '实时直播榜',
    name: "detailed-live",
    components: {
        detailedTime
    },
    props: {

    },
    data() {
        return {
            price_share: []
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
                url: "/detailed_shop_basic.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                // 视频时长分布--饼状图
                echartsPie(document.getElementById('d-video-time'), data.video_time)
                // 点赞数据--折线图
                echartsLine(document.getElementById('d-sales-volume'), data.sales_volume.dataX, data.sales_volume.dataY1, data.sales_volume.dataY2)
                // 点赞数据--折线图
                echartsLine(document.getElementById('d-promoters-data'), data.promoters_data.dataX, data.promoters_data.dataY1, data.promoters_data.dataY2)
                // 点赞数据--折线图
                echartsLine2(document.getElementById('d-associated-video'), data.associated_video.dataX, data.associated_video.dataY)
                // 点赞数据--折线图
                echartsLine2(document.getElementById('d-associated-live'), data.associated_live.dataX, data.associated_live.dataY)
                _this.price_share = data.price_share
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
    .detailed-talent-basic-wrapper{
        width: 100%;
        .d-video-duration{
            margin-top: 10px;
            .d-grid-show{
                background: #051C36;
                padding: 20px;
                // height: 220px;
                overflow: hidden;
                border-radius: 6px;
                margin-bottom: 10px;
                font-size: 16px;
            }
            .d-electric-desc-item-echarts{
                // height: 160px;
                overflow: hidden;
                .d-myChart{
                    display: flex;
                    justify-content: center;
                }
            }
        }
        .d-talent-progress-content{
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            >span{
                font-size: 14px;
                display: inline-block;
                width: 18%;
                text-align: right;
                color: gray;
                white-space: nowrap;/*保证文本内容不会自动换行，如果多余的内容会在水平方向撑破单元格*/
                overflow: hidden; /*隐藏超出单元格的部分*/
                text-overflow: ellipsis; /*将被隐藏的那部分用省略号代替*/
            }
            /deep/.el-progress{
                width: 80%;
            }
            /deep/.el-progress-bar__outer{
                background: #02172F;
                height: 9px!important;
            }
        }
        .d-talent-price-share{
            padding-bottom: 50px!important;
            >p{
                margin-bottom: 40px;
            }
            
        }
    }
    
</style>