<template>
    <div class="time-wrapper">
        <div class="d-time-date">
            <div>
                <span>选择你要查看的日期</span>
                <el-radio v-model="radio2" label="7" border size="mini">昨日</el-radio>
                <el-radio v-model="radio2" label="15" border size="mini">近3日</el-radio>
                <el-radio v-model="radio2" label="30" border size="mini">近一周</el-radio>
            </div>
            <div>
                <p>榜单更新时间：2020-01-04 23:59</p>
            </div>
        </div>
    </div>
</template>

<script>
import { dateToStr } from '@/utils/validate.js'
export default {
    naem : '实时直播榜',
    name: "detailed-time",
    components: {
        
    },
    props: {

    },
    data() {
        return {
            radio2: '7',
            value1: '',
            
        };
    },
    computed: {
        
    },
    created() {
        
    },
    mounted() {
        
    },
    methods: {
        changeTime () {
            console.log(dateToStr(this.value1[0]),dateToStr(this.value1[1]))
        }
    },
};
</script>

<style lang="less" scoped>  
    .time-wrapper{
        margin-top: 20px;
        .d-time-date{
            background: #051C36;
            display: flex;
            align-items: center;
            justify-content: space-between;
            // width: 800px;
            padding: 10px;
            font-size: 12px;
            border-radius: 6px;
            color: #FFFFFF;
            //调整单选框样式
            /deep/.el-radio__inner{
                display: none;
            }
            /deep/.el-radio{
                margin-right: 0;
                color: #fff;
            }
            /deep/.el-radio.is-bordered{
                background: #103A6B;
                border: none;
            }
            /deep/.el-radio.is-bordered.is-checked{
                background: #248FFF;
            }
            /deep/.el-radio__input.is-checked+.el-radio__label{
                color: #fff;
            }
            /deep/.el-radio--mini.is-bordered{
                padding: 7px 15px 0 6px;
            }
            //调整日期样式
            /deep/.el-input__inner{
                background-color: #0D2F55;
                border: 1px solid #999999;
            }
            /deep/.el-range-input{
                background-color: #0D2F55;
            }
            span {
                margin-right: 10px;
            }
            p {
                color: #CCCCCC;
            }
        }
    }
    
</style>