<template>
        <el-dialog
        :visible.sync="dialogcharge"
        :close-on-click-modal="false" :append-to-body="true">
        <div class="recharge-wrapper">
            <i class="iconfont icon-cuowu1 closebut" @click="closebut"></i>
            <p class="title">修改密码</p>
            <el-row :gutter="20" class="rowheaderlist">
                <el-col :span="8" class="rowheaderitem" v-for="(item,i) in membername" :key="i">
                    <div class="text_box" @click="selectmember(item,i)" :class="{selectactive: classindex == i}" >
                        <i class="iconfont icon-huangguan"></i>
                        <span>{{item.title}}</span>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col class="moneynumber" :span="8" v-for="(item, i) in mainmessage" :key="i">
                    <div class="grid-content bg-purple d-recharge-provide" @click="selectmember2(item,i)" :class="{selectactive: classindex2 == i}">
                        <p class="d-recharge-provide-message">¥<span>{{item.money}}</span></p>
                        <span class="d-recharge-provide-desc">{{item.time}}个月</span>
                    </div>
                </el-col>
            </el-row>
            <div class="d-recharge-result">
                <p class="d-recharge-title">应付金额为</p>
                <p class="d-recharge-result-message">¥<span>{{money}}</span></p>
                <div class="d-recharge-result-img">
                    <img src="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQGT7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyUV9BbmdZY3ljNzIxV1hHLWh2Y3gAAgR-qv5fAwQ8AAAA">
                </div>
                <p class="d-recharge-result-desc">请在<span>{{msgdjs}}</span>内完成支付</p>
            </div>
            <div class="d-recharge-desc">
                <img src="@/assets/images/my/weixin.png"><span class="d-recharge-desc-weixin">微信支付</span>
                或者
                <img src="@/assets/images/my/zhifubao.png"><span class="d-recharge-desc-zhifubao">微信支付</span>
            </div>
        </div>
    </el-dialog>
</template>

<script>
export default {
    naem : 'vip中心充值弹窗',
    name: "detailed-live",
    components: {
        
    },
    props: {

    },
    data() {
        return {
            classindex : '',
            classindex2 : 0,
            // 倒计时
            countdown: 900,
            // 倒计时显示的时间
            msgdjs : 900,
            is_select: 0,
            money: 0,

            dialogcharge : false,
            mainmessage:[

            ],
            membername : [
                {
                    id : 1,
                    title : '基础会员版',
                    data:[
                        {
                            money: 499,
                            time: 1,
                        },
                        {
                            money: 2900,
                            time: 6
                        },
                        {
                            money: 4900,
                            time: 12
                        },
                    ],
                },
                {
                    id : 2,
                    title : '豪华会员版',
                    data:[
                        {
                            money: 1399,
                            time: 1,
                        },
                        {
                            money: 5300,
                            time: 6
                        },
                        {
                            money: 8900,
                            time: 12
                        },
                    ],
                },
                {
                    id : 3,
                    title : '超级会员版',
                    data:[
                        {
                            money: 4799,
                            time: 1,
                        },
                        {
                            money: 18000,
                            time: 6
                        },
                        {
                            money: 30000,
                            time: 12
                        },
                    ],
                }
            ],
            
            // 定时器
            timer : null
        }
    },
    methods: {
        getData() {

        },
        selectItem(e, val){
            this.is_select = e
            this.result_item = val
        },

        // 关闭
        closebut(){
            this.dialogcharge = false;
        },
        // 选择会员
        selectmember(item,i){
            this.classindex = i;
            console.log(item)
            // this.mainmessage = item.data;
            this.classindex2 = 0;
            

            clearInterval(this.timer);
            this.timer = null;
            // 开启倒计时
            
            this.countdownfun(this.countdown)
        },
        // 选择会员
        selectmember2(item,i){
            this.classindex2 = i;
        },
        // 倒计时方法
        countdownfun(tiem){
            clearInterval(this.timer);
            this.timer = null;
            let that = this;
            let shij = tiem;
            this.timer = setInterval(()=>{
                if(shij <= 60){
                    shij--;
                    that.msgdjs = shij%60 +　'秒';
                }else{
                    shij--;
                    that.msgdjs = Math.floor(shij/60) + '分' + shij%60 +　'秒';
                }
                
                if(shij <= 0){
                    clearInterval(this.timer);
                    this.timer = null;
                }
            },1000)
        },
        changeOrderState(){

        },
    },
    mounted() {
        this.getData();
        // 开启倒计时
        this.countdownfun(this.countdown);
    },
    watch : {
        'classindex' : function(){
            // 重置 倒计时 
            this.countdownfun(this.countdown)
            this.mainmessage = this.membername[this.classindex].data;

            this.money = this.membername[this.classindex].data[0].money;
        },
        'classindex2' : function(){
            // 重置 倒计时 
            this.countdownfun(this.countdown)
            
            this.money = this.membername[this.classindex].data[this.classindex2].money;
        }
    }
};
</script>

