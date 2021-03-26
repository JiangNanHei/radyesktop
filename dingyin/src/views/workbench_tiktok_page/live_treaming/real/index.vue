<template>
    <div class="Box">
        <div class="content">
            <el-tabs class="tabheader" v-model="activeName">
                <el-tab-pane label="实时直播榜"  name="livetreamingonetab"></el-tab-pane>
                <el-tab-pane label="直播流量概览"  name="livetreamingtowtab"></el-tab-pane>
            </el-tabs>
            <components :is="activeName"></components>
        </div>
    </div>
</template>

<script>
import livetreamingonetab from './component/live_treaming_one_tab'
import livetreamingtowtab from './component/live_treaming_tow_tab'
    export default {
        naem: '实时直播榜',
        components: {
            livetreamingonetab,
            livetreamingtowtab,
        },
        props: {

        },
        data() {
            return {
                tabIndex : '0',
                activeName: 'livetreamingonetab',
            };
        },
        methods: {

        },
    };
</script>

<style lang="less" scoped>

    /deep/.el-tabs__nav-wrap::after {
        background: #326CAD;
    }
    /deep/.el-tabs__active-bar {
        height: 3px;
        background: #248FFF;
    }
    /deep/.el-table__body-wrapper {
        overflow: hidden !important;

        .el-table__body {
            width: 100.1% !important;
        }
    }
    /deep/.content {
        overflow: hidden;
        user-select: none;
        padding: 0px;
        >.tabheader {
            >.el-tabs__header {
                .el-tabs__nav-wrap::after {
                    display: none !important;
                }

                .el-tabs__active-bar {
                    display: none;
                }

                .el-tabs__item {
                    padding: 0px;
                    margin-right: 20px;
                    display: inline-block;
                    white-space: nowrap;
                    cursor: pointer;
                    background: #103A6B;
                    border: 1px solid #103A6B;
                    color: #fff;
                    -webkit-transition: .1s;
                    transition: .1s;
                    font-weight: 500;
                    font-size: 14px;
                    border-radius: 4px;
                    width: 112px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;

                    &:hover {
                        border-color: hsla(0, 0%, 100%, .5);
                    }

                }

                .is-active {
                    background-image: -webkit-linear-gradient(45deg, #1d6dff, #0dafff);
                    border: none;
                }
            }
        }
    }
    /deep/.el-tabs__item {
        color: #fff !important;
    }
    /deep/.el-table__header-wrapper {
        .has-gutter {
            color: #ccc;
        }

        background: #144174 !important;

        tr {
            background: rgba(0, 0, 0, 0) !important;
        }

        th {
            background: rgba(0, 0, 0, 0) !important;
            padding: 20px 0 !important;
            border: none !important;
            font-size: 14px;
            &:nth-child(2){
                text-align: left ;
            }
            &:nth-child(3){
                text-align: left ;
            }
        }
    }
    // --------

    // 身体
    /deep/.el-table__row {
        background-color: #082C55 !important;

        td {
            border-bottom: 1px solid #326CAD !important;
            height: 88px;
        }
    }

    /deep/.el-table tr {
        td {
            color: #fff;
        }

        &:hover {
            td {
                background-color: hsla(0, 0%, 100%, .02);
            }
        }
    }

    /deep/.el-table::before {
        display: none !important;
    }

    /deep/.cell {
        white-space: normal;
        word-break: break-all;
        line-height: 23px;
        // padding: 0px !important;
    }

    /deep/.is-center {
        .cell {
            >span {
                font-size: 14px;
                color: #fff;
                font-weight: 500;
            }
        }
        .columnone {
                span {
                    position: relative;
                    z-index: 1;
                    display: inline-block;
                    font-size: 20px;
                    color: #fff;
                    height: 26px;
                    width: 26px;
                    text-align: center;
                    padding-top: 2px;
                    background-size: cover;
                    background-position: 50% center;
                    font-size: 12px;
                    margin: 0 3px;
                    line-height: 23px;
                }
            }

        .columntow {
        
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;

            /deep/.userImg {
                width: 60px;
                height: 60px;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                cursor: pointer;
                margin-right: 6px;
                -ms-flex-negative: 0;
                flex-shrink: 0;
                position: relative;

                img {
                    object-fit: contain;
                    border-radius: 3px;
                    width: 60px;
                    height: 60px;
                    object-fit: contain;
                    border-radius: 3px;
                }

                .live_button_ing {
                    padding: 0 2px;
                    position: absolute;
                    bottom: -8px;
                    left: 0;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    -webkit-box-pack: justify;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                    color: #fff;
                    width: 60px;
                    height: 17px;
                    background: linear-gradient(-42deg, #ff1167, #f1278a);
                    border-radius: 14px;
                    padding-left: 2px;
                    font-size: 12px;

                    img {
                        width: 28px;
                        float: left;
                        position: relative;
                        top: -1px;
                        left: -5px;

                    }

                    span {
                        position: absolute;
                        left: 20px;
                        font-size: 12px;
                        color: #fff;
                    }
                }
            }

            .userName {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                color:#999;
                >p {
                    display: flex;

                    .spanone {
                        cursor: pointer;
                        color:#fff;
                        font-size: 14px;
                        &:hover {
                            color: #2997ff;
                        }
                    }
                }

                >div {
                    font-size: 12px !important;
                }
            }
        }

        .columnthree {
            position: relative;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;

            .ImgBox {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                overflow: hidden;
                -ms-flex-negative: 0;
                flex-shrink: 0;
                cursor: pointer;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .user_count {
                color: #fff;
                margin-left: 10px;
                -webkit-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
                overflow: hidden;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-box-pack: space-evenly;
                -ms-flex-pack: space-evenly;
                justify-content: space-evenly;

                .name_box {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;

                    >div {
                        font-size: 13px;
                        max-width: 90%;
                        cursor: pointer;
                    }
                }

                .user_level_box {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    color:#999;
                    .rank_head_dyNum {
                        font-size: 12px !important;
                        margin-right: 10px;
                    }
                    .level {
                        font-size: 12px;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-align: center;
                        -ms-flex-align: center;
                        align-items: center;

                        .spanone {
                            margin-right: 5px;
                        }

                        .spantow {
                            color: #fd2270;
                            margin-right: 5px;
                        }

                        .spanthree {
                            color: #fd2270;
                        }
                    }
                }
            }
        }

        .salesAmount {
            color: #face15 !important;
        }
    }

</style>