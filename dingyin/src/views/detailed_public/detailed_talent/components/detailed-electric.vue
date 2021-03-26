<template>
    <div class="electric-wrapper">
        <detailed-time></detailed-time>
        <div class="d-live-record">
            <p>直播数据概览</p>
            <electrictable 
                :classification_data="classification_data"
                :overview_data="overview_data"
                :towtableData_master="towtableData_master"
                :towtableData="towtableData">

            </electrictable>
        </div>
    </div>
</template>

<script>
import electrictable from "./detailed-electric-table"
import detailedTime from '@/components/page/douyin/detailed-time'
export default {
    naem : '实时直播榜',
    name: "detailed-electric",
    components: {
        electrictable,
        detailedTime
    },
    props: {

    },
    data() {
        return {
            classification_data: [],
            overview_data: [],
            towtableData_master: [],
            towtableData: []
        };
    },
    computed: {
        
    },
    created() {
        
    },
    mounted () {
        this.getData()
    },
    methods: {
        getData() {
            const _this = this
            this.$http({
                url: "/detailed_talent_electirc.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.classification_data = data.classification_data
                _this.overview_data = data.overview_data
                _this.towtableData_master = data.towtableData_master
                _this.towtableData = data.towtableData
                if(data.code == 200){
                    
                }else if(data.code == 401){
                    
                }
                else{
                    
                }

            }).catch(err => {
                console.log(err)
            })
        }
    },
};
</script>

<style lang="less" scoped>
    .d-live-record{
        border-radius: 6px;
        padding: 20px;
        background: #051C36;
        overflow: hidden;
        margin-top: 10px;
        >p{
            font-size: 16px;
            margin-bottom: 20px;
            color:#FFFFFF;
        }
    }
</style>