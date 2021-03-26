<template>
    <div class="d-talent-left-wrapper">
        <div class="d-left">
            <div class="grid-content bg-purple">
                <div class="d-left-top d-bg-purple">
                    <div class="d-top-title">
                        <span>小店信息</span>
                    </div>
                    <div class="d-top-content">
                        <div class="d-top-content-show">
                            <div class="d-top-conent-img">
                                <img :src="talent_information.imgUrl">
                            </div>
                            <div class="d-top-content-desc">
                                <p class="d-talent-top-title">{{talent_information.title}}</p>
                                <p class="d-talent-top-message">当前在售商品数：{{talent_information.commodity}}件</p>
                                <span class="d-talent-top-desc">服装饰品</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-talent-content d-bg-purple">
                    <div class="d-basicdata-content-item" v-for="(item, index) of content_data" :key="index">
                        <p>{{item.number}} <span>{{item.status}}</span></p>
                        <span>{{item.desc}}</span>
                    </div> 
                </div>
                <div class="d-left-bottom d-bg-purple">
                    <div class="d-left-bottom-basicdata">
                        <div class="d-bottom-basicdata-title">
                            <div></div>
                            <span>近30天数据</span>
                        </div>
                        <div class="d-bottom-basicdata-content">
                            <div class="d-basicdata-content-item" v-for="(item, index) of basic_data" :key="index">
                                <p>{{item.number}}</p>
                                <span>{{item.desc}}</span>
                            </div> 
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
            content_data: []
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
                url: "/detailed_shop_message.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.talent_information = data.talent_information
                _this.basic_data = data.basic_data
                _this.content_data = data.content_data
                if(data.code == 200){
                    
                }else if(data.code == 401){
                    
                }
                else{
                    
                }

            }).catch(err => {
                console.log(err)
            })
        },
    },
};
</script>
<style lang="less" scoped>
    .d-talent-left-wrapper{
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
                    align-items: center;
                    .d-top-conent-img{
                        width: 70px;
                        height: 70px;
                        overflow: hidden;
                        border-radius: 40px;
                        margin-right: 10px;
                        >img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .d-top-content-desc{
                        .d-talent-top-title{
                            font-size: 16px;
                            color: #FFFFFF;
                        }
                        .d-talent-top-message{
                            font-size: 12px;
                            color: #CCCCCC;
                        }
                        .d-talent-top-desc{
                            display: inline-block;
                            font-size: 12px;
                            border: 1px solid #FBAE46;
                            padding: 0 4px;
                            border-radius: 12px;
                            color: #FBAE46;
                            margin-top: 15px;
                        }
                    }
                }
            }
            .d-talent-content{
                border-bottom: 1px solid #326CAD;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 12px;
                text-align: center;
                color: #CCCCCC;
                p{
                    font-size: 16px;
                    color: red;
                    >span{
                        font-size: 12px;
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
            }
        }
    }
</style>