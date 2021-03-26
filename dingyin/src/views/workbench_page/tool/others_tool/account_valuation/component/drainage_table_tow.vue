<template>
    <div class="account-valuation-list">
        <div class="box">
            <p class="title_p">账号估值</p>
            <div class="d-monitor-title">
                <el-button type="primary" @click="show_delete = !show_delete">管理列表</el-button>
            </div>
            <div 
                class="d-live-search"
                v-for="(item, index) in valuation" 
                :key="index" 
                :class="{dliveover: !item.status_style.status_number,deletewidth: show_delete}"
                >
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
                        <p class="d-live-search-message-valuation">估值：<span :class="{valuationred: Boolean(item.number.length-1)}">{{item.number}}</span></p>
                    </div>
                    <div class="d-live-search-right">
                        <span class="d-live-search-message-title2">{{item.status_style.message}}</span>
                    </div>
                </div>
                <el-popconfirm title="你确定删除这项业务吗？ " @confirm="goDelete">
                    <div slot="reference" class="d-live-delete-icon" v-show="show_delete">
                        <img src="@/assets/images/my/delete.png">
                    </div>
                </el-popconfirm>
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
            monitoring_show : [],
            // 显示垃圾筐
            show_delete: false,
            visible: false
        };
    },
    mounted () {
        this.getData()
    },
    computed: {
        valuation () {
            return this.monitoring_show.filter((item) => {
                return item.number = (!isNaN(item.number) && item.number != '') ? (item.number + 'W') : '？'
            });
        }
    },
    methods: {
        getData() {
            const _this = this
            this.$http({
                url: "/tool_account_valuation_list.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
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
.account-valuation-list{
    color: #fff;
    background: #051C36;
    border-radius: 6px;
    padding: 20px;
    .box{
        color:#fff;
        .title_p{
            font-size: 16px;
        }
        .d-monitor-title{
            text-align: right;
        }
        .deletewidth{
            width: 96%!important;
        }
        .d-live-search{
            margin-top: 20px;
            width: 100%;
            position: relative;
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
                // flex: 1;
                justify-content: space-between;
                .d-live-message-show{
                    // min-width: 680px;
                    display: flex;
                    align-items: center;
                }
                .d-live-search-message-valuation{
                    font-size: 18px;
                    color: #FFFFFF;
                    .valuationred{
                        color: red;
                    }
                    >span{
                        font-size: 22px;
                    }
                }
                .d-live-search-img{
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    margin-right: 15px;
                    // vertical-align: sub;
                }
                .d-live-search-message{
                    line-height: 27px;
                    // width: 70%;
                    margin-right: 140px;
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
                    margin-right: 15px;
                    border: 1px solid #FBAE46;
                    width: 90px;
                    text-align: center;
                    border-radius: 12px;
                    padding-bottom: 2px;
                    .d-live-search-message-title2{
                        font-size: 14px;
                        color: #FBAE46;
                    }
                }
                &:hover{
                    background: #051C36;
                    border: 1px solid #248FFF;
                }
            }
            /deep/.el-popover__reference-wrapper{
                img{
                    cursor: pointer;
                }
            }
        }
        .dliveover{
            .d-live-search-right{
                border: 1px solid #24FF62!important;
                .d-live-search-message-title2{
                    color: #24FF62!important;
                }
            }
            
        }
    }
}
</style>
