<template>
    <div class="box">
        <!-- 搜索框 -->
        <div class="demo-input-suffix">
            <div class="search_box">
                <el-input
                    v-model = "broadcastsearchvalue"
                    placeholder="请输入商品标题"
                    >
                </el-input>
                <el-button type="primary" @click="broadcastsearchbut">搜索</el-button>
            </div>
            <p class="clickp" @click="eliminate"><i class="iconfont icon-icon--"></i><span>清空所选中的条件</span></p>
        </div>
        <!-- 数据分类 -->
        <classificationdata :classification_data="classification_data1" ref="classificationdata"></classificationdata>
        <classificationdata :classification_data="classification_data2" ref="classificationdata"></classificationdata>
        <!-- 筛选 -->
        <!-- table 列表 -->
        <el-table :data="businesscooperationdata.slice((currpage -1) * pagesize, currpage * pagesize)"
            :default-sort="{prop: 'tow', order: 'descending'}">
            <el-table-column align="center" label="姓名" prop="name">
                <template slot-scope="scope">
                    <div class="table_td_one">
                        {{scope.row.name}}
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" label="公司" prop="company"></el-table-column>
            <el-table-column align="center" label="职位" prop="position"></el-table-column>
            <el-table-column align="center" label="城市" prop="city"></el-table-column>
            <el-table-column align="center" label="业务介绍" prop="business"></el-table-column>
            <el-table-column width="140px" align="center" label="操作">
                <div class="table_button_group">
                    <el-button type="primary" @click="viewdetails">查看详情</el-button>
                </div>
            </el-table-column>
        </el-table>
        <div class="el_pagination_box clearfix">
            <el-pagination @size-change="handleSizeChange" @curren-change="handleCurrentChange"
                :page-sizes="[10,20,30,40,50,100]" :page-size="pagesize" background layout="prev, pager, next"
                :total="businesscooperationdata.length">
            </el-pagination>
        </div>
        <particularsdialog ref="particularsdialog"></particularsdialog>
    </div>
</template>

<script>
import classificationdata from '@/components/page/classification_data'
import particularsdialog from './component/particulars_dialog'
    export default {
        naem:'商业务合作资源',
        components: {
            classificationdata,
            // 弹窗
            particularsdialog
        },
        props: {

        },
        data() {
            return {
                // 搜索框 value
                broadcastsearchvalue : '',
                // 复选框数据
                checkList: ['选中且禁用','复选框 A'],

                startvalue : '',
                endvalue : '',
                // 分页器
                pagesize: 10,
                currpage: 1,
                // 数据分类 数据
                classification_data1 : {
                    title : '资源类型',
                    data : [
                        {
                            name:'全部',
                        },
                        {
                            name:'带货资源',
                        },
                        {
                            name:'商品资源',
                        },
                        {
                            name:'短视频矩阵',
                        },
                        {
                            name:'达人资源',
                        },
                        {
                            name:'课程培训',
                        },
                        {
                            name:'代运营',
                        },
                        {
                            name:'其他',
                        },
                    ]
                },
                classification_data2 : {
                    title : '账号类型',
                    data : [
                        {
                            name:'全部',
                        },
                        {
                            name:'时尚',
                        },
                        {
                            name:'美食',
                        },
                        {
                            name:'生鲜',
                        },
                        {
                            name:'美妆',
                        },
                        {
                            name:'母婴用品',
                        },
                        {
                            name:'家具日用',
                        },
                        {
                            name:'宠物',
                        },
                        {
                            name:'其他',
                        },
                    ]
                },
                // 列表数据数组
                businesscooperationdata: [
                    {
                        name : '叫花子',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子2',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子3',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子2',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子3',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子2',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子3',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子2',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子3',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子2',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子3',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子2',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子3',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子2',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子3',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子2',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子3',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子2',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子3',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子2',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子3',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子2',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子3',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子2',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                    {
                        name : '叫花子3',
                        company : '交个兄弟有限公司',
                        position : '项目负责人',
                        city : '青岛',
                        business : '短视频拍摄运营',
                    },
                ],

                // 取后端返回内容的总页数
                totalPages: '',
            };
        },
        methods: {
            //主要按钮前往
            goRealdetailscreen() {
                this.$router.replace('/intelligentdetailed');
            },
            // input 搜索框 but按钮
            broadcastsearchbut(){

            },
            // 清空所有条件
            eliminate(){

            },
            handleSizeChange(val) {
                console.log(val);
                this.pagesize = val;
            },
            handleCurrentChange(val) {
                console.log(val);
                this.currpage = val;
            },
            // 查看详情
            viewdetails(){
                this.$refs.particularsdialog.dialogTableVisible=true;
            }
        },
        mounted(){
        },
    };
</script>

<style lang="less" scoped>
    .box {
        // 搜索框
        .demo-input-suffix{
            margin-top: 20px;
            margin-bottom: 20px;
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
            .clickp{
                cursor: pointer;
                color: #248FFF;
                display: inline-block;
                margin-left: 20px;
                i{
                    margin-right: 10px;
                }
                span{
                    font-size: 14px;
                    text-decoration:underline
                }
            }
        }
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
            &:nth-child(1){
                text-align: left ;
                // margin-left: 30px;
                
                .cell{
                    padding-left: 40px;
                }
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
                        font-size: 14px;
                        .table_td_one{
                            text-align: left;
                            margin-left: 30px;
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
// 分页器
/deep/.el_pagination_box {
    background-color: #082C55;
    padding: 30px 0;

    .el-pagination {
        float: right;
    }
}

/deep/.el_pagination_box {
    background-color: #082C55;
    padding: 30px 0;

    .el-pagination {
        float: right;
    }
}
/deep/.el-pagination.is-background .btn-next,
/deep/.el-pagination.is-background .btn-prev,
/deep/.el-pagination.is-background .el-pager li {
    background: none;
    color: #fff;
    border: 1px solid #E1EAF7;
}

/deep/.el-pagination.is-background .el-pager li:not(.disabled).active {
    background: #248FFF;
    border: 1px solid #248FFF;
}
</style>