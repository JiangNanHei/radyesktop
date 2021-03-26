<template>
    <div>
        <div class="btn_box">
            <div class="btn_box_s btn_box_butone" @click="butone">
                查看全网实时直播数据
                <i :class="{'rotatei': bkone,'rotatei0 iconfont icon-xiajiantou':true}"></i>
            </div>
            <div class="btn_box_s btn_box_buttow" @click="buttow">
                查看往期全网直播榜单
                <i :class="{'rotatei': timker,'rotatei0 iconfont icon-xiajiantou':true}"></i>
            </div>

            <div class="update_box">
                <span class="update_box_title">
                    榜单将在
                    <span>40</span>
                    S后刷新
                </span>
                <el-button type="primary" icon="iconfont icon-shuaxin">刷新榜单</el-button>
            </div>
        </div>
        <div :class="{'block':bkone,'block_tow':!bkone}">
            <el-carousel trigger="click" height="100px" indicator-position="none" arrow="always" :loop="false"
                :autoplay="false">
                <el-carousel-item v-for="(page, index) in pages" :key="index">
                    <div v-for="(item, index) in page" :key="index" class="page_wrapper">
                        <div class="page_content">

                            <p class="page_content_pone">{{item.title}}</p>
                            <p class="page_content_ptow">{{item.peoplequantity | NumToUnitNum}}</p>
                            <p class="page_content_pthree">
                                <span class="page_content_pthree_spanone">{{item.ptitle}}</span>
                                <span class="page_content_pthree_spantow">{{item.pright | NumToUnitNum}}</span>
                            </p>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div :class="{'timepicker':timker,'timepicker_tow':!timker}">
            <span class="timepicker_span_one">选择往期榜单</span>
            <el-select v-model="to_issue_list_value" placeholder="请选择">
                <el-option
                v-for="item in to_issue_list"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <span class="timepicker_span_tow">选择具体时间段</span>
            <el-select v-model="specific_time_value" placeholder="请选择">
                <el-option
                v-for="item in specific_time"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
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
                time_one : [
                    1,2,3,4,5
                ],
                // 选择往期榜单
                to_issue_list: [
                    // {
                    //     value: '近24小时',
                    // },
                    // {
                    //     value: '12月23日',
                    // },
                    // {
                    //     value: '12月22日',
                    // },
                    // {
                    //     value: '12月21日',
                    // },
                    // {
                    //     value: '12月20日',
                    // },
                    // {
                    //     value: '12月19日',
                    // },
                    // {
                    //     value: '12月18日',
                    // },
                    // {
                    //     value: '12月17日',
                    // },
                    // {
                    //     value: '12月16日',
                    // },
                    // {
                    //     value: '12月15日',
                    // },
                    // {
                    //     value: '12月14日',
                    // },
                ],
                to_issue_list_value: '',
                // 具体时间段
                specific_time: [
                    {
                        value: '00:00',
                        label: '00:00'
                    },
                    {
                        value: '01:00',
                        label: '01:00'
                    },
                    {
                        value: '02:00',
                        label: '02:00'
                    },
                    {
                        value: '03:00',
                        label: '03:00'
                    },
                    {
                        value: '04:00',
                        label: '04:00'
                    },
                    {
                        value: '05:00',
                        label: '05:00'
                    },
                    {
                        value: '06:00',
                        label: '06:00'
                    },
                    {
                        value: '07:00',
                        label: '07:00'
                    },
                    {
                        value: '08:00',
                        label: '08:00'
                    },
                    {
                        value: '09:00',
                        label: '09:00'
                    },
                    {
                        value: '10:00',
                        label: '10:00'
                    },
                    {
                        value: '11:00',
                        label: '11:00'
                    },
                    {
                        value: '12:00',
                        label: '12:00'
                    },
                    {
                        value: '13:00',
                        label: '13:00'
                    },
                    {
                        value: '14:00',
                        label: '14:00'
                    },
                    {
                        value: '15:00',
                        label: '15:00'
                    },
                    {
                        value: '16:00',
                        label: '16:00'
                    },
                    {
                        value: '17:00',
                        label: '17:00'
                    },
                    {
                        value: '18:00',
                        label: '18:00'
                    },
                    {
                        value: '19:00',
                        label: '19:00'
                    },
                    {
                        value: '20:00',
                        label: '20:00'
                    },
                    {
                        value: '21:00',
                        label: '21:00'
                    },
                    {
                        value: '22:00',
                        label: '22:00'
                    },
                    {
                        value: '23:00',
                        label: '23:00'
                    },
                ],
                specific_time_value: '',


                bkone: false,
                timker: false,
                carouselData: [
                    // {
                    //     title: '正在直播人数',
                    //     peoplequantity: '51000',
                    //     ptitle: '带货直播人数',
                    //     pright: '17000'
                    // },
                    // {
                    //     title: '当前总点赞数',
                    //     peoplequantity: '430000000',
                    //     ptitle: 'TOP100当前点赞数',
                    //     pright: '7269000'
                    // },
                    // {
                    //     title: '商品总数',
                    //     peoplequantity: '377000',
                    //     ptitle: '带货直播人数',
                    //     pright: '17000'
                    // },
                    // {
                    //     title: '直播带货销量',
                    //     peoplequantity: '8380000',
                    //     ptitle: 'TOP100带货商品数',
                    //     pright: '493000'
                    // },
                    // {
                    //     title: '直播带货销售额',
                    //     peoplequantity: '240000000',
                    //     ptitle: 'TOP100直播带货销售额',
                    //     pright: '24256000'
                    // },
                    // {
                    //     title: '直播带货销量',
                    //     peoplequantity: '8380000',
                    //     ptitle: 'TOP100带货商品数',
                    //     pright: '493000'
                    // },
                    // {
                    //     title: '直播带货销售额',
                    //     peoplequantity: '240000000',
                    //     ptitle: 'TOP100直播带货销售额',
                    //     pright: '24256000'
                    // },
                ],
            };
        },
        methods: {
            // 查看全网数据的 显示隐藏
            butone() {
                this.bkone = !this.bkone;
            },
            buttow() {
                this.timker = !this.timker;
            },
        },
        computed: {
            pages() {
                const pages = []
                this.carouselData.forEach((item, index) => {
                    const page = Math.floor(index / 5)
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        },
    };
</script>

<style lang="less" scoped>
    /deep/.timeselect_one,/deep/.timeselect_tow{
       .el-input__inner{
            border: 1px solid #248FFF;
            background: #092A4D;
            padding-left: 15px;
       }
       .el-input__prefix{
           display: none;
       }
    }
    // 隐藏的下路功能
    .btn_box {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;

        .btn_box_s {
            margin-right: 10px;
            height: 36px;
            line-height: 32px;
            border: 1px solid #2997ff;
            border-radius: 2px;
            text-align: center;
            padding: 0 5px;
            font-size: 14px;
            font-weight: 400;
            color: #2997ff;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            cursor: pointer;

            i {
                transition: all 0.3s linear;
            }

            .rotatei0 {
                transform: rotate(0deg);
                display: inline-block;
            }

            // i旋转css
            .rotatei {
                transform: rotate(180deg);
                display: inline-block;
            }
        }

        .update_box {
            position: absolute;
            right: 0;

            .update_box_title {
                font-size: 16px;
                color: #fff;

                span {
                    color: #FBAE46;
                }
            }

            .el-button {
                margin-left: 20px;
                width: 120px;
                background: linear-gradient(225deg, #4AC2FF 0%, #248FFF 100%);
                border-radius: 4px;

                span {
                    font-size: 14px;
                    margin-left: 5px;
                }
            }
        }
    }

    .block {
        transition: all 0.3s linear;
        overflow: hidden;
        margin: 10px 0;
        width: 100%;
        height: 100px;

        .page_wrapper {
            cursor: pointer;
            width: 19%;
            background: #082C55;
            margin-right: 10px;
            height: 100%;
            vertical-align: top;
            overflow: hidden;
            display: inline-block;
            border-radius: 10px;
            padding: 20px;
            position: relative;

            &::before {
                content: "";
                width: 55px;
                height: 55px;
                border-radius: 50%;
                background: #FFFFFF;
                opacity: 0.06;
                position: absolute;
                right: -21px;
                bottom: 26px;
                z-index: 9;
            }

            &::after {
                content: "";
                width: 69px;
                height: 69px;
                border-radius: 50%;
                background: #FFFFFF;
                opacity: 0.06;
                position: absolute;
                right: -3px;
                bottom: -13px;
                z-index: 9;
            }

            .page_content {
                p {
                    color: #fff;
                }

                .page_content_pone {
                    font-size: 14px;
                    color: #ccc;
                }

                .page_content_ptow {
                    font-size: 16px;
                    margin: 5px 0;
                }

                .page_content_pthree {
                    font-size: 12px;

                    .page_content_pthree_spanone {
                        color: #999;
                    }

                    .page_content_pthree_spantow {
                        float: right;
                    }
                }
            }

        }
    }

    // 隐藏的css
    .block_tow {
        transition: all 0.3s linear;
        overflow: hidden;
        margin: 0;
        width: 100%;
        height: 0px;

        .page_wrapper {
            width: 19%;
            background: #082C55;
            margin-right: 10px;
            height: 100%;
            vertical-align: top;
            overflow: hidden;
            display: inline-block;
            border-radius: 10px;
            padding: 20px;
            position: relative;

            &::before {
                content: "";
                width: 55px;
                height: 55px;
                border-radius: 50%;
                background: #FFFFFF;
                opacity: 0.06;
                position: absolute;
                right: -21px;
                bottom: 26px;
                z-index: 9;
            }

            &::after {
                content: "";
                width: 69px;
                height: 69px;
                border-radius: 50%;
                background: #FFFFFF;
                opacity: 0.06;
                position: absolute;
                right: -3px;
                bottom: -13px;
                z-index: 9;
            }

            .page_content {
                p {
                    color: #fff;
                }

                .page_content_pone {
                    font-size: 14px;
                    color: #ccc;
                }

                .page_content_ptow {
                    font-size: 16px;
                    margin: 5px 0;
                }

                .page_content_pthree {
                    font-size: 12px;

                    .page_content_pthree_spanone {
                        color: #999;
                    }

                    .page_content_pthree_spantow {
                        float: right;
                    }
                }
            }

        }
    }

    .timepicker {
        transition: all 0.3s linear;
        margin-top: 25px;
        height: 36px;
        overflow: hidden;

        >span {
            font-weight: 500;
            margin-right: 10px;
            font-size: 16px;
            color: #fff;
        }

        .timepicker_span_one {
            font-size: 14px;
        }
        .timepicker_span_tow {
            font-size: 14px;
            margin-left: 20px;
        }
        /deep/.el-select{
            .el-input{
                .el-input__inner{
                    color:#fff;
                    background: #092A4D !important;
                    border:1px solid #248FFF !important;
                }
            }
        }
    }
    .el-select-dropdown__wrap el-scrollbar__wrap{
        background: #092A4D !important;
        border:1px solid #248FFF !important;
        /deep/.el-scrollbar__view el-select-dropdown__list{
            background: #092A4D !important;
            .el-select-dropdown__item{

            }
        }
    }

    // 隐藏的css
    .timepicker_tow {
        transition: all 0.3s linear;
        margin-top: 25px;
        height: 0px;
        overflow: hidden;
        margin:0px;
        >span {
            font-weight: 500;
            margin-right: 10px;
            font-size: 16px;
            color: #fff;
        }

        .timepicker_span_one {
            font-size: 14px;
        }
        .timepicker_span_tow {
            font-size: 14px;
            margin-left: 20px;
        }
        /deep/.el-select{
            .el-input{
                .el-input__inner{
                    color:#fff;
                    background: #092A4D !important;
                    border:1px solid #248FFF !important;
                }
            }
        }
    }
</style>