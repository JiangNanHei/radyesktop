<template>
    <div class="date-wrapper">
        <div class="d-time-date">
            <span>选择你要查看的日期</span>
            <ul class="list">
                <li :class="{item,activeoptiondate: classindex == i}" v-for="(item,i) in data" :key="i"
                @click.stop="optiondatebut.call(this,i)">
                    {{item.title}}
                </li>
            </ul>
            <el-date-picker 
                range-separator="至"
                v-model="value" 
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
            classindex : 0,
            value: '',
            //设置时间选择器的禁用时间
            pickerOptions: this.procssDate(),
            data : [
                {
                    title: '1小时'
                },
                {
                    title: '3小时'
                },
                {
                    title: '6小时'
                },
                {
                    title: '12小时'
                },
                {
                    title: '日榜'
                },
                {
                    title: '周榜'
                },
                {
                    title: '月榜'
                },
            ]
        };
    },
    computed: {
        
    },
    created() {
        
    },
    mounted() {
        
    },
    methods: {
        // 选中效果
        optiondatebut(i){
            this.classindex = i;
        },
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
    .date-wrapper{
        .d-time-date{
            background: #051C36;
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 1000px;
            padding: 10px;
            font-size: 12px;
            border-radius: 6px;
            color: #FFFFFF;
            .list{
                .activeoptiondate{
                    background: #248FFF !important;
                } 
                .item{ 
                    border-radius: 2px;
                    cursor: pointer;
                    padding: 7px 0px;
                    width: 60px;
                    display: inline-block;
                    background: #103A6B;
                    margin:0 5px;
                    text-align: center;
                }
            }
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
    /deep/.el-range-separator{
        color:#fff;
        padding: 0;
    }
    /deep/.el-range-input{
        color:#fff;
    }
</style>