<template>
    <div>
        <!-- 标题 -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">卡片</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item">
                                <a href="#">主页</a>
                            </li>
                            <li class="breadcrumb-item active">卡片</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
        <!-- /.标题 -->

        <!-- 主要内容 -->
        <section class="content container-fluid">

            <div class="row">
                <div class="col-lg-6">
                    <card>
                        <h5 class="m-0" slot="header">普通卡片</h5>
                        <h5 class="card-title">小标题</h5>
                        <p class="card-text">
                            主要内容
                        </p>
                    </card>
                </div>
                <div class="col-lg-6">
                    <card :stype="'card-primary'">
                        <h5 class="m-0" slot="header">带样式的卡片</h5>
                        <h5 class="card-title">小标题</h5>
                        <p class="card-text">
                            通过stype更换样式
                        </p>
                    </card>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <card :outline="true" :stype="'card-info'">
                        <h5 class="card-title">小标题</h5>
                        <p class="card-text">
                            外边框样式
                        </p>
                    </card>
                </div>
                <div class="col-lg-6">
                    <card :outline="true" :stype="'card-success'">
                        <h5 class="card-title">小标题</h5>
                        <p class="card-text">
                            外边框样式
                        </p>
                    </card>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <card :outline="true" :stype="'card-warning'">
                        <h5 class="card-title">小标题</h5>
                        <p class="card-text">
                            带a标签的卡片
                        </p>
                        <a href="#" class="card-link">链接一</a>
                        <a href="#" class="card-link">链接二</a>
                    </card>
                </div>
                <div class="col-lg-6">
                    <card :outline="true" :stype="'card-danger'">
                        <h5 class="card-title">小标题</h5>
                        <p class="card-text">
                            带a标签的卡片
                        </p>
                        <a href="#" class="card-link">链接一</a>
                        <a href="#" class="card-link">链接二</a>
                    </card>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <card :outline="true" :stype="'card-primary'">
                        <h5 class="card-title">小标题</h5>
                        <p class="card-text">
                            带按钮的卡片
                        </p>
                        <a href="#" class="btn btn-primary">按钮一</a>
                        <a href="#" class="btn btn-primary">按钮二</a>
                    </card>
                </div>
                <div class="col-lg-6">
                    <card :outline="true" :stype="'card-primary'">
                        <h5 class="card-title">小标题</h5>
                        <p class="card-text">
                            带按钮的卡片
                        </p>
                        <a href="#" class="btn btn-primary">按钮一</a>
                        <a href="#" class="btn btn-primary">按钮二</a>
                    </card>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <card>
                        demo
                    </card>
                </div>
            </div>

        </section>
        <!-- /.主要内容 -->
    </div>
</template>

<script>
import card from "@/components/module/card";

export default {
    components: {
        card
    }
};
</script>

<style>
</style>
