<template>
  <section class="section">
    <div class="row container-fluid">
      <div class="col-lg-9">
        <div
          class="kanji row card"
          v-for="o in 4"
          :key="o">
          <div class="col-12 kanji-box">
            <div class="row kanji-box-detail">
              <div class="col-lg-4 kanji-detail__word">
                <div class="kanji-word">広</div>

                <div class="kanji-detail__meaning">
                  <div class="kanji-hantu">QUẢNG</div>
                  <div class="kanji-meaning">Rộng</div>
                </div>
              </div>
              <div class="col-lg-4 kanji-detail__word-contruct">
                <div class="kanji-word__contruct">広い</div>
                <div class="kanji-detail__meaning-contruct row">
                  <div class="kanji-word__contruct-on col-lg-12">ON: コウ</div>
                  <div class="kanji-word__contruct-kun col-lg-12">KUN: ひろい</div>
                </div>
              </div>
              <div class="col-4 kanji-detail__explane">
                <div class="kanji-detail__explane-detail">
                  chỉ ý và chỉ âm: (花)chữ thảo là chỉ ý: chỉ ý của chữ kanji trên là lquan đến cây,
                  cỏ, hoa
                </div>
              </div>
            </div>

            <div class="kanji-example text-left">
              広大（こうだい）：rộng lớn；広告（おうこく）：quảng cáo
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-3 w-50 d-flex justify-content-around">
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

<script>
  export default {
    props: ['title', 'breadcrumbList', 'className'],
    created() {
      this.$emit('childinit', this.title, this.breadcrumbList, this.className);
    },
  };
</script>

<style lang="scss" scoped>
  .text-style {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    color: #061325;
  }
  .text.item {
    margin-bottom: 5px;
  }
  .kanji-detail__word,
  .kanji-detail__word-contruct {
    border-right: 1px solid black;
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
    font-family: 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', Osaka, 'メイリオ', Meiryo,
      'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
    font-size: 3rem;
    border-bottom: 1px solid black;
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
    font-family: 'Poppins';
  }
  .kanji-meaning {
    font-size: 1.5rem;
    font-family: 'Poppins';
  }
  .kanji-word__contruct-on,
  .kanji-word__contruct-kun {
    // border: 1px solid black;
    margin: 10px 0px;
  }

  .kanji-box {
    border: 3px solid black;
    border-radius: 5px;
  }

  .kanji-box-detail {
    border-bottom: 1px solid black;
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
</style>
