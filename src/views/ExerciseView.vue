<script>
  import QuestionComponent from '@/components/QuestionComponent.vue';
  export default {
    props: ['title', 'breadcrumbList', 'className'],
    components: {
      QuestionComponent,
    },
    created() {
      this.$emit('childinit', this.title, this.breadcrumbList, this.className);
    },
  };
</script>

<template>
  <section class="section">
    <div class="row">
      <div class="col-lg-3">
        <el-card class="box-card">
          <h1 class="text-style">Hãy chọn 1 unit học</h1>
          <div
            v-for="o in 20"
            :key="o"
            class="text item">
            {{ 'Unit ' + o }}
          </div>
        </el-card>
      </div>
      <QuestionComponent />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .text-style,
  span {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    color: #061325;
  }
  span,
  .el-radio {
    padding: 10px 15px;
  }
</style>
