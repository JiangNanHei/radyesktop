<template>
    <div class="footer">
        <div class="footertop">
            <div class="footertop_content containernav clearfix">
                <div class="foterbottomcontentlink">
                    <p>功能介绍</p>
                    <a href="javascript:;">功能介绍</a>
                    <a href="javascript:;">版本区别</a>
                </div>
                <div class="foterbottomcontentlink">
                    <p>关于我们</p>
                    <a href="javascript:;">联系我们</a>
                    <a href="javascript:;">关于我们</a>
                    <a href="javascript:;">相关数据</a>
                    <a href="javascript:;">免责声明</a>
                </div>
                <div class="foterbottomcontentlink">
                    <p>更多产品</p>
                    <a href="javascript:;">鼎音大数据APP</a>
                </div>
                <div class="foterbottomcontentqrcode">
                    <div>
                        <img src="@/assets/images/home/homeqrcode.png">
                    </div>
                    <p>微信扫码前往小程序</p>
                </div>
                <div class="foterbottomcontentqrcode">
                    <div>
                        <img src="@/assets/images/home/homeqrcode.png">
                    </div>
                    <p>关注鼎音大数据公众号</p>
                </div>
            </div>
        </div>
        <div class="footerbottom clearfix">
            <!-- <div class="footerbottom_content">
                <span>抖音数据</span>
                <span>抖音直播数据</span>
                <span>历史价格查询</span>
                <span>产品100</span>
                <span>APP干货铺子</span>
                <span>IT桔子</span>
                <span>微思郭</span>
                <span>新媒体管家</span>
                <span>产品经理</span>
                <span>阿里巴巴国际站</span>
                <span>在线设计</span>
            </div> -->
            <div class="footerbottomtxt">
                <p>Copyright@2020-至今  鼎音大数据   ｜   深圳市鼎音网络科技有限公司</p>
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
            
        };
    },
    methods: {

    },
};
</script>

<style lang="less" scoped>
.footer{

    .footertop{
        overflow: hidden;
        width: 100%;
        height: 390px;
        text-align: center;
        position: relative;
        // background-image: url('~@/assets/img/footerbg.png');
        background: #2E323B;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
        padding: 80px 0;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        .footertop_content{
            display: flex;
            justify-content: space-between;
            text-align: left;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            .foterbottomlogo{
                img{
                    width: 170px;
                }
                p{
                    display: block;
                    margin: 13px 0 0;
                    font-size: 14px;
                    color: hsla(0,0%,100%,.4);
                    line-height: 30px;
                }
            }
            .foterbottomcontentlink{
                margin: 0 40px;
                p{
                    font-size: 18px;
                    color: #fff;
                    margin-bottom: 20px;
                }
                a{
                    font-size: 14px;
                    color: hsla(0,0%,100%,.4);
                    display: block;
                    line-height: 45px;
                }
            }
            .firdlink{
                width:20%;
                a{
                    display: inline-block!important;
                    width: 108px;
                }
            }
            .foterbottomcontentqrcode{
                p{
                    margin-top: 5px;
                    font-size: 14px;
                    color: #ccc;
                    margin-bottom: 20px;
                    text-align: center;
                }
                div{
                    width: 120px;
                    height: 120px;
                    background: #FFFFFF;
                    border-radius: 20px;
                    position: relative;
                    margin: 0 auto;
                    img{
                        width: 100px;
                        height: 100px;
                        display: block;
                        margin: 0;
                        position: absolute;
                        left: 50%;
                        top:50%;
                        transform: translate(-50%,-50%);
                    }
                }
            }

        }
    }
    .footerbottom{
        background: #2E323B;
        font-size: 13px;
        color: hsla(0,0%,100%,.2);
        line-height: 50px;
        font-weight: 700;
        // .footerbottom_content{
        //     border-top:1px solid #464A53;
        //     width: 1200px;
        //     margin: 0 auto;
        //     text-align: center;
        //     span{
        //         margin:0 10px;
        //         position: relative;
        //         color:#7E828F;
        //         &:first-child{
        //             &::after{
        //                 display: none;
        //             }
        //         }
        //         &::after{
        //             content: "";
        //             position: absolute;
        //             left:-10px;
        //             top:50%;
        //             transform: translateY(-50%);
        //             width:2px;
        //             height: 15px;
        //             background: #535760;
        //         }
        //     }
        // }
        .footerbottomtxt{
            text-align: center;
            position: relative;
            border-top:1px solid #666666;
        }

    }
}
</style>
