<template>
    <div class="table_box">
        <!-- 数据分类 -->
        <classificationdata :classification_data="classification_data" ref="classificationdata"></classificationdata>
        <el-table
            ref="table"
            v-infinite-scroll="load" infinite-scroll-disabled="disabled"
            :data="tableData"
            style="width: 100%;">
            <el-table-column width="100px" align="center" label="排名">
                <template slot-scope="scope">
                    <div class="columnone">
                        <span v-if="scope.row.ranking === 1" class="The_first_three">{{scope.row.ranking}}
                            <i style="color:#FF4A4A" class="iconfont icon-paimingbiaoqian"></i>
                        </span>
                        <span v-else-if="scope.row.ranking === 2" class="The_first_three">{{scope.row.ranking}}
                            <i style="color:#4AA5FF" class="iconfont icon-paimingbiaoqian"></i>
                        </span>
                        <span v-else-if="scope.row.ranking === 3" class="The_first_three">{{scope.row.ranking}}
                            <i style="color:#FFAC4A" class="iconfont icon-paimingbiaoqian"></i>
                        </span>
                        <span v-else>{{scope.row.ranking | capitalize}}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column min-width="140px" align="center" label="直播间">
                <template slot-scope="scope">
                    <div class="columntow">
                        <div class="userImg">
                            <el-image :src="scope.row.tow.imgurl"></el-image>   
                        </div>
                        <div class="userName">
                            <p class="userName_p1">
                                <span class="span1">{{scope.row.tow.title}}</span>
                                <span class="span2">{{scope.row.tow.condition}}</span>
                            </p>
                            <p class="userName_p2">{{scope.row.tow.type}}</p>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" label="达人">
                <template slot-scope="scope">
                    <div class="intelligent">
                        <p class="p1">{{scope.row.three.name}}</p>
                        <p class="p2"><span>粉丝 : </span>{{scope.row.three.fans | NumToUnitNum}}</p>
                    </div>
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="直播时长">
                <template slot-scope="scope">
                    <span>{{scope.row.four}}</span>
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="视频引流占比" prop="five">
                <template slot-scope="scope">
                    <span>{{scope.row.five}}</span>
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="视频引流人数" prop="six">
                <template slot-scope="scope">
                    <span>{{scope.row.six | NumToUnitNum}}</span>
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="引流视频数" prop="seven">
                <template slot-scope="scope">
                    <span>{{scope.row.seven}}</span>
                </template>
            </el-table-column>
            <el-table-column width="140px" align="center" label="操作">
                <template slot-scope="scope">
                    <div class="table_button_group clearfix">
                        <el-button class="but1" type="primary" @click="goRealdetailscreen">直播详情</el-button>
                        <el-button class="but2" type="text" @click="openchildtable(scope.row)">查看引流视频详情</el-button>
                    </div>
                </template>
            </el-table-column>
            <el-table-column width="1px" align="center" type="expand">
                <template slot-scope="scope">
                    <el-table :data="scope.row.childrendata" style="width: 100%">
                        <el-table-column width="100px" align="center" label="排名">
                            <template slot-scope="scope">
                                <div class="columnone">
                                    <span>{{scope.row.ranking}}</span>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" label="视频">
                            <template slot-scope="scope">
                                <div class="columntow">
                                    <div class="userImg">
                                        <el-image :src="scope.row.video.imgurl"></el-image>
                                        
                                    </div>
                                    <div class="userName">
                                        <p class="userName_p1">
                                            {{scope.row.video.title}}
                                        </p>
                                    </div>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" label="引流人数">
                            <template slot-scope="scope">
                                <div class="rise_fans">
                                    <span>{{scope.row.drainage | NumToUnitNum}}</span>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column align="center" label="引流占比">
                            <template slot-scope="scope">
                                <div class="rise_fans">
                                    <span>{{scope.row.percentage}}%</span>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column sortable align="center" label="视频直播中点赞增量">
                            <template slot-scope="scope">
                                <div class="ranking_trend">
                                    <div v-if="scope.row.increment>=0" class="ranking_up">
                                        <div class="triangle_box">
                                            <div class="triangle"></div>
                                        </div>
                                        <div class="ranking_content">
                                            {{scope.row.increment | NumToUnitNum}}
                                        </div>
                                    </div>
                                    <div v-else class="ranking_down">
                                        <div class="triangle_box">
                                            <div class="triangle"></div>
                                        </div>
                                        <div class="ranking_content">
                                            {{Math.abs(scope.row.increment) | NumToUnitNum}}
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column width="140px" align="center" label="操作">
                            <div class="table_button_group">
                                <el-button type="primary" @click="videoparticulars">视频详情</el-button>
                            </div>
                        </el-table-column>
                    </el-table>
                </template>
            </el-table-column>
        </el-table>
        <p class="hint_empty underway" v-show="loading">加载中...</p>
        <p class="hint_empty" v-if="noMore">已经到底了0.0</p>
    </div>
