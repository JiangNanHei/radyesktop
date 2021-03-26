<template>
    <div class="left-wrapper">
        <div class="d-left">
            <div class="grid-content bg-purple">
                <div class="d-left-top d-bg-purple">
                    <div class="d-top-title">
                        <span>商品信息</span>
                    </div>
                    <div class="d-top-content">
                        <div class="d-top-content-show">
                            <div class="d-top-conent-img">
                                <img :src="talent_information.imgUrl">
                            </div>
                            <div class="d-top-content-desc">
                                <p>{{talent_information.title}}</p>
                                <div class="d-top-desc-icon" v-if="talent_information.message_icon">
                                    <span class="el-icon-document-copy d-top-desc-icon-left" v-if="talent_information.message_icon.zhibo"></span>
                                    <span class="el-icon-edit-outline d-top-desc-icon-right" v-if="talent_information.message_icon.dianpu"></span>
                                </div>
                                <div class="d-top-content-price">
                                    <span class="d-price-title">价格</span>
                                    <span class="d-price-desc">{{talent_information.price}}</span>
                                    <span class="el-icon-finished d-price-icon" @click="commodityPrice"></span>
                                </div>
                                <div class="d-top-content-commission d-top-content-price">
                                    <span class="d-price-title">预估佣金</span>
                                    <span class="d-price-desc">{{talent_information.commission}}</span>
                                    <span class="d-price-percentage">({{talent_information.percentage}})</span>
                                    <span class="el-icon-finished d-price-icon" @click="commissionRate"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-bg-purple">
                    <el-row :gutter="20" class="d-left-message">
                        <el-col :span="8" v-for="(item, index) of message_supply" :key="index">
                            <div class="grid-content bg-purple">
                                <span>{{item.number}}</span>
                                <p>{{item.desc}}</p>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="d-left-bottom d-bg-purple">
                    <div class="d-left-bottom-basicdata">
                        <div class="d-bottom-basicdata-title">
                            <div></div>
                            <span>基本数据</span>
                        </div>
                        <div class="d-bottom-basicdata-content">
                            <div class="d-basicdata-content-item" v-for="(item, index) of basic_data" :key="index">
                                <p>{{item.number}}</p>
                                <span>{{item.desc}}</span>
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="d-left-bottom d-show-message">
                    <div class="d-left-bottom-basicdata">
                        <div class="d-bottom-basicdata-title">
                            <div></div>
                            <span>店铺信息</span>
                        </div>
                        <div class="d-bottom-basicdata-content">
                            <div class="d-top-content-show">
                                <div class="d-top-conent-img">
                                    <img :src="message_shop.imgUrl">
                                </div>
                                <div class="d-top-content-desc">
                                    <p>{{message_shop.title}}</p>
                                    <el-row type="flex" class="row-bg" :gutter="20">
                                        <el-col :span="8" v-for="(item, index) of message_shop.message_supplement" :key="index">
                                            <div class="grid-content bg-purple d-message-item-desc">
                                                <span>{{item.number}}</span>
                                                <p>{{item.desc}}</p>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-left-bottom-button">
                        <div class="monitorNext">
                            <button type="button" class="el-button table_button monitorNextBtn ui_click gradient_red el-button--default" style="margin: 0px 20px 0px 0px !important;">
                                <img src="@/assets/images/detailed_page_img/follow.png">
                                <span>加入关注</span>
                            </button>
                        </div>
                </div>
            </div>
            <el-dialog
                title="商品价格趋势"
                :modal="false"
                :visible.sync="dialogVisible"
                @opened="opens"
                >
                <detailed-radio></detailed-radio>
                <div class="d-star-desc-item-echarts">
                    <div class="d-myChart" id="d-hot-talent" :style="{width: '100%', height: '250px'}"></div>
                </div>
            </el-dialog>
            <el-dialog
                title="佣金比例趋势"
                :modal="false"
                :visible.sync="dialogCommission"
                @opened="opens2"
                >
                <detailed-radio></detailed-radio>
                <div class="d-star-desc-item-echarts">
                    <div class="d-myChart" id="d-commission-rate" :style="{width: '100%', height: '250px'}"></div>
                </div>
            </el-dialog>   
        </div>
    </div>
</template>

