<template>
    <div class="loginDialog">
        <el-dialog
            :visible.sync="this.$store.state.loginflag"
            width="360px"
            :before-close="loginclose"
            :show-close = "false"
            :close-on-click-modal="false">
            <span class="login-Dialog-close">
                <i @click="loginclose()" class="iconfont icon-cuowu1"></i>
            </span>
            <div class="login-Dialog-content">
            <el-tabs v-model="activeName">
                <el-tab-pane label="二维码登录" name="one">
                    <!-- 微信二维码登录 -->
                    <div class="login-Dialog-loginphone">
                        <p class="qrcodep1">微信二维码登录</p>
                        <div class="qrcode-contentnav">
                            <div class="wireanimation"></div>
                            <img class="qrcodeImg" :src="`${this.qrcodeimgUrl}`">
                        </div>
                        <p class="qrcodep2">- 请使用二维码或者手机号登录 -</p>
                        <p class="qrcodep3" @click="activeName='tow';flag=1">
                                前去使用手机号登录
                                <i class="iconfont icon-youjiantou1"></i>
                        </p>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="手机号登录" name="tow">
                    <!-- 手机号登录 -->
                    <div class="login-Dialog-loginphone" v-show="flag==1?true:false">
                        <p>输入手机号和密码登录</p>
                        <div class="contentnav">
                            <el-form :rules="rules" ref="fomrmenu1" :label-position="labelPosition" :model="form1">
                                <el-form-item class="iptBox" prop="username">
                                    <i class="iconfont icon-shouji"></i>
                                    <el-input class="iptphone" v-model="form1.username" placeholder="请输入手机号"></el-input>
                                </el-form-item>
                                
                                <el-form-item class="iptBox" prop="password">
                                    <i class="iconfont icon-42"></i>
                                    <el-input class="itppassword" v-model="form1.password" placeholder="请输入密码"></el-input>
                                </el-form-item>    
                            </el-form>
                            <p class="p1 clearfix">
                                <span @click="flag=3" class="p1left">立马注册</span>
                                <span @click="flag=2" class="p1right">忘记密码?</span>
                            </p>
                            <el-button @click="enterbut()" class="butlogin" type="primary">登录</el-button>

                            <p class="p4" @click="activeName='one'">
                                前去使用微信扫码登录
                                <i class="iconfont icon-youjiantou1"></i>
                            </p>

                        </div>
                    </div>
                    <!-- 忘记密码 重置密码 -->
                    <div class="login-Dialog-loginphone" v-show="flag==2?true:false">
                        <p>重置密码</p>
                        <div class="contentnav">
                            <el-form :rules="rules"  ref="fomrmenu2" :label-position="labelPosition" :model="form2">
                                <el-form-item prop="phone" class="iptBox">
                                    <i class="iconfont icon-shouji"></i>
                                    <el-input class="iptphone" v-model="form2.phone" placeholder="请输入手机号"></el-input>
                                </el-form-item>
                                <el-form-item prop="verification" class="iptBox verification_box">
                                    <i class="iconfont icon-dunpai"></i>
                                    <el-input class="iptphone yzmcation" v-model="form2.verification" placeholder="请输入验证码" maxlength="6"></el-input>
                                    <div class="fasonyzmBox">
                                        <span @click="sendauth()" class="fasonyzmtext" :v-model="dotaiText">{{dotaiText}}</span>
                                        <span class="fasonyzmtext" :v-model="yzmseconds">{{yzmseconds}}</span>
                                    </div>
                                </el-form-item>
                                
                                <el-form-item prop="xiugaipassword" class="iptBox">
                                    <i class="iconfont icon-42"></i>
                                    <el-input class="itppassword" v-model="form2.xiugaipassword" placeholder="请输入密码"></el-input>
                                </el-form-item>    
                                <el-form-item prop="affirmpassword" class="iptBox">
                                    <i class="iconfont icon-42"></i>
                                    <el-input class="itppassword" v-model="form2.affirmpassword" placeholder="请再次输入密码"></el-input>
                                </el-form-item>    
                            </el-form>
                            <el-button @click="xgenterbut()" class="butlogin" type="primary">修改密码</el-button>
                            <p class="p1 clearfix">
                                <span @click="flag=1">
                                    想起密码了,前去登录
                                    <i class="iconfont icon-youjiantou1"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                    <!-- 立马注册 -->
                    <div class="login-Dialog-loginphone" v-show="flag==3?true:false">
                        <p>输入手机号和验证码注册</p>
                        <div class="contentnav">
                            <el-form :rules="rules" ref="fomrmenu1" :label-position="labelPosition" :model="form1">
                                <el-form-item class="iptBox" prop="username">
                                    <i class="iconfont icon-shouji"></i>
                                    <el-input class="iptphone" v-model="form1.username" placeholder="请输入手机号"></el-input>
                                </el-form-item>
                                
                                <el-form-item prop="verification" class="iptBox verification_box">
                                    <i class="iconfont icon-dunpai"></i>
                                    <el-input class="iptphone yzmcation" v-model="form2.verification" placeholder="请输入验证码" maxlength="6"></el-input>
                                    <div class="fasonyzmBox">
                                        <span @click="sendauth()" class="fasonyzmtext" :v-model="dotaiText">{{dotaiText}}</span>
                                        <span class="fasonyzmtext" :v-model="yzmseconds">{{yzmseconds}}</span>
                                    </div>
                                </el-form-item> 
                            </el-form>
                            <p class="p1 clearfix">
                                <span @click="flag=1" class="p1left">立马登录</span>
                                <span @click="flag=2" class="p1right">忘记密码?</span>
                            </p>
                            <el-button @click="enterbut()" class="butlogin" type="primary">立即注册</el-button>

                            <p class="p4" @click="activeName='one'">
                                前去使用微信扫码登录
                                <i class="iconfont icon-youjiantou1"></i>
                            </p>

                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
            </div>
        </el-dialog>
        <slideverify class="sildeverifyclass" ref="slideblock" ></slideverify>
    </div>
