<template>
    <div>
        <div class="demo-input-suffix">
            <div>
                <div class="search_box">
                    <el-input
                        v-model = "videotablsearch"
                        placeholder="请输话题名称"
                        >
                    </el-input>
                    <el-button type="primary" @click="videotablebut">搜索</el-button>
                </div>
                <span>话题库共计{{total_data}}条话题</span>
            </div>
            
            <span class="update_time">更新时间：2021-01-01 23:59</span>
        </div>
        <!-- table -->
        <el-table 
        :data="content.slice((currpage -1) * pagesize, currpage * pagesize)" 
        :default-sort = "{prop: 'release_time', order: 'descending'}"
        >
            <el-table-column min-width="30px" align="center" label="排名">
                <template slot-scope="scope">
                    <div class="columnone">
                        <span>{{scope.row.ranking}}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column min-width="60px" align="center" label="话题">
                <template slot-scope="scope">
                    <div class="columntow">
                        <div class="userImg">
                            <img :src="scope.row.video_content.imgurl">
                        </div>
                        <div class="userName">
                            <span class="spanone">{{scope.row.video_content.title}}</span>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="参与人数" prop="estimate_saleroom">
                <template slot-scope="scope">
                    {{scope.row.participants}}
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="总播放量" prop="transpond">
                <template slot-scope="scope">
                    {{scope.row.total_playback}}<span>亿</span>
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="参与人数上升趋势" prop="give">
                <template slot-scope="scope">
                    <div class="ranking_trend">
                        <div v-if="scope.row.upward_trend>=0" class="ranking_up">
                            <div class="triangle_box">
                                <div class="triangle"></div>
                            </div>
                            <div class="content">
                                上升{{scope.row.upward_trend}}名
                            </div>
                        </div>
                        <div v-else class="ranking_down">
                            <div class="triangle_box">
                                <div class="triangle"></div>
                            </div>
                            <div class="content">
                                下降{{Math.abs(scope.row.upward_trend)}}名
                            </div>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" min-width="100px" label="热门视频top3" prop="sales_amount">
                <template slot-scope="scope">
                    <div class="d-music-videos">
                        <div class="d-music-img" v-for="(item, index) of scope.row.hot_videos" :key="index">
                            <img :src="item.imgUrl">
                            <div class="d-music-img-desc">
                                <span class="el-icon-loading"></span>
                                <span>{{item.desc}}</span>
                            </div>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" label="操作">
                <div class="table_button_group">
                    <el-button type="primary" @click="goMusicdetailscreen">话题详情</el-button>
                    <el-button type="primary" >加入关注</el-button>
                </div>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        components: {
            
        },
        props: ["content","total_data"],
        data() {
            return {
                // 搜索框input
                videotablsearch : '',
                // 分页器
                pagesize: 10,
                currpage: 1,
               
            };
        },
        methods: {
            // table搜索框搜索按钮
            videotablebut(){
                // if(!this.videotablsearch){
                //     this.towtableData = this.towtableData_master;
                // }else{
                //     this.towtableData = this.towtableData_master;
                //     this.towtableData = this.towtableData.filter(data => !this.videotablsearch || data.video_content.title.toLowerCase().includes(this.videotablsearch.toLowerCase()))
                // }
                
            },
            handleSizeChange(val) {
                console.log(val);
                this.pagesize = val;
            },
            handleCurrentChange(val) {
                console.log(val);
                this.currpage = val;
            },
            goMusicdetailscreen(){
                this.$router.replace('/topicsshow');
            }
        },
    };
</script>

