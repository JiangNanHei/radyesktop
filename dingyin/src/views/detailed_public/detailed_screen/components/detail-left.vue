<template>
    <div class="detail-screen-left-wrapper">
        <div class="grid-content bg-purple d-grid-content d-detail-top-left-wrapper d-detail-top-left-topleft">
            <div class="d-detail-topleft-position"></div>
            <span class="d-detail-top-left-title">在线人数</span>
            <span class="d-detail-top-left-desc">{{content.online_number}}</span>
        </div>
        <div class="detail-middley-show"></div>
        <div class="grid-content bg-purple d-grid-content d-detail-top-left-wrapper d-detail-top-left-topright">
            <div class="d-detail-topleft-position"></div>
            <span class="d-detail-top-left-title">销售额</span>
            <span class="d-detail-top-left-desc">{{content.sales_volume}}</span>
        </div>
        <div class="detail-middle-show"></div>
        <div class="d-detail-top-left-img">
            <img :src="content.imgUrl">
        </div>
        <div class="grid-content bg-purple d-grid-content d-detail-top-left-wrapper d-detail-top-left-bottomleft">
            <div class="d-detail-topleft-position"></div>
            <span class="d-detail-top-left-title">累计观看人数</span>
            <span class="d-detail-top-left-desc">{{content.watch_number}}</span>
        </div>
        <div class="grid-content bg-purple d-grid-content d-detail-top-left-wrapper d-detail-top-left-bottomright">
            <div class="d-detail-topleft-position"></div>
            <span class="d-detail-top-left-title">音浪收入</span>
            <span class="d-detail-top-left-desc">{{content.income}}</span>
        </div>   
    </div>
</template>

<script>
export default {
    components: {

    },
    props: ['content'],
    data() {
        return {

        };
    },
    methods: {

    },
};
</script>

<style lang="less" scoped>
    .detail-screen-left-wrapper{
        position: relative;
        width: 900px;
        // height: 200px;
        overflow: hidden;
        .d-grid-content{
            background: #051C36;
            border-radius: 20px;
            border: 1px solid #248FFF;
        }
        .d-detail-top-left-wrapper{
            padding: 20px;
            width: 435px;
            display: inline-block;
            height: 80px;
            position: relative;
            // overflow: hidden;
            line-height: 50px;
            .d-detail-top-left-title{
                font-size: 20px;
                color: #CCCCCC;
                margin-left: 40px;
                margin-right: 20px;
                display: inline-block;
                vertical-align: top;
            }
            .d-detail-top-left-desc{
                font-size: 32px;
                color: #FFAC4A;
            }
        }
        .d-detail-topleft-position{
            position: absolute;
            width: 50px;
            height: 50px;
            background: #021428;
        }
        .d-detail-top-left-topleft{
             margin-bottom: 20px;
            .d-detail-topleft-position{
                bottom: -11px;
                right: -15.52px;
                border-top: 1px solid #248FFF;
                border-left:1px solid #248FFF;
                border-radius:50px 0px 0px 0px;
            }
        }
        .d-detail-top-left-topright{
            float: right;
            .d-detail-topleft-position{
                bottom: -11px;
                left: -15.52px;
                border-top: 1px solid #248FFF;
                border-right:1px solid #248FFF;
                border-radius:0px 50px 0px 0px;
            }
        }
        .d-detail-top-left-bottomleft{
            .d-detail-topleft-position{
                top: -11px;
                right: -15.52px;
                border-bottom: 1px solid #248FFF;
                border-left:1px solid #248FFF;
                border-radius:0px 0px 0px 50px;
            }
        }
        .d-detail-top-left-bottomright{
            float: right;
            .d-detail-topleft-position{
                top: -11px;
                left: -15.52px;
                border-bottom: 1px solid #248FFF;
                border-right:1px solid #248FFF;
                border-radius:0px 0px 50px 0px;
            }
        }
        .d-detail-top-left-img{
            position: absolute;
            left: 400px;
            top: 38px;
            width: 100px;
            height: 100px;
            margin: 0 auto;
            overflow: hidden;
            text-align: center;
            line-height: 100px;
            // background: #021428;
            z-index: 2;
            >img{
                width: 84px;
                border-radius: 42px;
                vertical-align: middle;
            }
        }
        .detail-middle-show{
            height: 20px;
            width: 900px;
            background: #021428;
            z-index: 2;
            position: absolute;
            top: 80px;
        }
        .detail-middley-show{
            height: 150px;
            width: 30px;
            background: #021428;
            z-index: 2;
            position: absolute;
            left: 435px;
            top: 0;
        }
        
        
    }
</style>