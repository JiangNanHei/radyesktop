<template>
    <div class="fashion_box">
        <div class="search">
            <div class="search_box">
                <span class="search_span">搜索达人直播间</span>
                <el-input v-model="videotablsearch" placeholder="请输入关键词" suffix-icon="el-icon-search">
                </el-input>
                <div class="block">
                    <span class="demonstration">开播时间</span>
                    <el-date-picker v-model="value" type="daterange" align="right" unlink-panels range-separator="至"
                        start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions">
                    </el-date-picker>
                </div>
            </div>
        </div>

        <p class="advance_title">直播预告</p>
        <div class="live_advance">
            <el-carousel trigger="click" height="175px" indicator-position="none" arrow="always" :loop="false"
                :autoplay="false">
                <el-carousel-item v-for="(page, index) in pages" :key="index">
                    <div v-for="(item, index) in page" :key="index" class="page_wrapper">
                        <div class="page_content">
                            <div class="page_content_top">
                                <div class="img_box">
                                    <img :src="item.imgurl">
                                </div>
                                <div class="title_right">
                                    <p class="p1">{{item.name}}</p>
                                    <p class="p2">{{item.livetitle}}</p>
                                </div>
                            </div>
                            <div class="page_content_bottom">
                                <span class="span1">直播时间</span>
                                <span class="span2">{{item.time}}</span>
                            </div>
                            <p class="page_content_p">
                                <span @click="openhistorylive_advance.call(this,item)">查看历史直播{{item.history}}场</span>
                            </p>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <p class="advance_title">直播中/近期热门直播</p>

        <!-- 近期直播 (主要内容) -->
        <div class="live_message">
            <div class="message_box" v-for="(item,i) in live_data" :key="i">
                <p class="message_box_title">
                    <span class="span1">{{item.time}}</span>
                    <span class="span2">{{item.week}}</span>
                </p>
                <ul class="message_box_list clearfix">
                    <li class="message_box_item" v-for="(item,i) in item.data" :key="i">
                        <div class="page_content">
                            <div class="page_content_top">
                                <div class="img_box">
                                    <img :src="item.imgurl">
                                    <div class="live_button_ing">
                                        <el-image :src="item.imggifurl"></el-image>
                                        <span>{{item.streamingstatus}}</span>
                                    </div>
                                </div>
                                <div class="title_right">
                                    <p class="p1">{{item.name}}</p>
                                    <p class="p2">{{item.livetitle}}</p>
                                </div>
                                <div class="particulars_right">
                                    <p>
                                        <i class="iconfont icon-1 iconleft"></i>
                                        <span>详情大屏</span>
                                        <i class="iconfont icon-youjiantou1 iconright"></i>
                                    </p>
                                </div>
                            </div>
                            <div class="page_content_bottom">
                                <div class="page_content_bottom_left">
                                    <p class="p1">{{item.watchingpeople | NumToUnitNum}}</p>
                                    <p class="p2">观看人次</p>
                                </div>
                                <div class="page_content_bottom_right">
                                    <p class="p1">{{item.saleroom | NumToUnitNum}}</p>
                                    <p class="p2">销售额</p>
                                </div>
                            </div>
                            <p class="page_content_p">
                                <span @click="openhistorylive.call(this,item)">
                                    查看历史直播{{item.history}}场
                                </span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <fashiontableone :clickdata="clickdata" ref="fashiontableone"></fashiontableone>
    </div>
</template>

