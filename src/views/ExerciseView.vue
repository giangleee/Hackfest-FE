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
      <div class="col-lg-8">
        <QuestionComponent />
      </div>
      <div class="col-lg-4 w-50 d-flex justify-content-around">
        <el-card class="box-car list-unit">
          <div v-for="o in 20" :key="o" class="text item">
            <a
              class="nav-link collapsed text-start"
              :data-bs-target="`#listNo${o}`"
              data-bs-toggle="collapse"
              href="#"
            >
              <span style="margin-right: 1rem">{{ "Unit " + o }}</span>
              <i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              :id="`listNo${o}`"
              class="nav-content collapse"
              data-bs-parent="#sidebar-nav"
              style="list-style: none"
            >
              <li class="text-start unit-option">
                <!-- <router-link :to="childrenItem.url"> -->
                  <i class="bi bi-circle-fill" style="font-size: 0.4rem"></i>
                <span class="text-start">Học card</span>
                <!-- </router-link> -->
              </li>
              <li class="text-start unit-option">
                <!-- <router-link :to="childrenItem.url"> -->
                  <i class="bi bi-circle-fill" style="font-size: 0.4rem"></i>
                <span class="text-start">Quiz luyện tập chọn</span>
                <!-- </router-link> -->
              </li>
              <li class="text-start unit-option">
                <!-- <router-link :to="childrenItem.url"> -->
                  <i class="bi bi-circle-fill" style="font-size: 0.4rem"></i>
                <span class="text-start">Quiz luyện tập điền</span>
                <!-- </router-link> -->
              </li>
            </ul>
          </div>
        </el-card>
      </div>
    </div>
    <quill-editor
    class="editor-form"
    :ref="commonRef"
    :options="options"
    v-model.trim="content"
    @input="handleInput" 
    @change="handleChange($event)"
/>

  </section>
</template>

<script>
export default {
  data() {
    return {
        options: {
            modules: {
                toolbar: {
                    container: toolbarModules,
                },
            },
            placeholder: '',
            theme: 'snow',
            readOnly: false
        }
    }
},
method() {
      let toolbarModules = [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'align': [] }],
        ['formula'],
    ];

    }

}
</script>

<style lang="scss" scoped>
  span,
  .el-radio {
    padding: 10px 15px;
  }
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

.unit-option{
  display: flex;
    align-items: center;
    justify-content: flex-start;
}

</style>
