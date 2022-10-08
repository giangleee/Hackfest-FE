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
    <div class="row container-fluid">
      <div class="col-lg-9">
        <QuestionComponent />
      </div>
      <div class="col-lg-3">
        <el-card class="box-car">
          <div
            v-for="o in 20"
            :key="o"
            class="text item">
            <a
              class="nav-link collapsed text-start"
              :data-bs-target="`#listNo${o}`"
              data-bs-toggle="collapse"
              href="#">
              <span style="margin-right: 1rem">{{ 'Unit ' + o }}</span>
              <i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              :id="`listNo${o}`"
              class="nav-content collapse"
              data-bs-parent="#sidebar-nav"
              style="list-style: none">
              <li class="text-start">
                <!-- <router-link :to="childrenItem.url"> -->
                <span class="text-start">Học card</span>
                <!-- </router-link> -->
              </li>
              <li class="text-start">
                <!-- <router-link :to="childrenItem.url"> -->
                <span class="text-start">Quiz luyện tập chọn</span>
                <!-- </router-link> -->
              </li>
              <li class="text-start">
                <!-- <router-link :to="childrenItem.url"> -->
                <span class="text-start">Quiz luyện tập điền</span>
                <!-- </router-link> -->
              </li>
            </ul>
          </div>
        </el-card>
      </div>
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
