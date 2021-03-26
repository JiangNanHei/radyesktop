<template>
    <div class="classification_box">
       <!-- 数据分类 -->
        <div class="classification_data">
            <div class="div_list">
                <p class="title_p">{{classification_data.title}}</p>
                <ul class="ul_list">            
                    <li :class="{item,active: classindex == i}"  v-for="(item,i) in classification_data.data" :key="i" @click.stop="pitchbut.call(this,i)">
                        <div>
                            <p class="item_p">
                                {{item.name}}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    props: {
        classification_data : Object
    },
    data() {
        return {
            classindex : 0,
            // classification_data : {
            //     title : '',
            //     data : [
                    
            //     ]
            // }
        };
    },
    methods: {
        pitchbut(i){
            this.classindex = i;
        },
    },
};
</script>

<style lang="less" scoped>
.classification_box {
    // /数据分类
    .classification_data {
        width: 100%;
        font-size: 12px;
        text-align: left;
        line-height: 35px;
        color:#ccc;
        .div_list{
            display: flex;
            .title_p{
                margin-right: 20px;
                color:#fff;
            }
            .ul_list{
                flex: 1;
                .item{
                    display: inline-block;
                    margin: 0 10px;
                    .item_p{
                        cursor: pointer;
                        line-height: 20px;
                        span{
                            pointer-events: none;
                        }
                        .span_name{
                            margin-right: 10px;
                        }
                    }   

                }
            }
        }
    }
}
</style>
