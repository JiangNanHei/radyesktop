<template>
    <div class="loginDialog">  
        <el-dialog
            :visible.sync="invoicevalue"
            :show-close = "false"
            :close-on-click-modal="false" :append-to-body="true">
            <i class="iconfont icon-cuowu1 closebut" @click="closebut"></i>
            <p class="title">已选发票金额<span class="maohao">:</span><span class="fuhao">￥</span><span class="money">1399</span></p>
            <div class="information">
                <p>H133925192183066624</p>
                <p>购买1个月的豪华会员套餐</p>
                <p>￥1399</p>
            </div>
            <div class="formmain">
                <div class="formmain_box">
                    <div class="formtitle">发票信息</div>
                    <div class="cephalosome">
                        <div class="texttitle">
                            发票类型
                        </div>
                        <el-radio-group v-model="radio">
                            <el-radio :label="1">企业单位</el-radio>
                            <el-radio :label="2">个人/非企业单位</el-radio>
                        </el-radio-group>
                    </div>
                    <el-form ref="form" :rules="rules" :label-position="labelPosition" label-width="100px" :model="form">
                        <el-form-item prop="invoice_title" label="发票抬头">
                            <el-input v-model="form.invoice_title"></el-input>
                        </el-form-item>
                        <el-form-item v-if="radio==1" prop="tallage_mark" label="纳税人识别号">
                            <el-input v-model="form.tallage_mark"></el-input>
                        </el-form-item>
                        <el-form-item prop="start_site" label="开票地址">
                            <el-input v-model="form.start_site"></el-input>
                        </el-form-item>
                        <el-form-item v-if="radio==1" prop="start_phone" label="开票电话">
                            <el-input v-model="form.start_phone"></el-input>
                        </el-form-item>
                        <el-form-item prop="start_bank" label="开户行">
                            <el-input v-model="form.start_bank"></el-input>
                        </el-form-item>
                        <el-form-item prop="bank_account" label="银行账号">
                            <el-input v-model="form.bank_account"></el-input>
                        </el-form-item>
                        <el-form-item prop="remark" label="备注">
                            <el-input v-model="form.remark" placeholder="可将开票类型或其他备注信息填写到此框内"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="formmain_box">
                    <div class="formtitle">邮寄地址</div>
                    <el-form ref="form" :rules="rules" :label-position="labelPosition" label-width="100px" :model="form">
                        <el-form-item prop="consignee_address" label="收件地址">
                            <el-input v-model="form.consignee_address"></el-input>
                        </el-form-item>
                        <el-form-item prop="consignee_phone" label="收件电话">
                            <el-input v-model="form.consignee_phone"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="boxbut">
                    <el-button class="affirmbut" type="primary" @click="submitbut(form)">立即提交</el-button>
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
        // 收获地址
        let harvestaddress = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('收获地址不能为空'))
            }else{
                callback()
            }
        }
        return {
            radio : 2,
            invoicevalue : false,
            labelPosition: 'right',
            form:{
                invoice_title : '',
                tallage_mark : '',
                start_site : '',
                start_phone : '',
                start_bank : '',
                bank_account : '',
                remark : '',

                consignee_address : '',
                consignee_phone : '',
            },
            
            // 验证
            rules: {
                // 手机号
                consignee_phone: [{ required: true, trigger: 'blur', validator: cellphone}],   
                // 收获地址
                consignee_address: [{ required: true, trigger: 'blur', validator: harvestaddress}],   
            },
        };
    },
    methods: {
        // 关闭
        closebut(){
            this.invoicevalue = false;
        },
        // 立即提交
        submitbut(form){
            console.log(form)
            this.$refs.form.validate((valid) => {
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
    width: 700px;
    position: relative;
    margin: 0 auto 30px;
    border-radius: 8px;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    background-color: #082C55;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
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
        color:#999;
        font-size: 16px;
        margin-bottom:30px;
        .maohao{
            color:#fff;
            margin-left: 2px;
            margin-right: 20px;
        }
        .fuhao{
            color:red;
            font-size: 13px;
        }
        .money{
            color:red;
            font-size: 18px;
        }
    }
    .information{
        color:#fff;
        display: flex;
        background: #042141;
        justify-content: space-between;
        font-size: 14px;
        line-height: 50px;
        border-radius: 10px;
        padding: 0 20px;
        margin-bottom:30px;
    }

    .formmain{
        .formmain_box{
            .formtitle{
                color:#fff;
                font-size: 16px;
                margin-bottom:20px;
            }
            .cephalosome{
                display: flex;
                margin-bottom: 30px;
                .texttitle{
                    width: 100px;
                    text-align: right;
                    padding-right: 12px;
                    color:#ccc;
                    font-size: 12px;
                }
            }
            .el-form{
                .el-form-item{
                    margin-bottom:20px;
                    .el-form-item__label{
                        color:#ccc;
                        line-height: 40px;
                        font-size: 12px;
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
        }
        .boxbut{
            text-align: center;
        }

    }

}
</style>
