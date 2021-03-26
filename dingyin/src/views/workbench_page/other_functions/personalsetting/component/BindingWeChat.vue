<template>
    <div class="loginDialog">
        <el-dialog
            :visible.sync="bindingwechatdialog"
            width="360px"
            :append-to-body="true"
            :show-close = "false"
            :close-on-click-modal="false">
            <i class="iconfont icon-cuowu1 closebut" @click="closebut"></i>
            <p class="headertitle">扫码绑定微信</p>
            <div class="login-Dialog-content">
                <!-- 微信二维码登录 -->
                <div class="login-Dialog-loginphone">
                    <p class="qrcodep1">微信二维码扫码</p>
                    <div class="qrcode-contentnav">
                        <div class="wireanimation"></div>
                        <img class="qrcodeImg" :src="`${this.qrcodeimgUrl}`">
                    </div>
                    <p class="qrcodep2">-请使用微信扫一扫进行扫码-</p>
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
        return {
            bindingwechatdialog : false,
            qrcodeimgUrl : 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQGH8DwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyMHhwMGd0Y3ljNzIxWFJaaE52YzEAAgS5vdFfAwQ8AAAA',
            // 二维码边框
            flag : 1,
        };
    },
    methods: {
        // 关闭
        closebut(){
            this.bindingwechatdialog = false;
        }
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
    .headertitle{
        text-align: center;
        padding-top: 60px;
        margin-bottom: 30px;
        color:#fff;
        font-size: 20px;
    }
    .el-dialog__body{
        position: relative;
        padding: 0 30px 30px;
        color: #8b8c91;
        font-size: 14px;
        word-break: break-all;
        .login-Dialog-content{
            position: relative;
            text-align: center;
            .login-Dialog-loginphone{
                p{
                    font-size: 16px;
                    color: #fff;
                }
                .qrcodep1{
                    font-size: 16px;
                    color: #fff;
                    margin-bottom: 20px;
                }
                .qrcodep2{
                    font-size: 14px;
                    color: hsla(0,0%,100%,.4);
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
            }
        }
        
    }

}
</style>
