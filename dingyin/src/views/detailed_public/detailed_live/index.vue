<template>
    <div class="live_detailed">
        <div class="live_detailed_left">
            <div class="left-wrapper">
                <div class="d-left">
                    <div class="grid-content bg-purple">
                        <!-- 基本介绍||个人信息 -->
                        <div class="d-left-top d-bg-purple">
                            <div class="d-top-title">
                                <span>直播信息</span>
                                <img src="@/assets/images/detailed_page_img/share.png">
                            </div>
                            <div class="d-top-content">
                                <div class="d-top-content-show">
                                    <div class="d-top-conent-img">
                                        <img
                                            src="https://p6-dy-ipv6.byteimg.com/aweme/1080x1080/313eb0007f3342c05bded.jpeg?from=4010531038">
                                    </div>
                                    <div class="d-top-content-desc">
                                        <p class="title_p">阿迪达斯品牌狂欢日</p>
                                        <p class="p1">直播时长 : <span>1小时40分钟</span></p>
                                        <p class="p2">开播时间 : <span>2020.12.26 14:56</span></p>
                                        <p class="p3">下播时间 : <span>2020.12.26 16:56</span></p>
                                        <p class="p4">带货口碑 : <span>4.57</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 数据展示 -->
                        <div class="d-left-bottom d-bg-purple">
                            <div class="d-left-bottom-basicdata" v-for="(item,i) in popularity_data" :key="i">
                                <div class="d-bottom-basicdata-title">
                                    <div></div>
                                    <span>{{item.title}}</span>
                                </div>
                                <div class="d-bottom-basicdata-content">
                                    <div class="d-basicdata-content-item" v-for="(item,i) in item.data" :key="i">
                                        <p>{{item.figure}}</p>
                                        <span>{{item.text}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 主播信息 -->
                        <div class="mymessage">
                            <p class="title_p">主播信息</p>
                            <div class="content">
                                <div class="content_left">
                                    <img
                                        src="https://p6-dy-ipv6.byteimg.com/aweme/1080x1080/313eb0007f3342c05bded.jpeg?from=4010531038">
                                </div>
                                <div class="content_right">
                                    <p class="content_right_p1">海宁女装工厂</p>
                                    <p class="content_right_p2">抖音号：<span>Haining998888</span></p>
                                </div>
                            </div>
                            <div class="d-bottom-basicdata-content">
                                <div class="d-basicdata-content-item">
                                    <p>2154.8W</p>
                                    <span>粉丝数</span>
                                </div>
                                <div class="d-basicdata-content-item">
                                    <p>1324.2W</p>
                                    <span>点赞数</span>
                                </div>
                                <div class="d-basicdata-content-item">
                                    <p>4324W</p>
                                    <span>共收入音浪</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="live_detailed_right">
            <div class="live_detailed_right_top">
                <ul class="list clearfix">
                    <li class="item">
                        <p class="title_p">在线人数</p>
                        <p class="text_p">
                            <span class="span_name">累计观看人数</span>
                            <span class="span_data">214.4W</span>

                            <span class="span_name">人气峰值</span>
                            <span class="span_data">4.8W</span>

                            <span class="span_name">峰值时间</span>
                            <span class="span_data">16:00</span>

                        </p>
                        <div class="echarts_box echarts_box_one">

                        </div>
                    </li>
                    <li class="item">
                        <p class="title_p">在线人数</p>
                        <p class="text_p">
                            <span class="span_name">累计观看人数</span>
                            <span class="span_data">214.4W</span>

                            <span class="span_name">人气峰值</span>
                            <span class="span_data">4.8W</span>

                            <span class="span_name">峰值时间</span>
                            <span class="span_data">16:00</span>

                        </p>
                        <div class="echarts_box echarts_box_tow">

                        </div>
                    </li>
                    <li class="item">
                        <p class="title_p">在线人数</p>
                        <p class="text_p">
                            <span class="span_name">累计观看人数</span>
                            <span class="span_data">214.4W</span>

                            <span class="span_name">人气峰值</span>
                            <span class="span_data">4.8W</span>

                            <span class="span_name">峰值时间</span>
                            <span class="span_data">16:00</span>

                        </p>
                        <div class="echarts_box echarts_box_three">

                        </div>
                    </li>
                    <li class="item">
                        <p class="title_p">在线人数</p>
                        <p class="text_p">
                            <span class="span_name">累计观看人数</span>
                            <span class="span_data">214.4W</span>

                            <span class="span_name">人气峰值</span>
                            <span class="span_data">4.8W</span>

                            <span class="span_name">峰值时间</span>
                            <span class="span_data">16:00</span>

                        </p>
                        <div class="echarts_box echarts_box_four">

                        </div>
                    </li>
                    <li class="item">
                        <p class="title_p">观众画像</p>
                        <p class="text_p">
                            <span class="span_name">累计观看人数</span>
                            <span class="span_data">214.4W</span>

                            <span class="span_name">人气峰值</span>
                            <span class="span_data">4.8W</span>

                            <span class="span_name">峰值时间</span>
                            <span class="span_data">16:00</span>

                        </p>
                        <div class="echarts_box echarts_box_five">

                        </div>
                    </li>
                    <li class="item">
                        <p class="title_p">观众画像</p>
                        <div class="age_distribution">
                            <div class="age_distribution_left">年龄分布</div>
                            <div class="age_distribution_right">
                                <div>&lt;18<span>9.97%</span></div>
                                <div>18-23<span>10.57%</span></div>
                                <div>24-30<span>33.39%</span></div>
                                <div>31-40<span>36.09%</span></div>
                                <div>41-50<span>7.69%</span></div>
                                <div>&gt;50<span>2.54%</span></div>
                            </div>
                        </div>
                        <p class="subheading_p">观众来源</p>
                        <div class="echarts_box echarts_box_six">

                        </div>
                    </li>
                </ul>
            </div>
            <div class="live_detailed_right_bottom">
                <toptable></toptable>
                <bottomtable></bottomtable>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        live_detailed_echartsLine
    } from '@/assets/js/echarts_self.js'
    import toptable from './components/live_detailed-toptable.vue'
    import bottomtable from './components/live_detailed-bottomtable.vue'
    export default {
        components: {
            toptable,
            bottomtable,
        },
        props: {

        },
        data() {
            return {
                // 人气数据
                popularity_data: [{
                        title: '基本数据',
                        data: [{
                                figure: '277.8W',
                                text: '累计观看人数',
                            },
                            {
                                figure: '7.8W',
                                text: '人气峰值',
                            },
                            {
                                figure: '4.8W',
                                text: '平均在线',
                            },
                            {
                                figure: '6.8W',
                                text: '本场音浪',
                            },
                            {
                                figure: '448.8W',
                                text: '累计点赞',
                            },
                            {
                                figure: '7.8W',
                                text: '涨粉人数',
                            },
                            {
                                figure: '2.69W',
                                text: '转粉率',
                            },
                            {
                                figure: '1.6W',
                                text: '送礼人数',
                            },
                        ]
                    },
                    {
                        title: '带货数据',
                        data: [{
                                figure: '777.8W',
                                text: '本场销售额',
                            },
                            {
                                figure: '4.8W',
                                text: '销量',
                            },
                            {
                                figure: '178.2W',
                                text: '客单价',
                            },
                            {
                                figure: '21W',
                                text: '上架商品',
                            },
                            {
                                figure: '8.8W',
                                text: '正在购买',
                            },
                            {
                                figure: '2.03W',
                                text: '带货转化率',
                            },
                        ]
                    }

                ],
                chart_data1: {
                    time: ['14:56', '15:07', '15:16', '15:25', '15:34', '15:44', '15:56', '16:04', '16:24', '16:40'],
                    series: [
                        {
                            type: 'line',
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: 'rgba(36, 143, 255, 0.2)' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: 'rgba(36, 143, 255, 0)' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            },
                            smooth: true,
                            data: [15000, 35000, 10000, 37000, 17000, 30000, 50000, 40000, 30000, 40000],
                            symbolSize: 0, //折线点的大小
                        },
                    ]
                },
                chart_data2: {
                    time: ['14:56', '15:07', '15:16', '15:25', '15:34', '15:44', '15:56', '16:04', '16:24', '16:40'],
                    series: [
                        {
                            type: 'line',
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: 'rgba(36, 143, 255, 0.2)' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: 'rgba(36, 143, 255, 0)' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            },
                            smooth: true,
                            data: [15000, 35000, 10000, 37000, 17000, 30000, 50000, 40000, 30000, 40000],
                            symbolSize: 0, //折线点的大小
                        },
                    ]
                },
                chart_data3: {
                    time: ['14:56', '15:07', '15:16', '15:25', '15:34', '15:44', '15:56', '16:04', '16:24', '16:40'],
                     series: [
                        {
                            type: 'line',
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: 'rgba(36, 143, 255, 0.2)' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: 'rgba(36, 143, 255, 0)' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            },
                            smooth: true,
                            data: [15000, 35000, 10000, 37000, 17000, 30000, 50000, 40000, 30000, 40000],
                            symbolSize: 0, //折线点的大小
                        },
                    ]
                },
                // barrage : {
                //     tooltip: {
                //         show: true
                //     },
                //     series: [{
                //         name: '弹幕分析', //数据提示窗标题
                //         type: 'wordCloud',
                //         shape: 'circle',
                //         // sizeRange: [6, 66], //画布范围，如果设置太大会出现少词（溢出屏幕）
                //         rotationRange: [-45, 90], //数据翻转范围
                //         // textPadding: 0,

                //         // left: 'center',
                //         // top: 'center',
                //         width: '80%',
                //         height: '60%',
                //         right: null,
                //         bottom: null,
                //         autoSize: {
                //             enable: true,
                //             minSize: 6
                //         },
                //         textStyle: {
                //             normal: {
                //                 color: function () {
                //                     return 'rgb(' + [
                //                         Math.round(Math.random() * 160),
                //                         Math.round(Math.random() * 160),
                //                         Math.round(Math.random() * 160)
                //                     ].join(',') + ')';
                //                 }
                //             },
                //             emphasis: {
                //                 shadowBlur: 10,
                //                 shadowColor: '#333'
                //             }
                //         },
                //         data: [
                //             {
                //                 name: "裤子",
                //                 value: 15000
                //             },
                //             {
                //                 name: "羽绒服",
                //                 value: 14000
                //             },
                //             {
                //                 name: "鞋子",
                //                 value: 13000
                //             },
                //             {
                //                 name: "已下单",
                //                 value: 12000
                //             },
                //             {
                //                 name: "身高",
                //                 value: 11000
                //             },
                //             {
                //                 name: "大码",
                //                 value: 10000
                //             },
                //             {
                //                 name: "大码",
                //                 value: 9000
                //             },
                //             {
                //                 name: "短袖",
                //                 value: 8000
                //             },
                //             {
                //                 name: "有吗",
                //                 value: 7000
                //             },
                //             {
                //                 name: "短袖",
                //                 value: 6000
                //             },
                //             {
                //                 name: "男士",
                //                 value: 5000
                //             },
                //             {
                //                 name: "女士",
                //                 value: 4000
                //             },
                //         ],
                //     }]
                // },
                barrage : {
                    tooltip: {
                        show: true
                    },
                    series: [{
                        name: '弹幕分析', //数据提示窗标题
                        type: 'wordCloud',
                        shape: 'circle',
                        sizeRange: [12, 40], //画布范围，如果设置太大会出现少词（溢出屏幕）
                        rotationRange: [0, 0], //数据翻转范围
                        // textPadding: 0,
                        gridSize:30, //字体分布的密集度

                        left: 'center',
                        top: 'center',
                        width: '100%',
                        height: '80%',
                        right: null,
                        bottom: null,
                        autoSize: {
                            enable: true,
                            minSize: 6
                        },
                        textStyle: {
                            normal: {
                                color : function(){
                                    return 'rgb(8, 105, 207)'
                                }
                            },
                            emphasis: {
                                shadowBlur: 10,
                                shadowColor: 'rgba(36, 143, 255)'
                            }
                        },
                        data: [
                            {
                                name: "裤子",
                                value: 15000
                            },
                            {
                                name: "羽绒服",
                                value: 14000
                            },
                            {
                                name: "鞋子",
                                value: 13000
                            },
                            {
                                name: "已下单",
                                value: 12000
                            },
                            {
                                name: "身高",
                                value: 11000
                            },
                            {
                                name: "大码",
                                value: 10000
                            },
                            {
                                name: "大码",
                                value: 9000
                            },
                            {
                                name: "短袖",
                                value: 8000
                            },
                            {
                                name: "有吗",
                                value: 7000
                            },
                            {
                                name: "短袖",
                                value: 6000
                            },
                            {
                                name: "男士",
                                value: 5000
                            },
                            {
                                name: "女士",
                                value: 4000
                            },
                        ],
                    }]
                },
                option : {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        // top:'20%',
                        // bottom:'0%',
                        right: '0%',
                        containLabel: true
                    },
                    xAxis: {
                        show:false, //不显示x轴相关信息
                    },
                    yAxis: [
                        {
                            type: 'category',
                            data: ['粉丝', '视频推荐', '同城', '其他'],
                            axisTick:{show:false}, //不显示刻度线
                            axisLabel:{
                                color:"#fff"
                            },
                            axisTick:{
                                show:false
                            },
                            axisLine:{
                                show:false
                            },
                            inverse:true
                            
                        },
                        {
                            type: 'category',
                            data: ['5.75%', '21.75%', '0.00%', '75.1%'],
                            axisTick:{show:false}, //不显示刻度线
                            axisLabel:{
                                color:"#fff"
                            },
                            axisTick:{
                                show:false
                            },
                            axisLine:{
                                show:false
                            },
                            inverse:true
                        },
                        
                    ],
                    series: [
                        {
                            name: '框',
                            yAxisIndex:1,
                            type: 'bar',
                            data: [100, 100, 100, 100, 100],
                            // 柱子之间的间距
                            barCategoryGap:5,
                            // 柱子之间的宽度
                            barWidth:10,
                            itemStyle:{
                                color:"rgb(2, 23, 47)", //填充色
                                borderColor:"#00f",
                                borderWidth:0,
                                barBorderRadius:15
                            }
                        },
                        {
                            name: '条',
                            yAxisIndex:0,
                            type: 'bar',
                            data: [5.75, 21.75,0.00, 75.1],
                            // 修改第一条柱子的圆角
                            itemStyle:{
                                normal:{
                                    barBorderRadius:20,
                                    color:function(params){
                                        //params 传递过来的柱子对象
                                        // dataIndex 是当前柱子的索引
                                        // var num = colors.length;
                                        // return colors[params.dataIndex%num]


                                        return 'rgb(36, 143, 255)'
                                    }
                                },
                                // color 可以修改柱子的颜色
                                // color:"orange"
                            },
                            // 柱子之间的间距
                            barCategoryGap:5,
                            // 柱子之间的宽度
                            barWidth:10,
                            // 显示柱子内的文字
                            label:{
                                // show:true,
                                position:"inside",
                                formatter:"{c}%"    
                                // {c} 会自动解析为data中的数据
                            }
                        },

                    ]
                },





            };
        },
        methods: {

        },
        mounted() {
            live_detailed_echartsLine(document.getElementsByClassName('echarts_box_one')[0], this.chart_data1.time, this.chart_data1.series)
            live_detailed_echartsLine(document.getElementsByClassName('echarts_box_tow')[0], this.chart_data2.time, this.chart_data2.series)
            live_detailed_echartsLine(document.getElementsByClassName('echarts_box_three')[0], this.chart_data3.time,this.chart_data3.series)
            this.$echarts.init(document.getElementsByClassName('echarts_box_four')[0]).setOption(this.barrage)
            this.$echarts.init(document.getElementsByClassName('echarts_box_six')[0]).setOption(this.option)
        }
    };