<script>
import fashiontableone from './component/fashion_table_one'
    export default {
        components: {
            fashiontableone,
        },
        props: {

        },
        data() {
            return {
                videotablsearch: '',
                value:'',
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                // 直播预告 数据
                carouselData: [
                    // {
                    //     imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //     name : 'ONE',
                    //     livetitle:'直播间不见不散',
                    //     time : '2021-01-03 19:00',
                    //     history:'10',
                    // },
                    // {
                    //     imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //     name : 'TOW',
                    //     livetitle:'直播间不见不散',
                    //     time : '2021-01-03 19:00',
                    //     history:'20',
                    // },
                    // {
                    //     imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //     name : 'THREE',
                    //     livetitle:'直播间不见不散',
                    //     time : '2021-01-03 19:00',
                    //     history:'30',
                    // },
                    // {
                    //     imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //     name : 'FOUR',
                    //     livetitle:'直播间不见不散',
                    //     time : '2021-01-03 19:00',
                    //     history:'40',
                    // },
                    // {
                    //     imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //     name : 'FIVE',
                    //     livetitle:'直播间不见不散',
                    //     time : '2021-01-03 19:00',
                    //     history:'50',
                    // },
                    // {
                    //     imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //     name : '一个美少女',
                    //     livetitle:'直播间不见不散',
                    //     time : '2021-01-03 19:00',
                    //     history:'39',
                    // },
                    // {
                    //     imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //     name : '一个美少女',
                    //     livetitle:'直播间不见不散',
                    //     time : '2021-01-03 19:00',
                    //     history:'39',
                    // },
                ],

                // 近期直播数据
                live_data : [
                    // {
                    //     time : '2021/01/01',
                    //     week : '周五',
                    //     data: [
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '第一个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '第二个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '第三个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '一个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '一个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '一个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '一个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '一个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '一个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '一个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //     ],
                    // },
                    // {
                    //     time : '2021/01/02',
                    //     week : '周六',
                    //     data: [
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '一个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '一个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '一个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '一个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '一个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '一个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '一个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //     ],
                    // },
                    // {
                    //     time : '2021/01/03',
                    //     week : '周日',
                    //     data: [
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '一个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '一个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '一个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '一个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '一个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '一个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //         {
                    //             imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    //             imggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    //             streamingstatus : '直播中',
                    //             name : '一个美少女',
                    //             livetitle:'直播间不见不散',
                    //             time : '2021-01-03 19:00',
                    //             history:'39',
                    //         },
                    //     ],
                    // },
                ],

                // 传给弹窗的 对象
                clickdata : {
                    imgurl : '',
                    name : '',
                    livetitle : '',
                    history : '',
                }
            };
        },
        methods: {
            openhistorylive(item){
                this.$refs.fashiontableone.dialogTableVisible = true;
                this.clickdata.imgurl = item.imgurl;
                this.clickdata.name = item.name;
                this.clickdata.livetitle = item.livetitle;
                this.clickdata.history = item.history;
            },
            openhistorylive_advance(item){
                this.$refs.fashiontableone.dialogTableVisible = true;
                this.clickdata.imgurl = item.imgurl;
                this.clickdata.name = item.name;
                this.clickdata.livetitle = item.livetitle;
                this.clickdata.history = item.history;
            },
            // 获取数据 
            getData(){
                this.$http({
                    url: "/live/hot_live/index.json",
                    method: "get",
                }).then(({
                    data
                }) => {

                    this.carouselData = data.carouselData;
                    this.live_data = data.live_data;

                }).catch(err => {

                })
            }
        },
        computed: {
            pages() {
                const pages = []
                this.carouselData.forEach((item, index) => {
                    const page = Math.floor(index / 4)
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            },
        },
        mounted () {
            this.getData();
        }
    };
</script>

<style lang="less" scoped>
    .fashion_box {
        margin-top: 20px;
        .search{
            width: 100%;
            /deep/.search_box {
                padding: 0 20px;
                display: inline-block;
                position: relative;
                font-size: 13px;
                height: 72px;
                background: #051C36;
                border-radius: 6px;
                line-height: 72px;
                .search_span {
                    color: #fff;
                    margin-right: 10px;
                }

                .el-input {
                    width: auto;
                    margin-right: 20px;

                    input {
                        width: 220px;
                        height: 32px;
                        border-radius: 25px;
                        background: #0D2F55;
                        color: #999;
                        border: 1px solid #999;
                    }

                    span {
                        font-size: 16px;
                    }
                }
                .block {
                    display: inline-block;

                    .demonstration {
                        color: #fff;
                        margin-right: 10px;
                    }
                    .el-date-editor{
                        background: #0D2F55;
                        /deep/input{
                            background: #0D2F55;
                        }
                    }
                }
            }
        }

        .advance_title{
            color:#fff;
            font-size: 16px;
            margin-bottom:30px;
            margin-top: 30px;
        }
        .live_advance {
            transition: all 0.3s linear;
            overflow: hidden;
            margin: 10px 0;
            width: 100%;

            .page_wrapper {
                width: 24%;
                background: #123D6D;
                margin-right: 1%;
                height: 100%;
                vertical-align: top;
                overflow: hidden;
                display: inline-block;
                border-radius: 10px;
                padding: 20px;
                height: 175px;
                position: relative;
                &::before {
                    font-family: 'iconfont';
                    content: "\e609";
                    font-size: 68px;
                    transform: rotate(3deg);
                    color:#fff;
                    opacity: 0.1;
                    position: absolute;
                    right: -5px;
                    bottom: -11px;
                    z-index: 9;
                    z-index: 9;
                }

            }
        }
        // 近期直播 (主要内容)
        .live_message{
            .message_box{
                .message_box_title{
                    font-size: 14px;
                    color:rgba(204, 204, 204, 1);
                    margin-bottom:20px;
                    .span1{
                        margin-right: 10px;
                    }
                }
                .message_box_list{
                    width: 100%;
                    .message_box_item{
                        height: 175px;
                        border-radius: 6px;
                        background: #123D6D;
                        float: left;
                        width: 24%;
                        margin-bottom: 1%;
                        margin-right: 1%;
                        padding: 20px;
                        position: relative;
                        overflow: hidden;
                        &::before {
                            font-family: 'iconfont';
                            content: "\e609";
                            font-size: 68px;
                            transform: rotate(3deg);
                            color:#fff;
                            opacity: 0.1;
                            position: absolute;
                            right: -5px;
                            bottom: -11px;
                            z-index: 9;
                            z-index: 9;
                        }
                        &:nth-child(4n){
                            margin-right: 0px;
                        }
                        .title_right{
                            margin-left: 20px;
                        }
                        .page_content_bottom{
                            display: flex;
                            text-align: center;
                            line-height: 25px;
                            color:#fff;
                            background: none;
                            .page_content_bottom_left{
                                flex: 1;
                                .p1{
                                    font-size: 20px;
                                }
                                .p2{
                                    color:#ccc;
                                    font-size: 12px;
                                }
                            }
                            .page_content_bottom_right{
                                flex: 1;
                                .p1{
                                    font-size: 20px;
                                }
                                .p2{
                                    color:#ccc;
                                    font-size: 12px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // 多次使用
    /deep/.page_content {
        .page_content_top{
            display: flex;
            .img_box{
                flex: 1;
                position: relative;
                img{
                    border-radius: 50%;
                    display: block;
                    width: 50px;
                    height: 50px;
                }
                .live_button_ing{
                    padding: 0 2px;
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
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
                    width: 50px;
                    height: 17px;
                    background: linear-gradient(-42deg,#ff1167,#f1278a);
                    padding-left: 2px;
                    font-size: 12px;
                    img{
                        height: 100%;
                        width: 18px;
                        float: left;
                        position: relative;
                        top: 1px;
                        left: -5px;
                        
                    }
                    span{
                        white-space: nowrap;
                        font-size: 12px;
                        color: #fff;
                    }
                }
            }
            .title_right{
                text-align: left;
                flex: 3;
                .p1{
                    font-size: 14px;
                    color:#fff;
                    margin-top: 3px;
                    margin-bottom: 5px;
                }
                .p2{
                    font-size: 13px;
                    color:#ccc;
                }
            }
            .particulars_right{
                // line-height: 50px;
                font-size: 13px;
                color:#248FFF;
                p{
                    cursor: pointer;
                    position: relative;
                    top: 50%;
                    transform: translateY(-50%);
                    .iconleft{
                        font-size: 13px;
                    }
                    span{
                        margin:0 5px;
                    }
                    .iconright{
                        font-size: 13px;
                    }
                }

            }
        }
        .page_content_bottom{
            color:#FBAE46;
            text-align: center;
            line-height: 50px;
            width: 100%;
            background: rgba(251, 174, 70, 0.2);
            border-radius: 6px;
            // opacity: 0.23;
            margin: 0 auto;
            margin-bottom:10px;
            margin-top: 20px;
            .span1{
                font-size: 14px;
                margin-right: 40px;
            }
        }
        .page_content_p{
            color:#248FFF;
            font-size: 12px;
            text-align: center;
            span{
                cursor: pointer;
            }
        }
    }
</style>
<style lang="less" scoped>
    .el-picker-panel__body-wrapper{
        background: #39404F;
   
    }
    .el-picker-panel__sidebar{
        background: #39404F;
    }
    .el-picker-panel__icon-btn{
        color:#fff;
    }
    .date-style{
        background: #39404F;
        border: none;
    }
    .el-date-table td.disabled div{
        background: none;
    }
    .available{
        background: #20242E;
    }
    .el-date-table td.in-range div, .el-date-table td.in-range div:hover, .el-date-table.is-week-mode .el-date-table__row.current div, .el-date-table.is-week-mode .el-date-table__row:hover div{
        background: #20242E;
    }
    .el-date-table td.end-date span, .el-date-table td.start-date span{
        background:#FC2470;
        color: #48162D;
    }
    .popper__arrow{
        display: none!important;
    }
</style>