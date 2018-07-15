<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- 品牌 Logo -->
        <a href="index3.html" class="brand-link">
            <img src="../../assets/image/AdminLTELogo.png" alt="Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
            <span class="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        <!-- 工具条 -->
        <div class="sidebar">
            <!-- 侧边栏用户面板(可选) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="../../assets/image/user1-128x128.jpg" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                    <a href="#" class="d-block">姓名</a>
                </div>
            </div>

            <!-- 侧边菜单栏 -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <li class="nav-item" v-if="item.navbarName" v-for="item in options" :key="item.path">
                        <router-link class="nav-link" :to="item.path">
                            <span v-if="item.navbarIcon" v-html="item.navbarIcon"></span>
                            <p>
                                {{item.navbarName}}
                            </p>
                        </router-link>
                    </li>
                </ul>
            </nav>
            <!-- /.侧边菜单栏 -->
        </div>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            // 从路由器读取的导航栏设置
            options: []
        };
    },
    created() {
        // 读取路由器配置文件
        let options = this.$router.options.routes;
        // 遍历路由器配置查找adminlte导航配置
        options.forEach(element => {
            if (element["id"] == this.$store.state.config.navbar_id) {
                element["children"] && (this.options = element["children"]);
            }
        });
    }
};
</script>

<style>
</style>
