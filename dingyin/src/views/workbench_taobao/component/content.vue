<template>
    <div class="contentvivw clearfix">
        <sidebar></sidebar>
        <container></container>
    </div>
</template>

<script>
import sidebar from '@/views/workbench_taobao/component/Sidebar.vue'
import container from '@/views/workbench_taobao/component/rightcontainer.vue'
export default {
    components: {
        sidebar,
        container,
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
.contentvivw{
    position: relative;
    max-width: 1920px;
    height: 100%;
    margin:0 auto;
    // margin-top: 60px;
    padding-top: 60px;
    width: 100%;
    background: #021428;
    z-index: 99;
}
</style>
