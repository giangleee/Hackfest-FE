<template>
  <section class="section">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <vue-flashcard front="広告" back="こうこく"> </vue-flashcard>
      </div>
    </div>
  </section>
</template>

<script>
import vueFlashcard from "vue-flashcard";

export default {
  props: ["title", "breadcrumbList", "className"],

  components: { vueFlashcard },
  created() {
    this.$emit("childinit", this.title, this.breadcrumbList, this.className);
  },
};
</script>

<style lang="scss" scoped></style>
