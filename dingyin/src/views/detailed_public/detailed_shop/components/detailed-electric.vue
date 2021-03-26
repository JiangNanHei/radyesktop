<template>
    <div class="electric-wrapper">
        <div class="d-live-record">
            <electrictable 
                :classification_data="classification_data"
                :towtableData="towtableData">

            </electrictable>
        </div>
    </div>
</template>

<script>
import electrictable from "./detailed-electric-table"
export default {
    naem : '实时直播榜',
    name: "detailed-electric",
    components: {
        electrictable
    },
    props: {

    },
    data() {
        return {
            classification_data: [],
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
                url: "/detailed_shop_electric.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.classification_data = data.classification_data
                _this.overview_data = data.overview_data
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
    
</style>