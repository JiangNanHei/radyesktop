<template>

    <div class="box">
        <div class="dataanalyseBox">
            <img class="headerbg" src="@/assets/images/home/homeheaderbg.png">
            <div class="analyse containernav">
                <!-- 鼎音大数据平台 -->
                <p class="titlep"><span>鼎音大数据平台</span>让你运营更简单<span></span></p>
                <!-- 搜索选项 -->
                <div class="select_radio">
                    <el-radio-group v-model="radio1">
                        <el-radio-button label="直播">直播</el-radio-button>
                        <el-radio-button label="工具">工具</el-radio-button>
                        <el-radio-button label="服务">服务</el-radio-button>
                        <el-radio-button label="资源">资源</el-radio-button>
                        <el-radio-button label="合作">合作</el-radio-button>
                    </el-radio-group>
                </div>
                <!-- 搜索框 -->
                <div class="searchBox">
                    <input type="text" autocomplete="off" :placeholder="`${radio1}`" maxlength="30"
                        class="el-input__inner">
                    <el-button type="primary"><i class="iconfont icon-tubiao111"></i>搜索</el-button>
                </div>
                <ul class="list1">
                    <li class="item" v-for="(item,i) in homedata.mode_selection" :key="i">
                        <img :src="item.imgUrl">
                        <p class="p1">{{item.title}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 轮播图 -->
        <div class="carouselBox">
            <div class="carousel containernav">
                <div class="carouselleft">
                    <div class="carouseBox"><span>实时直播预览</span>
                    <img src="@/assets/images/home/home15.png">
                    </div>
                    <p class="p1">为您提供实时的直播预览</p>
                    <p class="p2">让您实时掌握直播流量与销量变化</p>
                </div>
                <div class="carouselright">
                    <el-carousel :interval="3000" type="card" height="160px">
                        <el-carousel-item v-for="(item,i) in homedata.mediumBox" :key="i">
                        <h3 class="medium">
                            <div class="mediumBox">
                                <div class="medium_box_left">
                                    <div class="userImg">
                                        <el-image :src="item.mediumBox_left.imgurl"></el-image>
                                        <div class="live_button_ing">
                                            <el-image :src="item.mediumBox_left.imggifurl"></el-image>
                                            <span>{{item.mediumBox_left.streamingstatus}}</span>
                                        </div>
                                    </div>
                                    <p>{{item.mediumBox_left.title}}</p>
                                </div>
                                <div class="medium_box_center">
                                    <div class="bordeBox">
                                        <p class="p1">{{item.mediumBox_center.title}}</p>
                                        <p class="p2">￥  {{item.mediumBox_center.saleroom | NumToUnitNum}}</p>
                                        <p class="p3">{{item.mediumBox_center.time}}</p>
                                    </div>
                                </div>
                                <div class="medium_box_right">
                                    <div><img :src="item.mediumBox_right.imgurl"></div>
                                    <span>{{item.mediumBox_right.title}}</span>
                                </div>
                            </div>

                        </h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        components: {

        },
        props: {
            homedata : Object
        },
        data() {
            return {
                radio1: '直播',
            };
        },
        methods: {
            getData() {
                const _this = this
                this.$http({
                    url: "/detailed_shop_videos.json",
                    method: "GET",
                    data : this.$http.adornParams({
                        
                    },true)
                }).then(({data}) => {
                    // console.log(data)
                    _this.live_table = data.live_table
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
        mounted () {
            // this.getData();
        }
    };
</script>

<style lang="less" scoped>
    .box {
        background: #f5f7fa;
        .dataanalyseBox {
            padding-top: 59px;
            padding-bottom: 40px;
            position: relative;
            .headerbg{
                width: 100%;
                max-width: 1920px;
                display: block;
                margin: 0 auto;
                // position: absolute;
                // left: 50%;
                // top:60px;
                // transform: translateX(-50%);
            }
            .analyse {
                position: absolute;
                left: 50%;
                top:50%;
                transform: translate(-50%,-50%);
                .titlep{
                    color:#fff;
                    font-size: 36px;
                    text-align: center;
                    span{
                        margin: 10px;
                    }
                }
                .select_radio {
                    margin-top: 10px;
                    position: relative;
                    left: 50%;
                    transform: translateX(-50%);
                    .el-radio-group{
                        position: relative;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    // 当前选中的
                    .is-active {
                        /deep/.el-radio-button__inner {
                            background: #409EFF !important;
                            font-weight: 700;
                        }
                    }

                    .el-radio-button {
                        margin-right: 15px;
                        line-height: 50px;

                        /deep/.el-radio-button__inner {
                            border: none;
                            font-size: 15px;
                            background: none;
                            color: #fff;
                            padding: 5px 15px;
                            border-radius: 20px;

                            i {
                                margin-right: 3px;
                                // vertical-align: middle;
                                font-weight: 400;
                            }
                        }
                    }
                }

                .searchBox {
                    position: relative;
                    left: 50%;
                    transform: translateX(-50%);
                    height: 50px;
                    margin-bottom: 15px;
                    display: inline-block;
                    overflow: hidden;
                    border-radius: 5px;
                    width: 640px;
                    height: 50px;
                    -webkit-transition: all .2s linear;
                    transition: all .2s linear;
                    border: 1px solid transparent;
                    box-sizing: border-box;
                    display: flex;
                    &:hover {
                        -webkit-box-shadow: 0 0 20px rgba(41, 151, 255, .6) !important;
                        box-shadow: 0 0 20px rgba(41, 151, 255, .6) !important;
                        border: 1px solid #409EFF;
                        background-color: #409EFF;
                        box-sizing: border-box;
                    }

                    .el-input__inner {
                        width: 515px;
                        height: 100%;
                        border-radius: 5px 0px 0px 5px;
                        border: none;
                        display: block;
                        float: left;
                    }

                    /deep/.el-button--small {
                        height: 50px;
                        height: 100%;
                        border-radius: 0px 5px 5px 0px;
                        padding: 0px 34px;
                        border: none;
                        flex:1;
                        &:hover {
                            background: #409EFF;
                            border: none;
                        }

                        i {
                            font-weight: 400;
                            margin-right: 3px;
                        }

                        span {
                            font-size: 16px;
                            font-weight: 700;
                        }
                    }
                }
                .list1 {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 280px));
                    gap: 10px;
                    -ms-flex-pack: distribute;
                    justify-content: space-around;
                    margin-bottom: 15px;
                    width: 100%;
                    position: absolute;
                    bottom: -250px;
                    .item {
                        box-sizing: border-box;
                        cursor: pointer;
                        width: 280px;
                        height: 170px;
                        border-radius: 10px;
                        -webkit-transition: all .2s linear;
                        transition: all .2s linear;
                        text-align: center;
                        position: relative;
                        padding: 40px 10px 15px;
                        display: inline-block;
                        background-color: #fff;
                        -webkit-box-shadow: 0 30px 30px 0 rgba(0,0,0,.06);
                        box-shadow: 0 30px 30px 0 rgba(0,0,0,.06);
                        top:0px;
                        &:hover {
                            -webkit-box-shadow: 0 15px 15px 0 rgba(0, 0, 0, .1);
                            box-shadow: 0 15px 15px 0 rgba(0, 0, 0, .1);
                            top:-10px;
                        }
                        img{
                            width: 45px;
                        }
                        i {
                            width:100%;
                            display: block;
                            font-size: 60px;
                            position: absolute;
                            top: 0;
                            left: 0;
                            padding: 20px 0;
                            color: #1d5eff;
                            z-index: 100;
                        }
                        .p1{
                            margin-top: 20px;
                            font-size: 22px;
                            font-weight: 700;
                            color: #333;
                        }
                    }
                }
            }
        }
        /deep/.carouselBox {
            width: 100%;
            padding-bottom: 30px;
            background: #f5f7fa;
            padding-top:100px;
            .carousel{
                display: flex;
                .carouselleft{
                    padding-top: 20px;
                    flex: 1;
                    .carouseBox{
                        margin-bottom: 30px;
                        span{
                            margin-right: 10px;
                            color:#333333;
                            vertical-align: top;
                        }
                    }
                    .p1{
                        margin-bottom: 10px;
                    }
                    .p2{

                    }
                }
                .carouselright{
                    flex: 2;
                    .el-carousel__container{
                        height: 144px;
                        .el-carousel__item{
                            opacity: 0.5;
                        }
                        .is-active{
                            opacity: 1;
                            width: 610px !important;
                            margin-left:-100px
                        }

                    }
                    .el-carousel__indicators {
                        li{
                            .el-carousel__button{
                                width: 93px;
                                height: 6px;
                                border-radius: 5px;
                                background: #CCCCCC;
                            }
                        }
                        .is-active{
                            .el-carousel__button{
                            background: #248FFF;
                            }
                        }
                    }
                }
            }
        }
    }


    // 给字体图片上色的 类
    .gradient_pink_text {
        background-image: -webkit-linear-gradient(45deg, #f44a8d, #e7a788);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    // 轮播图
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 160px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color:#fff;
}

.el-carousel__item:nth-child(2n+1) {
    background-color:#fff;
}
//
.medium{
    height: 100%;
    line-height: inherit !important; 
    .mediumBox{
        background: #fff;
        height: 100%;
        display: flex;
        text-align: center;
        .medium_box_left{
            position: relative;
            height: 100%;
            flex: 3;
            /deep/.userImg{
                width: 60px;
                height: 60px;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                cursor: pointer;
                margin-right: 6px;
                -ms-flex-negative: 0;
                flex-shrink: 0;
                position: absolute;
                left: 50%;
                top:40%;
                transform: translate(-50%,-50%);
                .el-image{
                    border-radius: 50%;
                }
                img{
                    object-fit: contain;
                    border-radius: 3px;
                    width: 60px;
                    height: 60px;
                    object-fit: contain;
                    border-radius: 3px;
                }
                .live_button_ing{
                    padding: 0 2px;
                    position: absolute;
                    bottom: -8px;
                    left: 0;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    -webkit-box-pack: justify;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                    color: #fff;
                    width: 60px;
                    height: 17px;
                    background: linear-gradient(-42deg,#ff1167,#f1278a);
                    border-radius: 14px;
                    padding-left: 2px;
                    font-size: 12px;
                    img{
                        width: 28px;
                        float: left;
                        position: relative;
                        top: -1px;
                        left: -5px;
                        
                    }
                    span{
                        position: absolute;
                        left: 20px;
                        font-size: 12px;
                        color: #fff;
                    }
                }
            }
            >p{
                width: 100%;
                font-size: 14px;
                font-weight: 600;
                position: absolute;
                bottom:15%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        }
        .medium_box_center{
            height: 100%;
            flex: 5;
            padding-top: 35px;
            color:black;
            .bordeBox{
                display: inline-block;
                width: 80%;
                border-left: 1px solid #ccc;
                border-right: 1px solid #ccc;
                .p1{
                    font-size: 14px;
                    font-weight: 400;
                }
                .p2{
                    font-size: 22px;
                    font-weight: 600;
                    margin:15px 0;
                }
                .p3{
                    font-size: 12px;
                    font-weight: 400;
                }
            }
        }
        .medium_box_right{
            height: 100%;
            flex: 3;
            div{
                width: 60px;
                margin: 0 auto;
                margin-bottom: 10px;
                margin-top: 50px;
                img{
                    width: 100%;
                    display: block;
                }
            }
            span{
                font-size: 14px;
                font-weight: 400;
            }
        }
    }
}
</style>