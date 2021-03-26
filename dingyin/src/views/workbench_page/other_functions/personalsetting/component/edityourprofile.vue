<template>
    <div class="table_box">
        <el-dialog :visible.sync="edityourprofilevalue" :append-to-body="true">
            <i class="iconfont icon-cuowu1 closebut" @click="closebut"></i>
            <p class="title">编辑个人资料</p>
            <div class="datamain">
                <div class="portrait">
                    <div class="texttitle">头像</div>
                    <div class="rightconten clearfix">
                        <el-upload
                            class="avatar-uploader"
                            action="http://test.hyzn0755.com/ray5g/api/system/global/changeLogo"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload"
                            :headers='myHeaders'
                            >
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                        <el-button class="uploadingbut" @click="uploadFile" type="primary">上传头像</el-button>
                        <p class="conditionp">支持jpeg/jpg/png格式图片大小不超过1M</p>
                    </div>
                </div>
                <div class="nickname">
                    <div class="texttitle">昵称</div>
                    <el-input v-model="iptvalue"  maxlength="20" placeholder="请输入内容"></el-input>
                </div>
            </div>
            <div class="butbox">
                <el-button class="cancelbut" type="primary" @click="closebut">取消</el-button>
                <el-button class="confirm" type="primary" @click="confirm(form)">确定</el-button>
            </div>
        </el-dialog>
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
                edityourprofilevalue : false,

                imageUrl: '',
                iptvalue : '',
                myHeaders: {
                    // Authorization: this.$cookie.get('token')
                    Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxIiwic3ViIjoidW5pZnJhbWV3b3JrIiwic3RhZmZDb2RlIjoic3VwZXJtYW5hZ2VyIiwiZnJvbUhvc3QiOiIyMTguMjA0LjI1Mi4yMDMiLCJleHAiOjE2MTEwNDQ5NzMsImlhdCI6MTYxMTA0MTM3M30.nx5HJqNi_f5UTAlIOF36qUEZlbhUBcIOmh6OB2EtqgA"
                },
            };
        },
        methods: {
            // 弹窗关闭 
            closebut(){
                this.edityourprofilevalue = false;
            },

            // 上传头像
            uploadFile(){

            },
            // 确定
            confirm(){

            },

            // 文件上传成功 的 函数
            handleAvatarSuccess(res, file) {
                console.log(file.raw)
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                console.log(file)
                const isJPG = file.type === 'image/jpeg' || 'image/jpg' || 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 1;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG,JPEG,PNG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 1MB!');
                }
                return isJPG && isLt2M;
            }
        },
    };
</script>

<style lang="less" scoped>
    .table_box {
        position: relative;
    }
    /deep/.el-dialog {
        background: #082C55;
        border-radius: 6px;
        width: 30%;
        .closebut{
            cursor: pointer;
            font-size: 30px;
            position:absolute;
            right: 10px;
            top: 10px;
            color:#285F9E;
            transition: all .3s;
            &:hover{
                color: #fff;
            }
        }
        .el-dialog__header{
            display: none;
        }
        .title{
            color:#fff;
            font-size: 16px;
            margin-bottom:30px;
        }
        .datamain{
            .portrait{
                display: flex;
                .texttitle{
                    color:#ccc;
                    width: 50px;
                    line-height: 80px;
                }
                .rightconten{
                    flex: 1;
                    .avatar-uploader{
                        width: 80px;
                        height: 80px;
                        overflow: hidden;
                        margin-right: 20px;
                        float: left;
                        .el-upload{
                            width: 80px;
                            height: 80px;
                            overflow: hidden;
                            border:none;
                            position: relative;
                            .avatar-uploader-icon{
                                width: 100%;
                                height: 100%;
                                position: absolute;
                                left: 50%;
                                top:50%;
                                transform: translate(-50%,-50%);
                                &::before{
                                    position: absolute;
                                    left: 50%;
                                    top:50%;
                                    transform: translate(-50%,-50%);
                                }
                            }
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }

                    .uploadingbut{
                        overflow: hidden;
                        margin-bottom: 8px;
                        margin-top: 5px;
                        width: 120px;
                        height: 40px;
                        padding: 0px;
                        font-size: 14px;
                        line-height: 40px;
                        border: none;
                    }
                    .conditionp{
                        overflow: hidden;
                        color:#999;
                        font-size: 13px;
                    }
                }
            }
            .nickname{
                display: flex;
                margin: 30px 0;
                .texttitle{
                    color:#ccc;
                    width: 50px;
                    line-height: 40px;
                }
                .el-input{
                    .el-input__inner{
                        width: 200px;
                        height: 40px;
                        background: #1C4778;
                        border-radius: 6px;
                        border: 1px solid #5191DA;
                        color:#ccc;
                    }
                }
            }
        }
        .butbox{
            text-align: right;
            .el-button{
                width: 120px;
                height: 40px;
                padding: 0px;
                font-size: 14px;
                line-height: 40px;
                border: none;
            }
            .cancelbut{
                background: #0050A4;
                border:none;
            }
        }
    }
</style>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>