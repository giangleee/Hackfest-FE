<template>
  <section class="section">
    <div class="row align-items-top">
      <!-- Card with an image on top -->

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
