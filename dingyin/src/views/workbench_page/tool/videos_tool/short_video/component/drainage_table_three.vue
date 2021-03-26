<template>
    <div class="short-videos-wrapper-three">
        <el-row :gutter="10">
            <el-col :span="6" v-for="(item, index) of detailed_purple" :key="index">
                <div class="grid-content bg-purple d-short-videos-purple">
                    <p class="d-short-videos-purple-title">{{item.title}}<span>{{item.title_desc}}</span></p>
                    <div class="d-short-videos-purple-message">
                        <span class="d-short-videos-message-show">历史下载次数：{{item.history_download}}</span>
                        <span class="d-short-videos-message-show">素材发布时间：{{item.release_time}}</span>
                    </div>
                    <div class="d-short-videos-desc">
                        <p>简介：</p>
                        <span>{{item.desc}}</span>
                    </div>
                    <div class="d-short-videos-btn">
                        <el-button type="primary" @click="searchResult(index)">详情与下载</el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
        <!-- 翻页 -->
        <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pagesize"
        :total="detailed_purple.length"
        @current-change="current_change"
        >
        </el-pagination>
        <!-- 弹出框 -->
        <el-dialog
            :visible.sync="dialogVisible"
            width="35%"
            :modal="false"
            top="25vh"
            >
            <div class="grid-content bg-purple d-short-videos-detailed">
                <p class="d-short-videos-purple-title">{{detailed_title}}<span>{{detailed_title_desc}}</span></p>
                <div class="d-short-videos-purple-message">
                    <span class="d-short-videos-message-show">历史下载次数：{{detailed_history_download}}</span>
                    <span class="d-short-videos-message-show">素材发布时间：{{detailed_release_time}}</span>
                </div>
                <div class="d-short-videos-desc">
                    <p>简介：</p>
                    <span>{{detailed_desc}}</span>
                </div>
                <div class="d-short-videos-btn">
                    <el-button type="primary">下载脚本素材</el-button>
                </div>
                <p class="d-start-desc">下载共需消耗
                    <span class="d-start-desc-show"> {{consume_number}} </span>
                    次素材下载次数，本月剩余
                    <span class="d-start-desc-show"> {{surplus_number}} </span>
                    次下载次数，我要
                    <span class="d-start-desc-a" @click="rechargeDetailed">充值下载次数</span>
                </p>
            </div>
        </el-dialog>
        <el-dialog
        title="充值下载素材次数"
        :visible.sync="dialogRecharge"
        :modal="false"
        >
            <detailed-recharge :content="result"></detailed-recharge>
        </el-dialog>
    </div>
</template>

