<template>
    <div class="hosaleBox clearfix">
        <!-- 版心 -->
        <div class="hosale containernav">
            <!-- 标题 -->
            <div class="homeCItitle">
                <div class="titDiv">
                    <div class="tittext">TOP LIST
                        <div class="divleft"> </div>
                        <div class="divright"> </div>
                    </div>
                </div>
                <span>热门榜单</span>
            </div>
            <!-- 内容榜单 -->
            <div class="homehosalebase">
                <div class="homehosalelist" v-for="(item,i) in homedata.homehosalelistdata" :key="i">
                    <div class="homehosalelistheader">
                        <span class="spanone">{{item.header.title}}</span>
                        <span class="spantow">
                            更新时间：12月15日 15:00
                        </span>
                    </div>
                    <div class="homehosalelistTable">
                        <span class="spanone">{{item.assistant_header.title1}}</span>
                        <span class="spantow">{{item.assistant_header.title2}}</span>
                        <span class="spanthree">{{item.assistant_header.title3}}</span>
                    </div>
                    <ul class="list clearfix">
                        <li class="item" v-for="(item,i) in item.content" :key="i">
                            <div class="item_imgtitle">
                                <div class="imgBox" v-if="item.portraitimg">
                                    <img :src="item.portraitimg.imgurl" :class="item.portraitimg.radius == true?'imgradius':''">
                                </div>
                                <div class="title">{{item.paperwork}}</div>
                            </div>
                            <div :style="{'color' : item.moneyfield.color}" class="money">{{item.moneyfield.title}}</div>
                            <span :style="{'color' : item.quantityfield.color}" class="salesgross">
                                <!-- <img :src="item.icoimgurl"> -->
                                <i class="iconfont icon-shangjiantou"></i>
                                {{item.quantityfield.title | NumToUnitNum}}
                            </span>
                        </li>
                    </ul>
                    <div class="homehosalebottom">
                        <p>
                            <span>查看更多</span>
                            <i class="iconfont icon-youjiantou1"></i>
                        </p>
                    </div>
                </div>
            </div>
            <!-- 标题 -->
            <div class="homeCItitle">
                <div class="titDiv">
                    <div class="tittext">HOT TOOLS
                        <div class="divleft"> </div>
                        <div class="divright"> </div>
                    </div>
                </div>
                <span>热门工具</span>
            </div>
            <!-- 热门工具 -->
            <ul class="list2">
                <li class="item" v-for="(item,i) in homedata.instrument" :key="i">
                    <img :src="item.imgurl">
                    <p class="p1">{{item.title}}</p>
                </li>
            </ul>
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
            radio1 : 1,
        };
    },
    methods: {

    },
    mounted () {
        
    }
};
</script>

<style lang="less" scoped>
.hosaleBox{
    width:100%;
    background:#f5f7fa;
    .hosale{
        position: relative;
        // background: #161823;
        // 标题
        .homeCItitle{
            .titDiv{
                color: rgba(0,0,0,.1);
            }
            span{
                color: #333;
            }
        }
        // 内容榜单
        .homehosalebase{
            margin-left:-25px;
            display: grid;
            grid-template-columns: repeat(auto-fill,minmax(360px,360px));
            gap: 30px;
            -ms-flex-pack: distribute;
            justify-content: space-around;
            position: relative;
            box-sizing: border-box;
            .homehosalelist{
                width:385px;
                background-color: #fff;
                border-radius: 10px;
                overflow: hidden;
                color:#999999;
                box-shadow: 0 0 10px 0 #E3E3E3;
                >div,>ul{
                    width:100%;
                }
                .homehosalelistheader{
                    width: 90%;
                    border-bottom: 2px solid #ccc;
                    background: #fff;
                    height: 60px;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    margin: 0 auto;
                    box-sizing: border-box;
                    i{
                        font-size: 22px;
                        color: #face15;
                        margin-right: 9px;
                    }
                    .spanone{
                        font-size: 18px;
                        color: #666666;
                        -webkit-box-flex: 1;
                        -ms-flex: 1;
                        flex: 1;
                        text-align: left;
                        position: relative;
                        margin-left: 12px;
                        &::before{
                            content : "";
                            height:18px;
                            width: 6px;
                            border-radius: 3px;
                            background: #248FFF;
                            position:absolute;
                            left: -12px;
                            top:50%;
                            transform: translateY(-50%);
                        }
                    }
                    .spantow{
                        font-size: 14px;
                        font-weight: 400;
                        color: #666666;
                    }
                }
                .homehosalelistTable{
                    height: 50px;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    padding: 0 15px;
                    text-align: center;
                    .spanone{
                        text-align: left;
                        box-sizing: border-box;
                        width: 195px;
                        margin-left: 8px;
                    }
                    .spantow{
                        position: relative;
                        left: -10px;
                        width: 80px;
                    }
                    .spanthree{
                        width: 90px;
                        font-size: 14px;
                    }
                }
                .list{
                    box-sizing: border-box;
                    background: #fff;
                    .item{
                        height: 70px;
                        -webkit-box-pack: justify;
                        -ms-flex-pack: justify;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-align: center;
                        -ms-flex-align: center;
                        align-items: center;
                        padding: 0 15px;
                        .item_imgtitle{
                            display: flex;
                            width: 218px;
                        }
                        .imgBox{
                         
                            border-radius: 6px;
                            margin:0 5px;
                            img{
                                display: block;
                                width: 50px;
                                display: block;
                                margin:0px;
                                padding:0px;
                            }
                            .imgradius{
                                border-radius: 50%;
                            }
                        }
                        .title{
                            flex: 1;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            // white-space: nowrap;
                            -webkit-line-clamp:2;
                            height: 50px;
                            -webkit-box-orient: vertical;
                            display: -webkit-box;
                            overflow: hidden;
                            font-size: 14px;
                            font-weight: 400;
                            color: #333;
                            text-align: left;
                            margin: 0 15px 0 8px;
                            width: 135px;
                            line-height: 25px;
                        }
                        .money{
                            min-width: 44px!important;
                            // color: #ffb22d;
                            font-size: 15px;
                        }
                        .salesgross{
                            margin-left: 20px;
                            width: 90px;
                            font-size: 15px;
                            // color: #fe2270;
                            text-align: center;
                            i{
                                color:#FF2424;
                            }
                        }
                    }
                }
                .homehosalebottom{
                    width: 90%;
                    border-top:2px solid #ccc;
                    box-sizing: border-box;
                    background: #fff;
                    height: 50px;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    margin: 8px auto;
                    p{
                        text-align: center;
                        font-size: 15px;
                        color: #248FFF;
                        -webkit-box-flex: 1;
                        -ms-flex: 1;
                        flex: 1;
                        span{
                            margin-right: 10px;
                        }
                        i{
                            font-size: 16px;
                            font-weight: 600;
                        }
                    }
                }
            }
        }
        //热门工具
            // 底部跳转图标选项
    .list2 {
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(214px,214px));
        gap: 30px;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        margin: 0 auto;
        width: 1200px;
        .item {
            box-sizing: border-box;
            cursor: pointer;
            width: 214px;
            // height: 240px;
            border-radius: 10px;
            -webkit-transition: all .2s linear;
            transition: all .2s linear;
            text-align: center;
            position: relative;
            // padding: 130px 10px 15px;
            display: inline-block;
            top:0px;
            >img{
                display: block;
                width:120px;
                height: 120px;
                margin:0 auto;
            }
            .p1{
                font-size: 28px;
                font-weight: 700;
                color: #333;
                margin: 10px auto;
            }
        }
    }
    }
}
</style>
