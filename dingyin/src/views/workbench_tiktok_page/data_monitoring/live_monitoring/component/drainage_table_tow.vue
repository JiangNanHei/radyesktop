<template>
    <div class="monitor_the_history">
        <div class="box">
            <p class="title_p">监控历史</p>
            <div class="d-monitor-title">
                <div class="headeroption">
                    <div class="filtratedata_item">
                        <el-select v-model="monitoringdata" placeholder="全部监控" clearable>
                            <el-option
                            v-for="item in selling_price"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="headersearch">
                        <el-input
                            size="small"
                            placeholder="请输入昵称开始搜索"
                            suffix-icon="el-icon-search"
                            v-model="monitoring_search">
                        </el-input>
                    </div>
                    <el-button type="primary">搜素</el-button>
                </div>
                <div>
                    <el-button type="primary" @click="show_delete = !show_delete">列表管理</el-button>
                </div>
            </div>
            <ul class="history_data">
                <el-collapse>
                    <el-collapse-item 
                    :name="index" class="d-live-search"  
                    v-for="(item, index) in monitoring_show" 
                    :key="index" 
                    :class="{dliveover: !item.status_style.status_number,deletewidth: show_delete}"
                    >
                        <template slot="title">
                            <div class="d-live-search_box">
                                <div class="d-live-message-show">
                                    <img class="d-live-search-img" :src="item.imgUrl">
                                    <div class="d-live-search-message">
                                        <p class="d-live-search-message-title">
                                            <span class="span1">{{item.title}}</span>
                                            <span class="span2">监控时间段 : {{item.time_quantum}}</span>
                                        </p>
                                        <p class="d-live-search-message-douyin">抖音号：{{item.douyin}}</p>
                                        <p class="d-live-search-message-desc">简介：{{item.desc}}</p>
                                    </div>
                                </div>
                                <div class="d-live-search-right">
                                    <span class="d-live-search-message-title2">{{item.status_style.message}}</span>
                                    <p class="d-live-search-message-douyin">当前检测到 {{item.status_style.number}} 场直播</p>
                                </div>
                            </div>
                            <el-popconfirm title="你确定删除这项业务吗？ " @confirm="goDelete">
                                <div slot="reference" class="d-live-delete-icon" v-show="show_delete" @click="shol">
                                    <img src="@/assets/images/my/delete.png">
                                </div>
                            </el-popconfirm>
                        </template>
                        <div class="live_databox" v-for="(items,index) of item.monitoring_message" :key="index">
                            <div class="img_box">
                                <el-image :src="items.imgUrl"></el-image>
                            </div>
                            <div class="text_box">
                                <p class="p1">{{items.title}}</p>
                                <p class="p2">直播时长：{{items.live_time}}</p>
                                <p class="p3">
                                    <i class="iconfont icon-gouwuchekong"></i>
                                    带货数：
                                    <span>{{items.goods_carried}}</span>
                                </p>
                            </div>
                            <div class="d-live-message">
                                <span>{{items.sound_wave}}</span>
                                <p>获得音浪</p>
                            </div>
                            <div class="d-live-message">
                                <span>{{items.viewers_number}}</span>
                                <p>观看人数</p>
                            </div>
                            <div>
                                <el-button type="primary" size="mini" @click="goRetailedscreen">查看直播</el-button>
                            </div>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </ul>
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
            activeNames: [],
            monitoringdata : '',
            selling_price : [],
            monitoring_show : [],
            monitoring_search:'',
            // 显示垃圾筐
            show_delete: false,
            visible: false
        };
    },
    mounted () {
        this.getData()
    },
    methods: {
        getData() {
            const _this = this
            this.$http({
                url: "/monitoring_live_history.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.activeNames = data.activeNames
                _this.monitoringdata = data.monitoringdata
                _this.selling_price = data.selling_price
                _this.monitoring_show = data.monitoring_show
                if(data.code == 200){
                    
                }else if(data.code == 401){
                    
                }
                else{
                    
                }

            }).catch(err => {
                console.log(err)
            })
        },
        //阻止折叠面板的捕捉
        shol(e){
            e.stopPropagation()
        },
        goDelete(){
            alert('等待接口删除本项')
        },
        goRetailedscreen(){
            this.$router.replace('/livedetailed')
        }
    },
};
</script>
<style>
    .el-popover{
        background: #19477A;
        border: none;
        color: #CCCCCC;
    }
    .el-popconfirm__main{
        line-height: 30px;
    }
