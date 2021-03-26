/**
 * 针对echarts的封装
 * 
*/
import { dateObjcharts } from '@/assets/js/independent_self.js'
var echarts = require('echarts');

/**
 * 柱状图
 * id => 对象的id选择器
 * dataKey =>数值对象的键
 * dataValue =>数值对象的值
*/
export const echartsBar = (id, dataKey, dataValue) => {
    let myChart = echarts.init(id);
    myChart.setOption({
        color: ['#248FFF','#4AC2FF'],
        // tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        //         // type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        //     }
        // },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '6%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: dataKey,
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                    },
                },
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#fff',//左边线的颜色
                        // width:'2'//坐标线的宽度
                    }
                },

                

            }
        ],
        yAxis: [
            {
                type: 'value',
                // axisLine: {show: true}
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#fff',//左边线的颜色
                        // width:'2'//坐标线的宽度
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: '#eee',
                        type: 'dashed',
                        width: "1"
                    }
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                // barWidth: '30%',
                barWidth: 18,//固定柱子宽度
                data: dataValue
            }
        ]
    });
}
/**
 * 饼状图
 * id => 对象的id选择器
 * data =>数值对象
*/
export const echartsPie = (id, data) => {
    let myChart = echarts.init(id);
    myChart.setOption({
        series: [{
            type: 'pie',
            radius: ['20%', '40%'],
            // roseType: 'area',
            label: {
                normal: {
                    color: "#ccc",
                    fontSize: "12px"
                }
            },
            data: data,
            roseType: 'radius',
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                normal:{
                    color:function(params) {
                        //自定义颜色
                        var colorList = [          
                            '#FCE0B5', '#FFB137', '#FF7519', '#FAAB86'
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            }
        }]
    });
}

/**
 * 雷达图
 * id => 对象的id选择器
 * dataKey => 数值对象的键
 * dataValue => 数值对象的值
 * maxValue => 最大值
*/
export const echartsRadar = (id, dataKey, dataValue, maxValue) => {
    let myChart = echarts.init(id);
    myChart.setOption({
        radar: {
            // shape: 'circle',
            // name: {
            //     textStyle: {
            //         color: '#fff',
            //         backgroundColor: '#999',
            //         borderRadius: 3,
            //         padding: [3, 5]
            //     }
            // },
            indicator: dateObjcharts(dataKey, maxValue),
        
            radius: 50
        },
        series: [{
            
            type: 'radar',
            
            areaStyle: {},
            itemStyle: {
                color: '#248FFF'
            },
            data: [
                {
                    value: dataValue,
                }
            ]
        }]
    });
}

/**
 * 折线图双曲线
 * id => 对象的id选择器
 * dataX => x轴
 * dataY1 => Y轴1
 * dataY2 => Y轴2
*/
export const echartsLine = (id, dataX, dataY1, dataY2) => {
    let myChart = echarts.init(id);
    myChart.setOption({
           color: ['#248FFF','#FFB224'],
        legend: {
            textStyle: {
                color: '#fff',
            }
        },
        // tooltip: {
        //     trigger: 'axis',
        //     showContent: false
        // },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: dataX,
            // splitLine:{show: true},//去除网格线
            // splitArea : {show : true},//保留网格区域
            axisLabel: {
                textStyle: {
                    color: '#fff',
                },
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    // width:'2'//坐标线的宽度
                }
            },
        },
        yAxis: [
            {
                name: '总量',
                type: 'value',
                // max: 500,
                axisLabel: {
                    formatter: function (val) {
                        return val /10000 + 'W';
                    },
                    textStyle: {
                        color: '#fff',
                    },
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        type: 'solid',
                        color: '#fff',//左边线的颜色
                        // width:'2'//坐标线的宽度
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: '#eee',
                        type: 'dashed',
                        width: "1"
                    }
                }
            
               
            },
            {
                name: '增量',
                // nameLocation: 'start',
                // max: 100,
                type: 'value',
                // inverse: true,
                axisLabel: {
                    formatter: function (val) {
                        return val /10000 + 'W';
                    },
                    textStyle: {
                        color: '#fff',
                    },
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        type: 'solid',
                        color: '#fff',//左边线的颜色
                        // width:'2'//坐标线的宽度
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: '#eee',
                        type: 'dashed',
                        width: "1"
                    }
                }

            }
        ],
        
        series: [
            {
                type: 'line',
                smooth: true, 
                seriesLayoutBy: 'row',
                symbol: 'circle',
                symbolSize: 0, //折线点的大小
                yAxisIndex: 0, ////使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
                name: '总量',
                data:dataY1,
            },
            {
                type: 'line', 
                symbol: 'circle',
                symbolSize: 0, //折线点的大小
                yAxisIndex: 1, ////使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
                smooth: true, 
                seriesLayoutBy: 'row',
                name:'增量', 
                data:dataY2
            },
            
        ],
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '16%',
            containLabel: true
        },
    });
}

