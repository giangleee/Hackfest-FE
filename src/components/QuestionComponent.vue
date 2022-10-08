<template>
  <div class="card">
    <el-card class="box-class container">
      <div class="list-question">
        <div class="question">
          <span>Question: A sample Question</span>
        </div>
        <div class="answer row justify-content-between">
          <div
            class="col-lg-5"
            v-for="o in 4"
            :key="o">
            <el-radio
              v-model="radio"
              label="1">
              <span>Option A</span>
            </el-radio>
          </div>
        </div>
      </div>
      <el-row>
        <el-button
          type="primary"
          plain
          >Submit</el-button
        >
      </el-row>
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
  .question{
    margin-bottom: 2rem;
  }
</style>
