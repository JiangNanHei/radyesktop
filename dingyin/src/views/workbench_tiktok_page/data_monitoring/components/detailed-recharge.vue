<template>
    <div class="recharge-wrapper">
        <p class="d-recharge-message">直播监控次数 <span>剩余{{remaining_times}}次</span></p>
        <el-row :gutter="20">
            <el-col :span="8" v-for="(item, index) of recharge_result" :key="index">
                <div class="grid-content bg-purple d-recharge-provide" 
                :class="{select_style:is_select===index}"
                @click="selectItem(index,item.number)"
                >
                    <p class="d-recharge-provide-message">¥<span>{{item.number}}</span></p>
                    <span class="d-recharge-provide-desc">/{{item.desc}}次</span>
                </div>
            </el-col>
        </el-row>
        <div class="d-recharge-result">
            <p class="d-recharge-title">应付金额为</p>
            <p class="d-recharge-result-message">¥<span>{{result_item}}</span></p>
            <div class="d-recharge-result-img">
                <img :src="qr_code">
            </div>
            <p class="d-recharge-result-desc">请在<span>{{count_down}}</span>内完成支付</p>
        </div>
        <div class="d-recharge-desc">
            <img src="@/assets/images/my/weixin.png"><span class="d-recharge-desc-weixin">微信支付</span>
            或者
            <img src="@/assets/images/my/zhifubao.png"><span class="d-recharge-desc-zhifubao">微信支付</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "detailed-live",
    components: {
        
    },
    props: {

    },
    data() {
        return {
            remaining_times: '',
            recharge_result: [],
            qr_code: '',
            count_down: '',
            is_select: 0,
            result_item: '280.00',
        }
    },
    cmputed: {
      
    },
    created() {
        
    },
    mounted() {
        this.getData()
    },
    methods: {
       getData() {
            const _this = this
            this.$http({
                url: "/monitoring_recharge.json",
                method: "GET",
                data : this.$http.adornParams({

                },true)
            }).then(({data}) => {
                _this.remaining_times = data.remaining_times
                _this.recharge_result = data.recharge_result
                _this.qr_code = data.qr_code
                _this.count_down = data.count_down
                if(data.code == 200){
                    
                }else if(data.code == 401){
                    
                }
                else{
                    
                }
            }).catch(err => {
                console.log(err)
            })
        },
        selectItem(e, val){
            this.is_select = e
            this.result_item = val
        }
    },
};
</script>

<style lang="less" scoped>  
    .recharge-wrapper{
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
    
</style>