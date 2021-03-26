<template>
    <div>
        <dropdowm ref="dropdown"></dropdowm>
        <el-table v-infinite-scroll="load" infinite-scroll-disabled="disabled" :data="tableData" style="width: 100%">
            <el-table-column min-width="60px" align="center" label="排名">
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
            <el-table-column min-width="240px" align="center" label="直播">
                <template slot-scope="scope">
                    <div class="columntow">
                        <div class="userImg" @click="goReallivedetailed">
                            <el-image :src="scope.row.live.imgurl"></el-image>
                            <div class="live_button_ing">
                                <el-image :src="scope.row.live.img_gifurl"></el-image>
                                <span>直播中</span>
                            </div>
                        </div>
                        <div class="userName">
                            <p>
                                <span class="spanone">{{scope.row.live.title_top}}</span>
                            </p>
                            <div>开播时间 : {{scope.row.live.opening_hours}}</div>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column min-width="240px" align="center" label="达人">
                <template slot-scope="scope">
                    <div class="columnthree">
                        <div class="ImgBox" @click="goRealintelligentdetailed">
                            <img :src="scope.row.intelligent.imgurl">
                        </div>
                        <div class="user_count">
                            <div class="name_box">
                                <div>{{scope.row.intelligent.title_top}}</div>
                            </div>
                            <div class="user_level_box">
                                <div class="rank_head_dyNum">粉丝 : {{scope.row.intelligent.thenumberoffans | NumToUnitNum}}</div>
                                <div class="level">
                                    <span class="spanone">{{scope.row.intelligent.reputation}}</span>
                                    <span class="spantow">{{scope.row.intelligent.number}}</span>
                                    <span class="spanthree">{{scope.row.intelligent.give}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column min-width="88px" align="center" label="开播时间">
                <template slot-scope="scope">
                    <span>{{scope.row.theairtime}}</span>
                </template>
            </el-table-column>
            <el-table-column min-width="88px" align="center" label="当前观看人数">
                <template slot-scope="scope">
                    <span>{{scope.row.viewsnumber | NumToUnitNum}}</span>
                </template>
            </el-table-column>
            <el-table-column min-width="88px" align="center" label="获得音浪">
                <template slot-scope="scope">
                    <span>{{scope.row.sound | NumToUnitNum}}</span>
                </template>
            </el-table-column>
            <el-table-column min-width="88px" align="center" label="获得点赞数">
                <template slot-scope="scope">
                    <span>{{scope.row.givelink | NumToUnitNum}}</span>
                </template>
            </el-table-column>
            <el-table-column min-width="88px" align="center" label="累计销量">
                <template slot-scope="scope">
                    <span>{{scope.row.salesvolume | NumToUnitNum}}</span>
                </template>
            </el-table-column>
            <el-table-column min-width="88px" align="center" label="累计销售额()预估">
                <template slot-scope="scope">
                    <span class="salesAmount">￥{{scope.row.saleroom | NumToUnitNum}}</span>
                </template>
            </el-table-column>
            <el-table-column min-width="140px" align="center" label="操作">
                <div class="table_button_group">
                    <el-button type="primary" @click="goRealdetailscreen">详情大屏</el-button>
                </div>
            </el-table-column>
        </el-table>
        <p class="hint_empty underway" v-show="loading">加载中...</p>
        <p class="hint_empty" v-if="noMore">已经到底了0.0</p>
    </div>
</template>
<script>
import dropdowm from './drop-down'
    export default {
        components: {
            dropdowm,
        },
        props: {

        },
        data() {
            return {
                //起始页数值为0
                count: 0,
                loading: false,
                // 初始数组
                tableData: [

                ],
                // 取后端返回内容的总页数
                totalPages: '',
            };
        },
        methods: {
            load() {
                //滑到底部时进行加载
                this.loading = true;
                let timeout = setTimeout(() => {
                    this.count += 1; //页数+1
                    this.getMessage(); //调用接口，此时页数+1，查询下一页数据
                    clearInterval(timeout);
                }, 2000);
            },
            //主要按钮前往达人详情
            goRealintelligentdetailed() {
                this.$router.replace('/intelligentdetailed');
            },
            //主要按钮前往直播详情
            goReallivedetailed(){
                this.$router.replace('/livedetailed');
            },
            //主要按钮前往详情大屏
            goRealdetailscreen() {
                this.$router.replace('/detailsscreen');
            },
            // 获取列表数据 接口
            getMessage(){
                this.$http({
                    url: "live/live_list/live_list/anchorfanslist.json",
                    method: "get",
                }).then(({
                    data
                }) => {
                    // 列表数据处理
                    // 数组拼接上后端返回的数组
                    this.tableData = this.tableData.concat(data.tableDataobj.tabDatalist);
                    this.totalPages = data.tableDataobj.totalPages;
                    this.loading = false;
                    // 查看全网实时直播数据
                    this.$refs.dropdown.carouselData = data.carouselData;
                    // 往期榜单时间数据
                    this.$refs.dropdown.to_issue_list = data.to_issue_list;

                }).catch(err => {

                })
            },
        },
        computed: {
            noMore() {
                //当起始页数大于总页数时停止加载
                return this.count >= this.totalPages - 1;
            },
            disabled() {
                return this.loading || this.noMore;
            },
        },
        mounted () {
            this.getMessage();
        }
    };
</script>

<style lang="less" scoped>

</style>