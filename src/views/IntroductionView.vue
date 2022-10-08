<template>
  <section class="section">
    <div class="row align-items-top">
      <!-- Card with an image on top -->
      <div class="card">
        <img
          src="../assets/images/introduction.jpg"
          class="card-img-top"
          alt="..." />
        <div class="card-body">
          <h3 class="card-title">Giới thiệu về cách học huyền lục thư cải tiến</h3>
          <div class="text-left">
            <h4 class="h4 text-left">
              <strong>1. Khái quát về chữ Kanji trong tiếng Nhật</strong>
            </h4>
            <h5><strong>Nguồn gốc chữ Kanji</strong></h5>
            <p>Xuất phát từ Trung Quốc...</p>
            <h5><strong>Cấu tạo chữ Kanji</strong></h5>
            <div class="col-lg-12">
              <div
                class="accordion accordion-flush"
                id="accordionFlushExample">

                <div class="accordion-item" v-for="item in kanjiTypeIntro" :key="item.id">
                  <h2
                    class="accordion-header"
                    :id="`flush-headingOne-no-${item.id}`">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="`#flush-collapseOne-no-${item.id}`"
                      aria-expanded="false"
                      :aria-controls="`flush-collapseOne-no-${item.id}`">
                      {{ item.title }}
                    </button>
                  </h2>
                  <div
                    :id="`flush-collapseOne-no-${item.id}`"
                    class="accordion-collapse collapse"
                    :aria-labelledby="`flush-headingOne-no-${item.id}`"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      {{ item.content }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Card with an image on top -->
    </div>
    <div class="row">
      <div class="card">
        <div class="card-body">
          <h4 class="text-left">
            <strong>2. Thực trạng việc học Kanji hiện nay</strong>
          </h4>
          <!-- Default Table -->
          <table class="table">
            <thead>
              <tr>
                <th
                  scope="col"
                  v-for="itemTh in thTitle"
                  :key="itemTh.id">
                  {{ itemTh.name }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in trContent" :key="item.id">
                <th scope="row">{{ item.id }}</th>
                <td v-for="item2 in item.tdList" :key="item2.id">
                  {{ item2.content }}
                  <li v-for="item3 in item2.liContentArr" :key="item3.id">
                    {{ item3.liContent }}
                  </li>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- End Default Table Example -->
        </div>
      </div>
    </div>

    <div class="row">
      <div class="card">
        <div class="card-body">
          <h4 class="h4 text-left">
            <strong>3. Lục thư cải tiến</strong>
          </h4>
          <p class="text-left">
            Có lẽ sau khi đọc xong phần 2 các bạn đều đã rất hào hứng, và muốn bắt tay vào học ngay
            Kanji bằng Lục thư rồi. Nhưng khoan đã. Các bạn có tự đặt ra câu hỏi là: Nếu phương pháp
            Lục thư hay như vậy, vừa hiểu được bản chất của Kanji, vừa viết được, đọc được, hiểu
            được cặn kẽ nguồn gốc của chữ, lại tiết kiệm thời gian, không có nhược điểm gì như thế,
            vậy tại sao từ trước đến nay người ta không áp dụng phương pháp này, mà phải đợi tới hôm
            nay, khi bộ sách này được lan tỏa tới với nhiều người trong cộng đồng học tiếng Nhật,
            mọi người mới áp dụng và học theo, Phải chăng trước đây người ta chưa biết đến Lục thư
            một cách rộng rãi? Không, Lục thư vốn là bản chất của Kanji, nhiều người đã biết đến Lục
            thư từ rất lâu, thậm chí nếu bạn tìm kiếm từ khóa “Lục thư” trên internet, sẽ cho ra rất
            nhiều kết quả. Vậy chắc chắn phải có lí do nào đó, khiến cho nhiều người, dù biết về Lục
            thư nhưng vẫn không thể áp dụng được nó vào việc học Kanji. Chính vì tồn tại những lí do
            đó nên mới có sự ra đời của cuốn sách này. Và bạn, người đang cầm cuốn sách trên tay và
            đọc đến đây của cuốn sách, rất may mắn vì sẽ trải qua một bước ngoặt thực sự trong việc
            học Kanji của bản thân thông qua những tư duy học tập cực kì đối mới, mà tôi gọi nó là
            LỤC THƯ CẢI TIẾN.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import IntroductionText from '@/helper/IntroductionText';

  export default {
    props: ['title', 'breadcrumbList', 'className'],
    created() {
      this.$emit('childinit', this.title, this.breadcrumbList, this.className);
    },
    computed: {
      thTitle() {
        return IntroductionText.thTitle;
      },
      trContent () {
        return IntroductionText.trContent
      },
      kanjiTypeIntro () {
        return IntroductionText.kanjiType
      }
    },
  };
</script>

<style lang="scss" scoped>
  td {
    text-align: start;
  }
</style>
