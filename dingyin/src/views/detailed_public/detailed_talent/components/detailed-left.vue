<template>
    <div class="left-wrapper">
        <div class="d-left">
            <div class="grid-content bg-purple">
                <div class="d-left-top d-bg-purple">
                    <div class="d-top-title">
                        <span>达人信息</span>
                        <img src="@/assets/images/detailed_page_img/share.png" @click="shareOpen">
                    </div>
                    <div class="d-top-content">
                        <div class="d-top-content-show">
                            <div class="d-top-conent-img">
                                <img :src="talent_information.imgUrl">
                            </div>
                            <div class="d-top-content-desc">
                                <p>{{talent_information.title}}</p>
                                <div class="d-top-desc-icon" v-if="talent_information.message_icon">
                                    <span class="iconfont icon-zhibo d-top-desc-icon-left" style="font-size: 16px;" v-if="talent_information.message_icon.zhibo"></span>
                                    <span class="iconfont icon-dianpu d-top-desc-icon-right" style="font-size: 16px;" v-if="talent_information.message_icon.dianpu"></span>
                                </div>
                                <div class="d-top-desc-message" v-if="talent_information.message_show">
                                    <div class="d-top-message-show">
                                        <img src="@/assets/images/detailed_page_img/location.png">
                                        <span>{{talent_information.message_show.place}}</span>
                                    </div>
                                    <div class="d-top-message-show">
                                        <img src="@/assets/images/detailed_page_img/science.png">
                                        <span>穿搭</span>
                                    </div>
                                    <div class="d-top-message-show">
                                        <span class="iconfont icon-wodedangxuan" style="font-size: 12px;"></span>
                                        <span>粉丝团{{talent_information.message_show.fans_number}}</span>
                                    </div>
                                </div>
                                <div class="d-top-desc-supplement" v-if="talent_information.message_show !== undefined ? talent_information.message_show.talent : ''">
                                    <img src="@/assets/images/detailed_page_img/authentication.png">
                                    <span>抖音认证带货达人</span>
                                </div>
                            </div>
                        </div>
                        <div class="d-top-content-message" v-if="talent_information.specific_message">
                            <div class="d-top-message-show d-top-message-show-left">
                                <span>抖音号：</span>
                                <span>{{talent_information.specific_message.douyin}}</span>    
                            </div>
                            <div class="d-top-message-show">
                                <span>性别：</span>
                                <span>{{talent_information.specific_message.gender}}</span> 
                            </div>
                        </div>
                        <div class="d-top-content-detail" v-if="talent_information.specific_message">
                            <el-collapse class="d-top-detail-show">
                                <el-collapse-item title="查看更多" name="1">
                                    <div class="d-top-detail-message">
                                        <span>年龄：</span>
                                        <div>{{talent_information.specific_message.age}}</div>
                                    </div>
                                    <div class="d-top-detail-message">
                                        <span>简介：</span>
                                        <div>{{talent_information.specific_message.brief_introduction}}</div>
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </div>
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
                    <div class="d-left-bottom-basicdata">
                        <div class="d-bottom-basicdata-title">
                            <div></div>
                            <span>直播/电商数据</span>
                        </div>
                        <div class="d-bottom-basicdata-content">
                            <div class="d-basicdata-content-item" v-for="(item, index) of live_data" :key="index">
                                <p>{{item.number}}</p>
                                <span>{{item.desc}}</span>
                            </div>
                        </div>
                        <div class="monitorNext">
                            <button type="button" class="el-button table_button monitorNextBtn ui_click gradient_bule el-button--default" style="margin: 0px 20px 0px 0px !important;">
                                <img src="@/assets/images/detailed_page_img/follow.png">
                                <span>加入关注</span>
                            </button>
                            <button type="button" class="el-button table_button monitorNextBtn ui_click gradient_red el-button--default" style="margin: 0px !important;">
                                <img src="@/assets/images/detailed_page_img/eyes.png">
                                <span>数据监控</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <el-dialog
                :visible.sync="dialogVisible"
                :modal="false"
                :show-close="false"
                width="750px"
                >
                <detailed-share></detailed-share>
            </el-dialog>   
        </div>
    </div>
