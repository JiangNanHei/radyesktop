<template>
    <div class="basic-wrapper">
        <detailed-time></detailed-time>
        <el-row :gutter="10" class="d-basic-title">
            <el-col :span="12">
                <div class="grid-content bg-purple d-grid-show">
                    <p>每日新增人数趋势</p>
                    <div class="d-electric-desc-item-echart">
                        <div class="d-myChartn d-myChartn-right" id="d-thumbs-up-data"  :style="{width: '100%', height: '250px'}"></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple d-grid-show">
                    <p>使用行业分布</p>
                    <div class="d-electric-desc-item-echart">
                        <div class="d-myChart" id="d-industry-distribution"  :style="{width: '100%', height: '250px'}"></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="24">
                <div class="grid-content bg-purple d-grid-show">
                    <p>音乐热门视频</p>
                    <el-row :gutter="20" class="d-music-detail">
                        <el-col :span="4" v-for="(item, index) of music_message" :key="index">
                            <div class="grid-content bg-purple d-music-detail-item">
                                <img :src="item.imgUrl">
                                <div class="d-music-item-desc">
                                    <span class="el-icon-loading"></span>
                                    <span>{{item.desc}}</span>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import detailedTime from '@/components/page/douyin/detailed-time'
import { echartsLine2, echartsPie} from '@/assets/js/echarts_self.js'
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
            music_message: [],
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
                url: "/music_detailed_data.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.music_message = data.music_message
                // 点赞数据--折线图
                echartsLine2(document.getElementById('d-thumbs-up-data'), data.thumbs_up_data.dataX, data.thumbs_up_data.dataY1)
                 // 直播时长分布--饼状图
                echartsPie(document.getElementById('d-industry-distribution'), data.industry_distribution)
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
            // height: 310px;
            overflow: hidden;
            border-radius: 6px;
            margin-bottom: 10px;
        }
        .d-basic-title{
            margin-top: 10px;
            p{
                font-size: 16px;
                color: #FFFFFF;
                line-height: 32px;
            }
            
        }
        .d-music-detail{
            margin-top: 20px;
        }
        .d-music-detail-item{
            margin-bottom: 10px;
            position: relative;
            font-size: 14px;
            img {
                width: 100%;
                border-radius: 5px;
            }
            .d-music-item-desc{
                position: absolute;
                bottom: 15px;
                left: 15px;
            }
        }
     
        
    }
</style>