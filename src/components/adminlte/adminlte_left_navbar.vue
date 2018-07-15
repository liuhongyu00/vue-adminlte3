<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- 品牌 Logo -->
        <a href="index3.html" class="brand-link">
            <img src="../../assets/image/AdminLTELogo.png" alt="Logo" class="brand-image img-circle elevation-3"
                style="opacity: .8">
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
                    <!-- 使用.nav-icon类将图标添加到链接中有了font-awesome或其他图标字体库 -->

                    <li class="nav-item">
                        <router-link class="nav-link" to="/card">
                            <i class="fa fa-circle-o nav-icon"></i>
                            <p>
                                卡片
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
export default {};
</script>

<style>
</style>
