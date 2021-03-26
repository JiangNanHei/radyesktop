<template>
    <div class="fans-wrapper">
        <el-row :gutter="10" class="d-live-duration">
            <el-col :span="24">
                <div class="grid-content bg-purple d-basic-overview-left d-line-show d-fans-photo">
                    <p>粉丝画像</p>
                    <el-row :gutter="10">
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <div style="margin: 20px 0;">
                                    <span style="position: absolute;font-size: 14px;">性别分布</span>
                                    <detailed-fanss :bodyTage="bodyTage"></detailed-fanss>
                                </div>
                                <div class="grid-content bg-purple d-basic-overview-left d-grid-show" style="margin-top: 50px;">
                                    <p style="font-size: 14px;">年龄分布</p>
                                    <div class="d-electric-desc-item-echarts">
                                        <div class="d-myChart" id="d-age-distribution"  :style="{width: '100%', height: '100%'}"></div>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <div class="grid-content bg-purple d-basic-overview-left d-grid-show" style="margin-top: 20px;text-align:right;">
                                    <p style="font-size: 14px;text-align:left;">粉丝地域分布</p>
                                    <el-radio-group v-model="radio" size="mini">
                                        <el-radio-button label="省"></el-radio-button>
                                        <el-radio-button label="市"></el-radio-button>
                                    </el-radio-group>
                                    <div>
                                        <detailed-map :content="contentMap"></detailed-map>
                                    </div>
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
import detailedFanss from '@/components/page/douyin/datailed-proportion'
import detailedMap from './detailed-fans-map'
import { echartsBar, echartsPie, echartsLine } from '@/assets/js/echarts_self.js'
import { dateKey, dateValue } from '@/assets/js/independent_self.js'
export default {
    naem : '实时直播榜',
    name: "detailed-fans",
    components: {
        detailedFanss,
        detailedMap

    },
    props: {

    },
    data() {
        return {
            bodyTage: '',
            radio: '',
            dataMap: {}
            
        };
    },
    computed: {
        contentMap (){
            let content = this.radio === '省' ? this.dataMap.dataProvince : this.dataMap.dataCity
            return content
        }
    },
    created() {
        
    },
    mounted () {
        this.getData()
    },
    methods: {
        getData() {
            const _this = this
            this.$http({
                url: "/goods_detailed_fans.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.bodyTage = data.bodyTage
                _this.radio = data.radio
                _this.dataMap = data.dataMap
                 // 直播时长分布--饼状图
                echartsPie(document.getElementById('d-age-distribution'), data.age_distribution)
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
    watch: {
        
    }
};
</script>

<style lang="less" scoped>
    .fans-wrapper{
        width: 100%;
        .d-live-duration{
            .d-line-show{
                background: #051C36;
                padding: 20px;
                // height: 260px;
                overflow: hidden;
                border-radius: 6px;
                margin-bottom: 10px;
                margin-top: 10px;
                >p{
                    font-size: 16px;
                    text-align: left;
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
            }
        }
    }
</style>