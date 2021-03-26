<template>
    <div class="Box">
        <!-- 导航 -->
        <workbenchHeader></workbenchHeader>
        <!-- 内容 -->
        <contentvivw></contentvivw>

        <!-- login登录 -->
        <loginDialog></loginDialog>
    </div>
</template>

<script>
import workbenchHeader from '@/components/page/workbenchHeader.vue'
import contentvivw from '@/views/workbench_taobao/component/content.vue'

// 登录 模块
import loginDialog from '@/components/page/loginDialog';
export default {
    components: {
        workbenchHeader,
        contentvivw,
        loginDialog,
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
.Box{
    display: flex;
    height: 100%;
}
</style>
