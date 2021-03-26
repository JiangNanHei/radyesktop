<template>
    <div class="short-videos-wrapper-tow">
        <!-- 数据筛选 -->
        <div class="filtratedata">
            <ul class="filtratedata_list">
                <li class="filtratedata_item">
                    <span class="timepicker_span_tow">下载次数</span>
                    <el-select v-model="saleroom_value" placeholder="请选择" clearable>
                        <el-option
                        v-for="item in saleroom"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <li class="filtratedata_item">
                    <span class="timepicker_span_tow">上架时间</span>
                    <el-select v-model="sales_volume_value" placeholder="请选择" clearable>
                        <el-option
                        v-for="item in sales_volume"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    components: {
        
    },
    props: ['saleroom','sales_volume'],
    data() {
        return {
            saleroom_value : '',
            sales_volume_value : '',
        };
    },
    mounted () {
       
    },
    methods: {
        
    },
};
</script>
<style lang="less" scoped>
    .short-videos-wrapper-tow{
        // selsect 选择器
        .el-select-dropdown{
            border:none !important;
            background:none !important;
            .popper__arrow{
                border-bottom-color: #19477A !important;
                &:after{
                    // border: #0B315C;
                    // border-bottom-color: #19477A !important;
                    display: none;
                }
            }
            .el-scrollbar{
                border-radius: 6px;
            }
            .el-select-dropdown__wrap{
                background: #092A4D;
                border:none;
                .el-scrollbar__view{
                    
                    padding-bottom: 20px;
                    background: #19477A;
                    .el-select-dropdown__item{
                        // line-height: normal !important;
                        color:#fff;
                        &:hover{
                            background: #0B315C;
                        }
                    }
                    .selected{
                        color:#248FFF;
                    }
                }
            }
        }
        .el-select-dropdown__item.hover, .el-select-dropdown__item:hover{
            background: #0B315C !important;
        }
        /deep/.el-select{
            .el-input{
                .el-input__inner{
                    color:#fff;
                    width: 180px;
                    background: #0D2F55 !important;
                    border:1px solid #999 !important;
                }
            }
        }
        // 数据筛选
        .filtratedata{
            margin-top:20px;
            .filtratedata_list{
                .filtratedata_item{
                    // text-align: right;
                    margin-bottom:20px;
                    position: relative;
                    // width: 20%;
                    width: 250px;
                    // min-width: 300px;
                    display: inline-block;
                    color:#fff;
                    .el-select {
                        margin-right: 10px;
                    }
                    .timepicker_span_tow {
                        line-height: 32px;
                        display: inline-block;
                        font-size: 12px;
                        margin-right: 10px;
                    }
                }
            }
        }
    }
</style>
