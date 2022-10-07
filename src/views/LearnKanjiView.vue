<template>
  <section class="section">
    <div class="row">
      <div class="col-lg-3">
        <el-card class="box-card">
          <h1 class="text-style">Hãy chọn 1 unit học</h1>
          <div v-for="o in 20" :key="o" class="text item">
            {{ "Unit " + o }}
          </div>
        </el-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "breadcrumbList", "className"],
  created() {
    this.$emit("childinit", this.title, this.breadcrumbList, this.className);
  },
};
</script>

<style lang="scss" scoped>
.text-style {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  color: #061325;
}
.text.item {
    margin-bottom: 5px;
}
</style>
