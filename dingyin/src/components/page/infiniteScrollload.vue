<template>
    <div class="scroll_load">
        <p class="hint_empty underway" v-show="loading">加载中...</p>
        <p class="hint_empty" v-if="noMore">已经到底了0.0</p>
    </div>
</template>

<script>
export default {
    components: {

    },
    props: {

    },
    computed: {
        noMore() {
            //当起始页数大于总页数时停止加载
            return this.count >= this.totalPages - 1;
        },
    },
    created() {
        this.getMessage();
    },
    data() {
        return {
            //起始页数值为0
            count : 0,           
            loading: false,

            // 初始数组
            tableData : [

            ],
            // 后端返回的数组
            tabDatalistone : [
                {
                    num : '4',

                    towimgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    towimggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    towtitle1 : '炫研女装来了',
                    towtitle2 : '开播时间 : 2020-12-16 13:01',

                    threeimgurl : 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',

                    threetitle1 : '海宁女装工厂',
                    threetitle2 : '粉丝:39.2w',
                    threetitle3 : '带货口碑',
                    threetitle4 : '4.75',
                    threetitle5 : '高',

                    fourtitle : '12-17 09:34',

                    fivetitle : '768',

                    sixtitle : '1814',

                    seventitle : '5.2W',

                    eighttitle : '2093',

                    ninetitle : '￥94.3W',
                },
                {
                    num : '1',

                    towimgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    towimggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    towtitle1 : '炫研女装来了',
                    towtitle2 : '开播时间 : 2020-12-16 13:01',

                    threeimgurl : 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',

                    threetitle1 : '海宁女装工厂',
                    threetitle2 : '粉丝:39.2w',
                    threetitle3 : '带货口碑',
                    threetitle4 : '4.75',
                    threetitle5 : '高',

                    fourtitle : '12-17 09:34',

                    fivetitle : '768',

                    sixtitle : '1814',

                    seventitle : '5.2W',

                    eighttitle : '2093',

                    ninetitle : '￥94.3W',
                },
                {
                    num : '2',

                    towimgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    towimggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    towtitle1 : '炫研女装来了',
                    towtitle2 : '开播时间 : 2020-12-16 13:01',

                    threeimgurl : 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',

                    threetitle1 : '海宁女装工厂',
                    threetitle2 : '粉丝:39.2w',
                    threetitle3 : '带货口碑',
                    threetitle4 : '4.75',
                    threetitle5 : '高',

                    fourtitle : '12-17 09:34',

                    fivetitle : '768',

                    sixtitle : '1814',

                    seventitle : '5.2W',

                    eighttitle : '2093',

                    ninetitle : '￥94.3W',
                },
                {
                    num : '3',

                    towimgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    towimggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    towtitle1 : '炫研女装来了',
                    towtitle2 : '开播时间 : 2020-12-16 13:01',

                    threeimgurl : 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',

                    threetitle1 : '海宁女装工厂',
                    threetitle2 : '粉丝:39.2w',
                    threetitle3 : '带货口碑',
                    threetitle4 : '4.75',
                    threetitle5 : '高',

                    fourtitle : '12-17 09:34',

                    fivetitle : '768',

                    sixtitle : '1814',

                    seventitle : '5.2W',

                    eighttitle : '2093',

                    ninetitle : '￥94.3W',
                },
                {
                    num : '4',

                    towimgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    towimggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    towtitle1 : '炫研女装来了',
                    towtitle2 : '开播时间 : 2020-12-16 13:01',

                    threeimgurl : 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',

                    threetitle1 : '海宁女装工厂',
                    threetitle2 : '粉丝:39.2w',
                    threetitle3 : '带货口碑',
                    threetitle4 : '4.75',
                    threetitle5 : '高',

                    fourtitle : '12-17 09:34',

                    fivetitle : '768',

                    sixtitle : '1814',

                    seventitle : '5.2W',

                    eighttitle : '2093',

                    ninetitle : '￥94.3W',
                },
                {
                    num : '1',

                    towimgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    towimggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    towtitle1 : '炫研女装来了',
                    towtitle2 : '开播时间 : 2020-12-16 13:01',

                    threeimgurl : 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',

                    threetitle1 : '海宁女装工厂',
                    threetitle2 : '粉丝:39.2w',
                    threetitle3 : '带货口碑',
                    threetitle4 : '4.75',
                    threetitle5 : '高',

                    fourtitle : '12-17 09:34',

                    fivetitle : '768',

                    sixtitle : '1814',

                    seventitle : '5.2W',

                    eighttitle : '2093',

                    ninetitle : '￥94.3W',
                },
                {
                    num : '1',

                    towimgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    towimggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    towtitle1 : '炫研女装来了',
                    towtitle2 : '开播时间 : 2020-12-16 13:01',

                    threeimgurl : 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',

                    threetitle1 : '海宁女装工厂',
                    threetitle2 : '粉丝:39.2w',
                    threetitle3 : '带货口碑',
                    threetitle4 : '4.75',
                    threetitle5 : '高',

                    fourtitle : '12-17 09:34',

                    fivetitle : '768',

                    sixtitle : '1814',

                    seventitle : '5.2W',

                    eighttitle : '2093',

                    ninetitle : '￥94.3W',
                },
                {
                    num : '4',

                    towimgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    towimggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    towtitle1 : '炫研女装来了',
                    towtitle2 : '开播时间 : 2020-12-16 13:01',

                    threeimgurl : 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',

                    threetitle1 : '海宁女装工厂',
                    threetitle2 : '粉丝:39.2w',
                    threetitle3 : '带货口碑',
                    threetitle4 : '4.75',
                    threetitle5 : '高',

                    fourtitle : '12-17 09:34',

                    fivetitle : '768',

                    sixtitle : '1814',

                    seventitle : '5.2W',

                    eighttitle : '2093',

                    ninetitle : '￥94.3W',
                },
                {
                    num : '1',

                    towimgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    towimggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    towtitle1 : '炫研女装来了',
                    towtitle2 : '开播时间 : 2020-12-16 13:01',

                    threeimgurl : 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',

                    threetitle1 : '海宁女装工厂',
                    threetitle2 : '粉丝:39.2w',
                    threetitle3 : '带货口碑',
                    threetitle4 : '4.75',
                    threetitle5 : '高',

                    fourtitle : '12-17 09:34',

                    fivetitle : '768',

                    sixtitle : '1814',

                    seventitle : '5.2W',

                    eighttitle : '2093',

                    ninetitle : '￥94.3W',
                },
                {
                    num : '1',

                    towimgurl : 'https://p16.pstatp.com/img/webcast/6871143281217080078~tplv-obj.image',
                    towimggifurl : 'https://static.douchacha.com/img/living.297b2ad1.gif',
                    towtitle1 : '炫研女装来了',
                    towtitle2 : '开播时间 : 2020-12-16 13:01',

                    threeimgurl : 'https://p9-dy.byteimg.com/img/tos-cn-avt-0015/e9245255e8c8c61ada8e88ad98c867d8~c5_1080x1080.jpeg?from=4010531038',

                    threetitle1 : '海宁女装工厂',
                    threetitle2 : '粉丝:39.2w',
                    threetitle3 : '带货口碑',
                    threetitle4 : '4.75',
                    threetitle5 : '高',

                    fourtitle : '12-17 09:34',

                    fivetitle : '768',

                    sixtitle : '1814',

                    seventitle : '5.2W',

                    eighttitle : '2093',

                    ninetitle : '￥94.3W',
                },
            ],

            // 取后端返回内容的总页数
            totalPages : '',
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
        getMessage(){
            // 数组拼接上后端返回的数组
            this.tableData = this.tableData.concat(this.tabDatalistone);
            this.$parent.tableData = this.this.tableData;   
            // 一共多少 页面 
            this.totalPages = 3;
            this.loading = false;
        },
    },
};
</script>

<style lang="less" scoped>
.scroll_load{
    .hint_empty{
        text-align: center;
        font-size: 22px;
        color: #409EFF;
        margin-top:10px;
    }
    .underway{
        animation: container 1.2s infinite linear;
    }
}
</style>
