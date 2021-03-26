<template>
    <div class="vipBox">
        <div class="vippage">
            
        </div>
        <div class="pay_warp">
            <div class="pay_card" v-for="(item,i) in payCarddata" :key="i" >
                <div class="pay_card_top">
                    <p class="pone">
                        <i class="iconfont icon-huangguan"></i>
                        <span>{{item.header.title}}</span>
                    </p>
                    <p class="ptow">{{item.header.title2}}</p>
                    <p class="pthree">
                        ￥<span>{{item.header.money}}</span>/月
                    </p>
                    <p class="pfour">{{item.header.title3}}</p>
                    <el-button class="pay_card_top_but" type="primary" @click="paybut(item)">开通会员</el-button>
                </div>
                <div class="pay_card_content" v-for="(item,j) in item.content" :key="j">
                    <ul class="list" v-for="(item,k) in item" :key="k">
                        <li class="item">
                            <span>{{item.title}}</span>
                            <p v-for="(item,m) in item.titletext" :key="'titletext'+m" class="numberset">
                                可查看直播带货榜前
                                <span>{{item}}</span>
                                名
                            </p>
                            <p v-for="(item,b) in item.pjudge" :key="b">
                                <i :class="{'mistakeico iconfont icon-cuowu1': item.whether == 0, 'correctico iconfont icon-weibiaoti14': item.whether == 1}"></i>
                                {{item.text}}
                            </p>
                            <p v-for="(item,p) in item.privilege" :key="'privilege'+p" class="privilegep">
                                {{item.title}}
                                :
                                <span>{{item.num}}</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 标题 -->
        <div class="homeCItitle">
            <div class="titDiv">
                <div class="tittext">TOPLIST
                    <div class="divleft"> </div>
                    <div class="divright"> </div>
                </div>
            </div>
            <span>常见问题</span>
        </div>
        <div class="problem">
            <div class="problemtitle">如何升级成为基础会员版和豪华会员版</div>
            <div class="listbox" v-for="(item,i) in listboxdata" :key="i">
                <p>{{item.title}}</p>
                <ol class="ollist">
                    <li class="item">{{item.item1}}</li>
                    <li class="item">{{item.item2}}</li>
                    <li class="item">{{item.item3}}</li>
                </ol>
            </div>
        </div>
        <topupentry ref="topupentry"></topupentry>
    </div>
</template>

