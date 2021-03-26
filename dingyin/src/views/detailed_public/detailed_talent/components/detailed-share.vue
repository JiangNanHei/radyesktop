<template>
    <div class="detailed-share-wrapper">
        <div class="d-share-title">
            <div class="d-share-title-logo">
                <span>{{talent_title.title}}</span>
            </div>
            <img class="d-share-title-message" src="@/assets/images/my/talent.png">
            <p class="d-share-title-time">{{talent_title.show_time}}</p>
        </div>
        <div class="d-share-echarts">

        </div>
        <div class="d-share-footer">

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
            talent_title: {}
        };
    },
    computed: {
        
    },
    created() {
        
    },
    mounted () {
        this.getData()
    },
    methods: {
        getData() {
            const _this = this
            this.$http({
                url: "/detailed_talent_share.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.talent_title = data.talent_title
                if(data.code == 200){
                    
                }else if(data.code == 401){
                    
                }
                else{
                    
                }
            }).catch(err => {
                console.log(err)
            })
        },
        
    },
};
</script>

<style lang="less" scoped>
    .detailed-share-wrapper{
        width: 750px;
        background: url("../../../../assets/images/my/background.png");
        .d-share-title{
            padding: 20px;
            color: #FFFFFF;
            .d-share-title-message{
                width: 400px;
            }
        }
    }
</style>