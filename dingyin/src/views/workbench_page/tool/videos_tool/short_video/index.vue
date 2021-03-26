<template>
    <div class="short-videos-wrapper">
        <!-- 搜索栏 -->
        <tableone :total_number="total_number"></tableone>
        <!-- 分类栏 -->
        <classificationdata :classification_data="classification_data" ref="classificationdata"></classificationdata>
        <!-- 数据筛选栏 -->
        <tabletow :saleroom="saleroom" :sales_volume="sales_volume"></tabletow>
        <!-- 详情下载栏 -->
        <tablethree :detailed_purple="detailed_purple"></tablethree>
    </div>
</template>

<script>
import tableone from './component/drainage_table_one'
import tabletow from './component/drainage_table_tow'
import tablethree from './component/drainage_table_three'
import classificationdata from '@/components/page/classification_data'
export default {
    components: {
        tableone,
        classificationdata,
        tabletow,
        tablethree,
    },
    props: {

    },
    data() {
        return {
            classification_data: {},
            total_number: '',
            saleroom: [],
            sales_volume: [],
            detailed_purple: []
        };
    },
    mounted () {
        this.getData()
    },
    methods: {
        getData() {
            const _this = this
            this.$http({
                url: "/tool_short_videos.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.classification_data = data.classification_data
                _this.total_number = data.total_number
                _this.saleroom = data.saleroom
                _this.sales_volume = data.sales_volume
                _this.detailed_purple = data.detailed_purple
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
.short-videos-wrapper{
    color: #fff;
    // background: #051C36;
    // border-radius: 6px;
    // padding: 10px;
    
}
</style>