<script>
import { echartsLine2 } from '@/assets/js/echarts_self.js'
import { dateKey, dateValue } from '@/assets/js/independent_self.js'
import detailedRadio from '@/components/page/douyin/detailed-radio3'
export default {
    naem : '实时直播榜',
    components: {
        detailedRadio
    },
    props: {

    },
    data() {
        return {
            talent_information: {},
            basic_data: [],
            message_supply:[],
            message_shop: {},
            dialogVisible: false,
            dialogCommission: false,
            hot_talent: {},
            commission_rate: {}
        };
    },
    computed: {
        
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
                url: "/goods_detailed_left.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                // 点赞数据--折线图
                _this.hot_talent = data.hot_talent
                _this.commission_rate = data.commission_rate
                _this.talent_information = data.talent_information
                _this.basic_data = data.basic_data
                _this.message_supply = data.message_supply
                _this.message_shop = data.message_shop
                if(data.code == 200){
                    
                }else if(data.code == 401){
                    
                }
                else{
                    
                }

            }).catch(err => {
                console.log(err)
            })
        },
        commodityPrice () {
            this.dialogVisible = !this.dialogVisible
        },
        commissionRate () {
            this.dialogCommission = !this.dialogCommission
        },
        opens(){
            const _this = this
            this.$nextTick(() => {
                echartsLine2(document.getElementById('d-hot-talent'), _this.hot_talent.dataX, _this.hot_talent.dataY)
            })
        },
        opens2(){
            const _this = this
            this.$nextTick(() => {
                echartsLine2(document.getElementById('d-commission-rate'), _this.commission_rate.dataX, _this.commission_rate.dataY)
            })
        },
    },
};
</script>
<style>
    .el-dialog{
        background: #082C55;
        border: none;
        border-radius: 12px;
    }
    .el-dialog__title{
        font-size: 16px;
        color: #FFFFFF;
    }
    .el-dialog__body{
        padding-top: 10px;
    }
</style>
<style lang="less" scoped>
    .left-wrapper{
        color: #fff;
        position: relative;
        // overflow: hidden;
        .d-bg-purple{
            padding: 20px;
            border-bottom: 1px solid #326CAD;
            // overflow: hidden;
        }
        .d-left{
            width: 360px;
            display: inline-block;
            margin-right: 10px;
            background: #051C36;
            border-radius: 6px;
            .d-left-top{
                border-top-left-radius: 6px;
                border-top-right-radius: 6px;
                .d-top-title{
                    line-height: 50px;
                    font-size: 16px;
                }
                .d-top-content-show{
                    display: flex;
                    align-items: center;
                    .d-top-conent-img{
                        width: 80px;
                        height: 80px;
                        overflow: hidden;
                        border-radius: 6px;
                        margin-right: 10px;
                        >img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .d-top-content-desc{
                        line-height: 22px;
                        >p{
                            font-size: 16px;
                        }
                        .d-top-desc-icon{
                            color: #248FFF;
                            font-size: 18px;
                            line-height: 24px;
                            .d-top-desc-icon-left{
                                margin-right: 8px;
                            }
                        }
                        .d-top-content-price{
                            font-size: 12px;
                            .d-price-title{
                                color: #CCCCCC;
                                margin-right: 5px;
                            }
                            .d-price-desc{
                                color: #FF2424;
                            }
                            .d-price-percentage{
                                color: #CCCCCC;
                            }
                            .d-price-icon{
                                font-size: 20px;
                                margin-left: 5px;
                                color: #FBAE46;
                                cursor: pointer;
                            }

                        }
                    }
                }
            }
            .d-left-message{
                
                span{
                    color: #FFFFFF;
                    font-size: 16px;
                }
                p{
                    color: #CCCCCC;
                    font-size: 12px;
                }
            }
            .d-show-message{
                padding: 20px;
            }
            
            .d-left-bottom-basicdata{
                .d-bottom-basicdata-title{
                    font-size: 16px;
                    color: #FFFFFF;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    >div{
                        width: 3px;
                        height: 16px;
                        background: #248FFF;
                        margin-right: 8px;
                        border-radius: 2px;
                        
                    }
                }
                .d-bottom-basicdata-content{
                    display: flex;
                    flex-wrap: wrap;
                    .d-basicdata-content-item{
                        width: 100px;
                        margin-bottom: 20px;
                        p{
                            font-size: 16px;
                            color: #FFFFFF;
                        }
                        span{
                            font-size: 12px;
                            color: #CCCCCC;
                        }
                    }
                    .d-top-content-show{
                        display: flex;
                        align-items: center;
                        .d-top-conent-img{
                            width: 80px;
                            height: 80px;
                            overflow: hidden;
                            border-radius: 40px;
                            margin-right: 10px;
                            >img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .d-top-content-desc{
                            line-height: 22px;
                            >p{
                                font-size: 16px;
                            }
                            .d-message-item-desc{
                                font-size: 12px;
                                text-align: center;
                                span{
                                    color: #FF2424;
                                }
                                p{
                                    color: #CCCCCC;
                                }
                            }
                            
                        }
                    }
                    
                }
            }
            .d-left-bottom-button{
                .monitorNext{
                    width: 100%;
                    text-align: center;
                    margin: 10px 0 30px 0;
                    .gradient_red{
                        background-image: -webkit-linear-gradient(45deg,#FF2F76,#FF5DAE);
                        border: none;
                        color: #fff;
                    }
                    .gradient_red:hover{
                        background-image: -webkit-linear-gradient(45deg,#FF2F76,#FF5DAE 50%);
                    }
                    img{
                        width: 12px;
                        margin-right: 5px;
                    }

                }
            }
        }
    }
</style>