<template>
    <div class="basic-wrapper">
        <el-row :gutter="10" class="d-basic-title">
            <el-col :span="12">
                <div class="grid-content bg-purple d-grid-show">
                    <div class="d-basic-star-title">
                        <p>星图指数</p>
                        <span>视频星图指数 {{star_map_title}}</span>
                        <div class="d-star-desc-item-echarts">
                            <div class="d-myChart" ref="star" id="d-myChart-star" :style="{width: '100%', height: '100%'}"></div>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple d-basic-share d-grid-show">
                    <div class="d-basic-share-title">
                        <p>带货品类</p>
                    </div>
                    <div class="d-basic-share-content">
                        <div class="d-basic-content-show">
                            <p>上架商品品类 TOP5</p>
                            <div class="d-basic-content-item">
                                <el-button 
                                    type="info" 
                                    size="mini" 
                                    v-for="(item, index) of with_goods.category" 
                                    :key="index">
                                    {{item}}
                                </el-button>
                            </div>
                        </div>
                        <div class="d-basic-content-show">
                            <p>上架商品品牌 TOP5</p>
                            <div class="d-basic-content-item">
                                <el-button 
                                    type="info" 
                                    size="mini" 
                                    v-for="(item, index) of with_goods.brand" 
                                    :key="index">
                                    {{item}}
                                </el-button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="10" class="d-basic-overview">
            <el-col :span="12">
                <div class="grid-content bg-purple d-basic-overview-left d-grid-show">
                    <p>直播概览</p>
                    <div class="d-basic-overview-left-show">
                        <div class="d-overview-content-item" v-for="(item, index) of live_broadcast" :key="index">
                            <p>{{item.number}}</p>
                            <span>{{item.desc}}</span>
                        </div> 
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple d-basic-overview-left d-grid-show">
                    <p>视频概览</p>
                    <div class="d-basic-overview-left-show">
                        <div class="d-overview-content-item" v-for="(item, index) of video_overview" :key="index">
                            <p>{{item.number}}</p>
                            <span>{{item.desc}}</span>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <div class="d-basic-electric">
            <p>电商概览</p>
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple d-basic-electric-item">
                        <span class="d-electric-item-left">历史商品数</span>
                        <span class="d-electric-item-right">{{online_retailers.historty_number}}</span>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple d-basic-electric-item">
                        <span class="d-electric-item-left">商品品类</span>
                        <span class="d-electric-item-right">{{online_retailers.commodity_category}}</span>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple d-basic-electric-item">
                        <span class="d-electric-item-left">商品品牌</span>
                        <span class="d-electric-item-right">{{online_retailers.commodity_brand}}</span>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple d-basic-electric-item">
                        <span class="d-electric-item-left">来源平台</span>
                        <span class="d-electric-item-right">{{online_retailers.source_platform}}</span>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="1" class="d-basic-electric-desc">
                <el-col :span="8">
                    <div class="grid-content bg-purple d-electric-desc-item d-electric-desc-item-hr">
                        <p class="d-electric-desc-item-title">历史TOP3品类</p>
                        <p class="d-electric-desc-item-show">零食食品、美妆护理、3C数码</p>
                        <div class="d-electric-desc-item-echarts">
                            <div class="d-myChart" id="d-myChart1" :style="{width: '100%', height: '100%'}"></div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple d-electric-desc-item d-electric-desc-item-hr">
                        <p class="d-electric-desc-item-title">历史TOP3品牌</p>
                        <p class="d-electric-desc-item-show">网易严选、APPL、无印良品</p>
                        <div class="d-electric-desc-item-echarts">
                            <div class="d-myChart" id="d-myChart2"  :style="{width: '100%', height: '100%'}"></div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple d-electric-desc-item">
                        <p class="d-electric-desc-item-title">商品来自的平台</p>
                        <p class="d-electric-desc-item-show">小店、京东、淘宝</p>
                        <div class="d-electric-desc-item-echarts">
                            <div class="d-myChart" id="d-myChart3"  :style="{width: '100%', height: '100%'}"></div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import { echartsRadar, echartsPie } from '@/assets/js/echarts_self.js'
