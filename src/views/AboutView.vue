<template>
  <div class="about">
  </div>
</template>

<script>
export default {
  props: ["title", "breadcrumbList", "className"],
  created() {
    this.$emit("childinit", this.title, this.breadcrumbList, this.className);
  },
};
</script>
