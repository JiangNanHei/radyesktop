<template>
    <div class="time-wrapper">
        <div class="d-time-date">
            <el-radio v-model="radio2" label="7" border size="mini">7天</el-radio>
            <el-radio v-model="radio2" label="15" border size="mini">15天</el-radio>
            <el-radio v-model="radio2" label="30" border size="mini">30天</el-radio>
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
            radio2: '7'
        };
    },
    computed: {
        
    },
    created() {
        
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>

<style lang="less" scoped>  
    .time-wrapper{
        margin-bottom: 20px;
        .d-time-date{
            font-size: 12px;
            border-radius: 6px;
            color: #FFFFFF;
            display: flex;
            justify-content: flex-end;
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
        }
    }
    
</style>