</style>
<style lang="less" scoped>
.monitor_the_history{
    color: #fff;
    background: #051C36;
    border-radius: 6px;
    padding: 20px;
    .box{
        color:#fff;
        .title_p{
            font-size: 16px;
            margin-bottom:30px;
        }
        .d-monitor-title{
            display: flex;
            justify-content: space-between;
        }
        /deep/.headeroption{
            display: flex;
            color: #CCCCCC;
            .filtratedata_item{
                position: relative;
                // width: 260px;
                // display: inline-block;
                color:#fff;
                .el-select {
                    margin-right: 20px;
                }
                .timepicker_span_tow {
                    line-height: 32px;
                    display: inline-block;
                    font-size: 12px;
                    margin-right: 10px;
                }
                .el-input__inner{
                    background: #0D2F55;
                    border:1px solid #999;
                }
            }
            .headersearch{
                width: 260px;
                margin-right: 20px;
                /deep/.el-input__inner{
                    background: #0D2F55;
                    border:1px solid #999;
                }
            }
        }
        /deep/.history_data{
            /deep/.el-collapse{
                border-top: none;
                border-bottom: none;
            }
            /deep/.el-collapse-item__wrap{
                background: #051C36;
                border-bottom: none;
            }
            /deep/.el-collapse-item__content{
                padding-bottom: 0px;
            }
            .deletewidth{
                width: 96%!important;
            }
            .d-live-search{
                margin-top: 20px;
                width: 100%;
                position: relative;
                /deep/.el-collapse-item__header{
                    height: auto;
                    background: #051C36;
                    border-bottom: none;
                }
                /deep/.el-collapse-item__arrow{
                    margin-left: -25px;
                    color: #FBAE46;
                    font-size: 16px;
                }
                .d-live-delete-icon{
                    position: absolute;
                    right: -40px;
                    top: 45px;
                }
                .d-live-search_box{
                    
                    // margin-top: 20px;
                    padding: 20px;
                    // height: 120px;
                    background: #0D2F55;
                    border-radius: 22px;
                    border: 1px solid #979797;
                    cursor: pointer;
                    overflow: hidden;
                    color:#CCCCCC;
                    display: flex;
                    align-items: center;
                    flex: 1;
                    justify-content: space-between;
                    .d-live-message-show{
                        min-width: 680px;
                    }
                    .d-live-search-img{
                        width: 70px;
                        height: 70px;
                        border-radius: 50%;
                        margin-right: 15px;
                        vertical-align: sub;
                    }
                    .d-live-search-message{
                        line-height: 27px;
                        width: 70%;
                        display: inline-block;
                        .d-live-search-message-title{
                            font-size: 16px;
                            color: #FFFFFF;
                            .span1{
                                margin-right: 10px;
                            }
                            .span2{
                                font-size: 12px;
                            }
                        }
                        .d-live-search-message-douyin{
                            font-size: 12px;
                        }
                        .d-live-search-message-desc{
                            font-size: 12px;
                        }
                    }
                    .d-live-search-right{
                        // display: inline-block;
                        // height: 80px;
                        line-height: 24px;
                        margin-right: 15px;
                        .d-live-search-message-title2{
                            font-size: 16px;
                            color: #FBAE46;
                        }
                        .d-live-search-message-douyin{
                            font-size: 12px;
                            color: #CCCCCC;
                        }
                    }
                    &:hover{
                        background: #051C36;
                        border: 1px solid #248FFF;
                    }
                }
                .live_databox{
                    color:#fff;
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    .img_box{
                        margin-right: 20px;
                        vertical-align: bottom;
                        .el-image{
                           display: block;
                            img{
                                width: 70px;
                                height: 70px;
                                display: block;
                            }
                        }
                    }
                    .text_box{
                        font-size: 14px;
                        line-height: 23px;
                        margin-right: 20px;
                        .p1{

                        }
                        .p2{
                            font-size: 12px;
                            color:#999999;
                        }
                        .p3{
                            font-size: 12px;
                            color:#FBAE46;
                            i{
                                margin-right: 5px;
                            }
                        }
                    }
                    .d-live-message{
                        margin-right: 20px;
                        text-align: center;
                        span{
                            font-size: 16px;
                            color: #FFFFFF;
                        }
                        p{
                            font-size: 12px;
                            color: #CCCCCC;
                        }
                    }
                }
            }
            .dliveover{
                /deep/.el-collapse-item__arrow{
                    color: #24FF62!important;
                }
                .d-live-search-message-title2{
                    color: #24FF62!important;

                }
            }
        }
    }
}
</style>
