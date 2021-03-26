<template>
    <div class="corporateInformationBox">
        <!-- 标题 -->
        <div class="homeCItitle">
            <div class="titDiv">
                <div class="tittext">INFORMATION
                    <div class="divleft"> </div>
                    <div class="divright"> </div>
                </div>
            </div>
            <span>热门资讯</span>
        </div>
        <div class="studyVidio containernav">
            <ul class="studyVidiobox">
                <li class="list" v-for="(item,i) in homedata.informationdata" :key="i">
                    <div class="headeritem">
                        <span class="headertitle">{{item.title}}</span>
                        <span class="headerparticulars">
                            查看更多
                            <i class="iconfont icon-youjiantou1"></i>
                        </span>
                    </div>
                    <div class="item" v-for="(item,i) in item.studyVidiolistdata" :key="i">
                        <div class="imgbox">
                            <el-image class="imgs" :src="(item.imgurl)"></el-image>
                        </div>
                        <div class="itembox">
                            <div class="itemtitlebox">{{item.copywriter}}</div>
                            <p class="ietmspanleft">
                            <i class="iconfont icon-shijian"></i>
                            <span>{{item.time}}</span>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 标题 -->
        <div class="homeCItitle">
            <div class="titDiv">
                <div class="tittext">PARTNER
                    <div class="divleft"> </div>
                    <div class="divright"> </div>
                </div>
            </div>
            <span>合作伙伴</span>
        </div>
        <!-- 合作伙伴 -->
        <ul class="branding containernav">
            <li class="item" v-for="(item,i) in homedata.brandingdata" :key="i">
                <el-image :src="(item.imgurl)"></el-image>
                <span>{{item.title}}</span>
            </li>
            <!-- <li>
                <img style="width:100%" src="@/assets/images/home/shangbiao.png">
            </li> -->
        </ul>
    </div>
</template>

<script>
import Swiper from 'swiper';
export default {
    components: {

    },
    props: {
        homedata:Object
    },
    data() {
        return {

        };
    },
    methods: {
        swiperchush(){
            let mySwiper = new Swiper('.swiper-container',{
                slidesPerView : 3,
                spaceBetween : 20,
                loop : true,
                
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    hideOnClick: true,
                },
                autoplay: {
                    delay: 4000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                },
            }) 
        },
        // 请求热门资讯 数据
        information(){
            this.$http({
                url: "home.json",
                method: "get",

            }).then(({
                data
            }) => {
                this.brandingdata = data.brandingdata
                this.informationdata = data.informationdata
            }).catch(err => {

            })
        }
    },
    mounted () {
        this.swiperchush();
        // this.information()
    }
};
</script>

