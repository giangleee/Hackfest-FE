<template>
  <div class="container">

    <!-- End Logo -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,800">
    <div class="containerz" id="containerz">
      <div class="form-container sign-up-container">
        <form>
          <h1>Create Account</h1>
          <div class="social-container">
            <ul class="wrapper">
              <li class="icon facebook" @click="connectFB">
                <span class="tooltip">Facebook</span>
                <span><i class="fab fa-facebook-f"></i></span>
              </li>
              <li class="icon googlez">
                <span class="tooltip">Google</span>
                <span><i class="fab fa-google-plus-g"></i></span>
              </li>
            </ul>
          </div>
          <span>or use your email for registration</span>

          <InputTextComponent
              type="registerDetail_name"
              :isRegister="true"
              typeInput="name"
              placeholder="Please enter your name"
          />
          <InputTextComponent
              type="registerDetail_email"
              :isRegister="true"
              typeInput="email"
              placeholder="Please enter your email address"
          />
          <InputTextComponent
              type="registerDetail_password"
              :isRegister="true"
              typeInput="password"
              placeholder="Please enter your password"
          />
          <button @click="register">Sign Up</button>
        </form>
      </div>
      <div class="form-container sign-in-container">
        <form>
          <h1>Sign in</h1>
          <div class="social-container">
            <ul class="wrapper">
              <li class="icon facebook" @click="connectFB">
                <span class="tooltip">Facebook</span>
                <span><i class="fab fa-facebook-f"></i></span>
              </li>
              <li class="icon googlez">
                <span class="tooltip">Google</span>
                <span><i class="fab fa-google-plus-g"></i></span>
              </li>
            </ul>
          </div>
          <span>or use your account</span>
          <InputTextComponent
              type="loginDetail_email"
              :isLogin="true"
              typeInput="email"
              placeholder="Please enter your email address"
          />
          <InputTextComponent
              type="loginDetail_password"
              :isLogin="true"
              typeInput="password"
              placeholder="Please enter your password"
          />
          <a href="#">Forgot your password?</a>
          <button @click="submit">Sign In</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>

            <button class="ghost" id="signIn">Sign In</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button class="ghost" id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style src="@/assets/styles/loginForm.css">
</style>
<script>
import InputTextComponent from '@/components/InputTextComponent.vue';

export default {
  props: ["title", "breadcrumbList", "className"],
  components: {
    InputTextComponent
  },
  created() {
    this.$emit("childinit", this.title, this.breadcrumbList, this.className);
  },
  computed: {
    loginDetail() {
      return this.$store.state.user.loginDetail;
    },
    registerDetail() {
      return this.$store.state.user.registerDetail;
    }
  },
  mounted() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('containerz');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  },
  methods: {
    submit() {
      const payload = {
        email: this.$store.state.user.loginDetail.email,
        password: this.$store.state.user.loginDetail.password
      }

      this.$axios.post('http://localhost:8888/api/auth/login', {...payload}).then((res) => {
        console.log(res)
        localStorage.setItem("access_token", res.data.access_token);
        this.$router.push({name: "/"});
      }).catch((err) => {
        console.log(err)
      })
    },
    register() {
      const payload = {
        email: this.$store.state.user.registerDetail.email,
        password: this.$store.state.user.registerDetail.password,
        name: this.$store.state.user.registerDetail.name
      }

      this.$axios.post('http://localhost:8888/api/auth/login', {...payload}).then((res) => {
        console.log(res)
        localStorage.setItem("access_token", res.data.access_token);
        this.$router.push({name: "/"});
      }).catch((err) => {
        console.log(err)
      })
    },
    connectFB() {
      window.fbAsyncInit = function () {
        FB.init({
          appId: 1318249918678037,
          autoLogAppEvents: false,
          xfbml: true,
          version: 'v15.0'
        });
      };
      FB.login(res => {
        if (res.authResponse) {
          FB.api('/me', {fields: 'name,email'}, response => {
            let name = response.name;
            let email = response.email;

            console.log(name + " " + email);
            //check xem name email đã có chưa. chưa có thì tạo, bắt nhập pass mới or đ mặc định là email cũng được
          });
        }
      }, {scope: 'email,public_profile'});
    }
  },
};
</script>