<script>
import topupentry from './component/top_up_entry'
export default {
    components: {
        topupentry
    },
    props: {

    },
    data() {
        return {
            // listboxdata : [
            //     {
            //         title : '在会员中心页面直接升级',
            //         item1 : '在会员中心页面，在相关版本上点击“升级会员”按钮，弹出“支付弹窗”。',
            //         item2 : '在弹窗内选择好时长后，扫描二维码进行支付。',
            //         item3 : '支付完成后，即为升级完毕，续费同理。',
            //     },
            //     {
            //         title : '在某些页面底部，点击“升级会员”',
            //         item1 : '弹出“支付弹窗”。',
            //         item2 : '在弹窗内选择好时长后，扫描二维码进行支付。',
            //         item3 : '支付完成后，即为升级完毕。',
            //     },
            //     {
            //         title : '在筛选数据时，出现升级弹窗',
            //         item1 : '点击“去升级”按钮，弹出“支付弹窗”。',
            //         item2 : '在弹窗内选择好时长后，扫描二维码进行支付。',
            //         item3 : '支付完成后，即为升级完毕。',
            //     },
            // ],
            // payCarddata : [
            //     {
            //         header : {
            //             title : '基础会员',
            //             title2 : '适合内容创作和个人运营者',
            //             money : '499',
            //             title3 : '年付费更优惠'
            //         },
            //         content : [
            //             [
            //                 {
            //                     title : '直播数据',
            //                     titletext : [
            //                         100,500
            //                     ],
            //                     pjudge : [
            //                         {
            //                             whether : 1,
            //                             text : '实时流量详情总览数据'
            //                         },
            //                         {
            //                             whether : 0,
            //                             text : '直播间商品、观众、商品、数据分析'
            //                         },
            //                         {
            //                             whether : 0,
            //                             text : '达人直播分析'
            //                         },
            //                     ]
            //                 },
            //             ],
            //             [
            //                 {
            //                     title : '电商数据',
            //                     titletext : [
            //                         1500,100,100
            //                     ],
            //                     pjudge : [
            //                         {
            //                             whether : 0,
            //                             text : '视频带货电商分析'
            //                         },
            //                         {
            //                             whether : 1,
            //                             text : '部分达人电商分析'
            //                         },
            //                         {
            //                             whether : 0,
            //                             text : '直播观众与商品分析筛选'
            //                         },
            //                     ]
            //                 },
            //             ],
            //             [
            //                 {
            //                     title : '电商数据',
            //                     pjudge : [
            //                         {
            //                             whether : 0,
            //                             text : '抖音小店榜'
            //                         },
            //                     ]
            //                 },
            //             ],
            //             [
            //                 {
            //                     title : '电商数据',
            //                     titletext : [
            //                         1500,100,100
            //                     ],
            //                     pjudge : [
            //                         {
            //                             whether : 1,
            //                             text : '星图达人榜'
            //                         },
            //                         {
            //                             whether : 1,
            //                             text : '品牌排行榜'
            //                         },
            //                         {
            //                             whether : 0,
            //                             text : '直播带货榜'
            //                         },
            //                         {
            //                             whether : 0,
            //                             text : '直播带货达人榜'
            //                         },
            //                         {
            //                             whether : 0,
            //                             text : '音浪榜'
            //                         },
            //                         {
            //                             whether : 1,
            //                             text : '更多维度的部分数据导出'
            //                         },
            //                     ]
            //                 },
            //             ],
            //             [
            //                 {
            //                     title : '其他特权',
            //                     privilege : [
            //                         {
            //                             title : '主设备登录设备数',
            //                             num : 1
            //                         },
            //                         {
            //                             title : '子账号个数',
            //                             num : 0
            //                         },
            //                     ]
            //                 },
            //             ],
            //         ]
            //     },
            //     {
            //         header : {
            //             title : '豪华会员版',
            //             title2 : '适合多账号、资源对接、电商使用',
            //             money : '1399',
            //             title3 : '包年更加优惠哦'
            //         },
            //         content : [
            //             [
            //                 {
            //                     title : '直播数据',
            //                     titletext : [
            //                         100,500
            //                     ],
            //                     pjudge : [
            //                         {
            //                             whether : 1,
            //                             text : '实时流量详情总览数据'
            //                         },
            //                         {
            //                             whether : 0,
            //                             text : '直播间商品、观众、商品、数据分析'
            //                         },
            //                         {
            //                             whether : 0,
            //                             text : '达人直播分析'
            //                         },
            //                     ]
            //                 },
            //             ],
            //             [
            //                 {
            //                     title : '电商数据',
            //                     titletext : [
            //                         1500,100,100
            //                     ],
            //                     pjudge : [
            //                         {
            //                             whether : 0,
            //                             text : '视频带货电商分析'
            //                         },
            //                         {
            //                             whether : 1,
            //                             text : '部分达人电商分析'
            //                         },
            //                         {
            //                             whether : 0,
            //                             text : '直播观众与商品分析筛选'
            //                         },
            //                     ]
            //                 },
            //             ],
            //             [
            //                 {
            //                     title : '电商数据',
            //                     pjudge : [
            //                         {
            //                             whether : 0,
            //                             text : '抖音小店榜'
            //                         },
            //                     ]
            //                 },
            //             ],
            //             [
            //                 {
            //                     title : '电商数据',
            //                     titletext : [
            //                         1500,100,100
            //                     ],
            //                     pjudge : [
            //                         {
            //                             whether : 1,
            //                             text : '星图达人榜'
            //                         },
            //                         {
            //                             whether : 1,
            //                             text : '品牌排行榜'
            //                         },
            //                         {
            //                             whether : 0,
            //                             text : '直播带货榜'
            //                         },
            //                         {
            //                             whether : 0,
            //                             text : '直播带货达人榜'
            //                         },
            //                         {
            //                             whether : 0,
            //                             text : '音浪榜'
            //                         },
            //                         {
            //                             whether : 1,
            //                             text : '更多维度的部分数据导出'
            //                         },
            //                     ]
            //                 },
            //             ],
            //             [
            //                 {
            //                     title : '其他特权',
            //                     privilege : [
            //                         {
            //                             title : '主设备登录设备数',
            //                             num : 1
            //                         },
            //                         {
            //                             title : '子账号个数',
            //                             num : 0
            //                         },
            //                     ]
            //                 },
            //             ],
            //         ]
            //     },
            //     {
            //         header : {
            //             title : '超级会员版',
            //             title2 : '适用企业多账号管理，推动团队直播变现',
            //             money : '4799',
            //             title3 : '包年更加优惠哦'
            //         },
            //         content : [
            //             [
            //                 {
            //                     title : '直播数据',
            //                     titletext : [
            //                         100,500
            //                     ],
            //                     pjudge : [
            //                         {
            //                             whether : 1,
            //                             text : '实时流量详情总览数据'
            //                         },
            //                         {
            //                             whether : 0,
            //                             text : '直播间商品、观众、商品、数据分析'
            //                         },
            //                         {
            //                             whether : 0,
            //                             text : '达人直播分析'
            //                         },
            //                     ]
            //                 },
            //             ],
            //             [
            //                 {
            //                     title : '电商数据',
            //                     titletext : [
            //                         1500,100,100
            //                     ],
            //                     pjudge : [
            //                         {
            //                             whether : 0,
            //                             text : '视频带货电商分析'
            //                         },
            //                         {
            //                             whether : 1,
            //                             text : '部分达人电商分析'
            //                         },
            //                         {
            //                             whether : 0,
            //                             text : '直播观众与商品分析筛选'
            //                         },
            //                     ]
            //                 },
            //             ],
            //             [
            //                 {
            //                     title : '电商数据',
            //                     pjudge : [
            //                         {
            //                             whether : 0,
            //                             text : '抖音小店榜'
            //                         },
            //                     ]
            //                 },
            //             ],
            //             [
            //                 {
            //                     title : '电商数据',
            //                     titletext : [
            //                         1500,100,100
            //                     ],
            //                     pjudge : [
            //                         {
            //                             whether : 1,
            //                             text : '星图达人榜'
            //                         },
            //                         {
            //                             whether : 1,
            //                             text : '品牌排行榜'
            //                         },
            //                         {
            //                             whether : 0,
            //                             text : '直播带货榜'
            //                         },
            //                         {
            //                             whether : 0,
            //                             text : '直播带货达人榜'
            //                         },
            //                         {
            //                             whether : 0,
            //                             text : '音浪榜'
            //                         },
            //                         {
            //                             whether : 1,
            //                             text : '更多维度的部分数据导出'
            //                         },
            //                     ]
            //                 },
            //             ],
            //             [
            //                 {
            //                     title : '其他特权',
            //                     privilege : [
            //                         {
            //                             title : '主设备登录设备数',
            //                             num : 1
            //                         },
            //                         {
            //                             title : '子账号个数',
            //                             num : 0
            //                         },
            //                     ]
            //                 },
            //             ],
            //         ]
            //     },
            // ],
            //  常见问题
            
            listboxdata : [

            ],
            // vip信息
            payCarddata : [

            ],

        };
    },
    methods: {
        // 获取 vip会员信息
        member(){
            this.$http({
                url: "vip.json",
                method: "get",
            }).then(({
                data
            }) => {
                this.listboxdata = data.listboxdata;
                this.payCarddata = data.payCarddata;

            }).catch(err => {

            })
        },
        // 开通会员
        paybut(data){
            console.log(data.header.dataid)
            this.$refs.topupentry.dialogcharge = true;
            this.$refs.topupentry.classindex = data.header.dataid - 1;
        }
    },
    mounted () {
        this.member();
    }
};
</script>

