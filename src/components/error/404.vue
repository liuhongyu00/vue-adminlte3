<template>
    <div>

        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>404 错误的页面</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item">
                                <a href="#">主页</a>
                            </li>
                            <li class="breadcrumb-item active">404 错误的页面</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <section class="content">
            <div class="error-page">
                <h2 class="headline text-warning"> 404</h2>
                <div class="error-content">
                    <h3>
                        <i class="fa fa-warning text-warning"></i> 很抱歉您访问的页面不存在</h3>
                    <p>
                        我们找不到您要找的那一页。 您也可以
                        <a href="#">返回到首页</a> 或者尝试表单搜索。
                    </p>
                    <form class="search-form">
                        <div class="input-group">
                            <input type="text" name="search" class="form-control" placeholder="检索">
                            <div class="input-group-append">
                                <button type="submit" name="submit" class="btn btn-warning">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
