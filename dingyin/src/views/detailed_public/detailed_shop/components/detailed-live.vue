<template>
    <div class="live-wrapper">
        <detailed-time></detailed-time>
        <div class="d-live-record">
            <detailed-livetable :content="live_table"></detailed-livetable>
        </div>
    </div>
</template>

<script>
import detailedLivetable from './detailed-live-table'
import detailedTime from '@/components/page/douyin/detailed-time'
import { echartsBar, echartsPie } from '@/assets/js/echarts_self.js'
import { dateKey, dateValue } from '@/assets/js/independent_self.js'
export default {
    naem : '实时直播榜',
    name: "detailed-live",
    components: {
        detailedLivetable,
        detailedTime
    },
    props: {

    },
    data() {
        return {
            live_table: []
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
                url: "/detailed_shop_live.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.live_table = data.live_table
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
    .live-wrapper{
        width: 100%;
        .d-live-record{
            overflow: hidden;
            margin-top: 20px;
        }
    }
    
</style>