<style lang="less" scoped>
.vipBox{
    .vippage{
        width: 100%;
        text-align: center;
        padding: 100px 0 0;
        height: 475px;
        background-image: url('~@/assets/images/my/viptopimg.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
        position: relative;
    }
    .pay_warp{
        display: flex;
        width: 1140px;
        margin: 0 auto;
        position: relative;
        margin-top:-150px;
        justify-content: space-between;
        .pay_card{
            position: relative;
            width: 350px;
            display: block;
            background-color: #222536;
            border-radius: 10px;
            overflow: hidden;
            -webkit-transition: all .2s linear;
            transition: all .2s linear;
                &:nth-child(1){
                    .pay_card_top{
                        background: linear-gradient(135deg, #EEEEEE 0%, #E9BF95 100%);
                    }
                }
                &:nth-child(2){
                    .pay_card_top{
                        background: linear-gradient(135deg, #FFE1E1 0%, #E29696 100%);
                    }
                }
                &:nth-child(3){
                    .pay_card_top{
                        background: linear-gradient(135deg, #FFF4D9 0%, #F9D680 100%);
                    }
                }
            .pay_card_top{
                width: 350px;
                height: 280px;
                display: block;
                padding: 30px 20px;
                color:#D17A25;
                text-align: center;
                .pone{
                    font-size: 28px;
                    span{
                        margin-left: 5px;
                    }
                    i{
                       font-size: 28px; 
                    }
                }
                .ptow{
                    font-size: 14px;
                    margin-top: 5px;
                }
                .pthree{
                    font-size: 30px;
                    margin-right: 5px;
                    span{
                        font-size: 60px;
                    }
                }
                .pfour{
                    
                }
                .pay_card_top_but{
                    border:none;
                    background: linear-gradient(135deg, #FCF8F1 0%, #FFEEDA 100%) !important;
                    border-radius: 27px;
                    width: 170px;
                    color:#D17A25;
                    font-size: 17px;
                    font-weight: 700;
                    height: 44px;
                    border-radius: 22px;
                    display: block;
                    margin: 10px auto;
                    border: none;
                    -webkit-transition: all .15s linear;
                    transition: all .15s linear;
                }
            }
            .pay_card_content{
                width: 350px;
                .list{
                    background: #1B487A;
                    padding: 20px 30px;
                    .item{
                        >span{
                            color:#999999;
                            font-size: 14px;
                            text-align: left;
                            display: block;
                            margin: 10px 0;
                        }
                        p{
                            color:#fff;
                            font-size: 14px;
                            line-height: 36px;
                        }
                        .privilegep{
                            span{
                                color:#FBAE46;
                            }
                        }
                        .numberset{
                            span{
                                color:#FBAE46;
                            }
                        }
                        .correctico{
                            text-align: center;
                            line-height: 16px;
                            width: 16px;
                            height: 16px;
                            font-size: 14px;
                            background: #25ed67;
                            border-radius: 50%;
                        }
                        .mistakeico{
                            text-align: center;
                            line-height: 16px;
                            width: 16px;
                            height: 16px;
                            font-size: 14px;
                            background: #FB4647;
                            border-radius: 50%;
                        }
                    }
                }
            }
        }
    }
    .homeCItitle {
        margin-top:60px;
    }
    .problem{
        width: 1140px;
        margin: 0 auto;
        .problemtitle{
            margin-bottom:40px;
            color:#fff;
            font-size: 18px;
        }
        .listbox{
            margin-bottom:40px;
            >p{
                color:#fff;
                font-size: 15;
                margin-bottom:20px;
            }
            .ollist{
                .item{
                    margin-bottom:20px;
                    font-size: 14px;
                    color:#CCCCCC;
                    list-style-type:decimal;
                    list-style-position:inside;
                }
            }
        }
    }
}
</style>
