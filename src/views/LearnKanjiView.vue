<template>
  <section class="section">
    <div class="row container-fluid">
      <div class="col-lg-8">
        <div class="kanji row card" v-for="o in 4" :key="o">
          <div class="col-12 kanji-box">
            <table class="flashcard-table">
              <tr class="border-white">
                <td
                  style="
                    border-left: 1px solid white;
                    border-top: 1px solid white;
                  "
                  class="kanji-word kanji-detail__word"
                >
                  天
                </td>
                <td
                  style="
                    border-left: 1px solid white;
                    border-top: 1px solid white;
                  "
                  colspan="2"
                >
                  一：nhân, 大：đại
                </td>
                <td
                  rowspan="2"
                  style="
                    border-top: 1px solid white;
                    border-right: 1px solid white;
                    padding: 3rem;
                  "
                >
                  chỉ ý và chỉ âm: (花)chữ thảo là chỉ ý: chỉ ý của chữ kanji
                  trên là lquan đến cây, cỏ, hoa
                </td>
              </tr>
              <tr class="">
                <td style="border-left: 1px solid white">
                  <div class="kanji-detail__meaning kanji-hantu">QUẢNG</div>
                  <div class="kanji-detail__meaning kanji-meaning">Rộng</div>
                </td>
                <td style="border-left: 1px solid white">
                  <div class="kanji-word__contruct-on col-lg-12">ON: <br>
                    コウ</div>
                </td>
                <td style="border-left: 1px solid white">
                  <div class="kanji-word__contruct-kun col-lg-12">
                    KUN: <br>
                     ひろい
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  style="
                    border-left: 1px solid white;
                    border-right: 1px solid white;
                    border-bottom: 1px solid white;
                  "
                  colspan="4"
                  class="text-left"
                >
                  広大（こうだい）：rộng lớn；広告（おうこく）：quảng cáo
                </td>
              </tr>
              <tr>
                <td
                  style="
                    border-left: 1px solid white;
                    border-right: 1px solid white;
                    border-bottom: 1px solid white;
                  "
                  colspan="4"
                  class="text-left"
                >
                  広大（こうだい）：rộng lớn；広告（おうこく）：quảng cáo
                </td>
              </tr>
            </table>
          </div>
        </div>
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
                  <i class="bi bi-circle-fill m-1" style="font-size: 0.4rem"></i>
                <span class="text-start">Học card</span>
                <!-- </router-link> -->
              </li>
              <li class="text-start unit-option">
                <!-- <router-link :to="childrenItem.url"> -->
                  <i class="bi bi-circle-fill m-1" style="font-size: 0.4rem"></i>
                <span class="text-start">Quiz luyện tập chọn</span>
                <!-- </router-link> -->
              </li>
              <li class="text-start unit-option">
                <!-- <router-link :to="childrenItem.url"> -->
                  <i class="bi bi-circle-fill m-1" style="font-size: 0.4rem"></i>
                <span class="text-start">Quiz luyện tập điền</span>
                <!-- </router-link> -->
              </li>
            </ul>
          </div>
        </el-card>
      </div>
    </div>
    <rating-form-component/>
  </section>
</template>

<script>
import RatingFormComponent from "../components/RatingFormComponent.vue";
export default {
  components: {
    RatingFormComponent,
  },
  props: ["title", "breadcrumbList", "className"],
  created() {
    this.$emit("childinit", this.title, this.breadcrumbList, this.className);
  },
  methods() {
    $(':radio').change(function() {
  console.log('New star rating: ' + this.value);
});
  }
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
.unit-option{
  display: flex;
    align-items: center;
    justify-content: flex-start;
}
.kanji-detail__word-contruct {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.kanji-word,
.kanji-word__contruct {
  margin: 15px -15px;
  // border: 1px solid black;
  font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka,
    "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
  font-size: 3rem;
}
.kanji-word__contruct {
  font-size: 1.5rem;
}
.kanji-detail__meaning,
.kanji-detail__meaning-contruct {
  margin: 15px 0px;
}

.kanji-detail__explane {
  flex-direction: column;
  justify-content: center;
  display: flex;
}
.kanji-hantu {
  margin-bottom: 10px;
  font-size: 2rem;
  font-family: "Poppins";
}
.kanji-meaning {
  font-size: 1.5rem;
  font-family: "Poppins";
}

.kanji-box {
  border: 3px solid black;
  border-radius: 5px;
}

.card {
  table,
  tr,
  td {
    border: 1px solid black;
  }
}

.revision-question {
  padding: 1rem 1rem;
}

.input-answer {
  margin-bottom: 1rem;
}
.text-style {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  color: #061325;
}
.list-unit{
  display: flex;
    flex-direction: column;
    align-items: center;
}
.text.item {
  margin-bottom: 5px;
}
.kanji-detail__word-contruct {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.kanji-word,
.kanji-word__contruct {
  margin: 15px -15px;
  // border: 1px solid black;
  font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka,
    "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
  font-size: 3rem;
}
.kanji-word__contruct {
  font-size: 1.5rem;
}
.kanji-detail__meaning,
.kanji-detail__meaning-contruct {
  margin: 15px 0px;
}
.kanji-detail__explane {
  flex-direction: column;
  justify-content: center;
  display: flex;
}
.kanji-hantu {
  margin-bottom: 10px;
  font-size: 2rem;
  font-family: "Poppins";
}
.kanji-meaning {
  font-size: 1.5rem;
  font-family: "Poppins";
}
.kanji-word__contruct-on,
.kanji-word__contruct-kun {
  // border: 1px solid black;
  margin: 10px 0px;
  min-width: 5rem;
}

.kanji-box {
  border: 3px solid black;
  border-radius: 5px;
  padding-left: -15px !important;
  padding-right: -15px !important;
}
.card {
  table,
  tr,
  td {
    border: 1px solid black;
  }
}
.kanji.card {
  margin: 0rem 1.5rem 3rem;
}
.container-fluid {
  margin-top: 1rem;
}
.el-card.box-car {
  width: 75%;
}
.kanji-spell {
  display: flex;
}
.sepate-line {
  color: black;
  width: 1px;
}
</style>
