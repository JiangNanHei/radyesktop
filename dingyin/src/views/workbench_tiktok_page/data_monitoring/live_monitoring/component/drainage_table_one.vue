<template>
    <div>
        <div class="monitoring-live_content">
            <div class="d-monitoring-live">
                <p class="d-live-monitoring-title">直播监控</p>
                <p class="d-live-monitoring-desc">可对达人的直播进行监控，提供秒入的音浪收入、在线人数、弹幕数、上架商品监控、掌握达人直播热度数据</p> 
                <div class="demo-input-suffix">
                    <div class="search_box">
                        <el-input
                            v-model = "videotablsearch"
                            placeholder="请输入要监控的抖音号ID或者达人主页链接进行监控"
                            >
                        </el-input>
                        <el-button type="primary" @click="searchResult">搜索</el-button>
                    </div>
                    <div class="d-live-search" v-for="(item, index) of monitoring_result" :key="index">
                        <img class="d-live-search-img" :src="item.imgUrl">
                        <div class="d-live-search-message">
                            <p class="d-live-search-message-title">{{item.title}}</p>
                            <p class="d-live-search-message-douyin">抖音号：{{item.douyin}}</p>
                            <p class="d-live-search-message-desc">简介：{{item.desc}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-monitoring-time">
                <p class="d-live-monitoring-title">选择监控时长</p>
                <monitoring-time></monitoring-time>
            </div>
            <div class="d-monitoring-switch">
                <p class="d-live-monitoring-title">开播提醒</p>
                <el-switch v-model="monitoring_switch" class="d-switch-show"></el-switch>
            </div>
            <div class="d-monitoring-start">
                <button type="button" :class="{gradient_bule: monitoring_switch,gradient_gray:!monitoring_switch}" class="el-button table_button monitorNextBtn ui_click el-button--default" style="margin: 0px 20px 0px 0px !important;">
                    <img src="@/assets/images/detailed_page_img/eyes.png">
                    <span>开始监控</span>
                </button>
                <p class="d-start-desc">本次监控共需消耗
                    <span class="d-start-desc-show"> {{monitoring_number}} </span>
                    次监控直播次数，本月剩余
                    <span class="d-start-desc-show"> {{surplus_number}} </span>
                    次监控直播次数。我要 
                    <a href="javascript:;" class="d-start-desc-a" @click="dialogVisible = true">充值监控直播次数</a>
                </p>
            </div>
            <el-dialog
            title="充值直播监控次数"
            :visible.sync="dialogVisible"
            :modal="false"
            >
                <detailed-recharge></detailed-recharge>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import monitoringTime from "@/components/page/douyin/monitoring-time"
    import detailedRecharge from "../../components/detailed-recharge"
    export default {
        components: {
            monitoringTime,
            detailedRecharge
        },
        props: {

        },
        data() {
            return {
                monitoring_switch: false,
                videotablsearch: '',
                dialogVisible: false,
                monitoring_result: {},
                //消耗监控次数
                monitoring_number: '',
                //剩余次数
                surplus_number: ''
            };
        },
        methods: {
            getData() {
                const _this = this
                this.$http({
                    url: "/monitoring_live.json",
                    method: "GET",
                    data : this.$http.adornParams({
                        
                    },true)
                }).then(({data}) => {
                    // console.log(data)
                    _this.monitoring_number = data.monitoring_number
                    _this.surplus_number = data.surplus_number
                    if(data.code == 200){
                        
                    }else if(data.code == 401){
                        
                    }
                    else{
                        
                    }

                }).catch(err => {
                    console.log(err)
                })
            },
            searchResult() {
                const _this = this
                this.$http({
                    url: "/monitoring_live_search.json",
                    method: "GET",
                    data : this.$http.adornParams({
                        
                    },true)
                }).then(({data}) => {
                    // console.log(data)
                    _this.monitoring_result = data.monitoring_result
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
        computed: {
            
        },
        created() {
            this.getData()
        },
    };
</script>
<style lang="less" scoped>
    .monitoring-live_content{
        color: #fff;
        background: #051C36;
        border-radius: 6px;
        padding: 20px;
        /deep/.el-dialog{
            background: #082C55!important;
            border: none;
            border-radius: 12px;
            color: #FFFFFF;
        }
        /deep/.el-dialog__body{
            padding-top: 10px;
        }
        .d-monitoring-live{
            .d-live-monitoring-desc{
                font-size: 12px;
                color: #CCCCCC;
                line-height: 68px;
            }
            .demo-input-suffix{
                >span{
                    color: #FFFFFF;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            /deep/.search_box{
                display: inline-block;
                position: relative;
                input {
                    width: 480px;
                    height: 32px;
                    border-radius: 25px;
                    background: #0D2F55;
                    font-size: 12px;
                    color: #999;
                    border: 1px solid #999;
                }
                .el-button{
                    width: 65px;
                    line-height: 0px;
                    height: 80%;
                    position: absolute;
                    right: -28px;
                    border-radius: 20px;
                    top: 50%;
                    transform: translate(-50%,-50%);
                }
            }
            .d-live-search{
                margin-top: 20px;
                padding: 20px;
                width: 500px;
                height: 100px;
                background: #0D2F55;
                border-radius: 22px;
                border: 1px solid #979797;
                cursor: pointer;
                overflow: hidden;
                .d-live-search-img{
                    width: 60px;
                    height: 60px;
                    border-radius: 30px;
                    margin-right: 8px;
                    vertical-align: top;
                }
                .d-live-search-message{
                    display: inline-block;
                    .d-live-search-message-title{
                        font-size: 16px;
                        color: #FFFFFF;
                    }
                    .d-live-search-message-douyin{
                        font-size: 12px;
                        color: #CCCCCC;
                    }
                    .d-live-search-message-desc{
                        font-size: 12px;
                        color: #CCCCCC;
                    }
                }
                &:hover{
                    background: #051C36;
                    border: 1px solid #248FFF;
                }

            }
            
        }
        .d-live-monitoring-title{
            font-size: 16px;
            color: #FFFFFF;
        }
        .d-monitoring-time{
            margin-top: 20px;
        }
        .d-monitoring-switch{
            .d-switch-show{
                margin: 20px 0;
            }
        }
        .d-monitoring-start{
            .monitorNextBtn{
                padding: 15px 60px;
            }
            .gradient_bule{
                background-image: -webkit-linear-gradient(45deg,#1d6dff,#0dafff);
                color: #fff;
                border: none;
            }
            .gradient_gray{
                background: #666666;
                color: #fff;
                border: none;
            }
            // .gradient_bule:hover{
            //     background-image: -webkit-linear-gradient(45deg,#1d6dff,#0dafff 50%);
            // }
            
            img{
                width: 12px;
                margin-right: 5px;
            }
            .d-start-desc{
                margin: 20px 0;
                font-size: 12px;
                color: #CCCCCC;
                .d-start-desc-show{
                    color: red;
                }
                .d-start-desc-a{
                    color: #1d6dff;
                    text-decoration: underline;
                }
            }
        }
    }
</style>