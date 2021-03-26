<template>
    <div class="video-wrapper">
        <video-table :content="video_table" :video_table2="video_table2"></video-table>
        <!-- <video-table2 :content="video_table2"></video-table2> -->
    </div>
</template>

<script>
import videoTable from './detailed-commodity-table'
import videoTable2 from './detailed-commodity-table2'
export default {
    naem : '实时直播榜',
    name: "detailed-live",
    components: {
        videoTable,
        videoTable2
    },
    props: {

    },
    data() {
        return {
            video_table: [],
            video_table2: []
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
                url: "/videos_detailed_commodity.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.video_table = data.video_table
                _this.video_table2 = data.video_table2
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
    
    
</style>