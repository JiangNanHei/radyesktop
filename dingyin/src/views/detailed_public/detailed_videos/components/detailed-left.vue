<template>
    <div class="left-wrapper">
        <div class="d-left">
            <div class="grid-content bg-purple">
                <div class="d-left-top d-bg-purple">
                    <div class="d-top-title">
                        <span>视频信息</span>
                    </div>
                    <div class="d-top-content">
                        <div class="d-top-content-show">
                            <div class="d-top-conent-img">
                                <img :src="talent_information.imgUrl">
                            </div>
                            <div class="d-top-content-desc">
                                <span class="d-top-desc-shope">{{talent_information.show_type}}</span>
                                <span class="d-top-desc-message">{{talent_information.title}}</span>
                                <p class="d-top-desc-Incidental d-top-desc-video">视频时长：{{talent_information.video_time}}</p>
                                <p class="d-top-desc-Incidental">{{talent_information.time_show}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-top-supplement">
                        <div v-for="(item, index) of basic_data" :key="index">
                            <span>{{item.number}}</span>
                            <p>{{item.desc}}</p>
                        </div>
                    </div>
                    <div class="monitorNext">
                        <button type="button" class="el-button table_button monitorNextBtn ui_click gradient_bule el-button--default" style="margin: 0px 20px 0px 0px !important;">
                            <img src="@/assets/images/detailed_page_img/follow.png">
                            <span>加入关注</span>
                        </button>
                        <button type="button" class="el-button table_button monitorNextBtn ui_click gradient_red el-button--default" style="margin: 0px !important;">
                            <img src="@/assets/images/detailed_page_img/videoplay.png">
                            <span>播放视频</span>
                        </button>
                    </div>
                </div>
                <div class="d-bg-purple d-top-app">
                    <div class="d-app-conent-img">
                        <img :src="app_message.imgUrl">
                    </div>
                    <div class="d-app-content-desc">
                        <span class="d-top-desc-message">{{app_message.desc}}</span>
                    </div>
                </div>
                <div class="d-left-bottom d-bg-purple">
                    <div class="d-left-bottom-basicdata">
                        <p>主播信息</p>
                        <div class="d-bottom-message">
                            <div class="d-message-conent-img">
                                <img :src="anchor_message.imgUrl">
                            </div>
                            <div class="d-message-content-desc">
                                <span class="d-top-desc-message">{{anchor_message.title}}</span>
                                <p>抖音号<span>{{anchor_message.douyin}}</span></p>
                            </div>
                        </div>
                        <div class="d-bottom-desc">
                            <div v-for="(item, index) of anchor_data" :key="index">
                                <span>{{item.number}}</span>
                                <p>{{item.desc}}</p>
                            </div>
                        </div>
                        <div class="monitorNext">
                            <button type="button" class="el-button table_button monitorNextBtn ui_click gradient_bule el-button--default" style="margin: 0px 20px 0px 0px !important;">
                                <img src="@/assets/images/detailed_page_img/follow.png">
                                <span>加入关注</span>
                            </button>
                            <router-link tag="button" to="/intelligentdetailed" type="button" class="el-button table_button monitorNextBtn ui_click gradient_red el-button--default" style="margin: 0px !important;">
                                <img src="@/assets/images/detailed_page_img/talent.png">
                                <span>达人详情</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>
</template>

<script>

export default {
    naem : '实时直播榜',
    components: {
        
    },
    props: {

    },
    data() {
        return {
            talent_information: {},
            basic_data: [],
            app_message: {},
            anchor_message: {},
            anchor_data: []
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
                url: "/videos_detailed_left.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.talent_information = data.talent_information
                _this.basic_data = data.basic_data
                _this.app_message = data.app_message
                _this.anchor_message = data.anchor_message
                _this.anchor_data = data.anchor_data
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
                }
                .d-top-content-show{
                    display: flex;
                    align-items: top;
                    .d-top-conent-img{
                        width: 75px;
                        height: 100px;
                        overflow: hidden;
                        border-radius: 4px;
                        margin-right: 10px;
                        >img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .d-top-content-desc{
                        line-height: 22px;
                        flex: 1;
                        .d-top-desc-shope{
                            font-size: 12px;
                            color: #FBAE46;
                            display: inline-block;
                            padding: 0 6px;
                            border: 1px solid #FBAE46;
                            border-radius: 12px;
                            margin-right: 5px;
                        }
                        .d-top-desc-message{
                            font-size: 14px;
                            color: #FFFFFF;
                            line-height: 24px;
                        }
                        .d-top-desc-Incidental{
                            font-size: 12px;
                            color:#CCCCCC; 
                        }
                        .d-top-desc-video{
                            margin-top: 10px;
                        }

                    }
                }
                .d-top-supplement{
                    display: flex;
                    justify-content: space-between;
                    text-align: center;
                    margin: 20px 0;
                    span {
                        font-size: 16px;
                        color: #FFFFFF;
                    }
                    P {
                        font-size: 12px;
                        color: #CCCCCC;
                    }
                }

            }
            .d-top-app{
                border-bottom: 1px solid #326CAD;
                display: flex;
                align-items: center;
                .d-app-conent-img{
                    width: 60px;
                    height: 60px;
                    margin-right: 10px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .d-app-content-desc{
                    flex: 1;
                    font-size: 14px;
                    color: #FFFFFF;
                }
            }
            .d-left-bottom{
                border-bottom-left-radius: 6px;
                border-bottom-right-radius: 6px;
                .d-bottom-message{
                    display: flex;
                    align-content: center;
                    margin: 20px 0;
                    .d-message-conent-img{
                        width: 50px;
                        height: 50px;
                        margin-right: 10px;
                        >img{
                            width: 100%;
                            height: 100%;
                            border-radius: 25px;
                        }
                    }
                    .d-message-content-desc{
                        flex: 1;
                        font-size: 14px;
                        color: #CCCCCC;
                        .d-top-desc-message{
                            font-size: 18px;
                            color: #FFFFFF;
                            line-height: 28px;
                        }
                    }
                }
                .d-bottom-desc{
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 20px;
                    text-align: center;
                    span{
                        font-size: 16px;
                        color:#FFFFFF;
                    }
                    p{
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
</style>