</template>

<script>
import {
    isMobile
} from '@/utils/validate.js'
import {
    jsEncrypt  
} from '@/utils/validate.js'
import {
    regular
} from '@/utils/validate.js'
import slideverify from '@/components/page/slideverify'
export default {
    components: {
        slideverify,
    },
    props: {

    },
    data() {
        // 这是手机号登录 这一块
        let cellphone = (rule, value, callback) => {
            if (value === '' || !isMobile(value)) {
                this.sendauth = null;
                callback(new Error('请输入正确的手机号'));
            } else {
                // this.Dialogverify = true;
                this.sendauth = function(){
                    this.$refs.slideblock.handleClick()
                    this.$refs.slideblock.Dialogverify = true;
                }
                callback();
            }
        };

        let yzmyz = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入验证码'));
            } else {
                callback();
            }
        };

        // 这是修改密码这一块
        let validatePass1 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else if (this.form2.affirmpassword.length < 6 || !regular(this.form2.affirmpassword)) {
                callback(new Error('请设置您的账号密码（6-11数字或字母组合）'));
            }else {

                callback();
            }
        };
        let repeatPassword = (rule, value, callback) => {
            if (this.form2.affirmpassword == '') {
                callback(new Error('请再次输入密码'));
            } else if (this.form2.affirmpassword !== this.form2.xiugaipassword) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        }
        return {
            activeName: 'one',
            dotaiText : '发送验证码',
            yzmseconds : '',
            labelPosition: 'oneUi',
            qrcodeimgUrl : 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQGH8DwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyMHhwMGd0Y3ljNzIxWFJaaE52YzEAAgS5vdFfAwQ8AAAA',
            // 二维码边框

            form1:{
                username : '',
                password : '',
            },
            form2:{
                phone : '',
                verification : '',
                xiugaipassword : '',
                affirmpassword : '',
            },
            rules: {
                // username: [{
                //     validator: cellphone,
                //     trigger: 'blur'
                // }],
                // password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                phone: [{
                    validator: cellphone,
                    trigger: 'blur'
                }],
                xiugaipassword: [{
                    validator: validatePass1,
                    trigger: 'blur'
                }],
                affirmpassword: [{
                    validator: repeatPassword,
                    trigger: 'blur'
                }],
                verification : [{
                    validator: yzmyz,
                    trigger: 'blur'
                }]
            },



            clasName : 'iconfont icon-shangpin',
            


            flag : 1,
            // 验证码窗口
            // Dialogverify : false
        };
    },
    methods: {
        // 切换
        convert(){
            // this.flagone == true ? this.clasName = 'iconfont icon-douyin' : this.clasName = 'iconfont icon-shangpin';
            // this.flagone = !this.flagone;
            // this.flagtow = !this.flagtow;
        },
        // 关闭
        loginclose(){
            this.$store.commit('loginflagchange', false);
            this.flag = 1;
            this.activeName = 'one';
        },
        // 发送验证码
        sendauth(){

        },
        // 登录
        enterbut(){
            this.$refs.fomrmenu1.validate(valid => {
                if (valid) {
                    this.$http({
                        url: "/system/auth/login",
                        method: "POST",
                        data : this.$http.adornData({
                            userCode : this.form1.username,
                            password : this.form1.password,
                            // username : 'supermanager',
                            // password : '123',
                        },true,'form')
                    }).then(({data}) => {
                        console.log(data)
                        if(data.code == 200){
                            localStorage.setItem('token', data.result.token)
                            localStorage.setItem('ms_username', this.form1.username);    //localStorage
                            this.$cookie.set('token', data.result.token)                 //Cookies
                            this.$store.commit('tokenchange', data.result.token)        //vueX 
                            console.log(this.$store.state.token)

                            this.$message.success('登录成功');

                            window.location.reload()
                        }else if(data.code == 401){
                            this.$message.success('请输入正确的账号和密码');
                        }
                        else{
                            this.$message.success('系统开了个小差');
                            this.$store.commit('loginflagchange', false)
                            this.clasName = 'iconfont icon-shangpin';
                            this.flagone = true;
                            this.flagtow = false;
                        }

                    }).catch(err => {
                        console.log(err)
                    })
                } else {
                    this.$message.error('请输入正确的账号和密码');
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        // 修改密码
        xgenterbut(){
            this.$refs.fomrmenu2.validate(valid => {
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
.sildeverifyclass{
    position: fixed;
    z-index: 99999;
    top:50%;
    left:49.5%;
    transform: translate(-50%,-50%);
}
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
        .el-dialog{
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
            max-height: 80%;
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
                padding: 0 30px 30px;
                color: #8b8c91;
                background: #0C2E55;
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
                        p{
                            font-size: 16px;
                            color: #fff;
                        }
                        .qrcodep1{
                            font-size: 18px;
                            color: #fff;
                        }
                        .qrcodep2{
                            font-size: 14px;
                            color: hsla(0,0%,100%,.4);
                        }
                        .qrcodep3{
                            margin-top: 30px;
                            cursor: pointer;
                            color:#248FFF;
                            font-size: 14px;
                        }
                        // 二维码
                        .qrcode-contentnav{
                            display: inline-block;
                            position: relative;
                            height: 160px;
                            width: 160px;
                            margin: 25px 32px 45px;
                            text-align: center;
                            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAYAAAB65WHVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkREQzhEREEyNThFMTFFQUE5MkJCNkY1Qjc0MzE2RUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkREQzhEREIyNThFMTFFQUE5MkJCNkY1Qjc0MzE2RUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRERDOEREODI1OEUxMUVBQTkyQkI2RjVCNzQzMTZFQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCRERDOEREOTI1OEUxMUVBQTkyQkI2RjVCNzQzMTZFQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PryUPpkAAAQ3SURBVHja7NqxDYMwEEDRXOQpYCsGZStY45KaAkERxYffK5ELbEtfJ0Rk5guA/rwdAYBAAyDQAPW144N5nR7xUXpb9nC9MIandssEDdApgQYQaAAEGkCgARBogMG0m+v9ugb0qFKbLv8SaIIG6JRAAwg0AAININAACDSAQAMg0AAINIBAAyDQAAINgEADINAAAg2AQAMINAACDSDQAAg0AAININAACDSAQAMg0AAINIBAAyDQAAINgEADCDQAAg2AQAMINAACDSDQAAg0AAININAACDSAQAMg0ADDi8x0CgAmaAAEGkCgARBoAIEGQKABEGgAgQZAoAEEGgCBBkCgAQQaAIEGEGgABBpAoAEQaAAEGkCgARBoAIEGQKABEGgAgQZAoAEEGgCBBhBoAAQaAIEGEGgABBpAoAEQaAAEGkCgARBoAIEGQKABBBoAgQZAoAEEGgCBBhBoAAQaAIEGEGgABBpAoAEQaAAEGkCgARBoAIEGQKABBBoAgQZAoAEEGgCBBhBoAAQaAIEGEGgABBpAoAEQaACBBkCgARBoAIEGQKABBBoAgQZAoAEEGgCBBhBoAAQaQKABEGgABBpAoAEQaACBBkCgARBoAIEGQKABBBoAgQZAoAEEGgCBBhBoAAQaQKABEGgABBpAoAEQaACBBkCgARBoAIEGQKABBBoAgQYQaAAEGgCBBhBoAAQaQKABEGgABBpAoAEQaACBBkCgAQQaAIEGQKABBBoAgQYQaAAEGgCBBhBoAAQaQKABEGgAgXYEAAINgEADCDQAAg0g0AAINAACDSDQAAg0gEADINAACDSAQAMg0AACDYBAAwg0AAINgEADCDQAAg0g0AAINAACDSDQAAg0gEADINAAAg2AQAMg0AACDYBAAwg0AAINgEADCDQAAg0g0AAINIBAAyDQAAg0gEADINAAAg2AQAMg0AACDYBAAwg0AAINgEADCDQAAg0g0AAINIBAAyDQAAg0gEADINAAAg2AQAMg0AACDYBAAwg0AAININAACDQAAg0g0AAINIBAAyDQAAg0gEADINAAAg2AQAMINAACDYBAAwg0AAININAACDQAAg0g0AAINIBAAyDQAAg0gEADINAAAg2AQAMINAACDYBAAwg0AAININAACDQAAg0g0AAINIBAAyDQAAINgEADINAAAg2AQAMINAD/044P5nXKk/VRZWPbsrtdGMS3W5VeN0+6FSZogAIEGkCgARBoAIEGQKABBBoAgQZAoAEEGgCBBhBoAAQaAIEGEGgABBpAoAEQaACBBkCgARBoAIEGQKABBBoAgQZAoAEEGgCBBhBoAAQaQKABEGgABBpAoAEQaACBBkCgARBoAIEGQKABBBoAgQYYXru5PgvtLVwvDCOfuCkTNIBAAyDQAAINgEADCDQAPYjMdAoAJmgABBpAoAH4hY8AAwBPDB7NTMdV2wAAAABJRU5ErkJggg==) top no-repeat;
                            // top no-repeat
                            background-size: cover;
                            padding-top: 160px;
                            .wireanimation{
                                pointer-events: none;
                                position: absolute;
                                z-index: 101;
                                top: 0;
                                left: -20px;
                                height: 2px;
                                width: 200px;
                                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAAGCAYAAAAbvk2+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkREQzhEREUyNThFMTFFQUE5MkJCNkY1Qjc0MzE2RUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkREQzhEREYyNThFMTFFQUE5MkJCNkY1Qjc0MzE2RUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRERDOEREQzI1OEUxMUVBQTkyQkI2RjVCNzQzMTZFQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCRERDOERERDI1OEUxMUVBQTkyQkI2RjVCNzQzMTZFQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjKa0XgAAAOUSURBVHja7FoLjtwgDMWQK7T3v0rP1Qmutpqo1tPzhyTT7laDNMoCxpiP/Wwv8v3HN2l/ysff4/lt0C6m/ePbCV3GpzvjuvlFfLx5GR3WJem3fLtpQzmHaReQG/l3wvf4abB+T/7uyMfGY10cOY7+zfBVhw7nrZ5zf/IXWLt37mz8CO7H6r3J7nNWb4GejEQvmByNfCt6dpSP/Zxwp5R8NaBHfjvpx3Fn6pr0e/PuT1pbJrQf/BidbRdD+wC52HiUaxraKn9Gh/sxYT+Qns2rwf7NZD+U7NtO7k4ml7cv2flqIv/KPWR00fq1cM6tMK8G91UTvf1tFKtFEgNmD4IZDi0Y3Ioh3U4CcE/6RwBQh/wjAGBx5LTzjuL6I/mkAMC9CMADALICwFgfAWh0xyFpiZxsfRkAR45kXwTYlbrA3NhudaMKqK8uGhiPzPA9LgKwZ/i9ecUAWQbAE+bQACCP9p/BeM8BYMAYAfAkIF+RMwJgdYB0LwLldIDyQQDGA2w8q5mcJ6sj3x7Uo3vYCB3TT3unIr3w+DFZTpezAIxg2wIvnvXJwkZFwF+lqxhUCSJOz4FAAO6BgZYASCoA3AmISQKM1Qh4FYBHImeU5dgSOYQ4NBEAN2dfxuL5r9DbPR3OPfzXILuiy6wMAljMQGYAu1+gt4ZdHADuJKJciVDbc85GnAIF50kNfRWA7VgxMu4kOjtATQK9bRCtSgBEON7O14G2myADI1qWVTn0bSf7hA5pFPGqo9MtwJIqXYQXK85qhm23APBdhoPxsW1qFOozG6lGAOQOme9YvzoOw130rzD0GAm+y+ctSgyvXvX2L8gxg3a9oIPTiYS+SvGConf5ImULPPwWhNoRWPegXcED6wUFr4b8Gd0sRLye4gtEh170zzxPXCNLsarD1wMvGxEPYqTUeKk25TLMOewgtyxEwBPOlDlbh3wbeOA24lhJQc8gBd1g/WdS0PvJFPT+H6WgWVrUi2T/RgoaU78shYop0Epq9+C7J+PvSEHvL0xBZ//D9VLQLUhB7xdS0JX/8WdvAqJ6u0h3xlGRwDm97PBsi0rr1RUunmeUvRy7JukIIWCBdAiwGeCuPMKKUqArj7CaAwirj7CEpI2bkwpuZA3sbO58hCXGOdjg/CVIvUf7836ElUd0Vx9hWcdME/5nAXflEVb2+MpzILJHWAiM0r7mIywGlO9HWP65N0fO7J5HwH+p/BJgAJcr7SJmfzomAAAAAElFTkSuQmCC) no-repeat;
                                background-size: cover;
                                animation: QRcode 1.2s infinite alternate;
                                -webkit-animation: QRcode 1.2s infinite alternate;
                            }
                            .qrcodeImg{
                                position: absolute;
                                top: 10px;
                                left: 10px;
                                z-index: 100;
                                height: 140px;
                                width: 140px;
                                opacity: .88;
                            }
                        }
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
                            .p1{
                                font-size: 14px;
                                margin: 10px 0;
                                color: rgba(41,151,255,.8);
                                .p1left{
                                    float: left;
                                }
                                .p1right{
                                    float: right;
                                }
                                span{
                                    cursor: pointer;
                                }
                                span:last-child{
                                    &:hover{
                                        color: #2997ff;
                                    }
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
                                margin-bottom: 70px;
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
    }
    // tab标签 
    /deep/.el-tabs__header{
        margin-bottom:50px;
        .el-tabs__nav-wrap{
            &:after{
                display: none !important;
            }
            .el-tabs__nav-scroll{
                .el-tabs__nav {
                    left: 50%;
                    transform: translateX(-50%) !important;
                    .el-tabs__item{
                        color:#fff;
                    }
                    .is-active{
                        color:#248FFF;
                    }
                    .el-tabs__active-bar {
                        width: 45px !important;
                        margin-left: 14px;
                    }
                }
            }
        }
    }
}

</style>
