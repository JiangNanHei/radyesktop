<template>
    <div class="sensitive-words-wrapper">
        <div class="d-monitoring-live">
            <p class="d-live-monitoring-title">敏感词查询</p>
            <div class="demo-input-suffix">
                <div class="search_box">
                    <el-input
                        v-model = "videotablsearch"
                        placeholder="请输入关键词进行敏感词查找"
                        >
                    </el-input>
                    <el-button type="primary" @click="searchResult">搜索</el-button>
                </div>
            </div>
        </div>
        <div class="d-sensitive-result" :class="{sensitivecls: sensitive_type}">
            {{sensitive_result}}
            <!-- 该商品没有视频 -->
            <!-- 此关键词可能涉及侵权、色情、反动、低俗等信息，建议不要使用！请您重新输入 -->
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
                // 搜索框内容
                videotablsearch: '',
                // 搜索结果
                sensitive_result: '',
                // 搜索结果状态
                sensitive_type: ''
            };
        },
        methods: {
            searchResult() {
                const _this = this
                this.$http({
                    url: "/tool_sensitive_words.json",
                    method: "GET",
                    data : this.$http.adornParams({
                        
                    },true)
                }).then(({data}) => {
                    // console.log(data)
                    _this.sensitive_result = data.sensitive_result
                    _this.sensitive_type = data.sensitive_type
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
        computed: {
            
        },
        created() {
            
        },
    };
</script>
<style lang="less" scoped>
    .sensitive-words-wrapper{
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
        }
        .d-live-monitoring-title{
            font-size: 16px;
            color: #FFFFFF;
            margin-bottom: 20px;
        }
        .d-sensitive-result{
            margin-top: 20px;
            font-size: 14px;
            color: red;
        }
        .sensitivecls{
            color: green;
        }
    }
</style>