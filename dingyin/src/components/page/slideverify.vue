<template>
    <div v-show="Dialogverify" class="menb">
        <div class="slideBox">
            <p class="Textp">拖动下方滑块完成拼图</p>
            <slide-verify 
                ref="slideblock"
                @again="onAgain"
                @fulfilled="onFulfilled"
                @success="onSuccess"
                @fail="onFail"
                @refresh="onRefresh"
                :accuracy="accuracy"
                :slider-text="text"
                :h="200"
                :w="340"
            ></slide-verify>
            <i @click="closeverify()" class="iconfont icon-cuowu1 closeright"></i>

        </div>
        <!-- <button @click="handleClick">在父组件可以点我刷新哦</button> -->
    </div>
</template>

<script>
import Vue from 'vue';
import SlideVerify from 'vue-monoplasty-slide-verify';
Vue.use(SlideVerify);
export default {
   name: 'App',
    data(){
        return {
            msg: '',
            text: '',
            // 精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5
            accuracy: 5,

            // 验证码窗口
            Dialogverify : false
        }
    },
    methods: {
        onSuccess(times){
            this.$message.success('验证码发送成功');
            // console.log('验证通过，耗时 +' times + '毫秒');
            this.msg = 'login success, 耗时${(times / 1000).toFixed(1)}s'
            this.Dialogverify = false;
            
            let that = this;
            let seconds = 60;
            that.$parent.dotaiText = '';
            that.$parent.yzmseconds = seconds + 'S';
            let time = setInterval(function(){
                if(seconds == 0){
                    clearTimeout(time);
                    time = null;
                    that.$parent.yzmseconds = '';
                    that.$parent.dotaiText = '重新发送';
                    return;
                }
                seconds--;
                that.$parent.yzmseconds = seconds + 'S';
            },1000)
        },
        onFail(){
            console.log('验证不通过');
            this.msg = ''
        },
        onRefresh(){
            console.log('点击了刷新小图标');
            this.msg = ''
        },
        onFulfilled() {
            console.log('刷新成功啦！');
        },
        onAgain() {
            console.log('检测到非人为操作的哦！');
            this.msg = 'try again';
            // 刷新
            this.$refs.slideblock.reset();
        },
        handleClick() {
            this.$refs.slideblock.reset();
        },

        // 关闭
        closeverify(){
            this.Dialogverify = false;
        }
    }
}
</script>

<style lang="less" scoped>
.menb{
    width: 100%;
    height:100%;
    background:rgba(0,0,0,0.5);
}
/deep/.slide-verify-slider{
    // margin-top:-4px !important;
    // border-radius: 20px;
    // height: 20px !important;
    // line-height: 20px !important;
    // margin-top: 20px !important;
    .slide-verify-slider-mask{
        // margin-top: -10px !important;
        // background: none !important;
        // border: none !important;
    }
    .slide-verify-slider-mask-item{
        // height: 38px;
        // background-color: rgb(26, 121, 255);
        // box-shadow: rgba(26, 121, 255, 0.52) 0px 0px 10px 1px;
        // width: 70px;
        // height: 40px;
        // border-radius: 20px;
        // top: -6px !important;
        // left: 20px !important;
        position: relative;
        width: 40px;
        height: 36px;
        .slide-verify-slider-mask-item-icon{
            position: absolute;
            left: 50%;
            top:50%;
            transform: translate(-50%,-50%);
            // background-position: 0 -13px;
        }
    }
}

.slideBox{
    opacity:1;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    width: 360px;
    height: 360px;
    background: #fff;
    padding: 10px;
    border-radius: 5px;
    .Textp{
        font-size: 22px;
        text-align: left;
        color: black;
        line-height: 50px;
        user-select:none
    }
    /deep/.slide-verify-refresh-icon{
        right: 50px;
        top: 260px;
        z-index: 999;
    }
    .closeright{
        cursor: pointer;
        position: absolute;
        right: 8px;
        bottom: 3px;
        font-size: 35px;
        transition: all 0.2s linear;
        &:hover{
            // color: #fff;
            transform: rotate(90deg);
        }
    }
}
</style>
