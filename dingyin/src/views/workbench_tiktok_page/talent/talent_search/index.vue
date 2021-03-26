<template>
    <div class="table_box">
        <div class="demo-input-suffix">
            <div class="search_box">
                <el-input
                    v-model = "broadcastsearchvalue"
                    placeholder="请输入商品标题"
                    >
                </el-input>
                <el-button type="primary" @click="broadcastsearchbut">搜索</el-button>
            </div>
            <p class="clickp" @click="eliminate"><i class="iconfont icon-icon--"></i><span>清空所选中的条件</span></p>
        </div>
        <!-- 数据分类 -->
        <classificationdata :classification_data="classification_data" ref="classificationdata"></classificationdata>
        <!-- 数据筛选 -->
        <div class="filtratedata">
            <ul class="filtratedata_list">
                <!-- 粉丝数 -->
                <li class="filtratedata_item">
                    <span class="timepicker_span_tow">粉丝数</span>
                    <el-select v-model="fans_number_value" placeholder="请选择" clearable>
                        <el-option
                        v-for="item in fans_number"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <!-- 点赞数 -->
                <li class="filtratedata_item">
                    <span class="timepicker_span_tow">点赞数</span>
                    <el-select v-model="easylike_number_value" placeholder="请选择" clearable>
                        <el-option
                        v-for="item in easylike_number"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <!-- 作品数 -->
                <li class="filtratedata_item">
                    <span class="timepicker_span_tow">作品数</span>
                    <el-select v-model="works_number_value" placeholder="请选择" clearable>
                        <el-option
                        v-for="item in works_number"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <!-- 商品数 -->
                <li class="filtratedata_item">
                    <span class="timepicker_span_tow">商品数</span>
                    <el-select v-model="commodity_number_value" placeholder="请选择" clearable>
                        <el-option
                        v-for="item in commodity_number"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <!-- 达人性别 -->
                <li class="filtratedata_item">
                    <span class="timepicker_span_tow">达人性别</span>
                    <el-select v-model="celebrity_sex_value" placeholder="请选择" clearable>
                        <el-option
                        v-for="item in celebrity_sex"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <!-- 达人年龄 -->
                <li class="filtratedata_item">
                    <span class="timepicker_span_tow">达人年龄</span>
                    <el-select v-model="celebrity_age_value" placeholder="请选择" clearable>
                        <el-option
                        v-for="item in celebrity_age"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <!-- 达人地域 -->
                <li class="filtratedata_item">
                    <span class="timepicker_span_tow">达人地域</span>
                    <el-cascader
                        size="large"

                        :options="celebrity_territory"

                        v-model="celebrity_territory_value"

                        @change="handleChange">

                    </el-cascader>
                </li>
                <!-- 达人星座 -->
                <li class="filtratedata_item">
                    <span class="timepicker_span_tow">达人星座</span>
                    <el-select v-model="celebrity_constellation_value" placeholder="请选择" clearable>
                        <el-option
                        v-for="item in celebrity_constellation"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <!-- 粉丝性别 -->
                <li class="filtratedata_item">
                    <span class="timepicker_span_tow">粉丝性别</span>
                    <el-select v-model="fans_sex_value" placeholder="请选择" clearable>
                        <el-option
                        v-for="item in fans_sex"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <!-- 粉丝年龄 -->
                <li class="filtratedata_item">
                    <span class="timepicker_span_tow">粉丝年龄</span>
                    <el-select v-model="fans_age_value" placeholder="请选择" clearable>
                        <el-option
                        v-for="item in fans_age"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <!-- 粉丝地域 -->
                <li class="filtratedata_item">
                    <span class="timepicker_span_tow">粉丝地域</span>
                    <el-cascader
                        size="large"

                        :options="fans_territory"

                        v-model="fans_territory_value"

                        @change="handleChange">

                    </el-cascader>
                </li>
                <!-- 粉丝星座 -->
                <li class="filtratedata_item">
                    <span class="timepicker_span_tow">粉丝星座</span>
                    <el-select v-model="fans_constellation_value" placeholder="请选择" clearable>
                        <el-option
                        v-for="item in fans_constellation"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <!-- 个人认证 -->
                <li class="filtratedata_item">
                    <span class="timepicker_span_tow">个人认证</span>
                    <el-select v-model="me_attestation_value" placeholder="请选择" clearable>
                        <el-option
                        v-for="item in me_attestation"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <!-- 商品橱窗 -->
                <li class="filtratedata_item">
                    <span class="timepicker_span_tow">商品橱窗</span>
                    <el-select v-model="shopwindow_value" placeholder="请选择" clearable>
                        <el-option
                        v-for="item in shopwindow"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <!-- 优质直播 -->
                <li class="filtratedata_item">
                    <span class="timepicker_span_tow">优质直播</span>
                    <el-select v-model="quality_live_value" placeholder="请选择" clearable>
                        <el-option
                        v-for="item in quality_live"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </li>
                <li class="list_sum">
                    <el-button type="primary">确定</el-button>
                    <p>目前共计<span>256767867</span>条数据</p>
                </li>
            </ul>
        </div>
        <el-table
            v-infinite-scroll="load" infinite-scroll-disabled="disabled"
            :data="tableData"
            style="width: 100%;">
            <el-table-column align="center" label="达人">
                <template slot-scope="scope">
                    <div class="columntow">
                        <div class="userImg">
                            <el-image :src="scope.row.expert.imgurl"></el-image>   
                        </div>
                        <div class="userName">
                            <p class="userName_p1">
                                <span class="span1">{{scope.row.expert.title}}</span>
                                <span class="span2">{{scope.row.expert.condition}}</span>
                            </p>
                            <p class="userName_p2">
                                <i class="iconfont icon-renzheng"></i>
                                {{scope.row.expert.type}}
                            </p>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="粉丝数" prop="fans_number">
                <template slot-scope="scope">
                    <div class="intelligent">
                        <p class="p1">{{scope.row.fans_number | NumToUnitNum}}</p>
                    </div>
                </template>
            </el-table-column>
            <el-table-column sortable align="center" label="点赞数" prop="givelivk_number">
                <template slot-scope="scope">
                    <div class="intelligent">
                        <p class="p1">{{scope.row.givelivk_number | NumToUnitNum}}</p>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" label="作品数">
                <template slot-scope="scope">
                    <span>{{scope.row.works_number}}</span>
                </template>
            </el-table-column>
            <el-table-column width="140px" align="center" label="操作">
                <div class="table_button_group clearfix">
                    <el-button class="but1" type="primary" @click="goRealdetailscreen">达人详情</el-button>
                </div>
            </el-table-column>
        </el-table>
        <p class="hint_empty underway" v-show="loading">加载中...</p>
        <p class="hint_empty" v-if="noMore">已经到底了0.0</p>
    </div>
