<template>
    <div>
        <el-table :data="businesscooperationdata">
            <el-table-column align="center" label="序号" prop="indexes"></el-table-column>
            <el-table-column align="center" label="姓名" prop="name"></el-table-column>
            <el-table-column align="center" label="手机号" prop="phone"></el-table-column>
            <el-table-column align="center" label="绑定日期" prop="tiem"></el-table-column>
            <el-table-column align="center" label="状态" prop="business">
                <template slot-scope="scope">
                    <span class="tabstate" v-if="scope.row.state.stateindex == 1" style="color:#09BB07;">{{scope.row.state.title}}</span>
                    <span class="tabstate" v-else-if="scope.row.state.stateindex == 2" style="color:#F1A255">{{scope.row.state.title}}</span>
                </template>
            </el-table-column>
            <el-table-column width="140px" align="center" label="操作">
                <template slot-scope="scope">
                    <div class="operation">
                        <el-button class="succeedbut" v-if="scope.row.state.stateindex == 1" type="primary" @click="succeedbut">取消绑定</el-button>
                        <el-button class="underwaybut" v-else-if="scope.row.state.stateindex == 2" type="primary" @click="underwaybut">取消申请</el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    components: {

    },
    props: {
        businesscooperationdata : Array
    },
    data() {
        return {
            // 分页器
            pagesize: 10,
            currpage: 1,
            // 列表数据数组
            // businesscooperationdata: [
            //     {
            //         indexes : 1,
            //         name : '横说竖说',
            //         phone : 17754547688,
            //         tiem : '2020-12-17 18:57:42',
            //         state : {
            //             title : '绑定中',
            //             stateindex : 1,
            //         },
            //     },
            //     {
            //         indexes : 2,
            //         name : '横说竖说',
            //         phone : 17754547688,
            //         tiem : '2020-12-17 18:57:42',
            //         state : {
            //             title : '等待对面确认',
            //             stateindex : 2,
            //         },
            //     },
            // ],
        };
    },
    methods: {
        // 取消绑定
        succeedbut(){

        },
        // 取消申请
        underwaybut(){

        },
    },
};
</script>

<style lang="less" scoped>

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
                &:last-child{
                    td{
                        border:none;
                    }
                }
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
                    &:first-child{
                        text-align: left;
                        .cell{
                            padding-left: 50px;
                        }
                    }
                    .cell {
                        font-size: 14px;
                        .table_td_one{
                            text-align: left;
                            margin-left: 30px;
                        }
                        .tabstate{
                            font-weight: 500;
                        }
                        .operation{
                            .succeedbut{
                                background:none;
                                border:1px solid #FBAE46;
                                color:#FBAE46;
                            }
                            .underwaybut{
                                background: linear-gradient(225deg, #4AC2FF 0%, #248FFF 100%);
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
