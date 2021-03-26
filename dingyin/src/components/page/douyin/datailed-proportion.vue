<template>
    <div class="proportion-wrapper">
       <div class="proportion-left">
            <img src="@/assets/images/detailed_page_img/body.png">
            <p>男 {{bodyTage}}%</p>
        </div>
        <el-progress :percentage="bodyTage*1" :stroke-width="12" :format="format" style="margin-left: 40px;"></el-progress>
        <div class="proportion-right">
            <img src="@/assets/images/detailed_page_img/gird.png">
            <p>女 {{girdTage}}%</p>
        </div>
    </div>
</template>

<script>
export default {
    naem : '实时直播榜',
    name: "detailed-proportion",
    components: {
        
    },
    props: ['bodyTage'],
    data() {
        return {
            girdTage: '',
        };
    },
    computed: {
        
    },
    created() {

    },
    mounted () {
       
    },
    methods: {
        format(percentage) {
            percentage =  Math.round((100 - percentage*1)*100)
            percentage = percentage/100
            this.girdTage = percentage
        }
    },
};
</script>

<style lang="less" scoped>
    /deep/.el-progress-bar__outer{
        background: linear-gradient(270deg, #FF53BA 0%, #F90865 100%);
    }
    /deep/.el-progress-bar__inner{
        background: linear-gradient(270deg, #5FC7FD 0%, #248FFF 100%);
    }
    .proportion-wrapper{
        position: relative;
        margin-bottom: 20px;
        font-size: 12px;
        margin-left: 70px;
        .proportion-left{
            position: absolute;
            left: 0;
            top: 0;
            text-align:center;
        }
        .proportion-right{
            position: absolute;
            right: 10px;
            top: 0;
            text-align:center;
        }
        img{
            width: 15px;
        }
    }
</style>