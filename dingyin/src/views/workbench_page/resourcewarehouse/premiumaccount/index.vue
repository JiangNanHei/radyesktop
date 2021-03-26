<template>
    <div class="box">
        <!-- 搜索框 -->
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
        <classificationdata :classification_data="classification_data1" ref="classificationdata"></classificationdata>
        <classificationdata :classification_data="classification_data2" ref="classificationdata"></classificationdata>
        <!-- 筛选 -->
        <!-- table 列表 -->
        <el-table ref="table" :data="businesscooperationdata.slice((currpage -1) * pagesize, currpage * pagesize)"
            :default-sort="{prop: 'tow', order: 'descending'}">
            <el-table-column min-width="110px" align="center" label="达人">
                <template slot-scope="scope">
                    <div class="intelligent">
                        <div class="ImgBox">
                            <img :src="scope.row.intelligent.imgurl">
                        </div>
                        <div class="user_count">
                            <div class="name_box">
                                <div class="username">{{scope.row.intelligent.name}}</div>
                                <div class="classtype">{{scope.row.intelligent.type}}</div>
                            </div>
                            <div class="user_level_box">
                                <p>
                                    <span class="mark">抖音号 : </span>
                                    <span>{{scope.row.intelligent.tiktok}}</span> /
                                    <span>{{scope.row.intelligent.sex}}</span> /
                                    <span>{{scope.row.intelligent.age}}</span> /
                                    <span>{{scope.row.intelligent.address}}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" label="抖音粉丝" prop="company">
                <template slot-scope="scope">
                    <p>{{scope.row.tiktok_fans | NumToUnitNum}}</p>
                </template>
            </el-table-column>
            <el-table-column align="center" label="点赞数" prop="company">
                <template slot-scope="scope">
                    <p>{{scope.row.praise | NumToUnitNum}}</p>
                </template>
            </el-table-column>
            <el-table-column align="center" label="视频数/带货视频数" prop="company">
                <template slot-scope="scope">
                    <p>
                        <span>{{scope.row.videonumber.target}}</span>
                        /
                        <span>{{scope.row.videonumber.atpresent}}</span>
                    </p>
                </template>
            </el-table-column>
            <el-table-column align="center" label="直播数/带货直播数" prop="company">
                <template slot-scope="scope">
                    <p>
                        <span>{{scope.row.livenumber.target}}</span>
                        /
                        <span>{{scope.row.livenumber.atpresent}}</span>
                    </p>
                </template>
            </el-table-column>
            <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                    <div class="table_button_group">
                        <el-button type="primary" @click="transferintelligent">达人详情</el-button>
                        <el-button type="primary" @click="contactbut(scope.row)">联系方式</el-button>
                    </div>
                </template>
            </el-table-column>
            <el-table-column width="1px" align="center" type="expand">
                <template slot-scope="scope">
                    <div class="wechatmessage">
                        <i class="iconfont icon-weixin"></i>
                        <span>{{scope.row.wechatid}}</span>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <div class="el_pagination_box clearfix">
            <el-pagination @size-change="handleSizeChange" @curren-change="handleCurrentChange"
                :page-sizes="[10,20,30,40,50,100]" :page-size="pagesize" background layout="prev, pager, next"
                :total="businesscooperationdata.length">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import classificationdata from '@/components/page/classification_data'
    export default {
        naem:'优质账号资源',
        components: {
            classificationdata
        },
        props: {

        },
        data() {
            return {
                // 搜索框 value
                broadcastsearchvalue : '',
                // 复选框数据
                checkList: ['选中且禁用','复选框 A'],

                startvalue : '',
                endvalue : '',
                // 分页器
                pagesize: 10,
                currpage: 1,
                // 数据分类 数据
                classification_data1 : {
                    title : '账号类型',
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
                            name:'情感',
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
                classification_data2 : {
                    title : '粉丝数量',
                    data : [
                        {
                            name:'全部',
                        },
                        {
                            name:'<1万',
                        },
                        {
                            name:'1万-5万',
                        },
                        {
                            name:'5万-10万',
                        },
                        {
                            name:'10万-50万',
                        },
                        {
                            name:'50万-100万',
                        },
                        {
                            name:'100万-500万',
                        },
                        {
                            name:'500万-1000万',
                        },
                        {
                            name:'100万以上',
                        },
                    ]
                },
                // 列表数据数组
                businesscooperationdata: [
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : '123456'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : '654321'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                    {
                        intelligent : {
                            imgurl: 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',
                            name : '湖南辣妹子啊',
                            type : '穿搭',
                            tiktok : 'HUNAZIA543',
                            sex : '男',
                            age : 20,
                            address : '苏州',
                        },
                        tiktok_fans : 43432000,
                        praise : 250000000,
                        videonumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        livenumber : {
                            target : 500,
                            atpresent : 125,
                        },
                        wechatid : 'djahdhajdha534534'
                    },
                ],

                // 取后端返回内容的总页数
                totalPages: '',
            };
        },
        methods: {
            //主要按钮前往
            goRealdetailscreen() {
                this.$router.replace('/intelligentdetailed');
            },
            // input 搜索框 but按钮
            broadcastsearchbut(){

            },
            // 清空所有条件
            eliminate(){

            },
            handleSizeChange(val) {
                console.log(val);
                this.pagesize = val;
            },
            handleCurrentChange(val) {
                console.log(val);
                this.currpage = val;
            },
            // 查看详情
            viewdetails(){

            },
            // 传送至 达人详情
            transferintelligent(){

            },
            // 联系方式
            contactbut(row){
                console.log(row)
                const $table = this.$refs.table

                $table.toggleRowExpansion(row)
                // $table.toggleRowSelection(row)
            }
        },
        mounted(){
        },
    };
</script>

<style lang="less" scoped>
    .box {
        // 搜索框
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
                padding-left: 40px !important;
            }
        }
        .is-sortable,.is-leaf{
            border:none !important;
        }
    }
    // 身体
    /deep/.el-table__body-wrapper{
        .el-table__body{
            tr{
                background: #042040;
                &:hover{
                    background: #042040;
                }
            }
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
                        font-size: 14px;
                        .table_td_one{
                            text-align: left;
                            margin-left: 30px;
                        }
                        // 达人
                        .intelligent {
                            position: relative;
                            display: -webkit-box;
                            display: -ms-flexbox;
                            display: flex;
                            padding-left: 30px;
                            .ImgBox {
                                width: 50px;
                                height: 50px;
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
                                    .username{
                                        margin-right: 10px;
                                    }
                                    .classtype{
                                        font-size: 12px;
                                        color:#F0A847;
                                        padding: 0 10px;
                                        border-radius: 15px;
                                        display: inline-block;
                                        border:1px solid #F0A847;
                                    }
                                }

                                .user_level_box {
                                    p{
                                        text-align: left;
                                        font-size: 12px;
                                        .mark{
                                            margin-right: 5px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    // 展开行
    /deep/.el-table__expand-column .cell {
        display: none;
    }
    /deep/.el-table__expanded-cell{
        background: #042040;
        border-bottom: 1px solid #326CAD;
        &:hover{
            background: #042040;
        }
    }
    /deep/.wechatmessage{
        text-align: center;
        i{
            font-size: 36px;
            color: #62C227;
            margin-right: 5px;
        }
        span{
            color: #fff;
            font-size: 16px;
            vertical-align: super;
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
// 分页器
/deep/.el_pagination_box {
    background-color: #082C55;
    padding: 30px 0;

    .el-pagination {
        float: right;
    }
}

/deep/.el_pagination_box {
    background-color: #082C55;
    padding: 30px 0;

    .el-pagination {
        float: right;
    }
}
/deep/.el-pagination.is-background .btn-next,
/deep/.el-pagination.is-background .btn-prev,
/deep/.el-pagination.is-background .el-pager li {
    background: none;
    color: #fff;
    border: 1px solid #E1EAF7;
}

/deep/.el-pagination.is-background .el-pager li:not(.disabled).active {
    background: #248FFF;
    border: 1px solid #248FFF;
}
</style>