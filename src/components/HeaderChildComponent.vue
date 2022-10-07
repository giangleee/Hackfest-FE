<template>
  <div :class="className">
    <h1 class="text-start mb-3">{{ title }}</h1>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="item in breadcrumbList"
        :key="item.id"
        :to="{ path: item.path }"
        >{{ item.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    breadcrumbList: Array,
    className: String,
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin-top: 0px !important;
}
</style>
