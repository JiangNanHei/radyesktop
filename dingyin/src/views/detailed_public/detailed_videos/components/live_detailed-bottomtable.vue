<template>
    <div>
        <div class="table_box">
            <p class="title_p">礼物收入榜</p>
            <!-- table 列表 -->
            <el-table :data="towtableData.slice((currpage -1) * pagesize, currpage * pagesize)"
                :default-sort="{prop: 'tow', order: 'descending'}">
                <el-table-column align="center" label="排名">
                    <template slot-scope="scope">
                        {{scope.row.one}}
                    </template>
                </el-table-column>
                <el-table-column min-width="180px" align="center" label="土豪昵称">
                    <template slot-scope="scope">
                        <div class="columntow">
                            <div class="userImg">
                                <img :src="scope.row.tow.imgurl">
                            </div>
                            <div class="userName">
                                <p>{{scope.row.tow.name}}</p>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column align="center"></el-table-column>
                <el-table-column align="center"></el-table-column>
                <el-table-column align="center"></el-table-column>
                <el-table-column align="center"></el-table-column>
                <el-table-column align="center" label="打赏音浪">
                    <template slot-scope="scope">
                        <div class="columntow">
                            <span>{{scope.row.tow.three}}</span>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <div class="el_pagination_box clearfix">
                <el-pagination @size-change="handleSizeChange" @curren-change="handleCurrentChange"
                    :page-sizes="[10,20,30,40,50,100]" :page-size="pagesize" background layout="prev, pager, next"
                    :total="towtableData.length">
                </el-pagination>
            </div>
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
                // 列表数据

                // 搜索框input
                videotablsearch: '',
                // 分页器
                pagesize: 10,
                currpage: 1,
                // header 头部
                // 初始列表数据数组
                towtableData_master: [{
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                    {
                        one: {
                            imgurl: 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            title: '【TD】Apple/苹果 iPhone',
                            now_money: '99',
                            once_money: '199',
                        },
                        tow: '小店',
                        three: '1',
                        four: 600,
                        five: 1185,
                        six: 0,
                    },
                ],
                towtableData : [
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                    {
                        one : 1,
                        tow : {
                            imgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                            name : '清新女装穿搭服装设计',
                        },
                        three : 17000
                    },
                ]
            };
        },
        methods: {
            // table搜索框搜索按钮
            videotablebut() {
                if (this.videotablsearch == '') {
                    this.towtableData = this.towtableData_master;
                } else {
                    this.towtableData = this.towtableData_master;
                    this.towtableData = this.towtableData.filter(data => !this.videotablsearch || data.one.title
                        .toLowerCase().includes(this.videotablsearch.toLowerCase()))
                }

            },
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
    .table_box {
        border-radius: 6px;
        padding: 20px;
        background: #051C36;
        overflow: hidden;
        margin-top: 10px;

        .title_p {
            font-size: 12px;
            color: #FFFFFF;
        }
    }
</style>
<style lang="less" scoped>
    /deep/.el-table__body-wrapper {
        overflow: hidden !important;

        .el-table__body {
            width: 100.1% !important;
        }
    }

    /deep/.content {
        overflow: hidden;
        user-select: none;
        padding: 0px;

        >.tabheader {
            >.el-tabs__header {
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

    /deep/.el-tabs__item {
        color: #fff !important;
    }

    /deep/.el-table__header-wrapper {
        .has-gutter {
            color: #ccc;
        }

        background: #144174 !important;

        tr {
            background: rgba(0, 0, 0, 0) !important;
        }

        th {
            background: rgba(0, 0, 0, 0) !important;
            padding: 20px 0 !important;
            border: none !important;
            font-size: 14px;
        }
    }

    // 分页器
    /deep/.el_pagination_box {
        background-color: #082C55;
        padding: 30px 0;

        .el-pagination {
            float: right;
        }
    }

    .btn-next,
    .btn-prev,
    .el-pager li {
        background: none;
        color: #fff;
        border: 1px solid #E1EAF7;
    }

    .el-pagination.is-background .el-pager li:not(.disabled).active {
        background: #248FFF;
    }

    // 身体
    /deep/.el-table__row {
        background-color: #082C55 !important;
        td {
            border-bottom: 1px solid #326CAD !important;
            height: 88px;
            &:nth-child(1){
                .cell{
                    text-align: center !important;
                }
            }
        }
    }

    /deep/.el-table {
        margin-top: 30px;
        border-radius: 5px 5px 0 0;
        background: #144174;

        tr {
            td {
                color: #fff;
            }

            &:hover {
                td {
                    background-color: hsla(0, 0%, 100%, .02);
                }
            }
        }
    }

    /deep/.el-table::before {
        display: none !important;
    }

    /deep/.cell {
        white-space: normal;
        word-break: break-all;
        line-height: 23px;
        // padding: 0px !important;
    }

    /deep/.is-center {

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

                .live_button_ing {
                    padding: 0 2px;
                    position: absolute;
                    bottom: -8px;
                    left: 0;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    -webkit-box-pack: justify;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                    color: #fff;
                    width: 60px;
                    height: 17px;
                    background: linear-gradient(-42deg, #ff1167, #f1278a);
                    border-radius: 14px;
                    padding-left: 2px;
                    font-size: 12px;

                    img {
                        width: 28px;
                        float: left;
                        position: relative;
                        top: -1px;
                        left: -5px;

                    }

                    span {
                        position: absolute;
                        left: 20px;
                        font-size: 12px;
                        color: #fff;
                    }
                }
            }

            .userName {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;

                .columntow {
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    font-size: 14px;
                }

                .p2 {
                    text-align: left;

                    .span1 {
                        color: #FBAE46;
                        font-size: 15px;
                        margin-right: 10px;
                    }

                    .span2 {
                        text-decoration: line-through;
                        color: #999999;
                        font-size: 12px;
                    }
                }
            }
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