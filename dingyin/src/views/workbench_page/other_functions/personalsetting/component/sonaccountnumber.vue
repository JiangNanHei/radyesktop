<template>
    <div class="bypassbox">
        <div class="bypass_header">
            <div class="header_left">当前还可添加 <span>8</span> 个子账号，一共可以添加 <span>10</span> 个子账号</div>
            <div class="header_right">
                <el-popover
                    placement="top-start"
                    width="200"
                    trigger="hover">
                    <el-button slot="reference">
                        <i class="iconfont icon-wenhao"></i>添加说明
                    </el-button>
                    <p>1.只能使用主账号绑定子账号</p>
                    <p>2.需要子账号确认才能成功绑定</p>
                    <p>3.子账号权限与主账号相同</p>
                    <p>4.权限消耗次数主账号与子账号通用</p>
                </el-popover>
                <el-button type="primary" @click="mesetmeal">添加子账号</el-button>
            </div>
        </div>
        <div class="bypass_content">
            <sonaccountnumbertable :businesscooperationdata="businesscooperationdata"></sonaccountnumbertable>
        </div>
        <newsonaccount @msgEvent="affirmbut" ref="newsonaccount"></newsonaccount>
    </div>
</template>

<script>
// table
import sonaccountnumbertable from './sonaccountnumber_table'
// 弹窗
import newsonaccount from './newsonaccount'
export default {
    naem : '个人设置-子账号管理',
    components: {
        sonaccountnumbertable,
        newsonaccount,
    },
    props: {

    },
    data() {
        return {
            businesscooperationdata: [
                // {
                //     indexes : 1,
                //     name : '横说竖说',
                //     phone : 17754547688,
                //     tiem : '2020-12-17 18:57:42',
                //     state : {
                //         title : '绑定中',
                //         stateindex : 1,
                //     },
                // },
                // {
                //     indexes : 2,
                //     name : '横说竖说',
                //     phone : 17754547688,
                //     tiem : '2020-12-17 18:57:42',
                //     state : {
                //         title : '等待对面确认',
                //         stateindex : 2,
                //     },
                // },
            ],
        };
    },
    methods: {
        // 添加子账号按钮 打开弹窗
        mesetmeal(){
            this.$refs.newsonaccount.dialogTableVisible = true;
        },
        affirmbut(form){
            console.log(form)
            this.businesscooperationdata.push({
                indexes : '后端给',
                name : form.name,
                phone : form.phone,
                tiem : '后端给',
                state : {
                    title : '后端给',
                    stateindex : 2,
                },
            })
        }
    },
};
</script>

<style lang="less" scoped>
    .bypassbox{
        .bypass_header{
            margin-top: 20px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            .header_left{
                line-height: 32px;
                font-size: 12px;
                // display: inline-block;
                color: #ccc;
                span{
                    color:#fff;
                }
            }
            .header_right{
                /deep/.el-popover__reference-wrapper{
                    color: #999;
                    margin-right: 20px;
                    .el-button{
                        background: none !important;
                        color: #999;
                        background: none;
                        border:none;
                        i{
                            vertical-align: middle;
                            margin-right: 5px;
                        }
                    }
                }
                >.el-button {
                    height: 34px;
                }
            }
        }
        .bypass_content{

        }
    }
</style>
<style lang="less">
    .el-popover{
        width: auto !important;
        background: #0D2F55;
        border:none;
        color:#ccc;
        font-size: 14px;
        white-space:nowrap;
        line-height: 25px;
        .popper__arrow{
            display: none;
        }
    }
</style>

