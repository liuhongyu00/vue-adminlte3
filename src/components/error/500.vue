<template>
    <div>

        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>500 错误的页面</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item">
                                <a href="#">主页</a>
                            </li>
                            <li class="breadcrumb-item active">500 错误的页面</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <section class="content">
            <div class="error-page">
                <h2 class="headline text-danger">500</h2>
                <div class="error-content">
                    <h3>
                        <i class="fa fa-warning text-danger"></i> 很抱歉！发生了一些错误。</h3>
                    <p>
                        我们将立即着手解决这个问题！ 您可以
                        <a href="#">返回首页</a> 或者尝试表单搜索。
                    </p>
                    <form class="search-form">
                        <div class="input-group">
                            <input type="text" name="search" class="form-control" placeholder="检索">
                            <div class="input-group-append">
                                <button type="submit" name="submit" class="btn btn-danger">
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
