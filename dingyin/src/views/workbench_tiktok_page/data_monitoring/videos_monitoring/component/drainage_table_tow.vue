<template>
    <div class="under_way_wrapper">
        <div class="box">
            <div class="under_way_title">
                <p class="title_p">监控完成列表</p>
                <el-button type="primary" @click="show_delete = !show_delete">管理列表</el-button>
            </div>
            <el-card class="box-card">
                <div v-for="(item, index) in monitoring_show" :key="index" class="text item">
                    <div class="d-monitoring-show">
                        <div class="d-monitoring_under_way" :class="{deletewidth: show_delete}">
                            <div class="d-live-message-show">
                                <img class="d-live-search-img" :src="item.imgUrl">
                                <div class="d-live-search-message">
                                    <p class="d-live-search-message-title"><span>{{item.message}}</span>{{item.title}}</p>
                                    <p class="d-live-search-message-desc">发布者：{{item.autor}}</p>
                                    <p class="d-live-search-message-desc">发布时间：{{item.release_time}}</p>
                                    <p class="d-live-search-message-desc">开始监控时间：{{item.start_time}}</p>
                                    <p class="d-live-search-message-desc">剩余时间：{{item.surplus_time}}</p>
                                </div>
                            </div>
                            <div class="d-live-search-right">
                                <div v-for="(items, index) in item.remarks_message" :key="index" class="d-under-way-right-message">
                                    <span class="d-live-search-message-title">{{items.title}}</span>
                                    <p class="d-live-search-message-number">{{items.number}}</p>
                                    <span class="d-live-search-message-desc">{{items.desc}}</span>
                                </div>
                                <el-button type="primary" size="mini" @click="goDetaildevideos">查看视频</el-button>
                            </div>
                        </div>
                        <el-popconfirm title="你确定删除这项业务吗？ " @confirm="goDelete">
                            <div slot="reference" class="d-live-delete-icon" v-show="show_delete">
                                <img src="@/assets/images/my/delete.png">
                            </div>
                        </el-popconfirm>
                    </div>
                    
                </div>
            </el-card>
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
        };
    },
    mounted () {
        this.getData()
    },
    methods: {
        getData() {
            const _this = this
            this.$http({
                url: "/monitoring_videos_history.json",
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
        goDetaildevideos () {
            this.$router.replace('/videosshow')
        },
        goDelete(){
            alert('等待接口删除本项')
        },
       
    },
};
</script>
<style lang="less" scoped>
.under_way_wrapper{
    color: #fff;
    background: #051C36;
    border-radius: 6px;
    padding: 20px;
    .box{
        color:#fff;
        .under_way_title{
            display: flex;
            align-items: start;
            justify-content: space-between;
        }
        .title_p{
            font-size: 16px;
            margin-bottom:30px;
        }
        /deep/.el-card{
            background: #051C36;
            border: none;
        }
        /deep/.el-card__body{
            padding: 0;
        }
        .d-monitoring-show{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .deletewidth{
                width: 96%;
            }
            img{
                cursor: pointer;
            }
        }
        .d-monitoring_under_way{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background: #0D2F55;
            border-radius: 27px;
            border: 1px solid #979797;
            margin-bottom: 20px;
            width: 100%;
            .d-live-message-show{
                display: flex;
                align-items: center;
                .d-live-search-img{
                    width: 80px;
                    height: 107px;
                    border-radius: 3px;
                    margin-right: 15px;
                }
                .d-live-search-message{
                    .d-live-search-message-title{
                        font-size: 16px;
                        color: #FFFFFF;
                        margin-bottom: 5px;
                        >span{
                            display: inline-block;
                            width: 230px;
                            white-space: nowrap;/*保证文本内容不会自动换行，如果多余的内容会在水平方向撑破单元格*/
                            overflow: hidden; /*隐藏超出单元格的部分*/
                            text-overflow: ellipsis; /*将被隐藏的那部分用省略号代替*/
                            vertical-align: top;
                        }
                    }
                    .d-live-search-message-desc{
                        font-size: 12px;
                        color: #CCCCCC;
                        line-height: 22px;
                    }
                }
                 
            }
            .d-live-search-right{
                display: flex;
                // line-height: 24px;
                // margin-right: 15px;
                text-align: center;
                align-items: center;
                .d-under-way-right-message{
                    margin: 0 20px;
                }
                .d-live-search-message-title{
                    font-size: 14px;
                    color: #CCCCCC;
                }
                .d-live-search-message-number{
                    font-size: 20px;
                    color: #FFFFFF;
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
        
                    
    }
}
</style>