<style lang="less" scoped>
    .demo-input-suffix{
        display: flex;
        justify-content: space-between;
        span{
            font-size: 12px;
            color: #FFFFFF;
        }
        .search_box{
            margin-right: 10px;
        }
        .update_time{
            line-height: 32px;
        }
    }
    /deep/.search_box{
        display: inline-block;
        position: relative;
        input {
            width: 320px;
            height: 32px;
            border-radius: 25px;
            background: #0D2F55;
            font-size: 14px;
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

    /deep/.el-table__body-wrapper {
        overflow: hidden !important;

        .el-table__body {
            width: 100.1% !important;
        }
    }

    /deep/.content {
        overflow: hidden;
        user-select: none;
        padding: 0px;

        >.tabheader {
            >.el-tabs__header {
                .el-tabs__nav-wrap::after {
                    display: none !important;
                }

                .el-tabs__active-bar {
                    display: none;
                }

                .el-tabs__item {
                    padding: 0px;
                    margin-right: 20px;
                    display: inline-block;
                    white-space: nowrap;
                    cursor: pointer;
                    background: #103A6B;
                    border: 1px solid #103A6B;
                    color: #fff;
                    -webkit-transition: .1s;
                    transition: .1s;
                    font-weight: 500;
                    font-size: 14px;
                    border-radius: 4px;
                    width: 112px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;

                    &:hover {
                        border-color: hsla(0, 0%, 100%, .5);
                    }

                }

                .is-active {
                    background-image: -webkit-linear-gradient(45deg, #1d6dff, #0dafff);
                    border: none;
                }
            }
        }
    }

    /deep/.el-tabs__item {
        color: #fff !important;
    }

    /deep/.el-table__header-wrapper {
        .has-gutter {
            color: #ccc;
        }

        background: #144174 !important;

        tr {
            background: rgba(0, 0, 0, 0) !important;
        }

        th {
            background: rgba(0, 0, 0, 0) !important;
            padding: 20px 0 !important;
            border: none !important;
            font-size: 14px;

            &:nth-child(2) {
                text-align: left;
            }
        }
    }


    // 身体
    /deep/.el-table__row {
        background-color: #082C55 !important;

        td {
            border-bottom: 1px solid #326CAD !important;
            height: 88px;
        }
        &:last-child{
            td{
                border:0px !important;
            }   
        }
    }
    /deep/.el-table{
        margin-top: 30px;
        border-radius: 5px 5px 0 0;
        background: #144174;
        tr{
            td {
                color: #fff;
            }

            &:hover {
                td {
                    background-color: hsla(0, 0%, 100%, .02);
                }
            }
        }
    }

    /deep/.el-table::before {
        display: none !important;
    }

    /deep/.cell {
        white-space: normal;
        word-break: break-all;
        line-height: 23px;
        // padding: 0px !important;
    }

    /deep/.is-center {
        .ranking_trend{
            .ranking_up{
                position: relative;
                color:#24FF62;
                display: flex;
                .triangle_box{
                    width: 45%;
                    // flex:1;
                    text-align: right;
                    margin-left: -12%;
                    margin-right: 10px;
                    .triangle{
                        display: inline-block;
                        width: 0;
                        height: 0;
                        border-left: 5px solid transparent;
                        border-right: 5px solid transparent;
                        border-bottom: 10px solid #24FF62;
                    }
                }
                .content{
                    flex:1;
                    display: inline-block;
                    text-align: left;
                }
            }
            .ranking_down{
                position: relative;
                color:#FF2424;
                display: flex;
                .triangle_box{
                    width: 45%;
                    // flex:1;
                    text-align: right;
                    margin-left: -12%;
                    margin-right: 10px;
                    .triangle{
                        display: inline-block;
                        width: 0;
                        height: 0;
                        border-left: 5px solid transparent;
                        border-right: 5px solid transparent;
                        border-top: 10px solid #FF2424;
                    }
                }
                .content{
                    flex:1;
                    display: inline-block;
                    text-align: left;
                }
            }
        }
        .columnone {
            span {
                display: inline-block;
                font-size: 20px;
                color: #fff;
                height: 26px;
                width: 26px;
                text-align: center;
                padding-top: 2px;
                background-size: cover;
                background-position: 50% center;
                font-size: 12px;
                margin: 0 3px;
                line-height: 23px;
                
            }
        }

        .columntow {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;

            /deep/.userImg {
                width: 50px;
                height: 50px;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                cursor: pointer;
                margin-right: 6px;
                -ms-flex-negative: 0;
                flex-shrink: 0;
                position: relative;

                img {
                    object-fit: contain;
                    border-radius: 3px;
                    width: 50px;
                    height: 50px;
                    object-fit: contain;
                    border-radius: 25px;
                    
                }

                .live_button_ing {
                    padding: 0 2px;
                    position: absolute;
                    bottom: -8px;
                    left: 0;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    -webkit-box-pack: justify;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                    color: #fff;
                    width: 60px;
                    height: 17px;
                    background: linear-gradient(-42deg, #ff1167, #f1278a);
                    border-radius: 14px;
                    padding-left: 2px;
                    font-size: 12px;

                    img {
                        width: 28px;
                        float: left;
                        position: relative;
                        top: -1px;
                        left: -5px;

                    }

                    span {
                        position: absolute;
                        left: 20px;
                        font-size: 12px;
                        color: #fff;
                    }
                }
            }

            .userName {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                text-align: left;
                p{
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    font-size: 14px;
                }
                .d-music-time{
                    color: #CCCCCC;
                }
            }
        }
        .d-music-videos{
            display: flex;
            .d-music-img{
                width: 60px;
                height: 80px;
                margin-right: 5px;
                position: relative;
                img {
                    width: 60px;
                    height: 80px;
                    border-radius: 5px;
                }
                .d-music-img-desc{
                    position: absolute;
                    bottom: 0;
                    left: 10px;
                }
            }
        }
    }
    /deep/.el-pagination.is-background .btn-next,
    /deep/.el-pagination.is-background .btn-prev,
    /deep/.el-pagination.is-background .el-pager li{
        background: none;
        color: #fff;
        border: 1px solid #E1EAF7;
    }

    /deep/.el-pagination.is-background .el-pager li:not(.disabled).active {
        background: #248FFF;
        border:1px solid #248FFF;
    }
</style>