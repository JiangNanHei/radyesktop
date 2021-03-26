<template>
    <div>
        <!-- table -->
        <el-table :data="tableData.slice((currpage -1) * pagesize, currpage * pagesize)" style="width: 100%">
            <el-table-column align="center" label="排名">
                <template slot-scope="scope">
                    <div class="columnone">
                        <span v-if="scope.row.ranking === 1" class="The_first_three">{{scope.row.ranking}}
                            <i style="color:#FF4A4A" class="iconfont icon-paimingbiaoqian"></i>
                        </span>
                        <span v-else-if="scope.row.ranking === 2" class="The_first_three">{{scope.row.ranking}}
                            <i style="color:#4AA5FF" class="iconfont icon-paimingbiaoqian"></i>
                        </span>
                        <span v-else-if="scope.row.ranking === 3" class="The_first_three">{{scope.row.ranking}}
                            <i style="color:#FFAC4A" class="iconfont icon-paimingbiaoqian"></i>
                        </span>
                        <span v-else>{{scope.row.ranking | capitalize}}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" label="名称" prop="name"></el-table-column>
            <el-table-column align="center" label="正在直播场次" prop="session"></el-table-column>
            <el-table-column align="center" label="当前观看人数" prop="peoplecounting"></el-table-column>
            <el-table-column align="center" label="当前销量" prop="salesvolume"></el-table-column>
            <el-table-column align="center" label="预估销售额">
                <template slot-scope="scope">
                    <div class="salesamount_box">
                        <span>{{scope.row.salesamount}}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" label="操作">
                <div class="table_button_group">
                    <el-button type="primary">查看详情</el-button>
                </div>
            </el-table-column>

        </el-table>
        <div class="el_pagination_box clearfix">
            <el-pagination @size-change="handleSizeChange" @curren-change="handleCurrentChange"
                :page-sizes="[10,20,30,40,50,100]" :page-size="pagesize" background layout="prev, pager, next"
                :total="tableData.length">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    props: {

    },
    data() {
        return {
            pagesize: 10,
            currpage: 1,
            // 列表数据数组
            tableData: [{
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
                {
                    ranking: '1',
                    name: '休闲零食(美食饮品)',
                    session: '94',
                    peoplecounting: '3180',
                    salesvolume: '155.6W',
                    salesamount: '1540.0W',
                },
            ],
        };
    },
    methods: {
        handleSizeChange(val) {
            console.log(val);
            this.pagesize = val;
        },
        handleCurrentChange(val) {
            console.log(val);
            this.currpage = val;
        },
    },
};
</script>

<style lang="less" scoped>

</style>
