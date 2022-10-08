<template>
  <section class="section">
    <div class="row">
      <div class="col-lg-6">
        <div 
      id="carouselExampleIndicators"
      class="carousel slide flashcard-list"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active flashcard-item">
          <vue-flashcard
            front="広告"
            back="こうこく"
            headerFront=""
            footerFront=""
            headerBack="QUẢNG CÁO"
            footerBack="Quảng cáo"
            colorBack="white"
            colorTextBack="black"
          >
          </vue-flashcard>
        </div>
        <div class="carousel-item">
          <vue-flashcard
            front="広告"
            back="こうこく"
            headerFront=""
            footerFront=""
            headerBack="QUẢNG CÁO"
            footerBack="Quảng cáo"
            colorBack="white"
            colorTextBack="black"
          >
          </vue-flashcard>
        </div>
        <div class="carousel-item">
          <vue-flashcard
            front="広告"
            back="こうこく"
            headerFront=""
            footerFront=""
            headerBack="QUẢNG CÁO"
            footerBack="Quảng cáo"
            colorBack="white"
            colorTextBack="black"
          >
          </vue-flashcard>
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="bi-chevron-compact-left btn-flashcard" aria-hidden="true">
        </span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="bi-chevron-compact-right btn-flashcard" aria-hidden="true">
        </span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
      </div>
    </div>
  </section>
</template>

<script>
  import vueFlashcard from 'vue-flashcard';

export default {
  props: ["title", "breadcrumbList", "className"],

  components: { vueFlashcard },
  created() {
    this.$emit("childinit", this.title, this.breadcrumbList, this.className);
  },
};
</script>

<style lang="scss" scoped>
.flashcard-box {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.btn-flashcard {
  font-weight: 800;
  font-size: 2rem;
  color: black;
}
.flashcard-list{
      display: flex;
    justify-content: center;
}
.flashcard-item{
}
</style>