<style lang="less" scoped>
.corporateInformationBox{
    background: #f5f7fa;
    width:100%;
    overflow: hidden;
    text-align: center;
    padding: 0 0 50px;
    .homeCItitle{
        .titDiv{
            color: rgba(0,0,0,.1);
        }
        span{
            color: #333;
        }
    }
    // 热门资讯
    .studyVidio{
        position: relative;
        padding: 20px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        background-color: #fff;
        border-radius: 10px;
        -webkit-box-shadow: 0 0 30px 0 rgba(0,0,0,.06);
        box-shadow: 0 0 30px 0 rgba(0,0,0,.06);
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        .studyVidiobox{
            width: 100%;
            display: flex;
            li{
                flex: 1;
                .overhead{
                    background: #FFE9E5;
                    border-radius: 5px;
                    margin-right: 10px;
                    font-size: 12px;
                    padding:4px 8px;
                    color:#FC9C72;
                }
            }
            .list{
                &:first-child{
                    margin-right: 20px;
                }
                .item{
                    height: 80px;
                    display: block;
                    text-align: left;
                    margin: 30px 17px 30px 4px;
                    display: flex;
                    &:hover{
                        .itemtitlebox{
                            color:#2997ff;
                        }
                    }
                    .itemtitlebox{
                        font-size: 16px;
                        color: #333;
                        cursor: pointer;
                        max-height: 60px;
                    }
                    .ietmspanleft{
                        font-size: 14px;
                        color: #b4b4b4;
                        position: absolute;
                        bottom: 0;
                        i{
                            margin-right:10px;
                            font-size: 14px;
                            color: #b4b4b4;
                            font-weight: 400;
                        }
                    }
                    .ietmspanright{
                        font-weight: 700;
                        height: 24px;
                        line-height: 20px;
                        padding: 0 5px;
                        font-size: 13px;
                        margin: 3px 2px;
                        display: inline-block;
                        text-align: center;
                        position: relative;
                        border: 2px solid rgba(255,178,45,.5);
                        background-color: rgba(255,178,45,.102);
                        border-radius: 12px;
                        color: #face15;
                    }
                    .itembox{
                        flex:2;
                        position: relative;
                    }
                    .imgbox{
                        // flex:1;
                        margin-right: 20px;
                        .imgs{
                            width:140px;
                            height: 80px;
                            display: block;
                            img{
                                width:140px;
                                height: 80px;
                                display: block;
                            }
                        }
                    }
                }
                .headeritem{
                    display: flex;
                }
                .rightTextwenan{
                    .itemBox{
                        padding-bottom:15px;
                        margin-top: 30px;
                        border-bottom:1px solid #ccc;
                        display: flex;
                        span{
                            display: inline-block;
                        }
                        .span1{
                            flex: 6;
                            text-align: left;
                            // width: 60%;
                            position: relative;

                            overflow: hidden;
                            text-overflow:ellipsis; 
                            white-space: nowrap;
                        }
                        .span2{
                            font-size: 14px;
                            flex: 1;
                            text-align:left;
                            color:#B5B5B5;
                            i{
                                color:#B5B5B5;
                            }
                        }
                        .span3{
                            font-size: 14px;
                            flex: 1;
                            text-align:right;
                            color:#B5B5B5;
                        }
                        &:last-child{
                            border:none;
                        }
                    }
                }
            }
            .headertitle{
                position: relative;
                flex:1;
                text-align: left;
                margin-left: 16px;
                font-size: 16px;
                &::before{
                    content: "";
                    height: 18px;
                    width: 6px;
                    border-radius: 3px;
                    background: #248FFF;
                    position: absolute;
                    left: -12px;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                    transform: translateY(-50%);
                }
            }
            .headerparticulars{
                cursor: pointer;
                text-align: right;
                margin-right:15px;
                color:#248FFF;
                position: relative;
                i{
                    font-weight: 600;
                }
            }
        }
    }
    // 品牌合作方
    .branding{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        // background: #fff;
        .item{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            width: 285px;
            height: 140px;
            -webkit-box-shadow: 0 15px 15px 0 rgba(0,0,0,.01);
            box-shadow: 0 15px 15px 0 rgba(0,0,0,.01);
            border-radius: 20px;
            background: #fff;
            cursor: pointer;
            margin-bottom:40px;
            &:hover{
                -webkit-box-shadow: 0 10px 33px 0 rgba(0,0,0,.14);
                box-shadow: 0 10px 33px 0 rgba(0,0,0,.14);
            }
            span{
                font-size: 36px;
                color: #333333;
            }
            .el-image{
                width: 60px;
                height: 60px;
                margin-right:20px;
                display: block;
            }
        }
    }


    // 轮播角色 
    .swiper-container {
        height: 399px;
    }
    .swiper-wrapper{
        .swiper-slide{
            .slideBox{
                padding: 40px;
                height: 100%;
                background: #fff;
                border-radius: 10px;
                box-shadow: 0 0 10px 0 #E3E3E3;
                >p{
                    color:#6D6D6D;
                    text-indent: 48px;
                    text-align: left;
                    height: 75%;
                }
                .bottombox{
                    display: flex;
                    .divleft{
                        flex: 1;
                        margin-right:10px;
                        >img{
                            display: block;
                            width: 80px;
                            border-radius: 50%;
                        }
                    }
                    .divright{
                        flex: 3;
                        p{
                            text-align: left;
                        }
                        .p1{
                            margin-top: 18px;
                        }
                    }
                }
            }
        }
    }
}
</style>
