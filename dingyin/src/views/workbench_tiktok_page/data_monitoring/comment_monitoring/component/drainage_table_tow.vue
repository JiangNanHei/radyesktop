<template>
    <div class="comment-under-way-wrapper">
        <div class="box">
            <p class="title_p">监控历史列表</p>
            <div class="d-monitor-title">
                <div class="headeroption">
                    <span class="d-comment-title-message">选择抖音号</span>
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
                    <p class="d-commont-title-desc">监控开始时间：<span>{{start_time}}</span></p>
                    <p class="d-commont-title-desc">监控结束时间：<span>{{end_time}}</span></p>
                </div>
                <div>
                    <el-button type="primary" @click="dialogTableVisible = true">管理监控历史账号</el-button>
                </div>
            </div>
            <el-dialog title="管理监控历史账号" :visible.sync="dialogTableVisible" :modal="false">
                <p class="d-comment-adjinistration-title">目前监控历史账号共有 <span>{{ialog_table_visible_number}}</span> 条</p>
                <el-card class="box-card">
                    <div v-for="(item, index) in ialog_table_visible" :key="index" class="text item">
                        <div class="d-comment-administration">
                            <span class="d-comment-administration-content">{{item.message}} 抖音号：{{item.douyin}}</span>
                            <el-popconfirm
                                title="你确定删除这项业务吗？"
                                @confirm="deleteThis"
                                >
                               <img slot="reference" src="@/assets/images/my/delete.png">
                            </el-popconfirm>
                            
                        </div>
                    </div>
                </el-card>
            </el-dialog>
            <detailed-table></detailed-table>
        </div>
    </div>
</template>

<script>
import detailedTable from "../../components/detailed-table"
export default {
    components: {
        detailedTable
    },
    props: {
        
    },
    data() {
        return {
            monitoring_show : [],
            selling_price: [],
            monitoringdata: '',
            start_time: '',
            end_time: '',
            //对话框显示
            dialogTableVisible: false,
            //管理监控数据
            ialog_table_visible: [],
            ialog_table_visible_number:''
        };
    },
    mounted () {
        this.getData()
    },
    methods: {
        getData() {
            const _this = this
            this.$http({
                url: "/monitoring_comment_history.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                //监控下拉菜单
                _this.selling_price = data.selling_price
                //下拉菜单默认选项
                _this.monitoringdata = data.monitoringdata
                //监控开始时间
                _this.start_time = data.start_time
                //监控结束时间
                _this.end_time = data.end_time
                _this.ialog_table_visible = data.ialog_table_visible
                _this.ialog_table_visible_number = data.ialog_table_visible_number
                if(data.code == 200){
                    
                }else if(data.code == 401){
                    
                }
                else{
                    
                }

            }).catch(err => {
                console.log(err)
            })
        },
        deleteThis () {
            alert('等待接口进行返回')
        }
       
    },
};
</script>
<style lang="less" scoped>
.comment-under-way-wrapper{
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
            margin-bottom: 20px;
        }
        /deep/.headeroption{
            display: flex;
            color: #CCCCCC;
            align-items: center;
            .filtratedata_item{
                color:#fff;
                .el-select {
                    margin-right: 20px;
                    width: 400px;
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
            .d-comment-title-message{
                font-size: 14px;
                color: #FFFFFF;
                margin-right: 10px;
            }
            .d-commont-title-desc{
                font-size: 14px;
                color: #CCCCCC;
                >span{
                    color: #FFFFFF;
                    margin-right: 10px;
                }
            }
        }
        /deep/.el-dialog{
            background: #0E3D72!important;
        }
        /deep/.el-card{
            border: none;
            background: none;
        }
        /deep/.el-card__body{
            padding: 0;
            background: #0E3D72;
        }
        /deep/.el-card.is-always-shadow{
            box-shadow: none;
        }
        .d-comment-adjinistration-title{
            margin-bottom: 10px;
            font-size: 14px;
            color: #999999;
            >span{
                color: #FFFFFF;
            }
        }
        .d-comment-administration{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            font-size: 14px;
            color: #FFFFFF;
            .d-comment-administration-content{
                display: inline-block;
                width: 95%;
                padding: 10px;
                background: #041F3D;
                border-radius: 6px;
            }
            img{
                width: 20px;
                cursor: pointer;
            }
        }
        
                    
    }
}
</style>