</script>

<style lang="less" scoped>
    .live_detailed {
        width: 100%;
        display: flex;

        .live_detailed_left {
            margin-right: 20px;
            width: 360px;

            .left-wrapper {
                color: #fff;
                position: relative;

                .d-bg-purple {
                    padding: 20px;
                }

                .d-left {
                    width: 360px;
                    display: inline-block;

                    .grid-content {
                        background: #051C36;
                    }

                    .d-left-top {
                        border-bottom: 1px solid #326CAD;

                        .d-top-title {
                            line-height: 40px;
                            font-size: 16px;

                            >img {
                                width: 20px;
                                float: right;
                                margin-top: 10px;
                            }
                        }

                        .d-top-content-show {
                            display: flex;

                            .d-top-conent-img {
                                margin-top: 4px;
                                width: 80px;
                                height: 80px;
                                overflow: hidden;
                                margin-right: 10px;

                                >img {
                                    width: 100%;
                                    height: 100%;
                                }
                            }

                            .d-top-content-desc {
                                p {
                                    margin-bottom: 5px;
                                    color: #ccc;
                                    font-size: 12px;
                                }

                                .title_p {
                                    color: #fff;
                                    font-size: 16px;
                                }

                            }
                        }

                    }

                    .d-left-bottom {
                        border-bottom: 1px solid #326CAD;

                        .d-left-bottom-basicdata {
                            .d-bottom-basicdata-title {
                                margin-bottom: 10px;
                                font-size: 16px;
                                color: #FFFFFF;
                                height: 40px;
                                display: flex;
                                align-items: center;

                                >div {
                                    width: 3px;
                                    height: 16px;
                                    background: #248FFF;
                                    margin-right: 8px;
                                    border-radius: 2px;

                                }
                            }

                            .d-bottom-basicdata-content {
                                display: flex;
                                flex-wrap: wrap;

                                .d-basicdata-content-item {
                                    width: 100px;
                                    margin-bottom: 20px;

                                    p {
                                        font-size: 16px;
                                        color: #FFFFFF;
                                    }

                                    span {
                                        font-size: 12px;
                                        color: #CCCCCC;
                                    }
                                }

                            }

                            .monitorNext {
                                width: 100%;
                                text-align: center;

                                .gradient_bule {
                                    background-image: -webkit-linear-gradient(45deg, #1d6dff, #0dafff);
                                    color: #fff;
                                    border: none;
                                }

                                .gradient_bule:hover {
                                    background-image: -webkit-linear-gradient(45deg, #1d6dff, #0dafff 50%);
                                }

                                .gradient_red {
                                    background-image: -webkit-linear-gradient(45deg, #fe2270, #ff588f);
                                    border: none;
                                    color: #fff;
                                }

                                .gradient_red:hover {
                                    background-image: -webkit-linear-gradient(45deg, #fe2270, #ff588f 50%);
                                }

                                img {
                                    width: 12px;
                                    margin-right: 5px;
                                }

                            }
                        }
                    }
                }

                // 主播信息
                .mymessage {
                    padding: 20px;

                    .title_p {
                        font-size: 16px;
                        line-height: 40px;
                        margin-bottom: 10px;
                        color: #fff;
                    }

                    .content {
                        display: flex;
                        padding: 0;
                        overflow: hidden;
                        margin-bottom: 20px;

                        .content_left {
                            margin-right: 10px;

                            >img {
                                border-radius: 50%;
                                display: block;
                                width: 50px;
                            }
                        }

                        .content_right {
                            flex: 1;

                            .content_right_p1 {
                                font-size: 14px;
                                margin-bottom: 5px;
                                margin-top: 5px;
                            }

                            .content_right_p2 {
                                font-size: 12px;
                                color: #CCCCCC;
                            }
                        }
                    }

                    .d-bottom-basicdata-content {
                        display: flex;
                        flex-wrap: wrap;

                        .d-basicdata-content-item {
                            width: 100px;
                            margin-bottom: 20px;

                            p {
                                font-size: 16px;
                                color: #FFFFFF;
                            }

                            span {
                                font-size: 12px;
                                color: #CCCCCC;
                            }
                        }

                    }
                }
            }
        }

        .live_detailed_right {
            flex: 1;

            .live_detailed_right_top {
                color: #fff;

                .list {
                    .item {
                        position: relative;
                        float: left;
                        width: 49%;
                        padding: 20px;
                        background: #051C36;
                        margin-bottom: 18px;
                        overflow: hidden;
                        height: 306px;
                        &:nth-child(odd) {
                            margin-right: 18px;
                        }

                        .title_p {
                            // position: absolute;
                            // left: 20px;
                            // top: 20px;
                            font-size: 14px;
                            margin-bottom: 10px;
                        }
                        .subheading_p{
                            font-size: 12px;
                        }
                        .age_distribution{
                            display: flex;
                            .age_distribution_left{
                                font-size: 12px;
                                width: 15%;
                                margin-right: 30px;
                            }
                            .age_distribution_right{
                                // display: flex;
                                flex: 1;
                                >div{
                                    font-size: 12px;
                                    color:#CCCCCC;
                                    float: left;
                                    width: 30%;
                                    margin: 0 auto;
                                    margin-bottom:20px;
                                    span{
                                        color:#fff;
                                        margin-left: 10px;
                                    }
                                }
                            }
                        }
                        .text_p {
                            // position: absolute;
                            // left: 20px;
                            // top: 50px;
                            font-size: 12px;
                            color: #CCCCCC;

                            .span_data {
                                margin-left: 10px;
                                margin-right: 20px;
                            }
                        }

                        .echarts_box {
                            // padding: 20px;
                            // position: absolute;
                            // top:30px;
                            // left: 50%;
                            // transform: translateX(-50%);
                            margin-top: -30px;
                            width: 100%;
                            height: 250px;
                            >div{
                                width: 100% !important;
                            }
                        }
                    }
                }
            }

            .live_detailed_right_bottom {

            }
        }
    }
</style>