<style lang="less" scoped>  
    /deep/.el-dialog{
        background: #082C55;
        border: none;
        border-radius: 12px;
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
            display: none;
        }
        .el-dialog__title{
            font-size: 16px;
            color: #FFFFFF;
        }
        .el-dialog__body{
            padding-top: 20px;
        }
        .el-popover{
            background: #082C55!important;
            border-radius: 12px;
        }
        .recharge-wrapper{
            .rowheaderlist{
                margin-bottom:30px;
                .rowheaderitem{
                    &:nth-child(1){
                        color: #E9BF95;
                    }
                    &:nth-child(2){
                        color: #E29696;
                    }
                    &:nth-child(3){
                        color: #F9D680;
                    }
                    .text_box{
                        text-align: center;
                        cursor: pointer;
                        border-radius: 7px;
                        font-size: 24px;
                        width: 100%;
                        padding: 20px;
                        background: #041F3D;
                        border:3px solid rgba(0, 0, 0, 0);
                        i{
                            font-size: 24px;
                            margin-right: 10px;
                        }
                    }
                }
            }
            .d-recharge-message{
                font-size: 12px;
                color: #999;
                margin-bottom: 20px;
                span{
                    color: #CCCCCC;
                }
            }
            .d-recharge-provide{
                cursor: pointer;
                background: #041F3D;
                border-radius: 7px;
                padding: 20px;
                text-align: center;
                border: 3px solid rgba(0,0,0,0);
                .d-recharge-provide-message{
                    color: #FBAE46;
                    font-size: 14px;
                    span{
                        font-size: 38px;
                    }
                }
                .d-recharge-provide-desc{
                    color: #CCCCCC;
                    font-size: 14px;
                }
            }
            .select_style{
                border: 1px solid #248FFF;
            }
            .d-recharge-result{
                text-align: center;
                margin-top: 20px;
                .d-recharge-title{
                    font-size: 12px;
                    color: #CCCCCC;
                }
                .d-recharge-result-message{
                    margin-bottom: 10px;
                    color: #FBAE46;
                    font-size: 14px;
                    span{
                        font-size: 38px;
                    }
                }
                .d-recharge-result-img{
                    margin: 0 auto;
                    width: 140px;
                    height: 140px;
                    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAYAAAB65WHVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkREQzhEREEyNThFMTFFQUE5MkJCNkY1Qjc0MzE2RUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkREQzhEREIyNThFMTFFQUE5MkJCNkY1Qjc0MzE2RUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRERDOEREODI1OEUxMUVBQTkyQkI2RjVCNzQzMTZFQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCRERDOEREOTI1OEUxMUVBQTkyQkI2RjVCNzQzMTZFQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PryUPpkAAAQ3SURBVHja7NqxDYMwEEDRXOQpYCsGZStY45KaAkERxYffK5ELbEtfJ0Rk5guA/rwdAYBAAyDQAPW144N5nR7xUXpb9nC9MIandssEDdApgQYQaAAEGkCgARBogMG0m+v9ugb0qFKbLv8SaIIG6JRAAwg0AAININAACDSAQAMg0AAINIBAAyDQAAINgEADINAAAg2AQAMINAACDSDQAAg0AAININAACDSAQAMg0AAINIBAAyDQAAINgEADCDQAAg2AQAMINAACDSDQAAg0AAININAACDSAQAMg0ADDi8x0CgAmaAAEGkCgARBoAIEGQKABEGgAgQZAoAEEGgCBBkCgAQQaAIEGEGgABBpAoAEQaAAEGkCgARBoAIEGQKABEGgAgQZAoAEEGgCBBhBoAAQaAIEGEGgABBpAoAEQaAAEGkCgARBoAIEGQKABBBoAgQZAoAEEGgCBBhBoAAQaAIEGEGgABBpAoAEQaAAEGkCgARBoAIEGQKABBBoAgQZAoAEEGgCBBhBoAAQaAIEGEGgABBpAoAEQaACBBkCgARBoAIEGQKABBBoAgQZAoAEEGgCBBhBoAAQaQKABEGgABBpAoAEQaACBBkCgARBoAIEGQKABBBoAgQZAoAEEGgCBBhBoAAQaQKABEGgABBpAoAEQaACBBkCgARBoAIEGQKABBBoAgQYQaAAEGgCBBhBoAAQaQKABEGgABBpAoAEQaACBBkCgAQQaAIEGQKABBBoAgQYQaAAEGgCBBhBoAAQaQKABEGgAgXYEAAINgEADCDQAAg0g0AAINAACDSDQAAg0gEADINAACDSAQAMg0AACDYBAAwg0AAINgEADCDQAAg0g0AAINAACDSDQAAg0gEADINAAAg2AQAMg0AACDYBAAwg0AAINgEADCDQAAg0g0AAINIBAAyDQAAg0gEADINAAAg2AQAMg0AACDYBAAwg0AAINgEADCDQAAg0g0AAINIBAAyDQAAg0gEADINAAAg2AQAMg0AACDYBAAwg0AAININAACDQAAg0g0AAINIBAAyDQAAg0gEADINAAAg2AQAMINAACDYBAAwg0AAININAACDQAAg0g0AAINIBAAyDQAAg0gEADINAAAg2AQAMINAACDYBAAwg0AAININAACDQAAg0g0AAINIBAAyDQAAINgEADINAAAg2AQAMINAD/044P5nXKk/VRZWPbsrtdGMS3W5VeN0+6FSZogAIEGkCgARBoAIEGQKABBBoAgQZAoAEEGgCBBhBoAAQaAIEGEGgABBpAoAEQaACBBkCgARBoAIEGQKABBBoAgQZAoAEEGgCBBhBoAAQaQKABEGgABBpAoAEQaACBBkCgARBoAIEGQKABBBoAgQYYXru5PgvtLVwvDCOfuCkTNIBAAyDQAAINgEADCDQAPYjMdAoAJmgABBpAoAH4hY8AAwBPDB7NTMdV2wAAAABJRU5ErkJggg==") no-repeat;
                    background-size: cover;
                    text-align: center;
                    line-height: 137px;
                    >img{
                        width: 120px;
                        height: 120px;
                        vertical-align: middle;
                    }
                }
                .d-recharge-result-desc{
                    margin: 10px 0 30px 0;
                    font-size: 12px;
                    color: #CCCCCC;
                    span{
                        color: #FF2424;
                    }
                }

            }
            .d-recharge-desc{
                text-align: center;
                font-size: 14px;
                color: #999;
                margin-bottom: 30px;
                margin-top: 50px;
                img{
                    vertical-align: middle;
                    width: 30px;
                    margin-right: 5px;
                }
                .d-recharge-desc-weixin{
                    color: #09BB07;
                }
                .d-recharge-desc-zhifubao{
                    color: #00AAEE;
                }
            }
        }
    }

    // 选中效果
    .selectactive{
        border: 3px solid #248FFF !important;
    }
</style>