<script>
import detailedRecharge from '@/components/page/public/detailed-recharge'
export default {
    components: {
        detailedRecharge
    },
    props: ['detailed_purple'],
    data() {
        return {	
            page: 1,//当前页码
            pagesize: 10, //每页的数据条数
            dialogVisible: false, //详情的显示
            dialogRecharge: false, //充值详情
            detailed_title: '', //详情的title
            detailed_title_desc: '',//详情的desc
            detailed_history_download: '',//详情的下载次数
            detailed_release_time: '',//详情的素材发布时间
            detailed_desc: '',//详情的简介
            consume_number: '',//详情的消耗次数
            surplus_number: '',//详情的剩余次数
            result: {},//充值详情
        };
    },
    mounted () {
        
    },
    methods: {
        // 获取详情
        searchResult(index) {
            
            this.dialogVisible = true
            const _this = this
            this.$http({
                url: "/tool_short_videos_detailed.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.detailed_title = data.detailed_title
                _this.detailed_title_desc = data.detailed_title_desc
                _this.detailed_history_download = data.detailed_history_download
                _this.detailed_release_time = data.detailed_release_time
                _this.detailed_desc = data.detailed_desc
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
        // 翻页
        current_change(val) {       				
            this.page = val;								     			
        },
        // 充值详情
        rechargeDetailed() {
            this.dialogVisible = false
            this.dialogRecharge = true
            const _this = this
            this.$http({
                url: "/tool_short_videos_recharge.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.result = data.result
                
                if(data.code == 200){
                    
                }else if(data.code == 401){
                    
                }
                else{
                    
                }

            }).catch(err => {
                console.log(err)
            })
        }
    },
};
</script>
<style lang="less" scoped>
    .short-videos-wrapper-three{
        margin-top: 10px;
        .d-short-videos-purple{
            background: #123D6D;
            border-radius: 4px;
            padding: 10px;
            margin-top: 10px;
            .d-short-videos-purple-title{
                font-size: 16px;
                color: #FFFFFF;
                margin-bottom: 10px;
                >span{
                    font-size: 12px;
                    color: #FBAE46;
                    display: inline-block;
                    padding: 0 6px;
                    border-radius: 12px;
                    border: 1px solid #FBAE46;
                    margin-left: 5px;
                }
            }
            .d-short-videos-purple-message{
                display: flex;
                font-size: 12px;
                color: #CCCCCC;
                justify-content: space-between;
                .d-short-videos-message-show{
                    white-space: nowrap;/*保证文本内容不会自动换行，如果多余的内容会在水平方向撑破单元格*/
                    overflow: hidden; /*隐藏超出单元格的部分*/
                    text-overflow: ellipsis; /*将被隐藏的那部分用省略号代替*/
                }
            }
            .d-short-videos-desc{
                font-size: 12px;
                margin-top: 10px;
                >p{
                    margin-bottom: 5px;
                }
            }
            .d-short-videos-btn{
                text-align: center;
                margin-top: 15px;
            }
        }
        /deep/.el-pagination{
            text-align: right;
            margin-top: 10px;
        }
        /deep/.el-pagination.is-background .btn-prev{
            background: none;
            color: #fff;
            border: 1px solid #E1EAF7;
        }
        /deep/.el-pagination.is-background .btn-next{
            background: none;
            color: #fff;
            border: 1px solid #E1EAF7;
        }
        /deep/.el-pagination.is-background .el-pager .number{
            background: none;
            color: #fff;
            border: 1px solid #E1EAF7;
        }
        /deep/.el-pagination.is-background .el-pager .active{
            background: #409EFF;
            color: #fff;
            border: none;
        }
        /deep/.el-dialog{
            background: #082C55!important;
            border: none;
            border-radius: 12px;
        }
        /deep/.el-dialog__body{
            padding-top: 0;
        }
        // 弹出框显示内容
        .d-short-videos-detailed{
            .d-short-videos-purple-title{
                font-size: 16px;
                color: #FFFFFF;
                margin-bottom: 10px;
                >span{
                    font-size: 12px;
                    color: #FBAE46;
                    display: inline-block;
                    padding: 0 6px;
                    border-radius: 12px;
                    border: 1px solid #FBAE46;
                    margin-left: 5px;
                }
            }
            .d-short-videos-purple-message{
                display: flex;
                font-size: 12px;
                color: #CCCCCC;
                justify-content: flex-start;
                margin-bottom: 20px;
                .d-short-videos-message-show{
                    white-space: nowrap;/*保证文本内容不会自动换行，如果多余的内容会在水平方向撑破单元格*/
                    overflow: hidden; /*隐藏超出单元格的部分*/
                    text-overflow: ellipsis; /*将被隐藏的那部分用省略号代替*/
                    margin-right: 20px;
                }
            }
            .d-short-videos-desc{
                font-size: 12px;
                margin-top: 10px;
                color: #FFFFFF;
                >p{
                    margin-bottom: 5px;
                }
            }
            .d-short-videos-btn{
                text-align: center;
                margin-top: 30px;
            }
            .d-start-desc{
                margin-top: 20px;
                font-size: 12px;
                color: #CCCCCC;
                text-align: center;
                .d-start-desc-show{
                    color: red;
                }
                .d-start-desc-a{
                    color: #1d6dff;
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
        }
    }
</style>
