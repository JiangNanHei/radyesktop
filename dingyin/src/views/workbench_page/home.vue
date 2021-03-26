<template>
    <div class="colf">
        <div class="d_colf_content">
            <div class="d_content_title">个人信息</div>
            <div class="d_content_personal">
                <el-row :gutter="20">
                    <el-col :span="16">
                        <div class="grid-content bg-purple d_personal_left">
                            <div class="d_personal_data">
                                <el-button type="primary">编辑资料</el-button>
                            </div>
                            <div class="d_personal_show">
                                <img :src="imgUrl">
                                <span class="d_personal_show_phone">{{phone_number}}</span>
                                <span class="iconfont icon-huangguan d_personal_show_icon"></span>
                                <span class="d_personal_show_vip">{{member.member_message}}</span>
                            </div>
                            <div class="d_personal_message">
                                <p><span class="d_message_explain">手机绑定</span><span class="d_message_show">{{phone_bind.phone_bind_desc}} {{phone_bind.phone_bind_message}}</span><a v-if="phone_bind.phone_bind_status" href="javascript:;" class="d_message_active">换绑</a></p>
                                <p><span class="d_message_explain">微信绑定</span><a href="javascript:;" class="d_message_active">{{we_chat.we_chat_message}}</a></p>
                                <p><span class="d_message_explain">登录密码</span><a href="javascript:;" class="d_message_active">修改</a></p>
                                <p><span class="d_message_explain">我的订单</span><router-link class="d_message_active" to="/meorderform">查看</router-link><a href="javascript:;" class="d_message_active">开票</a></p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple d_personal_right">
                            <router-link tag="div" to="/pay">
                                <span class="iconfont icon-huangguan"></span>
                                <span class="d_personal_right_desc">  VIP中心</span>
                            </router-link>
                            <router-link tag="div" to="/meattention">
                                <span class="iconfont icon-huangguan"></span>
                                <span class="d_personal_right_desc">我的关注</span>
                            </router-link>
                            <router-link tag="div" to="/meorderform">
                                <span class="el-icon-s-order d-personal-icon"></span>
                                <span class="d_personal_right_desc">我的订单</span>
                            </router-link>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="d_content_title">工作台总览</div>
            <div class="d_content_overview">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="d_overview_content d_overview_img_one">
                            <p>抖音工作台</p>
                            <div class="d_overview_content_active">
                                <router-link to="/workbench_tiktok" target="_blank">立即进入  ></router-link>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="d_overview_content d_overview_img_two">
                            <p>快手工作台</p>
                            <div class="d_overview_content_active">
                                <router-link to="/workbench_quick" target="_blank">立即进入  ></router-link>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="d_overview_content d_overview_img_three">
                            <p>淘宝工作台</p>
                            <div class="d_overview_content_active">
                                <router-link to="/workbenchtaobaopagehome" target="_blank">立即进入  ></router-link>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="d_overview_content d_overview_img_four">
                            <p>其他工作台</p>
                            <div class="d_overview_content_active">
                                <router-link to="/">立即进入  ></router-link>
                            </div>
                        </div>
                    </el-col>
                </el-row>    
            </div> 
            <div class="d_content_title">工具精选</div>
            <div class="d_content_tool">
                <el-row type="flex" :gutter="20" justify="space-between">
                    <el-col>
                        <div class="d_overview_content">
                            <p>账号估值</p>
                            <div class="d_overview_content_active">
                                <router-link to="/accountvaluation">立即进入  ></router-link>
                            </div>
                        </div>
                    </el-col>
                    <el-col>
                        <div class="d_overview_content">
                            <p>视频去水印</p>
                            <div class="d_overview_content_active">
                                <router-link to="/videosdewatering">立即进入  ></router-link>
                            </div>
                        </div>
                    </el-col>
                    <el-col>
                        <div class="d_overview_content">
                            <p>提取视频</p>
                            <div class="d_overview_content_active">
                                <router-link to="/extractvideo">立即进入  ></router-link>
                            </div>
                        </div>
                    </el-col>
                    <el-col>
                        <div class="d_overview_content">
                            <p>敏感词查询</p>
                            <div class="d_overview_content_active">
                                <router-link to="/sensitivewords">立即进入  ></router-link>
                            </div>
                        </div>
                    </el-col>
                    <el-col>
                        <div class="d_overview_content">
                            <p>短视频素材库</p>
                            <div class="d_overview_content_active">
                                <router-link to="/shortvideo">立即进入  ></router-link>
                            </div>
                        </div>
                    </el-col>
                </el-row> 
            </div>  
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
            imgUrl: '',
            phone_number: '',
            member: '',
            phone_bind: '',
            we_chat: '',
        };
    },
    mounted () {
        this.getData()
    },
    methods: {
        getData() {
            const _this = this
            this.$http({
                url: "/personal_center.json",
                method: "GET",
                data : this.$http.adornParams({
                    
                },true)
            }).then(({data}) => {
                // console.log(data)
                _this.imgUrl = data.imgUrl
                _this.phone_number = data.phone_number
                _this.member = data.member
                _this.phone_bind = data.phone_bind
                _this.we_chat = data.we_chat
                if(data.code == 200){
                    
                }else if(data.code == 401){
                    
                }
                else{
                    
                }

            }).catch(err => {
                console.log(err)
            })
        }
    },
};
</script>