/**
 * 折线图单曲线
 * id => 对象的id选择器
 * dataX => x轴
 * dataY1 => Y轴1
 * dataY2 => Y轴2
*/
export const echartsLine2 = (id, dataX, dataY) => {
    let myChart = echarts.init(id);
    myChart.setOption({
           color: ['#248FFF','#FFB224'],
        legend: {
            textStyle: {
                color: '#fff',
            }
        },
        // tooltip: {
        //     trigger: 'axis',
        //     showContent: false
        // },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: dataX,
            // splitLine:{show: true},//去除网格线
            // splitArea : {show : true},//保留网格区域
            axisLabel: {
                textStyle: {
                    color: '#fff',
                },
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    // width:'2'//坐标线的宽度
                }
            },
        },
        yAxis: [
            {
                name: '总量',
                type: 'value',
                // max: 500,
                axisLabel: {
                    formatter: function (val) {
                        return val /10000 + 'W';
                    },
                    textStyle: {
                        color: '#fff',
                    },
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        type: 'solid',
                        color: '#fff',//左边线的颜色
                        // width:'2'//坐标线的宽度
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: '#eee',
                        type: 'dashed',
                        width: "1"
                    }
                }
            
               
            },
           
        ],
        
        series: [
            {
                type: 'line',
                smooth: true, 
                seriesLayoutBy: 'row',
                symbol: 'circle',
                symbolSize: 0, //折线点的大小
                yAxisIndex: 0, ////使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
                name: '总量',
                data:dataY,
            },
            
        ],
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '16%',
            containLabel: true
        },
    });
}


/**
 * 实时直播直播详情折线图
 * 折线图
 * dom => 元素
 * xAxisdata => x轴
 * seriesdata => Y轴
*/
export const live_detailed_echartsLine = (dom, xAxisdata, seriesdata) => {
let myChart = echarts.init(dom);
    myChart.setOption({
        color:['#248FFF','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: {
            left: '0%',
            right: '4%',
            bottom:'0%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: xAxisdata,
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                    },
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                max : 80000,
                min: 0,
                interval: 10000,
                axisLabel: {
                    formatter: function (val) {
                        return val!= 0?val/10000 + 'W':0;
                    },
                    textStyle: {
                        color: '#fff'
                    }
                },
            },
      
        ],
        series: seriesdata
    });

}




/**
 * 总工作台 个人设置 我的套餐 圆环图
 * dom => 元素
 * max => 最大值
 * present => 当前值
 * progress => 百分比进度
*/
export const echarts_annulus = (dom,max,present,progress) => {
    let myChart = echarts.init(dom);
    myChart.setOption({
        title: {
            text: progress,
            textStyle: {
                color: '#999',
                fontSize: 12
            },
            left: 'center',
            top: 'center'
        },
        angleAxis: {
            max: max, // 满分
            clockwise: false, // 逆时针
            // 隐藏刻度线
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        radiusAxis: {
            type: 'category',
            // 隐藏刻度线
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        polar: {
            center: ['50%', '50%'],
            radius: '160%', //图形大小
            // radius: ['80%', '60%'],
        },
        series: [
            {
                type: 'bar',
                data: [
                    {
                        name: '进度',
                        value: present,
                        itemStyle: {
                            normal: {
                                color: { // 完成的圆环的颜色
                                    colorStops: [{
                                        offset: 0,
                                        color: '#248FFF' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#248FFF' // 100% 处的颜色
                                    }]
                                }
                            }
                        },
                    }
                ],
                coordinateSystem: 'polar',
                roundCap: true,
                barWidth: 9,
                barGap: '-100%', // 两环重叠
                radius: ['49%', '52%'],
                z: 2,
            },
            {   // 灰色环
                type: 'bar',
                data: [{
                    value: max,
                    itemStyle: {
                        color: '#021224',
                    }
                }],
                coordinateSystem: 'polar',
                roundCap: true,
                barWidth: 9,
                barGap: '-110%', // 两环重叠
                radius: ['48%', '53%'],
                z: 1
            }
        ],
    }) 
}
           
