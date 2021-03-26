<template>
    <div class="loginDialog">  
        <el-dialog
            :visible.sync="amendpasswordvalue"
            width="360px"
            :show-close = "false"
            :close-on-click-modal="false" :append-to-body="true">
            <i class="iconfont icon-cuowu1 closebut" @click="closebut"></i>
            <p class="title">修改密码</p>
            <div class="login-Dialog-content">
                <div class="login-Dialog-loginphone">
                    <div class="contentnav">
                        <el-form :rules="rules" ref="form" :model="form">
                            <el-form-item prop="phone" class="iptBox" ref="iptphone">
                                <i class="iconfont icon-shouji"></i>
                                <el-input class="iptphone" v-model="form.phone" maxlength="11" placeholder="请输入手机号"></el-input>
                            </el-form-item>

                            <el-form-item prop="verification" class="iptBox verification_box">
                                <i class="iconfont icon-dunpai"></i>
                                <el-input class="iptphone yzmcation" v-model="form.verification" placeholder="请输入验证码" maxlength="6"></el-input>
                                <div class="fasonyzmBox">
                                    <span @click="sendauth()" class="fasonyzmtext" :v-model="dotaiText">{{dotaiText}}</span>
                                    <span class="fasonyzmtext" :v-model="yzmseconds">{{yzmseconds}}</span>
                                </div>
                            </el-form-item>
                            
                            <el-form-item prop="password" class="iptBox">
                                <i class="iconfont icon-42"></i>
                                <el-input class="itppassword" maxlength="16" v-model="form.password" placeholder="请输入密码"></el-input>
                            </el-form-item>

                            <el-form-item prop="againpassword" class="iptBox">
                                <i class="iconfont icon-42"></i>
                                <el-input class="itppassword" maxlength="16" v-model="form.againpassword" placeholder="请再次输入密码"></el-input>
                            </el-form-item>    
                        </el-form>
                        <el-button @click="changepassword()" class="butlogin" type="primary">修改密码</el-button>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    components: {

    },
    props: {

    },
    data() {
        // 手机号
        let cellphone = (rule, value, callback) => {
        const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/
            if (!value) {
                this.sendauth = ()=>{};
                return callback(new Error('电话号码不能为空'))
            }
            setTimeout(() => {
                if (!Number.isInteger(+value)) {
                    this.sendauth = ()=>{};
                    callback(new Error('请输入数字值'))
                } else {
                    if (phoneReg.test(value)) {
                        this.sendauth = function(){
                            console.log('发送成功')
                        }
                        callback()
                    } else {
                        this.sendauth = ()=>{};
                        callback(new Error('电话号码格式不正确'))
                    }
                }
            }, 100)
        }
        let yzmyz = (rule, value, callback) => {
            if (value == '') {
                callback(new Error('请输入验证码'));
            } else {
                callback();
            }
        };
        // 这是修改密码这一块
        // let validatePass1 = (rule, value, callback) => {
        //     if (value === '') {
        //         callback(new Error('请输入密码'));
        //     } else if (this.form.againpassword.length < 6 || !regular(this.form.againpassword)) {
        //         callback(new Error('请设置您的账号密码（6-11数字或字母组合）'));
        //     }else {

        //         callback();
        //     }
        // };
        var validatePass1=(rule, value, callback)=>{
            if (value.length < 6 || value.length > 16){
                callback(new Error('请设置您的账号密码（6-11数字或字母组合）'));
            } else{
                callback();
            }
        };
        let repeatPassword = (rule, value, callback) => {
            if (value == '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.form.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        }
        return {
            amendpasswordvalue : false,
            dotaiText : '发送验证码',
            yzmseconds : '',
            form:{
                phone : '',
                verification : '',
                password : '',
                againpassword : '',
            },

            // 表单验证
            rules: {
                phone: [{
                    validator: cellphone,
                    trigger: 'blur'
                }],
                password: [{
                    validator: validatePass1,
                    trigger: 'blur'
                }],
                againpassword: [{
                    validator: repeatPassword,
                    trigger: 'blur'
                }],
                verification : [{
                    validator: yzmyz,
                    trigger: 'blur'
                }]
            },
        };
    },
    methods: {
        // 关闭
        closebut(){
            this.amendpasswordvalue = false;
        },
        // 发送验证码
        sendauth(){

        },
        // 修改密码
        changepassword(){
            this.$refs.form.validate(valid => {
                console.log(valid)
                if (valid) {
                    this.$message.success('修改成功');
                } else {
                    this.$message.error('请填写完整表单');
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
};
</script>

<style lang="less" scoped>
.loginDialog{
    /deep/.el-dialog__wrapper{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
        margin: 0;
        z-index: 9999;

    }
}        
/deep/.el-dialog{
    margin-top: 20vh !important;
    width: 360px;

    position: relative;
    margin: 0 auto 30px;
    border-radius: 8px;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    background-color: #0C2E55;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 500px;
    .el-dialog__header{
        display: none;
    }
    .closebut{
        cursor: pointer;
        font-size: 30px;
        position:absolute;
        right: 10px;
        top: 10px;
        color:#285F9E;
        transition: all .3s;
        &:hover{
            color: #fff;
        }
    }
    .title{
        color:#fff;
        font-size: 16px;
        margin-bottom:30px;
    }
    .el-dialog__header{
        padding: 20px 30px 15px;
        background: #0C2E55;
        margin: 0 0;
        border-radius: 4px;
        border-bottom: 1px solid hsla(0,0%,100%,0);
        z-index: 1000;
    }
    .el-dialog__body{
        position: relative;
        color: #8b8c91;
        font-size: 14px;
        word-break: break-all;
        // 关闭
        .login-Dialog-close{
            position: absolute;
            right: 0px;
            top: -38px;
            text-align: center;
            color: hsla(0,0%,100%,.3);
            i{
                cursor: pointer;
                font-size: 36px;
                font-weight: 400;
                transition:all .2s linear;
                &:hover{
                    color:#fff;
                }
            }
        }
        .login-Dialog-content{
            position: relative;
            text-align: center;
            .login-Dialog-loginphone{
                // 手机号
                .contentnav{
                    padding: 10px;
                    .el-form-item{
                        margin:0px !important
                    }
                    .el-form-item__error{
                        margin-top: -8px;
                    }
                    .iptBox{
                        position: relative;
                        i{
                            position: absolute;
                            top: 50%;
                            left:5px;
                            -webkit-transition: all .3s;
                            transform: translateY(-50%);
                            color: #5c5e65;
                            text-align: center;
                            font-size: 17px;
                            color: hsla(0,0%,100%,.6);
                            margin-left: 3px;
                        }
                        .fasonyzmBox{
                            padding: 0 5px;
                            background-color: transparent;
                            position: absolute;
                            right: 0;
                            top: 20px;
                            border: none;
                            width: 90px;
                            border-left: 1px solid hsla(0,0%,100%,.1);
                            line-height: 20px;
                            .fasonyzmtext{
                                color: #2997ff;
                                font-size: 14px;
                                cursor: pointer;
                                &:hover{
                                    -webkit-filter: brightness(1.1);
                                    filter: brightness(1.1);
                                }
                                &:active{
                                    -webkit-filter: brightness(.95);
                                    filter: brightness(.95);
                                }
                            }
                        }
                    }
                    // 发送验证码样式
                    .verification_box{
                        
                        .el-form-item__content{
                            display: flex;
                            .yzmcation{
                                flex: 2;
                                .el-input__inner{
                                    padding-right: 0px;
                                }
                            }
                            .fasonyzmBox{
                                flex: 1;
                                line-height: 40px;
                                margin: 10px 0;
                                position: static;
                                background: #248FFF;
                                margin-left: 10px;
                                border-radius: 4px;
                                &:hover{
                                    background: linear-gradient(135deg, #4AC2FF 100%, #248FFF 0%);
                                }
                                .fasonyzmtext{
                                    color:#fff;
                                }
                            }
                        }
                    }
                    .el-input--small{
                        position: relative;
                        font-size: 14px;
                        display: inline-block;
                        width: 100%;
                        margin: 10px 0;
                        .el-input__inner{
                            padding-left: 30px;
                            color: #fff;
                            border-color: hsla(0,0%,100%,.15);
                            -webkit-transition: all .3s linear;
                            transition: all .3s linear;
                            -webkit-appearance: none;
                            background-color: hsla(0,0%,100%,.08);
                            background-image: none;
                            border-radius: 4px;
                            border: 1px solid hsla(0,0%,100%,.2);
                            box-sizing: border-box;
                            display: inline-block;
                            font-size: 15px;
                            height: 40px;
                            line-height: 40px;
                            outline: 0;
                            width: 100%;
                            &:hover{
                                color: #fff;
                                border-color: #2997ff;
                            }
                            &:focus{
                                border-color: #2997ff;
                                border-width: 2px;
                            }
                        }

                    }
                    .yzmcation{
                        .el-input__inner{
                            padding-right: 100px;
                        }
                    }
                    .p4{
                        cursor: pointer;
                        color:#248FFF;
                        font-size: 14px;
                    }
                    .butlogin{
                        width: 100%;
                        font-size: 16px;
                        color: #fff;
                        background: linear-gradient(135deg, #4AC2FF 0%, #248FFF 100%);
                        display: inline-block;
                        line-height: 1;
                        white-space: nowrap;
                        cursor: pointer;
                        border: 1px solid #2c313d;
                        color: #fff;
                        -webkit-appearance: none;
                        text-align: center;
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                        outline: 0;
                        -webkit-transition: .1s;
                        transition: .1s;
                        font-weight: 500;
                        padding: 12px 20px;
                        font-size: 14px;
                        border-radius: 4px;

                        margin-top: 30px;
                        &:hover{
                            background: linear-gradient(135deg, #4AC2FF 100%, #248FFF 0%);
                            color: #fff !important;
                        }
                    }
                }
            }
        }
        
    }

}
</style>
