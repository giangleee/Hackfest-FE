<template>
  <div class="card">
    <el-card class="box-class container">
      <div class="list-question">
        <div class="question">
          <span>Question: A sample Question</span>
        </div>
        <div class="answer row justify-content-between">
          <div
            class="col-lg-5 answer-list"
            v-for="o in 4"
            :key="o">
            <el-radio
              v-model="radio"
              :label="o"
              @click="changeColor()"
              >
              <span class="answer-content">Option A</span>
            </el-radio>
          </div>
        </div>
      </div>
      <el-row>
        <el-button
          type="primary"
          plain
          style="color: black;"
          >Submit</el-button
        >
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '1',
    }
  },
  methods:{
    changeColor(){
      const answer = document.getElementsByClassName('answer-content');
      if (radio === '1') {
        console.log(123);
  
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
  .question{
    margin-bottom: 1rem;
  }
  .answer-list{
    background: #4d5fea;
    border-radius: 10px;
    color: white;
    margin-top: 2rem;
  }
  .answer-content{
    color: white;
  }
</style>
