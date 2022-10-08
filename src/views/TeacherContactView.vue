<template>
  <section class="section">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Contact Form</h5>

            <!-- Floating Labels Form -->
            <form class="row g-3">
              <div class="col-md-12">
                <InputTextComponent
                  label="Your name"
                  type="contactDetail_name"
                  placeholder="Please enter your name" />
              </div>
              <div class="col-md-6">
                <InputTextComponent
                  label="Your email"
                  type="contactDetail_email"
                  placeholder="Please enter your email" />
              </div>
              <div class="col-md-6">
                <InputTextComponent
                  label="Your Password"
                  type="contactDetail_password"
                  placeholder="Please enter your password"
                  typeInput="password" />
              </div>
              <div class="col-12">
                <InputTextComponent
                  label="Content"
                  type="contactDetail_content"
                  :isTextarea="true" />
              </div>
              <div class="text-center">
                <button
                  type="submit"
                  class="btn btn-primary">
                  Submit
                </button>
                <button
                  type="reset"
                  class="btn btn-secondary">
                  Reset
                </button>
              </div>
            </form>
            <!-- End floating Labels Form -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import InputTextComponent from '@/components/InputTextComponent.vue';
  export default {
    props: ['title', 'breadcrumbList', 'className'],
    components: {
      InputTextComponent,
    },
    computed: {
      contactDetail() {
        return this.$store.state.user.contactDetail;
      },
    },
    created() {
      this.$emit('childinit', this.title, this.breadcrumbList, this.className);
    },
  };
</script>

<style lang="scss" scoped>
.text-center button {
    margin: 0px 10px;
}
</style>
