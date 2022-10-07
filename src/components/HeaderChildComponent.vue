<template>
  <main id="main" class="main">
    <div :class="className">
      <h1 class="text-start mb-3">{{ title }}</h1>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>promotion management</el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    title: String,
    breadcrumbList: Array,
    className: String,
  }
}
</script>

<style lang="scss" scoped>
    .main {
        margin-top: 0px!important;
    }
</style>