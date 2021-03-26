<template>
    <div class="homeBox">
            <!-- 导航 -->
        <loginHeader></loginHeader>
        <el-scrollbar class="elscrolbar" style="height:100% ">
            <!-- 主题 -->
            <analyse :homedata="homedata"></analyse>
            <!-- 热门榜单 -->
            <hotsale :homedata="homedata"></hotsale>
            <!-- 企业信息 -->
            <corporateInformation :homedata="homedata"></corporateInformation>
            <!-- 底部 -->
            <homefooter :homedata="homedata"></homefooter>
            <!-- 登录 -->
            <loginDialog :homedata="homedata"></loginDialog>
        </el-scrollbar>
    </div>
</template>

<script>
// 首页样式模块
import loginHeader from '@/views/home/component/loginHeader';
import analyse from '@/views/home/component/dataanalyse';
import hotsale from '@/views/home/component/hotSale';
import corporateInformation from '@/views/home/component/corporateInformation';
import homefooter from '@/views/home/component/footer';

// 登录 模块
import loginDialog from '@/components/page/loginDialog';
export default {
    components: {
        loginHeader,
        analyse,
        hotsale,
        corporateInformation,
        homefooter,
        loginDialog,
    },
    props: {
        
    },
    data() {
        return {
            homedata : {}
        };
    },
    methods: {
        getData() {
            this.$http({
                url: "/home.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                console.log(data)
                this.homedata = data;

            }).catch(err => {
                console.log(err)
            })
        }
    },
    mounted () {
        this.getData()
    },
};
</script>

<style lang="less" scoped>
.homeBox{
    height: 100%;
    overflow: hidden;
    /deep/.el-scrollbar__bar.is-vertical{
        z-index: 99999999999;
    }
}
</style>
