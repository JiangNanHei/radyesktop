<template>
    <div class="box-wrapper">
        <detailed-left></detailed-left>
        <detailed-data></detailed-data>
    </div>
</template>

<script>
import detailedLeft from './components/detailed-left'
import detailedData from './components/detailed-data'
export default {
    components: {
        detailedLeft,
        detailedData
    },
    props: {

    },
    data() {
        return {
            activeName: 'detailed-data',
        };
    },
    computed: {
        
    },
    created() {
        
    },
    methods: {
        
    },
};
</script>

<style lang="less" scoped>
    .box-wrapper{
        color: #fff;
        position: relative;
        display: flex;
        .d-bg-purple{
            padding: 20px;
            background: #051C36;
            // overflow: hidden;
        }
        
    }
</style>