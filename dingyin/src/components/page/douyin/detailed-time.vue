<template>
    <div class="time-wrapper">
        <div class="d-time-date">
            <span>选择你要查看的日期</span>
            <div>
                <el-radio v-model="radio2" label="7" border size="mini">7天</el-radio>
                <el-radio v-model="radio2" label="15" border size="mini">15天</el-radio>
                <el-radio v-model="radio2" label="30" border size="mini">30天</el-radio>
                <el-radio v-model="radio2" label="90" border size="mini">90天</el-radio>
            </div>
            <el-date-picker 
                v-model="value1" 
                :picker-options="pickerOptions" 
                type="daterange"
                popper-class="date-style"
                @change="changeTime">
            </el-date-picker>
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
            //设置时间选择器的禁用时间
            pickerOptions: this.procssDate(),
        };
    },
    computed: {
        
    },
    created() {
        
    },
    mounted() {
        
    },
    methods: {
        procssDate () {
            let _this = this
            return{
                disabledDate(time) {
                    let a = time.getTime() < Date.now() - 3600 * 1000 * 24 * _this.radio2  //限制过去的30天内
                    let b = time.getTime() > Date.now();  //限制不能超过今天
                    return a || b
                }
            }
        },
        changeTime () {
            console.log(dateToStr(this.value1[0]),dateToStr(this.value1[1]))
        }
    },
};
</script>
<style>
    .date-style{
        background: #39404F;
        border: none;
    }
    .el-date-table td.disabled div{
        background: none;
    }
    .available{
        background: #20242E;
    }
    .el-date-table td.in-range div, .el-date-table td.in-range div:hover, .el-date-table.is-week-mode .el-date-table__row.current div, .el-date-table.is-week-mode .el-date-table__row:hover div{
        background: #20242E;
    }
    .el-date-table td.end-date span, .el-date-table td.start-date span{
        background:#FC2470;
        color: #48162D;
    }
    .popper__arrow{
        display: none!important;
    }
</style>
<style lang="less" scoped>  
    .time-wrapper{
        .d-time-date{
            background: #051C36;
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 800px;
            padding: 10px;
            font-size: 12px;
            border-radius: 6px;
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
        }
    }
    
</style>