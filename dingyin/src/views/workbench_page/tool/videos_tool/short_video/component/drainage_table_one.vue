<template>
    <div class="short-videos-wrapper-one">
        <div class="wrapper_content">
            <div class="d-monitoring-live">
                <div class="demo-input-suffix">
                    <div class="search_box">
                        <el-input
                            v-model = "videotablsearch"
                            placeholder="请输入你要查找的内容"
                            >
                        </el-input>
                        <el-button type="primary">搜索</el-button>
                    </div>
                    <span>素材库共计{{total_number}}条视频拍摄脚本</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        props: ['total_number'],
        data() {
            return {
                videotablsearch: ''
            };
        },
        methods: {
            
        },
        computed: {
            
        },
        created() {
            
        },
    };
</script>
<style lang="less" scoped>
    .short-videos-wrapper-one{
        margin-bottom: 20px;
        .d-monitoring-live{
            .demo-input-suffix{
                >span{
                    color: #CCCCCC;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            /deep/.search_box{
                display: inline-block;
                position: relative;
                input {
                    width: 280px;
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
        }
        
    }
</style>