<template>
  <div>
    <HeaderComponent />
    <SidebarComponent />
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'
import SidebarComponent from '@/components/SidebarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  }
}
</script>

<style lang="scss" scoped>
.home {
  font-size: 14px;
  img {
    width: 100px;
  }
}
</style>
