<template>
    <div class="share-content">
        <div class="d-monitoring-question-content">
            <div>
                <p>1.点击达人抖音主页更多按钮</p>
                <img src="@/assets/images/my/homelink1.png">
            </div>
            <div>
                <p>2.点击分享按钮</p>
                <img src="@/assets/images/my/homelink2.png">
            </div>
            <div>
                <p>3.点击复制链接按钮</p>
                <img src="@/assets/images/my/homelink3.png">
            </div>
            <div class="share-radius-left"></div>
            <div class="share-radius-left2"></div>
            <div class="share-radius-right"></div>
            <img class="share-radius-guide" src="@/assets/images/my/guide2.png">
            <img class="share-radius-guide2" src="@/assets/images/my/guide2.png">
        </div>
    </div> 
</template>
<style lang="less" scoped>
    .share-content{
        .d-monitoring-question-content{
            width: 760px;
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
                width: 30px;
                height: 30px;
                border-radius: 20px;
                border: 2px solid #FD3C3C;
                position: absolute;
                top: 55px;
                left: 212px;
            }
            .share-radius-left2{
                width: 30px;
                height: 30px;
                border-radius: 20px;
                border: 2px solid #FD3C3C;
                position: absolute;
                bottom: 182px;
                left: 364px;
            }
            .share-radius-right{
                width: 40px;
                height: 40px;
                border-radius: 20px;
                border: 2px solid #FD3C3C;
                position: absolute;
                bottom: 43px;
                right: 199px;
            }
            .share-radius-guide{
                width: 120px;
                height: 90px;
                position: absolute;
                bottom: 80px;
                left: 400px;
            }
            .share-radius-guide2{
                width: 90px;
                height: 150px;
                position: absolute;
                top: 130px;
                left: 250px;
            }
        }
        
    }
</style>