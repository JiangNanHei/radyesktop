<template>
    <div class="detail-screen-wrapper">
        <div class="d-detail-screen-top">
            <detail-left :content="detail_screen"></detail-left>
            <div class="d-detail-top-right d-grid-content">
                <div class="d-detail-right-content">
                    <img src="@/assets/images/detailed_page_img/douyin.png">
                    <span>{{detail_small.title}}</span>
                </div>
                <el-divider></el-divider>
                <div class="d-detail-right-show">
                    <div class="d-detail-right-item" v-for="(item, index) of detail_small.content_show" :key="index">
                        <div class="d-detail-right-item-message">
                            <img :src="item.imgUrl">
                            <span class="d-detail-right-item-desc">{{item.desc}}</span>
                        </div>
                        <span class="d-detail-right-item-nub">{{item.number}}</span>
                    </div>
                </div>
            </div>
        </div>
        <el-row :gutter="10" class="d-detail-content">
            <el-col :span="8">
                <div class="grid-content bg-purple d-grid-content d-grid-echarts">
                    <div class="d-detail-echarts-content">
                        <img src="@/assets/images/detailed_page_img/renshu.png">
                        <span>在线人数趋势</span>
                    </div>
                    <el-divider></el-divider>
                    <div class="d-electric-desc-item-echart">
                        <div class="d-myChartn d-myChartn-right" id="d-myChart1"  :style="{width: '100%', height: '250px'}"></div>
                    </div>
                </div>
            </el-col>
           <el-col :span="8">
                <div class="grid-content bg-purple d-grid-content d-grid-echarts">
                    <div class="d-detail-echarts-content">
                        <img src="@/assets/images/detailed_page_img/xiaoliang.png">
                        <span>销量趋势</span>
                    </div>
                    <el-divider></el-divider>
                    <div class="d-electric-desc-item-echart">
                        <div class="d-myChartn d-myChartn-right" id="d-myChart2"  :style="{width: '100%', height: '250px'}"></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple d-grid-content d-grid-echarts">
                    <div class="d-detail-echarts-content">
                        <img src="@/assets/images/detailed_page_img/fans.png">
                        <span>粉丝趋势</span>
                    </div>
                    <el-divider></el-divider>
                    <div class="d-electric-desc-item-echart">
                        <div class="d-myChartn d-myChartn-right" id="d-myChart3"  :style="{width: '100%', height: '250px'}"></div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="10" class="d-detail-footer">
            <el-col :span="16">
                <div class="grid-content bg-purple d-grid-content">
                    <detail-table :content="towtableData"></detail-table>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple d-grid-content d-grid-echarts">
                     <div class="d-detail-echarts-content">
                        <img src="@/assets/images/detailed_page_img/guanzhong.png">
                        <span>观众分析</span>
                    </div>
                    <el-divider></el-divider>
                    <div class="d-detail-echarts-show">
                        <p>性别分布</p>
                        <detail-proportion :bodyTage="gender_boys"></detail-proportion>
                        <p>年龄分布</p>
                        <div class="d-electric-desc-item-echarts">
                            <div class="d-myChart" id="d-myChart-pie"  :style="{width: '100%', height: '100%'}"></div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import detailLeft from './components/detail-left'
import detailProportion from '@/components/page/douyin/datailed-proportion'
import detailTable from './components/detail-table'
import { echartsBar, echartsPie, echartsLine } from '@/assets/js/echarts_self.js'
import { dateKey, dateValue } from '@/assets/js/independent_self.js'
export default {
    components: {
        detailLeft,
        detailProportion,
        detailTable
    },
    props: {

    },
    data() {
        return {
            detail_screen: {},
            detail_small: {},
            towtableData: [],
            gender_boys: '',
        };
    },
    created () {
        
    },
    mounted () {
        this.getData()
    },
    methods: {
        getData() {
            const _this = this
            this.$http({
                url: "/details_screen.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.detail_screen = data.detail_screen
                _this.detail_small = data.detail_small
                _this.towtableData = data.towtableData
                _this.gender_boys = data.gender_boys
                echartsLine(document.getElementById('d-myChart1'), data.online_echarts.dataX, data.online_echarts.dataY1, data.online_echarts.dataY2)
                echartsLine(document.getElementById('d-myChart2'), data.sales_volume_echarts.dataX, data.sales_volume_echarts.dataY1, data.sales_volume_echarts.dataY2)
                echartsLine(document.getElementById('d-myChart3'), data.fans_echarts.dataX, data.fans_echarts.dataY1, data.fans_echarts.dataY2)
                echartsPie(document.getElementById('d-myChart-pie'), data.age_pie_echarts)
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
    /deep/.el-divider{
        background: #235691;
        margin: 6px 0;
    }
    /deep/.proportion-wrapper{
        margin-left: 0;
    }
    .detail-screen-wrapper{
        .d-grid-content{
            background: #051C36;
            border-radius: 20px;
            border: 1px solid #248FFF;
        }
        .d-detail-screen-top{
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            .d-detail-top-right{
                flex: 1;
                margin-left: 10px;
                padding: 14px;
                .d-detail-right-content{
                    >img{
                        width: 26px;
                    }
                    >span{
                        font-size: 22px;
                        float: right;
                        color: #FFAC4A;
                    }
                }
                .d-detail-right-show{
                    color: #FFFFFF;
                    .d-detail-right-item{
                        display: flex;
                        justify-content: space-between;
                        line-height: 30px;
                        margin: 5px 0;
                        align-items: center;
                        .d-detail-right-item-message{
                            display: flex;
                            align-items: center;
                        }
                        img{
                            width: 30px;
                            border-radius: 30px;
                            margin-right: 20px;
                        }
                        .d-detail-right-item-desc{
                            font-size: 14px;
                        }
                        .d-detail-right-item-nub{
                            font-size: 14px;
                        }
                    }
                }
            }
        }
        .d-detail-content{
            .d-grid-echarts{
                padding: 20px;
                .d-detail-echarts-content{
                    color: #CCCCCC;
                    display: flex;
                    align-items: center;
                    >img{
                        width: 26px;
                        margin-right: 10px;
                    }
                }
            }
        }
        .d-detail-footer{
            margin-top: 10px;
            .d-grid-echarts{
                padding: 20px;
                .d-detail-echarts-content{
                    display: flex;
                    align-items: center;
                    color: #CCCCCC;
                    >img{
                        width: 26px;
                        margin-right: 10px;
                    }
                }
                .d-detail-echarts-show{
                    color: #CCCCCC;
                    
                    p{
                        text-align: center;
                        font-size: 14px;
                        line-height: 48px;
                    }
                }
            }
        }
    }
</style>
