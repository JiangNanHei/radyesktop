<template>
    <div>
        <div class="tow_box">
            <div class="towheader_box clearfix">
                <p class="pane-tow_header_titlep"><span>实时流量</span>本平台根据已收录的直播数据计算，可能与实际值存在一定差异</p>
                <div class="update_box">
                    <span class="update_box_title">
                        榜单将在
                        <span>40</span>
                        S后刷新
                    </span>
                    <el-button type="primary" icon="iconfont icon-shuaxin">刷新榜单</el-button>
                </div>
            </div>
            <div class="first_line">
                <ul class="first_line_list">
                    <li class="first_line_list_item" v-for="(item,i) in real_rate" :key="i">
                        <div class="item_box">
                            <p class="first_line_list_item_p1" if-v="item.keyone">
                                <span class="span1">{{item.keyone}}</span>
                                <span class="span2">{{item.priceone | NumToUnitNum}}</span>
                            </p>
                            <p class="first_line_list_item_p2" if-v="item.keytow">
                                <span class="span1">{{item.keytow}}</span>

                                <span v-if="item.pricetow >= 0" class="span2">+ {{item.pricetow}}%</span>
                                <span v-else class="span2">- {{Math.abs(item.pricetow)}}%</span>
                            </p>
                            <p class="first_line_list_item_p3" if-v="item.keythree">
                                <span class="span1">{{item.keythree}}</span>
                                <span class="span2">{{item.pricethree | NumToUnitNum}}</span>
                            </p>
                        </div>
                    </li>
                </ul>
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
                // 实时流量 data
                real_rate : [
                    // {
                    //     keyone : "观看人数",
                    //     priceone : "119000",

                    //     keytow : "相比上小时",
                    //     pricetow : "+0.9%"
                    // },
                    // {
                    //     keyone : "观看人数",
                    //     priceone : "119000",

                    //     keytow : "相比上小时",
                    //     pricetow : "+0.9%",

                    //     keythree : "场均观看人数",
                    //     pricethree : "52"
                    // },
                    // {
                    //     keyone : "观看人数",
                    //     priceone : "119000",

                    //     keytow : "相比上小时",
                    //     pricetow : "+0.9%"
                    // },
                    // {
                    //     keyone : "观看人数",
                    //     priceone : "119000",

                    //     keytow : "相比上小时",
                    //     pricetow : "+0.9%",

                    //     keythree : "场均观看人数",
                    //     pricethree : "52"
                    // },
                    // {
                    //     keyone : "观看人数",
                    //     priceone : "119000",

                    //     keytow : "相比上小时",
                    //     pricetow : "+0.9%"
                    // },
                    // {
                    //     keyone : "观看人数",
                    //     pricetow : "119000",
                    //     keytow : "相比上小时",
                    //     pricetow : "+0.9%",
                    //     keythree : "场均观看人数",
                    //     pricethree : "52"
                    // },
                    // {
                    //     keyone : "观看人数",
                    //     priceone : "119000",

                    //     keytow : "相比上小时",
                    //     pricetow : "+0.9%"
                    // },
                    // {
                    //     keyone : "观看人数",
                    //     pricetow : "119000",

                    //     keytow : "相比上小时",
                    //     pricetow : "+0.9%",

                    //     keythree : "场均观看人数",
                    //     pricethree : "52"
                    // },
                    // {
                    //     keyone : "观看人数",
                    //     priceone : "119000",

                    //     keytow : "相比上小时",
                    //     pricetow : "+0.9%"
                    // },
                    // {
                    //     keyone : "观看人数",
                    //     priceone : "119000",

                    //     keytow : "相比上小时",
                    //     pricetow : "+0.9%",

                    //     keythree : "场均观看人数",
                    //     pricethree : "52"
                    // },
                ]
            };
        },
        methods: {
            getData(){
                
                this.$http({
                    url: "/live/live_list/live_overview/live_overview.json",
                    method: "get",
                }).then(({
                    data
                }) => {

                    console.log(data)
                    this.real_rate = data.real_rate;

                }).catch(err => {

                })
            }
        },
        mounted () {
            this.getData();
        }
    };
</script>

<style lang="less" scoped>
    // 直播流量概览
    /deep/.tow_box {
        .towheader_box {
            margin: 20px 0;

            .pane-tow_header_titlep {
                line-height: 36px;
                float: left;
                color: #999;
                font-size: 12px;

                span {
                    font-size: 16px;
                    margin-right: 10px;
                    color: #fff;
                }
            }

            .update_box {
                float: right;

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
        .first_line {
            .first_line_list {
                margin-bottom: 10px;
                .first_line_list_item {
                    // flex: 1;
                    width:20%;
                    // margin-right: 20px;
                    margin-bottom:10px;
                    cursor: pointer;
                    // background: #082C55;
                    height: 100%;
                    vertical-align: top;
                    overflow: hidden;
                    display: inline-block;
                    border-radius: 10px;
                    padding: 0px 5px;
                    position: relative;
                    color: #ccc;
                    .item_box{
                        cursor: pointer;
                        width: 100%;
                        background: #082C55;
                        height: 100%;
                        vertical-align: top;
                        overflow: hidden;
                        display: inline-block;
                        border-radius: 10px;
                        position: relative;
                        color: #ccc;
                        padding: 20px;
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
                        &:last-child {
                            margin-right: 0px;
                        }



                        p {
                            font-size: 13px;
                            margin-bottom: 5px;
                        }

                        .span1 {
                            text-align: left;
                            display: inline-block;
                            width: 50%;
                        }

                        .span2 {
                            text-align: right;
                            display: inline-block;
                            width: 50%;
                            color: #fff;
                        }
                    }

                }
            }
        }
    }
</style>