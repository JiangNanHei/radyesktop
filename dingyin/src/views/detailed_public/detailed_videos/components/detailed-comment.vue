<template>
    <div class="live-wrapper">
        <div class="d-live-trend">
            <p>评论热词TOP10</p>
            <div class="d-star-desc-item-echart">
                <div class="d-myChart" id="d-myChart-star" :style="{width: '100%', height: '240px'}"></div>
            </div>
        </div>
        <div class="d-live-record">
            <p>所有评论（434242）</p>
            <el-row :gutter="80">
                <el-col :span="12" v-for="(item, index) of comment_data" :key="index" style="border-bottom: 1px solid #326CAD;">
                    <div class="grid-content bg-purple d-comment-show">
                        <div class="d-comment-img">
                            <img :src="item.imgUrl">
                            <div class="d-comment-desc">
                                <span>{{item.title}}</span>
                                <p>{{item.desc}}</p>
                            </div>
                        </div>
                        <div class="d-comment-icon">
                            <span class="el-icon-place"></span>
                            <p>{{item.message}}</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <div class="el_pagination_box clearfix">
            <el-pagination @size-change="handleSizeChange" @curren-change="handleCurrentChange"
                :page-sizes="[10,20,30,40,50,100]" :page-size="pagesize" background layout="prev, pager, next"
                :total="comment_data.length">
            </el-pagination>
        </div>
        </div>
    </div>
</template>

<script>
import { echartsBar, echartsPie } from '@/assets/js/echarts_self.js'
import { dateKey, dateValue } from '@/assets/js/independent_self.js'
export default {
    naem : '实时直播榜',
    name: "detailed-live",
    components: {
        
    },
    props: {

    },
    data() {
        return {
            comment_data: [],
            // 分页器
            pagesize: 10,
            currpage: 1,
        }
    },
    cmputed: {
      
    },
    created() {
        
    },
    mounted() {
        this.getData()
    },
    methods: {
       getData() {
            const _this = this
            this.$http({
                url: "/videos_detailed_comment.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.comment_data = data.comment_data
                // 直播观看人数趋势--柱状图
                echartsBar(document.getElementById('d-myChart-star'), dateKey(data.live_watch), dateValue(data.live_watch))
                if(data.code == 200){
                    
                }else if(data.code == 401){
                    
                }
                else{
                    
                }
            }).catch(err => {
                console.log(err)
            })
        },
        handleSizeChange(val) {
            console.log(val);
            this.pagesize = val;
        },
        handleCurrentChange(val) {
            console.log(val);
            this.currpage = val;
        },
    },
};
</script>

<style lang="less" scoped>  
    .live-wrapper{
        .d-live-trend{
            border-radius: 6px;
            padding: 20px;
            background: #051C36;
            margin-bottom: 10px;
            >p{
                font-size: 16px;
                color: #FFFFFF;
            }
        }
        
        .d-live-record{
            border-radius: 6px;
            padding: 20px;
            background: #051C36;
            overflow: hidden;
            margin-top: 10px;
            >p{
                font-size: 16px;
                margin-bottom: 20px;
                color:#FFFFFF;
            }
            .d-comment-show{
                display: flex;
                justify-content: space-between;
                padding-top: 10px;
                padding-bottom: 10px;
                .d-comment-img{
                    display: flex;
                    align-items: center;
                    >img{
                        width: 24px;
                        height: 24px;
                        border-radius: 12px;
                        margin-right: 5px;
                    }
                    .d-comment-desc{
                        >span{
                            font-size: 14px;
                            color: #999999;
                        }
                        >p{
                            font-size: 12px;
                            color: #FFFFFF;
                        }
                    }
                }
                .d-comment-icon{
                    text-align: center;
                    >p{
                        font-size: 14px;
                        color: #FFFFFF;
                    }
                }
            }
             // 分页器
            /deep/.el_pagination_box {
                // background-color: #082C55;
                padding: 30px 0;

                .el-pagination {
                    float: right;
                }
            }

            .btn-next,
            .btn-prev,
            .el-pager li {
                background: none;
                color: #fff;
                border: 1px solid #E1EAF7;
            }

            .el-pagination.is-background .el-pager li:not(.disabled).active {
                background: #248FFF;
            }
        }
    }
    
</style>