</template>
<script>
import classificationdata from '@/components/page/classification_data'
import { dateToStr } from '@/utils/validate.js'
import { regionDataPlus,CodeToText } from 'element-china-area-data'
  export default {
    components: {
        classificationdata,
    },
    props: {

    },
    data() {
        return {
            //起始页数值为0
            count: 0,
            loading: false,
            // 数据分类 数据
            classification_data : {
                title : '达人分类',
                data : [
                    {
                        name:'全部',
                    },
                    {
                        name:'剧情',
                    },
                    {
                        name:'生活',
                    },
                    {
                        name:'网红美女',
                    },
                    {
                        name:'情感'
                    },
                    {
                        name:'时尚',
                    },
                    {
                        name:'音乐',
                    },
                    {
                        name:'搞笑',
                    },
                    {
                        name:'旅行',
                    },
                    {
                        name:'美食',
                    },
                    {
                        name:'摄像',
                    },
                    {
                        name:'舞蹈',
                    },
                    {
                        name:'教育',
                    },
                    {
                        name:'影视娱乐',
                    },
                    {
                        name:'美妆',
                    },
                    {
                        name:'文学艺术',
                    },
                    {
                        name:'游戏',
                    },
                    {
                        name:'健康',
                    },
                    {
                        name:'家居',
                    },
                    {
                        name:'知识资讯',
                    },
                    {
                        name:'汽车',
                    },
                    {
                        name:'种草',
                    },
                    {
                        name:'创意',
                    },
                    {
                        name:'穿搭',
                    },
                    {
                        name:'宠物',
                    },
                    {
                        name:'网红帅哥',
                    },
                    {
                        name:'体育',
                    },
                    {
                        name:'百科知识',
                    },
                    {
                        name:'萌娃',
                    },
                    {
                        name:'政务',
                    },
                    {
                        name:'动漫',
                    },
                    {
                        name:'科技',
                    },
                    {
                        name:'母婴育儿',
                    },
                    {
                        name:'办公软件',
                    },
                    {
                        name:'职场教育',
                    },
                    {
                        name:'摄像教学',
                    },
                    {
                        name:'明星',
                    },
                ]
            },

            // 初始数组
            tableData: [

            ],
            // 列表数据
            tableDataobj : {
                // 一共多少 页面 
                totalPages : 3,
                // 后端返回的数组
                tabDatalistone: [
                    {
                        expert : {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title : '人民日报',
                            condition : '政务',
                            type : '人民日报官方账号',
                        },
                        fans_number : 120000000,
                        givelivk_number : 1350000000,
                        works_number : 2298,
                    },
                    {
                        expert : {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title : '人民日报',
                            condition : '政务',
                            type : '人民日报官方账号',
                        },
                        fans_number : 110000000,
                        givelivk_number : 140000000,
                        works_number : 2298,
                    },
                    {
                        expert : {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title : '人民日报',
                            condition : '政务',
                            type : '人民日报官方账号',
                        },
                        fans_number : 100000000,
                        givelivk_number : 160000000,
                        works_number : 2298,
                    },
                    {
                        expert : {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title : '人民日报',
                            condition : '政务',
                            type : '人民日报官方账号',
                        },
                        fans_number : 90000000,
                        givelivk_number : 170000000,
                        works_number : 2298,
                    },
                    {
                        expert : {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title : '人民日报',
                            condition : '政务',
                            type : '人民日报官方账号',
                        },
                        fans_number : 9000011000,
                        givelivk_number : 170000000,
                        works_number : 2298,
                    },
                    {
                        expert : {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title : '人民日报',
                            condition : '政务',
                            type : '人民日报官方账号',
                        },
                        fans_number : 120000000,
                        givelivk_number : 1350000000,
                        works_number : 2298,
                    },
                    {
                        expert : {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title : '人民日报',
                            condition : '政务',
                            type : '人民日报官方账号',
                        },
                        fans_number : 110000000,
                        givelivk_number : 140000000,
                        works_number : 2298,
                    },
                    {
                        expert : {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title : '人民日报',
                            condition : '政务',
                            type : '人民日报官方账号',
                        },
                        fans_number : 100000000,
                        givelivk_number : 160000000,
                        works_number : 2298,
                    },
                    {
                        expert : {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title : '人民日报',
                            condition : '政务',
                            type : '人民日报官方账号',
                        },
                        fans_number : 90000000,
                        givelivk_number : 170000000,
                        works_number : 2298,
                    },
                    {
                        expert : {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title : '人民日报',
                            condition : '政务',
                            type : '人民日报官方账号',
                        },
                        fans_number : 9000011000,
                        givelivk_number : 170000000,
                        works_number : 2298,
                    },
                ],
            },
            bbq : '',
            // 取后端返回内容的总页数
            totalPages: '',
            // *************数据筛选*************
            // --------粉丝数--------
            fans_number : [
                {
                    value : 0,
                    label: '全部'
                },
                {
                    value : 1,
                    label : '<1万',
                },
                {
                    value : 2,
                    label : '1万-10万',
                },
                {
                    value : 3,
                    label : '10万-1百万',
                },
                {
                    value : 4,
                    label : '1百万-1千万',
                },
                {
                    value : 5,
                    label : '1千万-5千万',
                },
                {
                    value : 6,
                    label : '>5千万',
                },
            ],
            // --------点赞数--------
            easylike_number : [
                {
                    value : 0,
                    label : '全部',
                },
                {
                    value : 1,
                    label : '<500',
                },
                {
                    value : 2,
                    label : '500-5千',
                },
                {
                    value : 3,
                    label : '5千-5万',
                },
                {
                    value : 4,
                    label : '5万-10万',
                },
                {
                    value : 5,
                    label : '10万-20万',
                },
                {
                    value : 6,
                    label : '>20万',
                },
                
            ],
            // --------作品数--------
            works_number : [
                {
                    value : 0,
                    label : '全部',
                },
                {
                    value : 1,
                    label : '<5',
                },
                {
                    value : 2,
                    label : '5-10',
                },
                {
                    value : 3,
                    label : '10-20',
                },
                {
                    value : 4,
                    label : '20-30',
                },
                {
                    value : 5,
                    label : '30-50',
                },
                {
                    value : 6,
                    label : '>50',
                },
            ],
            // --------商品数--------
            commodity_number : [
                {
                    value : 0,
                    label : '全部',
                },
                {
                    value : 1,
                    label : '<1万',
                },
                {
                    value : 2,
                    label : '1万-10万',
                },
                {
                    value : 3,
                    label : '10万-1百万',
                },
                {
                    value : 4,
                    label : '1百万-1千万',
                },
                {
                    value : 5,
                    label : '1千万-5千万',
                },
                {
                    value : 6,
                    label : '>5千万',
                },
            ],
            // --------达人性别--------
            celebrity_sex : [
                {
                    value : 0,
                    label : '全部',
                },
                {
                    value : 1,
                    label : '男',
                },
                {
                    value : 2,
                    label : '女',
                },
            ],
            // --------达人年龄--------
            celebrity_age : [
                {
                    value : 0,
                    label : '全部',
                },
                {
                    value : 1,
                    label : '0-17岁',
                },
                {
                    value : 2,
                    label : '18-24岁',
                },
                {
                    value : 3,
                    label : '25-30岁',
                },
                {
                    value : 4,
                    label : '31-35岁',
                },
                {
                    value : 5,
                    label : '36-40岁',
                },
                {
                    value : 6,
                    label : '40岁+',
                },
            ],
            // --------达人地域--------
            celebrity_territory: regionDataPlus,
            // --------达人星座--------
            celebrity_constellation : [
                {
                    value : 0,
                    label : '全部',
                },
                {
                    value : 1,
                    label : '水平座',
                },
                {
                    value : 2,
                    label : '双鱼座',
                },
                {
                    value : 3,
                    label : '白羊座',
                },
                {
                    value : 4,
                    label : '金牛座',
                },
                {
                    value : 5,
                    label : '双子座',
                },
                {
                    value : 6,
                    label : '巨蟹座',
                },
                {
                    value : 7,
                    label : '狮子座',
                },
                {
                    value : 8,
                    label : '处女座',
                },
                {
                    value : 9,
                    label : '天秤座',
                },
                {
                    value : 10,
                    label : '天蝎座',
                },
                {
                    value : 11,
                    label : '射手座',
                },
                {
                    value : 12,
                    label : '摩羯座',
                },
            ],
            // --------粉丝性别--------
            fans_sex : [
                {
                    value : 0,
                    label : '全部',
                },
                {
                    value : 1,
                    label : '男观众多',
                },
                {
                    value : 2,
                    label : '女观众多',
                },
            ],
            // --------粉丝年龄--------
            fans_age : [
                {
                    value : 0,
                    label : '全部',
                },
                {
                    value : 1,
                    label : '0-17岁',
                },
                {
                    value : 2,
                    label : '18-24岁',
                },
                {
                    value : 3,
                    label : '25-30岁',
                },
                {
                    value : 4,
                    label : '31-35岁',
                },
                {
                    value : 5,
                    label : '36-40岁',
                },
                {
                    value : 6,
                    label : '40岁+',
                },
            ],
            // --------粉丝地域--------
            fans_territory : regionDataPlus,
            // --------粉丝星座--------
            fans_constellation: [
                {
                    value : 0,
                    label : '全部',
                },
                {
                    value : 1,
                    label : '水平座',
                },
                {
                    value : 2,
                    label : '双鱼座',
                },
                {
                    value : 3,
                    label : '白羊座',
                },
                {
                    value : 4,
                    label : '金牛座',
                },
                {
                    value : 5,
                    label : '双子座',
                },
                {
                    value : 6,
                    label : '巨蟹座',
                },
                {
                    value : 7,
                    label : '狮子座',
                },
                {
                    value : 8,
                    label : '处女座',
                },
                {
                    value : 9,
                    label : '天秤座',
                },
                {
                    value : 10,
                    label : '天蝎座',
                },
                {
                    value : 11,
                    label : '射手座',
                },
                {
                    value : 12,
                    label : '摩羯座',
                },
            ],
            // --------个人认证--------
            me_attestation: [
                {
                    value : 0,
                    label : '全部',
                },
                {
                    value : 1,
                    label : '已开通',
                },
                {
                    value : 2,
                    label : '未开通',
                },
            ],
            // --------商品橱窗--------
            shopwindow: [
                {
                    value : 0,
                    label : '全部',
                },
                {
                    value : 1,
                    label : '已开通',
                },
                {
                    value : 2,
                    label : '未开通',
                },
            ],
            // --------优质直播--------
            quality_live: [
                {
                    value : 0,
                    label : '全部',
                },
                {
                    value : 1,
                    label : '是',
                },
                {
                    value : 2,
                    label : '否',
                },
            ],
            // input value
            broadcastsearchvalue : '',
            // 数据筛选值
            fans_number_value : '',
            easylike_number_value : '',
            works_number_value : '',
            commodity_number_value : '',
            celebrity_sex_value : '',
            celebrity_age_value : '',
            celebrity_territory_value : '',
            celebrity_constellation_value : '',
            fans_sex_value : '',
            fans_age_value : '',
            fans_territory_value : '',
            fans_constellation_value : '',
            me_attestation_value : '',
            shopwindow_value : '',
            quality_live_value : '',
        };
    },
    methods: {
        load() {
            // 滑到底部时进行加载
            this.loading = true;
            let timeout = setTimeout(() => {
                this.count += 1; //页数+1
                this.getMessage(); //调用接口，此时页数+1，查询下一页数据
                clearInterval(timeout);
            }, 2000);
        },
        getMessage() {
            // 数组拼接上后端返回的数组
            this.tableData = this.tableData.concat(this.tableDataobj.tabDatalistone);
            // 一共多少 页面 
            this.totalPages = this.tableDataobj.totalPages;
            this.loading = false;
        },
        //主要按钮前往达人详情
        goRealdetailscreen() {
            this.$router.replace('/intelligentdetailed');
        },
        // 达人地域
        handleChange(value){
            console.log(CodeToText[value[0]], CodeToText[value[1]], CodeToText[value[2]]);
        },
        // 开播时间
        changeTime () {
            console.log(dateToStr(this.start_play_time[0]),dateToStr(this.start_play_time[1]))
        },
        // input 搜索框 but按钮
        broadcastsearchbut(){

        },

        // 清空所选中的条件
        eliminate(){
            this.fans_number_value = '';
            this.easylike_number_value = '';
            this.works_number_value = '';
            this.commodity_number_value = '';
            this.celebrity_sex_value = '';
            this.celebrity_age_value = '';
            this.celebrity_territory_value = '';
            this.celebrity_constellation_value = '';
            this.fans_sex_value = '';
            this.fans_age_value = '';
            this.fans_territory_value = '';
            this.fans_constellation_value = '';
            this.me_attestation_value = '';
            this.shopwindow_value = '';
            this.quality_live_value = '';
        }
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
    mounted(){
        this.getMessage();
    },
  }
</script>
<style lang="less" scoped>
    .demo-input-suffix{
        margin-top: 20px;
        margin-bottom: 20px;
        /deep/.search_box{
            display: inline-block;
            position: relative;
            input {
                width: 320px;
                height: 32px;
                border-radius: 25px;
                background: #0D2F55;
                font-size: 14px;
                color: #999;
                border: 1px solid #999;
            }
            .el-button{
                width: 65px;
                line-height: 0px;
                height: 80%;
                position: absolute;
                right: -28px;
                border-radius: 20px;
                top: 50%;
                transform: translate(-50%,-50%);
            }
        }
        .clickp{
            cursor: pointer;
            color: #248FFF;
            display: inline-block;
            margin-left: 20px;
            i{
                margin-right: 10px;
            }
            span{
                font-size: 14px;
                text-decoration:underline
            }
        }
    }

    .table_box {
        // 数据筛选
        .filtratedata{
            margin-top:20px;
            .filtratedata_list{
                .filtratedata_item{
                    text-align: right;
                    margin-bottom:20px;
                    position: relative;
                    // width: 20%;
                    width: 250px;
                    // min-width: 300px;
                    display: inline-block;
                    color:#fff;
                    .el-select {
                        margin-right: 10px;
                    }
                    .timepicker_span_tow {
                        line-height: 32px;
                        display: inline-block;
                        font-size: 12px;
                        margin-right: 10px;
                    }
                }
                .list_sum{
                    display: inline-block;
                    margin-bottom:20px;
                    .el-button{
                        display: inline-block;
                        width: 60px;
                        margin-left: 10px;
                        margin-right: 10px;
                    }
                    p{
                        font-size: 14px;
                        display: inline-block;
                        color: #999;
                        span{
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
</style>
<style lang="less" scoped>
    .el-table{
        border:none !important;
        // 伪元素
        &::before,&::after{
            display: none;
        }
        // 头部
        /deep/.el-table__header-wrapper{
            height: 64px;
            line-height: 64px;
            background: #144174 !important;
            th {
                background: #144174 !important;
                padding:0 !important;
                border: none;
                font-size: 14px;
                text-align: center;
                color: #ccc;
                &:nth-child(1){
                    text-align: left ;
                }
            }
            .is-sortable,.is-leaf{
                border:none !important;
            }
        }
        // 身体
        /deep/.el-table__body-wrapper{
            .el-table__body{
                .el-table__row{
                    background-color: #082C55 !important;
                    &:hover{
                        
                        td{
                            // background: none !important;
                            background-color: hsla(0, 0%, 100%, .02);
                        }
                    }
                    td{
                        color:#fff;
                        border:none;
                        border-bottom: 1px solid #326CAD;
                        text-align: center;
                        height: 88px;
                        // background: none !important;
                        .cell {
                            >span {
                                font-size: 14px;
                                color: #fff;
                                font-weight: 500;
                            }
                            .intelligent{
                                font-size: 14px;
                            }
                            .table_button_group{
                                .el-button{
                                    display: block;
                                    margin:0 auto;
                                }
                            }
                            .saleroom{
                                color:#FBAE46;
                            }
                            .columnone {
                                span {
                                    display: inline-block;
                                    font-size: 20px;
                                    color: #fff;
                                    height: 26px;
                                    width: 26px;
                                    text-align: center;
                                    padding-top: 2px;
                                    background-size: cover;
                                    background-position: 50% center;
                                    font-size: 12px;
                                    margin: 0 3px;
                                    line-height: 23px;
                                    
                                }
                            }

                            .columntow {
                                display: -webkit-box;
                                display: -ms-flexbox;
                                display: flex;
                                -webkit-box-align: center;
                                -ms-flex-align: center;
                                align-items: center;
                                -webkit-box-flex: 1;
                                -ms-flex: 1;
                                flex: 1;

                                /deep/.userImg {
                                    width: 50px;
                                    height: 50px;
                                    display: -webkit-box;
                                    display: -ms-flexbox;
                                    display: flex;
                                    -webkit-box-align: center;
                                    -ms-flex-align: center;
                                    align-items: center;
                                    cursor: pointer;
                                    margin-right: 6px;
                                    -ms-flex-negative: 0;
                                    flex-shrink: 0;
                                    position: relative;
                                    border-radius: 50%;
                                    overflow: hidden;
                                    img {
                                        object-fit: contain;
                                        border-radius: 3px;
                                        width: 50px;
                                        height: 50px;
                                        object-fit: contain;
                                        border-radius: 3px;
                                    }
                                }

                                .userName {
                                    font-size: 14px;

                                    text-align: left;
                                    .userName_p1{
                                        .span1{
                                            display: inline-block;
                                            white-space: nowrap;
                                            text-overflow: ellipsis;
                                            overflow: hidden;
                                            margin-right: 10px;
                                        }
                                        .span2{
                                            display: inline-block;
                                            overflow: hidden;
                                            font-size: 12px;
                                            color:#F0A847;
                                            padding: 0 10px;
                                            border-radius: 15px;
                                            display: inline-block;
                                            border:1px solid #F0A847;
                                        }
                                    }
                                    .userName_p2{
                                        font-size: 12px;
                                        color:#248FFF;
                                        i{
                                            position: relative;
                                            font-size: 16px;
                                            vertical-align: bottom;
                                            &::after{
                                                content: "";
                                                position: absolute;
                                                left: 50%;
                                                top:50%;
                                                transform: translate(-50%,-50%);
                                                width: 5px;
                                                height: 5px;
                                                background: #fff;
                                            }
                                            &::before{
                                                position: relative;
                                                z-index: 1;
                                            }
                                        }
                                    }
                                }
                            }

                            .columnthree {
                                position: relative;
                                display: -webkit-box;
                                display: -ms-flexbox;
                                display: flex;

                                .ImgBox {
                                    width: 40px;
                                    height: 40px;
                                    border-radius: 50%;
                                    overflow: hidden;
                                    -ms-flex-negative: 0;
                                    flex-shrink: 0;
                                    cursor: pointer;

                                    img {
                                        width: 100%;
                                        height: 100%;
                                    }
                                }

                                .user_count {
                                    color: #fff;
                                    margin-left: 10px;
                                    -webkit-box-flex: 1;
                                    -ms-flex: 1;
                                    flex: 1;
                                    overflow: hidden;
                                    display: -webkit-box;
                                    display: -ms-flexbox;
                                    display: flex;
                                    -webkit-box-orient: vertical;
                                    -webkit-box-direction: normal;
                                    -ms-flex-direction: column;
                                    flex-direction: column;
                                    -webkit-box-pack: space-evenly;
                                    -ms-flex-pack: space-evenly;
                                    justify-content: space-evenly;

                                    .name_box {
                                        display: -webkit-box;
                                        display: -ms-flexbox;
                                        display: flex;
                                        -webkit-box-align: center;
                                        -ms-flex-align: center;
                                        align-items: center;

                                        >div {
                                            max-width: 90%;
                                            cursor: pointer;
                                            font-size: 13px;
                                        }
                                    }

                                    .user_level_box {
                                        display: -webkit-box;
                                        display: -ms-flexbox;
                                        display: flex;
                                        -webkit-box-align: center;
                                        -ms-flex-align: center;
                                        align-items: center;
                                        color:#999;
                                        .rank_head_dyNum {
                                            font-size: 12px !important;
                                        }

                                        .level {
                                            font-size: 12px;
                                            color: #bebfc3;
                                            display: -webkit-box;
                                            display: -ms-flexbox;
                                            display: flex;
                                            -webkit-box-align: center;
                                            -ms-flex-align: center;
                                            align-items: center;

                                            .spanone {
                                                color:#999;
                                                margin-right: 5px;
                                            }

                                            .spantow {
                                                color: #fd2270;
                                            }

                                            .spanthree {
                                                width: 16px;
                                                height: 16px;
                                                border-radius: 3px;
                                                display: inline-block;
                                                margin-left: 3px;
                                                font-size: 12px;
                                                text-align: center;
                                                line-height: 16px;

                                                background: rgba(239, 124, 57, .1);
                                                color: #ef7c39;
                                            }
                                        }
                                    }
                                }
                            }

                            .salesAmount {
                                color: #face15 !important;
                            }
                        }
                    }
                    &:last-child{
                        td{
                            border:none;
                        }
                    }
                }
            }
        }
    }
    // 加载
    /deep/.hint_empty {
        text-align: center;
        font-size: 22px;
        color: #409EFF;
        margin-top: 10px;
    }
    /deep/.underway {
        animation: container 1.2s infinite linear;
    }
    
</style>

<style lang="less">
// selsect 选择器
.el-select-dropdown{
    border:none !important;
    background:none !important;
    .popper__arrow{
        border-bottom-color: #19477A !important;
        &:after{
            // border: #0B315C;
            // border-bottom-color: #19477A !important;
            display: none;
        }
    }
    .el-scrollbar{
        border-radius: 6px;
    }
    .el-select-dropdown__wrap{
        background: #092A4D;
        border:none;
        .el-scrollbar__view{
            
            padding-bottom: 20px;
            background: #19477A;
            .el-select-dropdown__item{
                // line-height: normal !important;
                color:#fff;
                &:hover{
                    background: #0B315C;
                }
            }
            .selected{
                color:#248FFF;
            }
        }
    }
}
.el-select-dropdown__item.hover, .el-select-dropdown__item:hover{
    background: #0B315C !important;
}
.el-select{
    .el-input{
        .el-input__inner{
            color:#fff;
            width: 180px;
            background: #0D2F55 !important;
            border:1px solid #999 !important;
        }
    }
}
// 省市区
.el-popper el-cascader__dropdown,.el-popper{
    height: 300px !important;
    background: #161923;
    /deep/.popper__arrow{
        &::after{
            display: none !important;
        }
    }
    .el-cascader-panel{
        height: 100% !important;
    }
}
.el-cascader-node:not(.is-disabled):focus, .el-cascader-node:not(.is-disabled):hover{
    background: none;
    color:#409EFF;
}
.el-cascader{
    margin-right: 10px;
    .el-input__inner{
        font-size: 12px;
        height: 32px;
        color: #fff;
        width: 180px;
        background: #0D2F55 !important;
        border: 1px solid #999 !important;
    }
}
</style>