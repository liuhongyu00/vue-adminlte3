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
                    <li class="nav-item has-treeview menu-open">
                        <a href="#" class="nav-link active">
                            <i class="nav-icon fa fa-dashboard"></i>
                            <p>
                                默认选中
                                <i class="right fa fa-angle-left"></i>
                            </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="#" class="nav-link active">
                                    <i class="fa fa-circle-o nav-icon"></i>
                                    <p>默认选中</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="fa fa-circle-o nav-icon"></i>
                                    <p>普通标签</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="nav-icon fa fa-th"></i>
                            <p>
                                带icon的菜单
                                <span class="right badge badge-danger">New</span>
                            </p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/demo">
                            <i class="nav-icon fa fa-th"></i>
                            <p>
                                <i class="fa fa-circle-o nav-icon"></i>
                                demo页
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