</template>
<script>
import classificationdata from '@/components/page/classification_data'
  export default {
    naem : '视频引流榜',
    components: {
        classificationdata,
    },
    props: {

    },
    data() {
        return {
            //起始页数值为0
            count: 0,
            loading: false,
            // 数据分类 数据
            classification_data : {
                title : '分类',
                data : [
                    {
                        name:'全部',
                    },
                    {
                        name:'手机数码',
                    },
                    {
                        name:'电脑办公',
                    },
                    {
                        name:'服装饰品',
                    },
                    {
                        name:'美妆个护',
                    },
                    {
                        name:'户外运动',
                    },
                    {
                        name:'家用电器',
                    },
                    {
                        name:'食品百货',
                    },
                    {
                        name:'母婴玩具',
                    },
                    {
                        name:'鞋靴箱包',
                    },
                    {
                        name:'珠宝文玩',
                    },
                    {
                        name:'生活厨具',
                    },
                    {
                        name:'卧室家具',
                    },
                    {
                        name:'图书文娱',
                    },
                    {
                        name:'汽配摩托',
                    },
                    {
                        name:'其他商品',
                    },
                ]
            },

            // 初始数组
            tableData: [

            ],
            // 列表数据
            tableDataobj : {
                // 一共多少 页面 
                totalPages : 3,
                // 后端返回的数组
                tabDatalistone: [
                    {
                        ranking: 1,

                        tow : {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title : '湖南辣妹郭德纲',
                            condition : '正在直播',
                            type : '穿搭',
                        },

                        three : {
                            name : '长沙小美',
                            fans : 1777000
                        },

                        four : '2小时22分钟',
                        five : 30,
                        six : 1556000,
                        seven : 2,
                        childrendata : [
                            {
                                ranking : 1,
                                video : {
                                    imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                                    title : '今晚8点,神秘嘉宾,不见不散今晚8点,神秘嘉宾,不见不散今晚8点,神秘嘉宾,不见不散'
                                },
                                drainage : 556000,
                                percentage : 30,
                                increment : 119000,
                            },
                            {
                                ranking : 2,
                                video : {
                                    imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                                    title : '今晚8点,神秘嘉宾,不见不散今晚8点,神秘嘉宾,不见不散今晚8点,神秘嘉宾,不见不散'
                                },
                                drainage : 556000,
                                percentage : 30,
                                increment : 119000,
                            },
                            {
                                ranking : 3,
                                video : {
                                    imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                                    title : '今晚8点,神秘嘉宾,不见不散bu1jian1我就打我'
                                },
                                drainage : 556000,
                                percentage : 30,
                                increment : 119000,
                            },
                        ]
                    },
                    {
                        ranking: 2,

                        tow : {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title : '湖南辣妹郭德纲',
                            condition : '正在直播',
                            type : '穿搭',
                        },

                        three : {
                            name : '长沙小美',
                            fans : 1777000
                        },

                        four : '2小时22分钟',
                        five : 30,
                        six : 1556000,
                        seven : 2,
                        childrendata : [
                            {
                                ranking : 1,
                                video : {
                                    imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                                    title : '今晚8点,神秘嘉宾,不见不散'
                                },
                                drainage : 556000,
                                percentage : 30,
                                increment : 119000,
                            },
                            {
                                ranking : 2,
                                video : {
                                    imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                                    title : '今晚8点,神秘嘉宾,不见不散'
                                },
                                drainage : 556000,
                                percentage : 30,
                                increment : 119000,
                            },
                            {
                                ranking : 3,
                                video : {
                                    imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                                    title : '今晚8点,神秘嘉宾,不见不散'
                                },
                                drainage : 556000,
                                percentage : 30,
                                increment : 119000,
                            },
                        ]
                    },
                    {
                        ranking: 3,

                        tow : {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title : '湖南辣妹郭德纲',
                            condition : '正在直播',
                            type : '穿搭',
                        },

                        three : {
                            name : '长沙小美',
                            fans : 1777000
                        },

                        four : '2小时22分钟',
                        five : 30,
                        six : 1556000,
                        seven : 2,
                        childrendata : [
                            {
                                ranking : 1,
                                video : {
                                    imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                                    title : '今晚8点,神秘嘉宾,不见不散'
                                },
                                drainage : 556000,
                                percentage : 30,
                                increment : 119000,
                            },
                            {
                                ranking : 2,
                                video : {
                                    imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                                    title : '今晚8点,神秘嘉宾,不见不散'
                                },
                                drainage : 556000,
                                percentage : 30,
                                increment : 119000,
                            },
                            {
                                ranking : 3,
                                video : {
                                    imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                                    title : '今晚8点,神秘嘉宾,不见不散'
                                },
                                drainage : 556000,
                                percentage : 30,
                                increment : 119000,
                            },
                        ]
                    },
                ],
            },

            // 取后端返回内容的总页数
            totalPages: '',
        };
    },
    methods: {
        load() {
            // 滑到底部时进行加载
            this.loading = true;
            let timeout = setTimeout(() => {
                this.count += 1; //页数+1
                this.getMessage(); //调用接口，此时页数+1，查询下一页数据
                clearInterval(timeout);
            }, 2000);
        },
        getMessage() {
            // 数组拼接上后端返回的数组
            this.tableData = this.tableData.concat(this.tableDataobj.tabDatalistone);
            // 一共多少 页面 
            this.totalPages = this.tableDataobj.totalPages;
            this.loading = false;
        },
        //主要按钮前往 直播详情
        goRealdetailscreen() {
            // this.$router.replace('/');
        },
        //主要按钮前往 视频详情
        videoparticulars(){

        },
        // 查看引流视频详情 打开子列表
        openchildtable(row){
            console.log(row)
            const $table = this.$refs.table
            $table.toggleRowExpansion(row)
        }
    },
    computed: {
        noMore() {
            //当起始页数大于总页数时停止加载
            return this.count >= this.totalPages - 1;
        },
        disabled() {
            return this.loading || this.noMore;
        },
    },
    mounted(){
        this.getMessage()
    },
  }
