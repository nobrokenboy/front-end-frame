<template>
    <transition enter-active-class="animated fadeIn">
        <div class="loading-layer-wrapper"  v-show="isShowLoading">
            <div class="loading-layer-content">
                <i class="icon-btn icon-btn-loading loading-animate"></i>
                <span  class="margin-left-10" v-if="dataType===0" >数据加载中，请稍等...</span>
                <span  class="margin-left-10" v-else>数据正在提交，请稍等...</span>
                <i class="icon-btn icon-btn-smile margin-left-10"></i>
            </div>
        </div>
    </transition>
</template>
<script type="text/ecmascript-6">
    export default{
        data(){
            return {
                
            };
        },
        props:["isShowLoading","dataType"],
        methods:{

        }
    }
</script>
<style lang="sass" scoped>
    $firstNavColor:#7eb2cd;
    $GreyFontColor:#899195;
    .loading-layer-wrapper{
        position:fixed;
        left:0;
        right:0;
        top:0;
        bottom:0;
        z-index:12;
        background:rgba(1,1,1,.4);
        .loading-layer-content{
            position:absolute;
            left:50%;
            top:20%;
            transform:translateX(-50%);
            padding:20px;
            border:1px solid $firstNavColor;
            background-color:#fff;
            color:$GreyFontColor;
        }
     }
</style>