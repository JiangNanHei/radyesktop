<template>
    <div class="table_box">
        <el-dialog :visible.sync="dialogTableVisible" :append-to-body="true">
            <i class="iconfont icon-cuowu1 closebut" @click="closebut"></i>
            <p class="title">添加子账号</p>
            <el-form ref="form" :rules="rules" :label-position="labelPosition" label-width="auto" :model="form">
                <el-form-item prop="name" label="子账号姓名">
                    <el-input v-model="form.name" placeholder="请输入账号姓名"></el-input>
                </el-form-item>
                <el-form-item prop="phone" label="手机号">
                    <el-input v-model="form.phone" maxlength="11" placeholder="请输入手机号"></el-input>
                </el-form-item>
            </el-form>
            <div class="butbox">
                <el-button class="cancelbut" type="primary" @click="closebut">取消</el-button>
                <el-button class="affirmbut" type="primary" @click="affirmbut(form)">创建子账号</el-button>
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
            // 名字
            let cellname = (rule, value, callback) => {
                if (value == '') {
                    return callback(new Error('名字不能为空'))
                }else{
                    // 能执行
                    callback();
                }
            }
            return {
                labelPosition: 'right',
                dialogTableVisible : false,

                form: {
                    name: '',
                    phone : ''
                },
                // 验证
                rules: {
                    // 手机号
                    phone: [{ required: true, trigger: 'blur', validator: cellphone}],
                    // 名字
                    name: [{ required: true, trigger: 'blur', validator: cellname}]
                    
                },
            };
        },
        methods: {
            // 弹窗关闭 
            closebut(){
                this.dialogTableVisible = false;
            },
            // 创建子账号 but按钮
            affirmbut(form){
                this.$refs.form.validate((valid) => {
                    console.log(valid)
                    if (valid) {
                        this.dialogTableVisible = false;
                        this.$emit("msgEvent",this.form);
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
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
                    .el-input{
                        .el-input__inner{
                            height: 40px;
                            background: #1C4778;
                            border:1px solid #5191DA;
                            color:#ccc;
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