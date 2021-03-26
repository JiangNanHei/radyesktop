<template>
    <div class="wrapper">
        <div class="wrapper_content">
            <div class="ui_content_title"><img src="@/assets/images/cards_icon/cards_icon2.png">热门直播间 </div>
            <div class="block">
                <el-carousel trigger="click" height="120px" indicator-position="none" arrow="always" :loop="false" :autoplay="false">
                    <el-carousel-item v-for="(page, index) in pages" :key="index">
                        <div v-for="(item, index) in page" :key="index" class="page_wrapper">
                            <div class="page_content">
                                <div class="img_wrapper">
                                    <div class="img_content">
                                        <img :src="item.imgUrl">
                                    </div>
                                    <div class="img_button_title" v-if="item.isLive">
                                        <div class="img_button_desc">
                                            <img src="https://static.douchacha.com/img/living.297b2ad1.gif">
                                        </div>
                                        <span>直播中</span>
                                    </div>
                                </div>
                                <div class="desc_content">
                                    <div class="name_cont">
                                        <div class="user_name">{{item.desc}}</div>
                                    </div>
                                    <div class="signature">{{item.time}}</div>
                                    <div class="desc_total" v-if="item.isture">
                                        <router-link target="_blank" to="/detailsscreen"><img src="@/assets/images/cards_icon/cards_icon3.png">详情数据大屏  ></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="card_msg">
                <el-row type="flex" class="row-bg" justify="space-between">
                    <el-col style="width: 49.5%;">
                        <div class="grid-content bg-purple-left">
                            <!-- <p data-v-433bd9e2="" class="water_text">消息</p> -->
                            <el-scrollbar class="elscrolbar" style="height: 100%;">
                                <ul class="el-timeline" style="padding: 25px;">
                                    <li class="el-timeline-item" v-for="(item, index) of cardMsg.cardLeft" :key="index">
                                        <div class="el-timeline-item__tail"></div>
                                        <div class="el-timeline-item__node el-timeline-item__node--normal el-timeline-item__node--" style="background-color: rgb(251, 203, 111);"><!----></div><!---->
                                        <div class="el-timeline-item__wrapper">
                                            <div class="el-timeline-item__content">
                                                <div class="msg_list">
                                                    <span></span>
                                                    <p>{{item.desc}}</p>
                                                </div>
                                            </div>
                                            <div class="el-timeline-item__timestamp is-bottom">
                                                {{item.time}}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </el-scrollbar>
                        </div>
                    </el-col>
                    <el-col style="width: 49.5%;">
                        <div class="grid-content bg-purple-right">
                            <!-- <p data-v-433bd9e2="" class="water_text">帮助</p> -->
                            <el-scrollbar class="elscrolbar" style="height: 100%;">
                                <ul class="el-timeline" style="padding: 25px;">
                                    <li class="el-timeline-item" v-for="(item, index) of cardMsg.cardRight" :key="index">
                                        <div class="el-timeline-item__tail"></div>
                                        <div class="el-timeline-item__node el-timeline-item__node--normal el-timeline-item__node--" style="background-color: rgb(251, 203, 111);"><!----></div><!---->
                                        <div class="el-timeline-item__wrapper">
                                            <div class="el-timeline-item__content">
                                                <div class="msg_list">
                                                    <span></span>
                                                    <p>{{item.desc}}</p>
                                                </div>
                                            </div>
                                            <div class="el-timeline-item__timestamp is-bottom">
                                                {{item.time}}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </el-scrollbar>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="little_cards_box">
                <el-row type="flex" class="row-bg" justify="space-between">
                    <el-col class="little_card_col">
                        <div class="cards_icon_box">
                            <p>直播</p>
                            <div class="cards_icon_show">
                                <router-link tag="div" to="/real" class="card_item">
                                    <img src="@/assets/images/cards_icon/cards_icon1.png">
                                    <p class="card_name">实时直播</p>
                                </router-link>
                                <router-link tag="div" to="/fashion" class="card_item">
                                    <img src="@/assets/images/cards_icon/cards_icon2.png">
                                    <p class="card_name">热门直播间</p>
                                </router-link>
                                <router-link tag="div" to="/detailsscreen" class="card_item">
                                    <img src="@/assets/images/cards_icon/cards_icon3.png">
                                    <p class="card_name">详细数据大屏</p>
                                </router-link>
                            </div>
                        </div>
                    </el-col>
                   <el-col class="little_card_col">
                        <div class="cards_icon_box">
                            <p>电商</p>
                            <div class="cards_icon_show">
                                <router-link tag="div" to="/ecommercemarket" class="card_item">
                                    <img src="@/assets/images/cards_icon/cards_icon4.png">
                                    <p class="card_name">商品销售榜</p>
                                </router-link>
                                <router-link tag="div" to="/ecommercegenius" class="card_item">
                                    <img src="@/assets/images/cards_icon/cards_icon5.png">
                                    <p class="card_name">电商牛人榜</p>
                                </router-link>
                                <router-link tag="div" to="/ecommercesearch" class="card_item">
                                    <img src="@/assets/images/cards_icon/cards_icon6.png">
                                    <p class="card_name">商品搜索</p>
                                </router-link>
                            </div>
                        </div>
                    </el-col>
                    <el-col class="little_card_col">
                        <div class="cards_icon_box">
                            <p>小店</p>
                            <div class="cards_icon_show">
                                <router-link tag="div" to="/tinyshopwarehouse" class="card_item">
                                    <img src="@/assets/images/cards_icon/cards_icon7.png">
                                    <p class="card_name">小店库</p>
                                </router-link>
                                <router-link tag="div" to="/tinyshopranking" class="card_item">
                                    <img src="@/assets/images/cards_icon/cards_icon8.png">
                                    <p class="card_name">小店排行榜</p>
                                </router-link>
                            </div>
                        </div>
                    </el-col>
                    <el-col class="little_card_col">
                        <div class="cards_icon_box">
                            <p>工具</p>
                            <div class="cards_icon_show">
                                <div class="card_item">
                                    <img src="@/assets/images/cards_icon/cards_icon9.png">
                                    <p class="card_name">账号估值</p>
                                </div>
                                <div class="card_item">
                                    <img src="@/assets/images/cards_icon/cards_icon10.png">
                                    <p class="card_name">视频素材库</p>
                                </div>
                                <div class="card_item">
                                    <img src="@/assets/images/cards_icon/cards_icon11.png">
                                    <p class="card_name">视频提取</p>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>   
        </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    props: {

    },
    data() {
        return {
           carouselData: [],
           cardMsg: {}
        };
    },
    mounted () {
        this.getData()
    },
    methods: {
        getData() {
            const _this = this
            this.$http({
                url: "/dou_home.json",
                method: "GET",
                params: this.$http.adornParams({
                    id: '1'
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.carouselData = data.carouselData
                _this.cardMsg = data.cardMsg
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
        pages () {
            const pages = []
            this.carouselData.forEach((item, index) => {
            const page = Math.floor(index / 4)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
};
</script>

<style lang="less" scoped>
    .wrapper_content{
        color: #fff;
        /deep/.el-carousel__arrow{
            background: #3e4355;
            opacity: .5;
        }
        /deep/.el-carousel__item{
            display: flex;
            justify-content: space-between;
            z-index: 1;
        }
        .ui_content_title{
            margin-bottom: 10px;
            line-height: 40px;
            font-size: 14px;
            >img{
                width: 12px;
                margin-right: 8px;
                vertical-align: middle;
            }
        }
        .block{
            overflow: hidden;
            margin: 10px 0;
            width: 100%;
            .page_wrapper{
                background: #123D6D;
                width: 24%;
                height: 100%;
                overflow: hidden;
                display: inline-block;
                // margin-right: 11px;
                line-height: 120px;
                border-radius: 10px;
                .page_content{
                    height: 100%;
                    display: flex;
                    align-items: center;
                    padding: 20px;
                    .img_wrapper{
                        line-height: 40px;
                        display: inline-block;
                        width: 60px;
                        height: 60px;
                        margin-right: 10px;
                        margin-left: 10px;
                        position: relative;
                        .img_content{
                            width: 60px;
                            height: 60px;
                            overflow: hidden;
                            border-radius: 30px;
                            img{
                                width: 60px;
                                height: 60px;
                            }
                        }
                        .img_button_title{
                            position: absolute;
                            bottom: 0;
                            font-size: 12px;
                            height: 20px;
                            line-height: 20px;
                            width: 100%;
                            // background: linear-gradient(-42deg, #ff1167, #f1278a);
                            background: #FF2424;
                            border-radius: 2px;
                            .img_button_desc{
                                position: absolute;
                                left: 0;
                                width: 40%;
                                >img{
                                    width: 100%;
                                    margin-top: -2px;
                                }
                            }
                            >span{
                                margin-left: 20px;
                            }
                        }
                    }
                    .desc_content{
                        display: inline-block;
                        line-height: 20px;
                        width: 65%;
                        max-width: 200px;
                        .name_cont{
                            font-size: 14px;
                            .user_name{
                                white-space: nowrap;/*保证文本内容不会自动换行，如果多余的内容会在水平方向撑破单元格*/ 
                                overflow: hidden; /*隐藏超出单元格的部分*/
                                text-overflow: ellipsis; /*将被隐藏的那部分用省略号代替*/
                            } 
                        }
                        .signature{
                            font-size: 12px;
                            white-space: nowrap;/*保证文本内容不会自动换行，如果多余的内容会在水平方向撑破单元格*/ 
                            overflow: hidden; /*隐藏超出单元格的部分*/
                            text-overflow: ellipsis; /*将被隐藏的那部分用省略号代替*/
                            color: hsla(0,0%,100%,.4);
                        }
                        .desc_total{
                            font-size: 12px;
                            // margin-top: 5px;
                            a{
                                color: #248FFF;
                            }
                            img{
                                width: 12px;
                                margin-right: 5px;
                            }
                        }
                    }    
                }
            }
        }
        .card_msg{
            margin: 30px 0;
            height: 150px;
            .grid-content{
                height: 150px;
                width: 100%;
                background: #123D6D;
                border-radius: 0 0 10px 10px;
                position: relative;
                .msg_list{
                    color: #fff;
                }
                .water_text{
                    font-size: 68px;
                    color: rgba(52,54,62,.7);
                    position: absolute;
                    bottom: -5px;
                    right: 33px;
                }
            }
            .bg-purple-left{
                background: url('../../assets/images/main_page/work_message.png') no-repeat center center;
                background-size: 100%;
            }
            .bg-purple-right{
                background: url('../../assets/images/main_page/work_help.png') no-repeat center center;
                background-size: 100%;
            }
        }
        .little_card_col{
            width: 24%;
            .cards_icon_box{
            margin-bottom: 40px;
            width: 100%;
            height: 150px;
            background: #123D6D;
            border-radius: 10px;
            >p{
                text-align: center;
                line-height: 80px;
            }
            .cards_icon_show{
                display: flex;
                justify-content: space-around;
                align-items: center;
                .card_item{
                    cursor: pointer;
                    text-align: center;
                    .card_name{
                        font-size: 12px;
                    }
                    img{
                        width: 20px;
                    }
                }
            }
        }
        }
        

    }
</style>
