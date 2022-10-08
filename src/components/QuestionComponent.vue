<template>
  <div class="col-lg-6">
    <el-card class="box-class">
      <div class="container">
        <div class="card question">
          <span>Question: A sample Question</span>
        </div>
        <div class="answer row justify-content-between">
          <!-- <div class=""> -->
          <div
            class="col-lg-5 card"
            v-for="o in 4"
            :key="o">
            <el-radio
              v-model="radio"
              label="1">
              <span>Option A</span>
            </el-radio>
          </div>
          <!-- </div> -->
        </div>
      </div>
    </el-card>
  </div>
</template>

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
</style>
