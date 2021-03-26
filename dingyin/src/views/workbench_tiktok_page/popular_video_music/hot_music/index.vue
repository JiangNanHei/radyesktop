<template>
    <div class="sellgoods_box">
        <detailed-table :content="live_table" :total_data="total_data"></detailed-table>
    </div>
</template>

<script>
import detailedTable from './component/detailed-table'
export default {
    components: {
        detailedTable
    },
    props: {

    },
    data() {
        return {
            live_table: [],
            total_dataz: ''
        };
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            const _this = this
            this.$http({
                url: "/music_detailed_table.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.live_table = data.live_table
                _this.total_data = data.total_data
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
.sellgoods_box{
    /deep/.tabheader {
        .el-tabs__header {
            .el-tabs__nav-wrap::after {
                display: none !important;
            }

            .el-tabs__active-bar {
                display: none;
            }

            .el-tabs__item {
                padding: 0px;
                margin-right: 20px;
                display: inline-block;
                white-space: nowrap;
                cursor: pointer;
                background: #103A6B;
                border: 1px solid #103A6B;
                color: #fff;
                -webkit-transition: .1s;
                transition: .1s;
                font-weight: 500;
                font-size: 14px;
                border-radius: 4px;
                width: 112px;
                height: 40px;
                line-height: 40px;
                text-align: center;

                &:hover {
                    border-color: hsla(0, 0%, 100%, .5);
                }

            }

            .is-active {
                background-image: -webkit-linear-gradient(45deg, #1d6dff, #0dafff);
                border: none;
            }
        }
    }
}
</style>
