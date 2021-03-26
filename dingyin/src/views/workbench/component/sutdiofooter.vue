<template>
    <div class="footerBox">
        <img class="logo" src="@/assets/images/logo.png">
        <!-- <div class="footerTextBox">
            <span class="span1">关于我们</span>
            <div class="bordercenter">

            </div>
            <span class="span2">微信公众号</span>
        </div> -->
        <!-- <div class="borderbottom"></div> -->
        <p>Copyright@2020-至今 鼎音大数据 ｜ 深圳市鼎音网络科技有限公司</p>
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

        };
    },
    methods: {

    },
};
</script>

<style lang="less" scoped>
.footerBox{
    margin: 50px auto 5px;
    .logo{
        display: block;
        margin: 0 auto;
    }
    // .footerTextBox{
    //     color: hsla(0,0%,100%,.5)!important;
    //     text-align: center;
    //     .span1{

    //     }
    //     .span2{
            
    //     }
    //     .bordercenter{
    //         display: inline-block;
    //         width: 1px;
    //         height: 1em;
    //         margin: 0 8px;
    //         vertical-align: middle;
    //         position: relative;
    //         background-color: hsla(0,0%,100%,.02);
    //     }
    // }
    // .borderbottom{
    //     height: 1px;
    //     background-color: hsla(0,0%,100%,.02);
    //     height: 1px;
    //     width: 100%;
    //     margin: 24px 0;
    // }
    p{
        margin-top: 20px;
        text-align: center;
        font-size: 13px;
        color: hsla(0,0%,100%,.2);
    }
}
</style>