</template>

<script>
import detailedShare from './detailed-share'
export default {
    naem : '实时直播榜',
    components: {
        detailedShare
    },
    props: {

    },
    data() {
        return {
            talent_information: {},
            basic_data: [],
            live_data: [],
            dialogVisible: false
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
                url: "/detailed_talent_message.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.talent_information = data.talent_information
                _this.basic_data = data.basic_data
                _this.live_data = data.live_data
                if(data.code == 200){
                    
                }else if(data.code == 401){
                    
                }
                else{
                    
                }

            }).catch(err => {
                console.log(err)
            })
        },
        shareOpen () {
            this.dialogVisible = !this.dialogVisible
        }
    },
};
</script>
<style lang="less" scoped>
    .left-wrapper{
        color: #fff;
        position: relative;
        margin-bottom: 300px;
        // overflow: hidden;
        .d-bg-purple{
            padding: 20px;
            background: #051C36;
            // overflow: hidden;
        }
        .d-left{
            width: 360px;
            display: inline-block;
            margin-right: 10px;
            .d-left-top{
                border-bottom: 1px solid #326CAD;
                border-top-left-radius: 6px;
                border-top-right-radius: 6px;
                .d-top-title{
                    line-height: 40px;
                    font-size: 16px;
                    >img{
                        width: 20px;
                        float: right;
                        margin-top: 10px;
                        cursor: pointer;
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
                        .d-top-desc-icon{
                            >span{
                                margin-right: 5px;
                            }
                            .d-top-desc-icon-left{
                                color: #FF2424;
                            }
                            .d-top-desc-icon-right{
                                color: #FFAC4A;
                            }
                        }
                        .d-top-desc-message{
                            font-size: 10px;
                            display: flex;
                            overflow: hidden;
                            line-height: 26px;
                            color: #CCCCCC;
                            .d-top-message-show{
                                margin-right: 8px;
                                >img{
                                    margin-right: 3px;
                                    vertical-align: middle;
                                }
                            }
                        }
                        .d-top-desc-supplement{
                            font-size: 14px;
                            color: #FFAC4A;
                            >img{
                                margin-right: 3px;
                                vertical-align: middle;
                                width: 18px;
                            }
                        }

                    }
                }
                .d-top-content-message{
                    display: flex;
                    overflow: hidden;
                    font-size: 14px;
                    color: #FFFFFF;
                    line-height: 52px;
                    .d-top-message-show-left{
                        margin-right: 20px;
                    }
                }
                .d-top-content-detail{
                    font-size: 14px;
                    /deep/.el-collapse-item__header{
                        background: #051C36;
                        border: none;
                        color: #248FFF;
                        justify-content: center;
                        outline: 1px solid #051C36;
                        .el-collapse-item__arrow{
                            margin: 0;
                        }
                    }
                    /deep/.el-collapse-item__wrap{
                        background: #051C36;
                        border:none;
                        .d-top-detail-message{
                            color: #FFFFFF;
                            display: flex;
                            >div{
                                width: 80%;
                            }
                        }
                    }
                }

            }
            .d-left-bottom{
                border-bottom-left-radius: 6px;
                border-bottom-right-radius: 6px;
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
                    
                }
                .monitorNext{
                    width: 100%;
                    text-align: center;
                    .gradient_bule{
                        background-image: -webkit-linear-gradient(45deg,#1d6dff,#0dafff);
                        color: #fff;
                        border: none;
                    }
                    .gradient_bule:hover{
                        background-image: -webkit-linear-gradient(45deg,#1d6dff,#0dafff 50%);
                    }
                    .gradient_red{
                        background-image: -webkit-linear-gradient(45deg,#fe2270,#ff588f);
                        border: none;
                        color: #fff;
                    }
                    .gradient_red:hover{
                        background-image: -webkit-linear-gradient(45deg,#fe2270,#ff588f 50%);
                    }
                    
                    img{
                        width: 12px;
                        margin-right: 5px;
                    }

                }
            }
        }
        /deep/.el-dialog__body{
            padding: 0;
        }
        /deep/.el-dialog__header{
            padding: 0;
        }
    }
</style>