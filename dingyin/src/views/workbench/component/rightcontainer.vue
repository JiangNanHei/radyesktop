<template>
    <div class="containerBox">
        <el-scrollbar style="height:100%">
            <div class="marginBox">
                <router-view></router-view>
                <sutdiofooter></sutdiofooter>
            </div>
        </el-scrollbar>
    </div>
</template>

<script>
import sutdiofooter from '@/views/workbench/component/sutdiofooter.vue'
export default {
    components: {
        sutdiofooter,
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
.containerBox{
    flex: 1;
    overflow-x: hidden;
    // margin-left: 214px;
    height: 100%;
    .marginBox{
        padding: 10px 10px;
    }
}
</style>
