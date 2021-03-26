<template>
    <div class="map-wrapper">
        <img src="@/assets/images/logo.png">
        <el-row :gutter="20" class="map-data-wrapper">
            <el-col :span="12" v-for="(value, key , index) of content" :key="index">
                <div class="grid-content bg-purple">
                    <span class="map-data-left">{{key}}</span>&nbsp;<span>{{value}}</span>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    naem : '实时直播榜',
    name: "detailed-fans-map",
    components: {
        
    },
    props: ['content'],
    data() {
        return {
           
        };
    },
    computed: {
        
    },
    created() {
        
    },
    mounted () {
    },
    methods: {
        
    },
};
</script>

<style lang="less" scoped>
    .map-wrapper{
        margin-top: 40px;
       padding: 10px; 
       display: flex;
       font-size: 12px;
       text-align: left;
       line-height: 26px;
       >img{
           width: 260px;
        //    margin-right:50px;
       }
       .map-data-wrapper{
           width: 350px;
       }
       .map-data-left{
           color: #CCCCCC;
       }
    }
</style>