<template>
    <div class="time-wrapper">
        <div class="d-time-date">
            <div>
                <el-radio v-model="radio2" label="1" border size="mini">24小时</el-radio>
                <el-radio v-model="radio2" label="3" border size="mini">48小时</el-radio>
                <el-radio v-model="radio2" label="7" border size="mini">72小时</el-radio>
            </div>
        </div>
    </div>
</template>

<script>
import { dateToStr } from '@/utils/validate.js'
// 注释：基础会员每个月有30次监控直播机会 豪华会员有50次机会 超级会员有80次机会 消耗完次数后 需要充值直播次数
export default {
    naem : '实时直播榜',
    name: "detailed-time",
    components: {
        
    },
    props: {

    },
    data() {
        return {
            radio2: '1',
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
                    // let a = time.getTime() < Date.now() - 3600 * 1000 * 24 * _this.radio2  //限制过去的30天内
                    // let b = time.getTime() > Date.now();  //限制不能超过今天
                    // return a || b
                }
            }
        },
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
        margin: 20px 0;
        .d-time-date{
            // background: #051C36;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            // width: 800px;
            
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
            .d-time-title{
                margin: 0 10px 0 20px;

            }
            .d-time-icon{
                font-size: 24px;
                margin-left: 10px;
                color: #999999;
            }
        }
    }
    
</style>