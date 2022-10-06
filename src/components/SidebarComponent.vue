<template>
  <!-- ======= Sidebar ======= -->
  <aside id="sidebar" class="sidebar">
    <ul class="sidebar-nav" id="sidebar-nav">
      <li class="nav-item">
        <a class="nav-link" href="index.html">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </a>
      </li>
      <!-- End Dashboard Nav -->

      <li class="nav-item" v-for="sidebarMenuItem in sidebarMenu" :key="sidebarMenuItem.id">
        <div v-for="sidebarMenuSub in sidebarMenuItem.sub" :key="sidebarMenuSub.id">
          <a
            class="nav-link collapsed"
            :data-bs-target="`#${sidebarMenuSub.dataBsTarget}`"
            data-bs-toggle="collapse"
            href="#" >
            <i class="bi bi-menu-button-wide"></i>
            <span>{{ sidebarMenuSub.name }}</span>
            <i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            :id="`${sidebarMenuSub.dataBsTarget}`"
            class="nav-content collapse"
            data-bs-parent="#sidebar-nav" >
            <li
              v-for="childrenItem in sidebarMenuSub.children"
              :key="childrenItem.id" >
              <a :href="childrenItem.url">
                <i class="bi bi-circle"></i><span>{{ childrenItem.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <!-- End Components Nav -->
    </ul>
  </aside>
  <!-- End Sidebar-->
</template>

<script>
import SidebarMenu from "./menu/sidebar-menu";

export default {
  computed: {
    sidebarMenu() {
      return SidebarMenu;
    },
  },
};
</script>
