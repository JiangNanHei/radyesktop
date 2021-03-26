<template>
    <div class="personalsettingbox">
        <amendphone ref="amendphone"></amendphone>
        <amendpassword ref="amendpassword"></amendpassword>
        <edityourprofile ref="edityourprofile"></edityourprofile>
        <BindingWeChat ref="bindingwechat"></BindingWeChat>
        <div class="d_colf_header">
            <div class="d_content_title">个人信息</div>
            <div class="d_content_personal">
                <el-row :gutter="20">
                    <el-col :span="24">
                        <div class="grid-content bg-purple d_personal_left">
                            <div class="d_personal_data">
                                <el-button type="primary" @click="personaldata">编辑资料</el-button>
                                <el-button type="primary" @click="amendpasswordbut">修改密码</el-button>
                            </div>
                            <div class="d_personal_show">
                                <img src="@/assets/images/img.jpg">
                                <span class="d_personal_show_phone">17778723894</span>
                                <span class="iconfont icon-huangguan d_personal_show_icon"></span>
                                <span class="d_personal_show_vip">基础会员版</span>
                                <span class="time_remaining ">(4天后到期)</span>
                                <el-button class="upgrademember" type="primary" plain @click="upgrademember">升级会员</el-button>
                            </div>
                            <div class="d_personal_message">
                                <p>
                                    <span class="d_message_explain">手机绑定</span>
                                    <span class="d_message_show">已绑定手机</span>
                                    <span class="d_message_show">17778723894</span>
                                    <a href="javascript:;" class="d_message_active" @click="amendnumberbut">换绑</a>
                                </p>
                                <p>
                                    <span class="d_message_explain">微信绑定</span>
                                    <a href="javascript:;" class="d_message_active" @click="BindingWeChatbut">未绑定微信</a>
                                </p>
                                <p>
                                    <span class="d_message_explain">密码</span>
                                    <el-input class="explain_input" disabled v-model="explaininput"></el-input>
                                </p>
                                <p>
                                    <span class="d_message_explain">性别</span><span>男士</span>
                                </p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="personalsettingtabs">
            <el-tabs class="tabheader" v-model="activeName">
                <el-tab-pane label="我的套餐" name="mesetmeal"></el-tab-pane>
                <el-tab-pane label="子账号管理" name="sonaccountnumber"></el-tab-pane>
            </el-tabs>
            <components :is="activeName"></components>
        </div>
    </div>
</template>

<script>
// tabs
import mesetmeal from './component/mesetmeal'
import sonaccountnumber from './component/sonaccountnumber'
// 修改绑定手机
import amendphone from './component/amendphone'

// 确认绑定手机
import anewphone from './component/anewphone'

// 修改密码
import amendpassword from './component/amendpassword'
// 编辑资料
import edityourprofile from './component/edityourprofile'
// 绑定微信
import BindingWeChat from './component/BindingWeChat'
export default {

    components: {
        mesetmeal,
        sonaccountnumber,
        amendphone,
        anewphone,
        amendpassword,
        edityourprofile,
        BindingWeChat,
    },
    props: {

    },
    data() {
        return {
            explaininput : '******',
            activeName : 'mesetmeal',
            getData: {
                personal: {
                    imgUrl: '@/assets/images/img.jpg',
                    user_name: '17778723894',
                    is_vip: '',
                    phone_message: {
                        desc: '已绑定手机 17778723894'
                    },
                    wetcat: {
                        is_bind: false,
                        desc: '未绑定微信'
                    }
                }
            }
        };
    },
    methods: {
        // 换绑 but 按钮
        amendnumberbut(){
            this.$refs.amendphone.dialogamendphone = true;
        },
        // 修改密码but
        amendpasswordbut(){
            this.$refs.amendpassword.amendpasswordvalue = true;
        },
        // 编辑资料
        personaldata(){
            this.$refs.edityourprofile.edityourprofilevalue = true;
        },
        // 绑定微信
        BindingWeChatbut(){
            this.$refs.bindingwechat.bindingwechatdialog = true;
        },
        // 升级会员
        upgrademember(){

        }
    },
};
</script>

<style lang="less" scoped>
.personalsettingbox{
    .d_colf_header{
        color: #fff;
        .d_content_title{
            margin-bottom: 10px;
            line-height: 40px;
            font-size: 14px;
        }
        .d_content_personal{
            height: 216px;
            overflow: hidden;
            margin-bottom: 20px;
            .d_personal_left{
                background: #123D6D;
                padding: 20px;
                border-radius: 6px;
                .d_personal_show{
                    display: flex;
                    align-items: center;
                    line-height: 54px;
                    margin-bottom: 10px;
                    >img{
                        width:48px;
                        height: 48px;
                        border-radius: 24px;
                        vertical-align: middle;
                    }
                    .d_personal_show_phone{
                        font-size: 20px;
                        margin: 0 10px;
                    }
                    .d_personal_show_icon{
                        font-size: 12px;
                        color: #F1A255;
                        margin: 0 10px 0 10px;
                    }
                    .d_personal_show_vip{
                        font-size: 12px;
                        color: #F1A255;
                        margin-right: 10px;
                    }
                    .time_remaining{
                        font-size: 12px;
                        margin-right: 10px;
                        color:#ccc;
                    }
                    .upgrademember{
                        color:#FBA755;
                        font-weight: 500;
                        background: linear-gradient(135deg, #FCF8F1 0%, #FFDEB7 100%) !important;
                        border:none;
                        height: 32px;
                    }
                }
                .d_personal_data{
                    display: inline;
                    float: right;
                }
                /deep/.d_personal_message{
                    color: #CCCCCC;
                    font-size: 12px;
                    line-height: 28px;
                    .d_message_explain{
                        width: 50px;
                        display: inline-block;
                        text-align: right;
                        margin-right: 20px;
                    }
                    .explain_input{
                        width: 200px;
                        display: inline-block;
                        pointer-events: none;
                        .el-input__inner{
                            background: none;
                            border:none;
                            padding: 0;
                        }
                    }
                    .d_message_show{
                        color: #FFFFFF;
                        margin-right: 10px;
                    }
                    .d_message_active{
                        color: #248FFF;
                    }
                    
                }
            }
            .d_personal_right{
                height: 216px;
                display: flex;
                flex-direction:column;
                justify-content: space-between;
                >div{
                    background: #123D6D;
                    padding: 20px;
                    border-radius: 6px;
                    text-align: center;
                    font-size: 14px;
                    .d_personal_right_desc{
                        margin-left: 10px;
                    }
                }
            }
            
        }
    }
    .personalsettingtabs{
        // tabs切换样式
        /deep/.tabheader {
            .el-tabs__header {
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
}
</style>