import { dateKey, dateValue } from '@/assets/js/independent_self.js'
export default {
    naem : '实时直播榜',
    name: "detailed-basic",
    components: {
        
    },
    props: {

    },
    data() {
        return {
            star_map_title: '',
            with_goods: {},
            live_broadcast: [],
            video_overview: [],
            online_retailers: {},
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
                url: "/detailed_talent_basic.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.star_map_title = data.star_map_title
                _this.with_goods = data.with_goods
                _this.live_broadcast = data.live_broadcast
                _this.video_overview = data.video_overview
                _this.online_retailers = data.online_retailers
                // 历史TOP3品类--饼状图
                echartsPie(document.getElementById('d-myChart1'), data.category_echarts)
                // 历史TOP3品牌--饼状图
                echartsPie(document.getElementById('d-myChart2'), data.brand_echarts)
                // 商品来自的平台--饼状图
                echartsPie(document.getElementById('d-myChart3'), data.platform_echarts)
                // 星图指数--雷达图
                echartsRadar(document.getElementById('d-myChart-star'), dateKey(data.star_map_index.starChart), dateValue(data.star_map_index.starChart), data.star_map_index.max_value)
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
            height: 280px;
            overflow: hidden;
            border-radius: 6px;
        }
        .d-basic-title{
            margin-bottom: 10px;
            .d-basic-star-title{
                >p{
                    font-size: 16px;
                    color: #FFFFFF;
                    line-height: 42px;
                }
                >span{
                    font-size: 12px;
                    color: #CCCCCC;
                }
                .d-star-desc-item-echarts{
                    margin-top: -20px;
                    height: 240px;
                    overflow: hidden;
                    .d-myChart{
                        display: flex;
                        justify-content: center;
                    }
                }
            }
            .d-basic-share{
                color: #FFFFFF;
                .d-basic-share-title{
                    >p{
                        font-size: 16px;
                        line-height: 42px;
                    }
                }
                .d-basic-share-content{
                    .d-basic-content-show{
                        >p{
                            font-size: 12px;
                            line-height: 30px;
                        }
                        .d-basic-content-item{
                            margin-bottom: 20px;
                            .el-button--mini{
                                padding: 4px 9px;
                            }
                            .el-button--mini{
                                background: linear-gradient(225deg, #FF5DAE 0%, #FF2F76 100%);
                                border: none;
                            }
                        }
                    }
                }
            }
            
        }
        .d-basic-overview{
            color: #FFFFFF;
            .d-basic-overview-left{
                >p{
                    font-size: 16px;
                    line-height: 42px;
                }
                .d-basic-overview-left-show{
                    display: flex;
                    flex-wrap: wrap;
                    
                    .d-overview-content-item{
                        width: 125px;
                        margin-bottom: 15px;
                        overflow: hidden;
                        >p{
                            font-size: 14px;
                        }
                        >span{
                            color: #CCCCCC;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
        .d-basic-electric{
            margin-top: 10px;
            background: #051C36;
            border-radius: 6px;
            padding: 10px;
                overflow: hidden;
            >p{
                font-size: 16px;
                color: #FFFFFF;
                line-height: 42px;
            }
            .d-basic-electric-item{
                background: #103A6B;
                border-radius: 4px;
                padding: 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .d-electric-item-left{
                    color: #CCCCCC;
                    font-size: 12px;
                }
                .d-electric-item-right{
                    color: #FFFFFF;
                    font-size: 16px;
                }
            }
            .d-basic-electric-desc{
                margin-top: 20px;
                padding: 10px 0;
                .d-electric-desc-item-hr{
                    border-right: 1px solid #326CAD;
                }
                .d-electric-desc-item{
                    
                    text-align: center;
                    overflow: hidden;
                    .d-electric-desc-item-title{
                        font-size: 12px;
                        color: #CCCCCC;
                        line-height: 20px;
                    }
                    .d-electric-desc-item-show{
                        font-size: 14px;
                        color: #FFFFFF;
                        line-height: 20px;
                    }
                    .d-electric-desc-item-echarts{
                        height: 160px;
                        overflow: hidden;
                        .d-myChart{
                            display: flex;
                            justify-content: center;
                        }
                    }
                }
            }
        }
        
    }
</style>