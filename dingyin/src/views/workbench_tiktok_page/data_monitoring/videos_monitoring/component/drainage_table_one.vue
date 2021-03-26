<template>
    <div>
        <div class="wrapper_content">
            <div class="d-monitoring-live">
                <p class="d-live-monitoring-title">视频监控</p>
                <div class="demo-input-suffix">
                    <div class="search_box">
                        <el-input
                            v-model = "videotablsearch"
                            placeholder="请输入视频地址链接搜索"
                            >
                        </el-input>
                        <el-button type="primary" @click="searchResult">搜索</el-button>
                    </div>
                    <el-popover
                        placement="bottom-start"
                        trigger="click">
                        <detailed-share></detailed-share>
                        <div slot="reference" class="d-monitoring-question">
                             <span class="el-icon-question d-time-icon"></span>
                             <span class="d-monitoring-question-desc">如何获取视频链接</span>
                        </div>
                    </el-popover>
                    <div class="d-live-search" v-for="(item, index) of monitoring_result" :key="index" @click="monitoringStart">
                        <img class="d-live-search-img" :src="item.imgUrl">
                        <div class="d-live-search-message">
                            <p class="d-live-search-message-title"><span>{{item.message}}</span>{{item.title}}</p>
                            <p class="d-live-search-message-douyin">发布者：{{item.author}}</p>
                            <p class="d-live-search-message-desc">发布时间：{{item.desc}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-monitoring-time">
                <p class="d-live-monitoring-title">选择监控时长</p>
                <monitoring-radio></monitoring-radio>
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
                    <a href="javascript:;" class="d-start-desc-a" @click="dialogVisible = true">充值监控视频次数</a>
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
    import monitoringRadio from "@/components/page/douyin/monitoring-radio"
    import detailedRecharge from "../../components/detailed-recharge"
    import detailedShare from "../../components/detailed-share"
    export default {
        components: {
            monitoringRadio,
            detailedRecharge,
            detailedShare
        },
        props: {

        },
        data() {
            return {
                monitoring_switch: false,
                videotablsearch: '',
                dialogVisible: false,
                monitoring_result: {},
                monitoring_number: '',
                surplus_number: ''
            };
        },
        methods: {
            getData() {
                const _this = this
                this.$http({
                    url: "/monitoring_videos.json",
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
                    url: "/monitoring_videos_search.json",
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
            },
            monitoringStart (){
                this.monitoring_switch = !this.monitoring_switch
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
    .wrapper_content{
        color: #fff;
        background: #051C36;
        border-radius: 6px;
        padding: 20px;
        /deep/.el-dialog{
            background: #082C55!important;
            border: none;
            border-radius: 12px;
        }
        /deep/.el-dialog__body{
            padding-top: 10px;
        }
        .d-monitoring-live{
            .demo-input-suffix{
                margin-top: 20px;
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
                // height: 100px;
                background: #0D2F55;
                border-radius: 22px;
                border: 1px solid #979797;
                cursor: pointer;
                overflow: hidden;
                display: flex;
                align-items: center;
                .d-live-search-img{
                    width: 60px;
                    height: 80px;
                    margin-right: 12px;
                    vertical-align: middle;
                    border-radius: 3px;
                }
                .d-live-search-message{
                    display: inline-block;
                    .d-live-search-message-title{
                        font-size: 16px;
                        color: #FFFFFF;
                        span{
                            display: inline-block;
                            width: 220px;
                            white-space: nowrap;/*保证文本内容不会自动换行，如果多余的内容会在水平方向撑破单元格*/
                            overflow: hidden; /*隐藏超出单元格的部分*/
                            text-overflow: ellipsis; /*将被隐藏的那部分用省略号代替*/
                            vertical-align: top;
                        }
                        margin-bottom: 5px;
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
            .d-monitoring-question{
                display: inline-flex;
                align-items: center;
                vertical-align: middle;
                cursor: pointer;
                .d-time-icon{
                    font-size: 24px!important;
                    margin-left: 10px!important;
                    color: #999999!important;
                }
                .d-monitoring-question-desc{
                    color: #999999;
                    font-size: 12px;
                    margin-left: 5px;
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