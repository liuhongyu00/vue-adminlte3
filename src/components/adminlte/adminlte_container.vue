<template>
    <div class="wrapper">
        <!-- adminlte页面容器 -->

        <!-- 顶部导航栏 -->
        <topNavbar></topNavbar>
        <!-- /.顶部导航栏 -->

        <!-- 左侧导航栏 -->
        <leftNavbar></leftNavbar>
        <!-- /.左侧导航栏 -->

        <!-- 页面主体 -->
        <div class="content-wrapper">
            <router-view name="adminlte" />
        </div>
        <!-- /.页面主体 -->

        <!-- 右侧导航栏 -->
        <rightNavbar></rightNavbar>
        <!-- /.右侧导航栏 -->

        <!-- 版权 -->
        <copyright></copyright>
        <!-- /.版权 -->

    </div>
</template>

<script>
// 引入adminlte页面组件
import topNavbar from "./adminlte_top_navbar";
import leftNavbar from "./adminlte_left_navbar";
import rightNavbar from "./adminlte_right_navbar";
import copyright from "./adminlte_copyright";

export default {
    components: {
        topNavbar,
        leftNavbar,
        rightNavbar,
        copyright
    }   
};
</script>

<style>
</style>