<style lang="less" scoped>
    .d_colf_content{
        color: #fff;
        .d_content_title{
            margin-bottom: 10px;
            line-height: 40px;
            font-size: 14px;
        }
        .d_content_personal{
            height: 216px;
            overflow: hidden;
            margin-bottom: 20px;
            .d_personal_left{
                background: #123D6D;
                padding: 20px;
                border-radius: 6px;
                .d_personal_show{
                    display: flex;
                    width: 400px;
                    line-height: 54px;
                    margin-bottom: 10px;
                    >img{
                        width:48px;
                        height: 48px;
                        border-radius: 24px;
                        vertical-align: middle;
                    }
                    .d_personal_show_phone{
                        font-size: 22px;
                        margin: 0 10px;
                    }
                    .d_personal_show_icon{
                        font-size: 14px;
                        color: #F1A255;
                        margin: 0 10px 0 10px;
                    }
                    .d_personal_show_vip{
                        font-size: 14px;
                        color: #F1A255;
                    }
                }
                .d_personal_data{
                    display: inline;
                    float: right;
                }
                .d_personal_message{
                    color: #CCCCCC;
                    font-size: 12px;
                    line-height: 28px;
                    .d_message_show{
                        color: #FFFFFF;
                        margin-left: 10px;
                    }
                    .d_message_active{
                        color: #248FFF;
                        margin-left: 10px;
                    }
                    
                }
            }
            .d_personal_right{
                height: 216px;
                display: flex;
                flex-direction:column;
                justify-content: space-between;
                >div{
                    background: #123D6D;
                    padding: 20px;
                    border-radius: 6px;
                    font-size: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    .d_personal_right_desc{
                        margin-left: 6px;
                    }
                    .d-personal-icon{
                        font-size: 20px;
                    }
                }
            }
            
        }
        .d_content_overview{
            .d_overview_content{
                padding: 20px;
                margin-bottom: 20px;
                border-radius: 6px;
                >p{
                    font-size: 16px;
                    line-height: 28px;
                }
                /deep/.router-link-active{
                    color: #248FFF;
                }
                .d_overview_content_active{
                    font-size: 12px;
                    a{
                        color: #248FFF!important;
                    }
                    
                }
            }
            .d_overview_img_one{
                background: url('../../assets/images/main_page/overview_one.png') no-repeat center center;
                background-size: 100%;
            }
            .d_overview_img_two{
                background: url('../../assets/images/main_page/overview_two.png') no-repeat center center;
                background-size: 100%;
            }
            .d_overview_img_three{
                background: url('../../assets/images/main_page/overview_three.png') no-repeat center center;
                background-size: 100%;
            }
            .d_overview_img_four{
                background: url('../../assets/images/main_page/overview_four.png') no-repeat center center;
                background-size: 100%;
            }
        }
        .d_content_tool{
            .d_overview_content{
                background: url('../../assets/images/main_page/overview_five.png') no-repeat center center;
                background-size: 100%;
                padding: 20px;
                border-radius: 6px;
                >p{
                    font-size: 16px;
                    line-height: 28px;
                }
                /deep/.router-link-active{
                    color: #248FFF;
                }
                .d_overview_content_active{
                    font-size: 12px;
                    a{
                        color: #248FFF;
                    }
                }
            }
        }
    }

</style>
