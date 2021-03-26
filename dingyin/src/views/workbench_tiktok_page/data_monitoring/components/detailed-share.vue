<template>
    <div class="share-content">
        <div class="d-monitoring-question-content">
            <div>
                <p>1.点击抖音分享按钮</p>
                <img src="@/assets/images/my/remind1.png">
            </div>
            <div>
                <p>2.点击复制链接按钮</p>
                <img src="@/assets/images/my/remind2.png">
            </div>
            <div class="share-radius-left"></div>
            <div class="share-radius-right"></div>
            <img class="share-radius-guide" src="@/assets/images/my/guide.png">
        </div>
    </div> 
</template>
<style lang="less" scoped>
    .share-content{
        .d-monitoring-question-content{
            width: 500px;
            display: flex;
            text-align: center;
            justify-content: space-around;
            position: relative;
            p{
                line-height: 28px;
                font-size: 12px;
                color: #FFFFFF;
            }
            img{
                width: 240px;
            }
            .share-radius-left{
                width: 40px;
                height: 40px;
                border-radius: 20px;
                border: 2px solid #FD3C3C;
                position: absolute;
                bottom: 113px;
                left: 205px;
            }
            .share-radius-right{
                width: 40px;
                height: 40px;
                border-radius: 20px;
                border: 2px solid #FD3C3C;
                position: absolute;
                bottom: 43px;
                right: 23px;
            }
            .share-radius-guide{
                width: 180px;
                position: absolute;
                bottom: 63px;
                left: 250px;
            }
        }
        
    }
</style>