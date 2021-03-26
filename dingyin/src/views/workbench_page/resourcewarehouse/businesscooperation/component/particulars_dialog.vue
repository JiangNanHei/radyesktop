<template>
    <div class="table_box">
        <el-dialog :visible.sync="dialogTableVisible" :append-to-body="true">
            <i class="iconfont icon-cuowu1 closebut" @click="closebut"></i>
            <div class="box_header">
                <p class="p1">
                    姓名: 
                    <span>叫花子</span>
                </p>
                <p class="p2">
                    所在地 : <span>青岛</span>
                    公司 : <span>交个兄弟有限公司</span>
                    职位 : <span>项目负责人</span>
                </p>
                <p class="p3">
                    业务介绍: 
                    <span>海量带货主播,寻求货源</span>
                </p>
            </div>
            <div class="box_center">
                <p class="texttop">联系方式:</p>
                <div class="ipt_box">
                    手机号 : 
                    <el-input v-model="phone"></el-input>
                    微信号 : 
                    <el-input v-model="wechat"></el-input>
                </div>
                <div class="but_box">
                    <div class="examine_but">查看联系方式</div>
                    <div class="explain_box">
                        <p>
                            需要使用查看次数 
                            <span>1</span>
                            次，每日查看次数 
                            <span> 14 / 15</span>
                            次
                        </p>
                    </div>
                </div>
            </div>
            <div class="box_bottom">
                <p class="caption_p">资源说明 :</p>
                <p class="contentwords">
                    
                    <span class="marginspan">资源类型 : 渠道方</span>

                    <span class="marginspan">账号类型 : 食品,男装,生鲜水果,美妆,百货,数码电器,运动,女装,鞋靴</span>
                </p>
                <p class="caption_p">贡献资源 :</p>
                <p class="contentwords">
                    <span>单坑，专场，各种网红主播</span>
                </p>
                <p class="caption_p">需求资源 :</p>
                <p class="contentwords">
                    <span>美妆，食品，服装等品牌货源</span>
                </p>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        components: {

        },
        props: {
            clickdata : Object
        },
        data() {
            return {
                // 电话
                phone : '******',
                // 微信
                wechat : '***********',
                dialogTableVisible: false,
            };
        },
        methods: {
            // 弹窗关闭
            closebut(){
                this.dialogTableVisible = false;
            },
        },
    };
</script>

<style lang="less" scoped>
    .table_box {
        position: relative;
    }
    /deep/.el-dialog {
        background: #082C55;
        width: 800px;
        border-radius: 6px;
        .closebut{
            cursor: pointer;
            font-size: 30px;
            position:absolute;
            right: 10px;
            top: 10px;
            color:#285F9E;
        }
        .el-dialog__header{
            display: none;
        }
        .box_header{
            color: #999999;
            font-size: 12px;
            .p1{
                font-size: 16px;
                color: #fff;
                margin-bottom: 20px;
            }
            .p2{
                margin-bottom: 5px;
                span{
                    margin-left: 5px;
                    margin-right: 10px;
                }
            }
            .p3{
                span{
                    color: #fff;
                    margin-left: 5px;
                }
            }
        }
        .box_center{
            border-radius: 4px;
            background: #042141;
            margin-top: 20px;
            padding: 20px;
            color: #ccc;
            .texttop{
                margin-bottom: 10px;
                color: #fff;
            }
            .ipt_box{
                color: #ccc;
                .el-input{
                    width: 130px;
                    margin-right: 30px;
                    .el-input__inner{
                        color: #ccc;
                        background: none;
                        border:none;
                        pointer-events: none;
                    }
                }
            }
            .but_box{
                margin-top: 10px;
                .examine_but{
                    cursor: pointer;
                    border-radius: 4px;
                    display: inline-block;        
                    padding: 9px 15px;
                    color: #fff;
                    margin-right: 20px;
                    background: linear-gradient(225deg, #4AC2FF 0%, #248FFF 100%);
                    &:hover{
                         background: linear-gradient(225deg, #4AC2FF 100%, #248FFF 0%);
                    }
                }
                .explain_box{
                    font-size: 12px;
                    display: inline-block;
                }
            }
        }
        .box_bottom{
            border-radius: 4px;
            background: #042141;
            margin-top: 20px;
            padding: 20px;
            line-height: 35px;
            color: #ccc;
            .caption_p{
                color: #fff;
            }
            .contentwords{
                .marginspan{
                    margin-right: 10px;
                }
            }
        }
    }

</style>
<style lang="less" scoped>

</style>