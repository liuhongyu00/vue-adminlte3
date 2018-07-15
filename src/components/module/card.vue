<template>
    <div>
        <!-- 卡片 -->
        <div class="card" :class="[{'card-outline': outline} , stype]">
            <div class="card-header" v-if="header">
                <slot name="header" />
            </div>
            <div class="card-body">
                <slot/>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "card",
    data() {
        return {
            // 判断卡片是否有头部
            header: this.$slots.header,
        };
    },
    props: {
        // 外边框
        outline: {
            type: Boolean,
            default: false
        },
        // 卡片样式
        stype: {
            type: String,
            default: ""
        }
    }
};
</script>

<style>
</style>