</script>
<style lang="less" scoped>
    .table_box {
    }
</style>
<style lang="less" scoped>
    .el-table{
        border:none !important;
        // 伪元素
        &::before,&::after{
            display: none;
        }
        // 头部
        /deep/.el-table__header-wrapper{
            height: 64px;
            line-height: 64px;
            background: #144174 !important;
            th {
                background: #144174 !important;
                padding:0 !important;
                border: none;
                font-size: 14px;
                text-align: center;
                color: #ccc;
                &:nth-child(2){
                    text-align: left ;
                }
            }
            .is-sortable,.is-leaf{
                border:none !important;
            }
        }
        // 身体
        /deep/.el-table__body-wrapper{
            .el-table__body{
                .el-table__row{
                    background-color: #082C55 !important;
                    &:hover{
                        
                        td{
                            // background: none !important;
                            background-color: hsla(0, 0%, 100%, .02);
                        }
                    }
                    td{
                        color:#fff;
                        border:none;
                        border-bottom: 1px solid #326CAD;
                        text-align: center;
                        height: 88px;
                        // background: none !important;
                        .cell {
                            >span {
                                font-size: 14px;
                                color: #fff;
                                font-weight: 500;
                            }
                            .intelligent{
                                .p2{
                                    color:#999;
                                }
                            }
                            .table_button_group{
                                .el-button{
                                    display: block;
                                    margin:0 auto;
                                }
                                .but1{
                                    margin-top: 10px;
                                }
                                .but2{
                                    background: none !important;
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
                                    border-radius: 5px;
                                    overflow: hidden;
                                    img {
                                        object-fit: contain;
                                        border-radius: 3px;
                                        width: 50px;
                                        height: 50px;
                                        object-fit: contain;
                                        border-radius: 3px;
                                    }
                                }

                                .userName {
                                    font-size: 14px;

                                    text-align: left;
                                    .userName_p1{
                                        .span1{
                                            display: inline-block;
                                            width: 80px;
                                            white-space: nowrap;
                                            text-overflow: ellipsis;
                                            overflow: hidden;
                                        }
                                        .span2{
                                            display: inline-block;
                                            overflow: hidden;
                                        }
                                    }
                                    .userName_p2{
                                        font-size: 12px;
                                        color:#F0A847;
                                        padding: 0 10px;
                                        border-radius: 15px;
                                        display: inline-block;
                                        border:1px solid #F0A847;
                                    }
                                }
                            }

                            .columnthree {
                                position: relative;
                                display: -webkit-box;
                                display: -ms-flexbox;
                                display: flex;

                                .ImgBox {
                                    width: 40px;
                                    height: 40px;
                                    border-radius: 50%;
                                    overflow: hidden;
                                    -ms-flex-negative: 0;
                                    flex-shrink: 0;
                                    cursor: pointer;

                                    img {
                                        width: 100%;
                                        height: 100%;
                                    }
                                }

                                .user_count {
                                    color: #fff;
                                    margin-left: 10px;
                                    -webkit-box-flex: 1;
                                    -ms-flex: 1;
                                    flex: 1;
                                    overflow: hidden;
                                    display: -webkit-box;
                                    display: -ms-flexbox;
                                    display: flex;
                                    -webkit-box-orient: vertical;
                                    -webkit-box-direction: normal;
                                    -ms-flex-direction: column;
                                    flex-direction: column;
                                    -webkit-box-pack: space-evenly;
                                    -ms-flex-pack: space-evenly;
                                    justify-content: space-evenly;

                                    .name_box {
                                        display: -webkit-box;
                                        display: -ms-flexbox;
                                        display: flex;
                                        -webkit-box-align: center;
                                        -ms-flex-align: center;
                                        align-items: center;

                                        >div {
                                            max-width: 90%;
                                            cursor: pointer;
                                            font-size: 13px;
                                        }
                                    }

                                    .user_level_box {
                                        display: -webkit-box;
                                        display: -ms-flexbox;
                                        display: flex;
                                        -webkit-box-align: center;
                                        -ms-flex-align: center;
                                        align-items: center;
                                        color:#999;
                                        .rank_head_dyNum {
                                            font-size: 12px !important;
                                        }

                                        .level {
                                            font-size: 12px;
                                            color: #bebfc3;
                                            display: -webkit-box;
                                            display: -ms-flexbox;
                                            display: flex;
                                            -webkit-box-align: center;
                                            -ms-flex-align: center;
                                            align-items: center;

                                            .spanone {
                                                color:#999;
                                                margin-right: 5px;
                                            }

                                            .spantow {
                                                color: #fd2270;
                                            }

                                            .spanthree {
                                                width: 16px;
                                                height: 16px;
                                                border-radius: 3px;
                                                display: inline-block;
                                                margin-left: 3px;
                                                font-size: 12px;
                                                text-align: center;
                                                line-height: 16px;

                                                background: rgba(239, 124, 57, .1);
                                                color: #ef7c39;
                                            }
                                        }
                                    }
                                }
                            }

                            .salesAmount {
                                color: #face15 !important;
                            }
                        }
                    }
                    &:last-child{
                        td{
                            border:none;
                        }
                    }
                }
                tr{
                    // 嵌套的列表
                    .el-table__expanded-cell{
                        padding: 0 !important;
                        border: none;
                        td{
                            border-bottom: 1px solid #326CAD !important;
                        }
                        .el-table__header-wrapper{
                            background: #021D3B !important;
                            th{
                                background: #021D3B !important;
                            }
                        }
                        .el-table__body-wrapper{
                            .el-table__row{
                                background: #052447 !important;
                                .cell{
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
                                            margin-right: 10px;
                                            -ms-flex-negative: 0;
                                            flex-shrink: 0;
                                            position: relative;
                                            border-radius: 5px;
                                            overflow: hidden;
                                            img {
                                                object-fit: contain;
                                                border-radius: 3px;
                                                width: 50px;
                                                height: 50px;
                                                object-fit: contain;
                                                border-radius: 3px;
                                            }
                                        }

                                        .userName {
                                            width:100%;
                                            text-align: left;
                                            font-size: 14px;
                                            white-space: nowrap;
                                            text-overflow: ellipsis;
                                            overflow: hidden;
                                            // text-align: left;
                                            white-space: nowrap;
                                            .userName_p1{
                                                white-space: normal;
                                                text-overflow: -o-ellipsis-lastline;
                                                overflow: hidden;
                                                text-overflow: ellipsis;
                                                display: -webkit-box;
                                                -webkit-line-clamp: 2;
                                                -webkit-box-orient: vertical;
                                            }
                                        }
                                    }
                                    .ranking_trend{
                                        .ranking_up{
                                            position: relative;
                                            color:#24FF62;
                                            display: flex;
                                            .triangle_box{
                                                flex:1;
                                                text-align: right;
                                                margin-left: -20%;
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
                                            .ranking_content{
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
                                                flex:1;
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
                                            .ranking_content{
                                                flex:1;
                                                display: inline-block;
                                                text-align: left;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    // 加载
    /deep/.hint_empty {
        text-align: center;
        font-size: 22px;
        color: #409EFF;
        margin-top: 10px;
    }
    /deep/.underway {
        animation: container 1.2s infinite linear;
    }
</style>