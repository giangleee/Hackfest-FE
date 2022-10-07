<template>
  <div id="app">
    <router-view v-on:childinit="onChildInit" />
    <HeaderComponent />
    <SidebarComponent />
    <HeaderChildComponent
      :title="title"
      :breadcrumbList="breadcrumbList"
      :className="className"
    />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderChildComponent from "@/components/HeaderChildComponent.vue";

export default {
  components: {
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HeaderChildComponent,
  },
  data() {
    return {
      title: "",
      breadcrumbList: [],
      className: "",
    };
  },
  methods: {
    onChildInit(titleName, breadcrumbList, className) {
      this.title = titleName;
      this.breadcrumbList = breadcrumbList;
      this.className = className;
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
