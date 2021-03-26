<template>
    <div class="left-wrapper">
        <div class="d-left">
            <div class="grid-content bg-purple">
                <div class="d-left-top d-bg-purple">
                    <div class="d-top-title">
                        <span>话题信息</span>
                    </div>
                    <div class="d-top-content">
                        <div class="d-top-content-show">
                            <div class="d-top-conent-img">
                                <img :src="talent_information.imgUrl">
                            </div>
                            <div class="d-top-content-desc">
                                <span class="d-top-desc-message">{{talent_information.title}}</span>
                                <p class="d-top-desc-author">参与人数 {{talent_information.participants}}</p>
                                <p class="d-top-desc-Incidental">播放量 {{talent_information.play_volume}}亿</p>
                            </div>
                        </div>
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
                        <div class="monitorNext">
                            <button type="button" class="el-button table_button monitorNextBtn ui_click gradient_red el-button--default" style="margin: 0px 20px 0px 0px !important;">
                                <img src="@/assets/images/detailed_page_img/follow.png">
                                <span>加入关注</span>
                            </button>
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
            app_message: {}
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
                url: "/topics_detailed_left.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.talent_information = data.talent_information
                _this.app_message = data.app_message
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
                    margin-bottom: 20px;
                }
                .d-top-content-show{
                    display: flex;
                    align-items: top;
                    .d-top-conent-img{
                        width: 75px;
                        height: 90px;
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
                        flex: 1;
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
                            margin-top: 6px;
                        }
                        .d-top-desc-author{
                            font-size: 12px;
                            color: #CCCCCC;
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