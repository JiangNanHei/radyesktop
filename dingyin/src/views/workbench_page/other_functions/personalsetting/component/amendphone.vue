<template>
    <div class="table_box">
        <el-dialog :visible.sync="dialogamendphone" :append-to-body="true">
            <i class="iconfont icon-cuowu1 closebut" @click="closebut"></i>
            <p class="title">修改绑定手机</p>
            <el-form ref="form" :rules="rules" :label-position="labelPosition" label-width="auto" :model="form">
                 <el-form-item prop="formerphone" label="旧手机号码">
                    <i class="iconfont icon-shouji"></i>
                    <el-input v-model="form.formerphone" maxlength="11" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item prop="securityCode" label="验证码" class="abreastitem">
                    <i class="iconfont icon-dunpai"></i>
                    <el-input v-model="form.securityCode" placeholder="请输入验证码"></el-input>
                    <div class="fasonyzmBox">
                        <span @click="sendauth()" class="fasonyzmtext" :v-model="dotaiText">{{dotaiText}}</span>
                        <span class="fasonyzmtext" :v-model="yzmseconds">{{yzmseconds}}</span>
                    </div>
                </el-form-item>
            </el-form>
            <div class="butbox">
                <el-button class="cancelbut" type="primary" @click="closebut">取消</el-button>
                <el-button class="affirmbut" type="primary" @click="nextstep(form)">下一步</el-button>
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
                    return callback(new Error('电话号码不能为空'))
                }
                setTimeout(() => {
                    if (!Number.isInteger(+value)) {
                        callback(new Error('请输入数字值'))
                    } else {
                        if (phoneReg.test(value)) {
                            callback()
                        } else {
                            callback(new Error('电话号码格式不正确'))
                        }
                    }
                }, 100)
            }
            return {
                labelPosition: 'right',
                dialogamendphone : false,
                yzmseconds : '',
                dotaiText : '发送验证码',
                form: {
                    // 验证码
                    securityCode: '',
                    // 旧手机号码
                    formerphone : ''
                },
                // 验证
                rules: {
                    // 手机号
                    formerphone: [{ required: true, trigger: 'blur', validator: cellphone}],
                },
            };
        },
        methods: {
            // 弹窗关闭 
            closebut(){
                this.dialogamendphone = false;
            },
            // 下一步 but按钮
            nextstep(form){
                this.$refs.form.validate((valid) => {
                    console.log(valid)
                    if (valid) {
                        this.dialogamendphone = false;
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            // 发送验证码
            sendauth(){

            }
        },
    };
</script>

<style lang="less" scoped>
    .table_box {
        position: relative;
    }
    /deep/.el-dialog {
        background: #082C55;
        border-radius: 6px;
        width: 30%;
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
        .el-dialog__header{
            display: none;
        }
        .header_title{
            color:#fff;
            text-align: right;
            font-size: 16px;
            margin-top: -20px;
        }
        .table_header{
            position: relative;
            display: flex;
            .header_left{
                margin-right: 20px;
                img{
                    display: block;
                    width: 50px;
                    border-radius: 50%;
                }
            }
            .header_right{
                flex: 1;
                .p1{
                    font-size: 15px;
                    color:#fff;
                    margin-top: 3px;
                    margin-bottom: 5px;
                    img{
                        width: 14px;
                    }
                }
                .p2{
                    font-size: 13px;
                    color:#ccc;
                }
            }
        }
        .title{
            color:#fff;
            font-size: 16px;
            margin-bottom:30px;
        }
        .el-form{
            .el-form-item{
                margin-bottom:30px;
                .el-form-item__label-wrap{
                    .el-form-item__label{
                        color:#ccc;
                        line-height: 40px;
                    }
                }
                .el-form-item__content{
                    position: relative;
                    i{
                        position: absolute;
                        top: 50%;
                        left:5px;
                        z-index: 9;
                        transition: all .3s;
                        transform: translateY(-50%);
                        color: #5c5e65;
                        text-align: center;
                        font-size: 20px;
                        color: hsla(0,0%,100%,.6);
                        margin-left: 3px;
                    }
                    .el-input{
                        .el-input__inner{
                            padding-left: 30px;
                            height: 40px;
                            background: #1C4778;
                            border:1px solid #5191DA;
                            color:#ccc;
                            -webkit-transition: all .3s linear;
                            transition: all .3s linear;
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
            .abreastitem{
                .el-form-item__content{
                    display: flex;
                    .el-input{
                        flex: 1;
                    }
                    .fasonyzmBox{
                        text-align: center;
                        position: static;
                        background: #248FFF;
                        margin-left: 10px;
                        border-radius: 4px;
                        width: 100px;
                        cursor: pointer;
                        .fasonyzmtext{
                            text-align: center;
                            line-height: 40px;
                            color: #fff;
                            font-size: 14px;
                        }
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
        }
        .butbox{
            text-align: right;
            .el-button{
                width: 100px;
                height: 40px;
                padding: 0px;
                font-size: 14px;
                line-height: 40px;
            }
            .cancelbut{
                background: #0050A4;
                border:none;
            }
        }
    }
</style>