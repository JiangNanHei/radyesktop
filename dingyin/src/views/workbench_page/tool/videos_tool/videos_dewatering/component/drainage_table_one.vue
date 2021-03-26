<template>
    <div>
        <div class="videos-dewatering-wrapper">
            <div class="d-monitoring-live">
                <p class="d-live-monitoring-title">视频去水印</p>
                <span class="d-live-monitoring-desc">可以对视频进行去除水印的操作，本平台只提供工具，请不要擅自商用，若发生侵权，本平台对此不承担责任</span>
                <div class="demo-input-suffix">
                    <div class="search_box">
                        <el-input
                            v-model = "videotablsearch"
                            placeholder="请输入视频详情页链接进行去水印"
                            >
                        </el-input>
                        <el-button type="primary" @click="searchResult">搜索</el-button>
                    </div>
                    <el-popover
                        placement="bottom-start"
                        trigger="click">
                        <detailed-share></detailed-share>
                        <div slot="reference" class="d-monitoring-question">
                             <span class="el-icon-question d-time-icon"></span>
                             <span class="d-monitoring-question-desc">如何获取视频链接</span>
                        </div>
                    </el-popover>
                    <div class="d-live-search" v-for="(item, index) of monitoring_result" :key="index" @click="monitoring_switch = true">
                        <img class="d-live-search-img" :src="item.imgUrl">
                        <div class="d-live-search-message">
                            <p class="d-live-search-message-title"><span>{{item.message}}</span>{{item.title}}</p>
                            <p class="d-live-search-message-douyin">发布者：{{item.author}}</p>
                            <p class="d-live-search-message-desc">发布时间：{{item.desc}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-monitoring-start">
                <button 
                    type="button" 
                    :class="{gradient_bule: monitoring_switch,gradient_gray:!monitoring_switch}" 
                    class="el-button table_button monitorNextBtn ui_click el-button--default" 
                    style="margin: 0px 20px 0px 0px !important;"
                    @click=" monitoring_switch ? (dialogVisible = true) : '' "
                    >
                    <span>开始去水印</span>
                </button>
                <p class="d-start-desc">本次操作共需消耗
                    <span class="d-start-desc-show"> {{consume_number}} </span>
                    次视频去水印次数，本月剩余
                    <span class="d-start-desc-show"> {{surplus_number}} </span>
                    次视频去水印次数
                </p>
            </div>
            <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :modal="false"
                >
                <span class="el-icon-warning"></span>
                <span class="d-dialog-content">是否进行去水印操作</span>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dewateringDetailed">确 认</el-button>
                </span>
            </el-dialog>
            <el-dialog
                title="下载去水印后视频"
                :visible.sync="dialogDownload"
                width="30%"
                :modal="false"
                >
                <div class="d-dialog-download">
                    <div class="d-dialog-download-img">
                        <img class="d-dialog-download-img-content" :src="download_img">
                    </div>
                    <div class="d-dialog-download-btn">
                        <el-button type="primary">下载封面</el-button>
                        <el-button type="primary">下载视频</el-button>
                    </div>
                    <p class="d-dialog-download-desc">同一链接不会反复扣除去水印次数</p>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import detailedShare from "../../../../../workbench_tiktok_page/data_monitoring/components/detailed-share"
    export default {
        components: {
            detailedShare
        },
        props: {

        },
        data() {
            return {
                //去水印按钮显示
                monitoring_switch: false,
                //搜索内容
                videotablsearch: '',
                //搜索详情
                monitoring_result: {},
                //去水印图片
                download_img: '',
                //操作详情显示
                dialogVisible: false,
                //去水印详情显示
                dialogDownload: false,
                //消耗次数
                consume_number: '',
                //剩余次数
                surplus_number: '',
            };
        },
        methods: {
            getData() {
                const _this = this
                this.$http({
                    url: "/tool_videos_dewatering.json",
                    method: "GET",
                    data : this.$http.adornParams({
                        
                    },true)
                }).then(({data}) => {
                    // console.log(data)
                    _this.consume_number = data.consume_number
                    _this.surplus_number = data.surplus_number
                    if(data.code == 200){
                        
                    }else if(data.code == 401){
                        
                    }
                    else{
                        
                    }
                }).catch(err => {
                    console.log(err)
                })
            },
            //搜索
            searchResult() {
                const _this = this
                this.$http({
                    url: "/tool_videos_dewatering_detailed.json",
                    method: "GET",
                    params : this.$http.adornParams({
                        value: _this.videotablsearch
                    },false)
                }).then(({data}) => {
                    // console.log(data)
                    _this.monitoring_result = data.monitoring_result
                    if(data.code == 200){
                        
                    }else if(data.code == 401){
                        
                    }
                    else{
                        
                    }

                }).catch(err => {
                    console.log(err)
                })
            },
            //去水印操作
            dewateringDetailed () {
                this.dialogVisible = false
                this.dialogDownload = true
                this.dewateringImg()
            },
            //获取去水印数据
            dewateringImg () {
                const _this = this
                this.$http({
                    url: "/tool_videos_dewatering_img.json",
                    method: "GET",
                    data : this.$http.adornParams({
                        
                    },true)
                }).then(({data}) => {
                    // console.log(data)
                    _this.download_img = data.download_img
                    if(data.code == 200){
                        
                    }else if(data.code == 401){
                        
                    }
                    else{
                        
                    }

                }).catch(err => {
                    console.log(err)
                })
            },

        },
        computed: {
            
        },
        created() {
            this.getData()
        },
    };
</script>
<style>
    .el-dialog{
        background: #082C55;
        border: none;
        border-radius: 12px;
    }
    .el-dialog__title{
        font-size: 16px;
        color: #FFFFFF;
    }
    .el-dialog__body{
        padding-top: 10px;
    }
    .el-popover{
        background: #082C55!important;
        border-radius: 12px;
    }
    .el-icon-warning{
        color: red;
        margin: 0 5px 0 20px;
    }
    .d-dialog-content{
        color: #FFFFFF;
        font-size: 12px;
    }
    .d-dialog-download{
        width: 100%;
        text-align: center;
    }
    .d-dialog-download-img{
        margin: 0 auto;
        margin-top: 20px;
    }
    .d-dialog-download-img-content{
        width: 100px;
        border-radius: 3px;
        padding: 5px;
        border-radius: 8px;
        box-shadow: 0 0 0 1px #fff;
    }
    .d-dialog-download-btn{
        margin: 30px 0;
    }
    .d-dialog-download-desc{
        color: red;
        font-size: 12px;
    }

</style>
<style lang="less" scoped>
    .videos-dewatering-wrapper{
        color: #fff;
        background: #051C36;
        border-radius: 6px;
        padding: 20px;
        .d-monitoring-live{
            .demo-input-suffix{
                margin-top: 20px;
                >span{
                    color: #FFFFFF;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            /deep/.search_box{
                display: inline-block;
                position: relative;
                input {
                    width: 480px;
                    height: 32px;
                    border-radius: 25px;
                    background: #0D2F55;
                    font-size: 12px;
                    color: #999;
                    border: 1px solid #999;
                }
                .el-button{
                    width: 65px;
                    line-height: 0px;
                    height: 80%;
                    position: absolute;
                    right: -28px;
                    border-radius: 20px;
                    top: 50%;
                    transform: translate(-50%,-50%);
                }
            }
            .d-live-search{
                margin-top: 20px;
                padding: 20px;
                width: 500px;
                // height: 100px;
                background: #0D2F55;
                border-radius: 22px;
                border: 1px solid #979797;
                cursor: pointer;
                overflow: hidden;
                display: flex;
                align-items: center;
                .d-live-search-img{
                    width: 60px;
                    height: 80px;
                    margin-right: 12px;
                    vertical-align: middle;
                    border-radius: 3px;
                }
                .d-live-search-message{
                    display: inline-block;
                    .d-live-search-message-title{
                        font-size: 16px;
                        color: #FFFFFF;
                        span{
                            display: inline-block;
                            width: 220px;
                            white-space: nowrap;/*保证文本内容不会自动换行，如果多余的内容会在水平方向撑破单元格*/
                            overflow: hidden; /*隐藏超出单元格的部分*/
                            text-overflow: ellipsis; /*将被隐藏的那部分用省略号代替*/
                            vertical-align: top;
                        }
                        margin-bottom: 5px;
                    }
                    .d-live-search-message-douyin{
                        font-size: 12px;
                        color: #CCCCCC;
                    }
                    .d-live-search-message-desc{
                        font-size: 12px;
                        color: #CCCCCC;
                    }
                }
                &:hover{
                    background: #051C36;
                    border: 1px solid #248FFF;
                }

            }
            .d-monitoring-question{
                display: inline-flex;
                align-items: center;
                vertical-align: middle;
                cursor: pointer;
                .d-time-icon{
                    font-size: 24px!important;
                    margin-left: 10px!important;
                    color: #999999!important;
                }
                .d-monitoring-question-desc{
                    color: #999999;
                    font-size: 12px;
                    margin-left: 5px;
                }
            }
        }
        .d-live-monitoring-title{
            font-size: 16px;
            color: #FFFFFF;
            margin-bottom: 20px;
        }
        .d-live-monitoring-desc{
            font-size: 12px;
            color: #CCCCCC;
        }
        .d-monitoring-time{
            margin-top: 20px;
        }
        .d-monitoring-start{
            margin-top: 20px;
            .monitorNextBtn{
                padding: 15px 60px;
            }
            .gradient_bule{
                background-image: -webkit-linear-gradient(45deg,#1d6dff,#0dafff);
                color: #fff;
                border: none;
            }
            .gradient_gray{
                background: #666666!important;
                color: #fff;
                border: none;
            }
            // .gradient_bule:hover{
            //     background-image: -webkit-linear-gradient(45deg,#1d6dff,#0dafff 50%);
            // }
            
            img{
                width: 12px;
                margin-right: 5px;
            }
            .d-start-desc{
                margin: 20px 0;
                font-size: 12px;
                color: #CCCCCC;
                .d-start-desc-show{
                    color: red;
                }
                .d-start-desc-a{
                    color: #1d6dff;
                    text-decoration: underline;
                }
            }
        }
    }
</style>