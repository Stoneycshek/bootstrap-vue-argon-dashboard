<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar>
      <template slot="links">
        <sidebar-item
          :link="{
            name: '待辦事項',
            path: '/cur-apprv-task',
            icon: 'ni ni-bullet-list-67 text-primary',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'CSM計算資料準備',
            path: '/csm-cls-add',
            icon: 'ni ni-single-copy-04 text-green',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'HUB計算資料準備',
            path: '/hub-cls-add',
            icon: 'ni ni-single-copy-04 text-orange',
          }"
        >
        </sidebar-item>

        <sidebar-item
          v-if="state.permissions.edit"
          :link="{
            name: 'CSM轉檔作業',
            path: '/dashboard',
            icon: 'ni ni-chart-bar-32 text-yellow',
          }"
        >
        </sidebar-item>

        <sidebar-item
          v-if="state.permissions.edit"
          :link="{
            name: '查詢作業',
            path: '/icons',
            icon: 'ni ni-sound-wave text-red',
          }"
        >
        </sidebar-item>

        <!-- <sidebar-item
          v-if="state.permissions.add"
          :link="{
            name: '系統管理作業',
            path: '/role-add',
            icon: 'ni ni-settings-gear-65 text-info',
          }"
        >
        </sidebar-item> -->

        <a class="nav-link" v-b-toggle href="#collapse-0" @click.prevent>系統管理作業</a>
        <b-collapse id="collapse-0" class="mt-2">
            <a class="nav-link" v-b-toggle href="#collapse-1" @click.prevent>授權管理</a>
            <b-collapse id="collapse-1" class="mt-2">
              <sidebar-item
                v-if="state.permissions.add"
                :link="{
                  name: '使用者管理',
                  path: '/user-add',
                  icon: 'ni ni-settings-gear-65 text-info',
                }"
              >
              </sidebar-item>
              <sidebar-item
                v-if="state.permissions.add"
                :link="{
                  name: '角色群組管理',
                  path: '/role-add',
                  icon: 'ni ni-settings-gear-65 text-info',
                }"
              >
              </sidebar-item>
              <sidebar-item
                v-if="state.permissions.add"
                :link="{
                  name: '功能權限設定',
                  path: '/role-add',
                  icon: 'ni ni-settings-gear-65 text-info',
                }"
              >
              </sidebar-item>
            </b-collapse>
            <a class="nav-link" v-b-toggle href="#collapse-2" @click.prevent>系統管理</a>
            <b-collapse id="collapse-2" class="mt-2">
              <sidebar-item
                v-if="state.permissions.add"
                :link="{
                  name: '使用者活動記錄查詢',
                  path: '/role-add',
                  icon: 'ni ni-settings-gear-65 text-info',
                }"
              >
              </sidebar-item>
            </b-collapse>
        </b-collapse>

        
        <!-- 
        <sidebar-item
                  v-if="state.permissions.edit"
                  :link="{
                    name: '費用分攤',
                    path: '/tables',
                    icon: 'ni ni-money-coins text-pink'
                  }">
        </sidebar-item> -->
      </template>

      <template slot="links-after">
        <sidebar-item
          :link="{
            name: '登出',
            path: '/login',
            icon: 'ni ni-button-power text-gray',
          }"
        >
        </sidebar-item>
      </template>

      <!-- <template slot="links-after">
        <hr class="my-3">
        <h6 class="navbar-heading p-0 text-muted">Documentation</h6>

        <b-nav class="navbar-nav mb-md-3">
          <b-nav-item
               href="https://www.creative-tim.com/learning-lab/bootstrap-vue/quick-start/argon-dashboard"
               >
              <i class="ni ni-spaceship"></i>
              <b-nav-text class="p-0">Getting started</b-nav-text>
          </b-nav-item>
          <b-nav-item href="https://www.creative-tim.com/learning-lab/bootstrap-vue/colors/argon-dashboard">
              <i class="ni ni-palette"></i>
              <b-nav-text class="p-0">Foundation</b-nav-text>
          </b-nav-item>
          <b-nav-item href="https://www.creative-tim.com/learning-lab/bootstrap-vue/avatar/argon-dashboard">
              <i class="ni ni-ui-04"></i>
              <b-nav-text class="p-0">Components</b-nav-text>
          </b-nav-item>
        </b-nav>
      </template> -->
    </side-bar>
    <div class="main-content">
      <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
      </div>
      <!-- <content-footer v-if="!$route.meta.hideFooter"></content-footer> -->
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import { FadeTransition } from "vue2-transitions";
import { state } from "@/store/loggedInUser.js";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    DashboardContent,
    FadeTransition,
  },
  data() {
    return {
      state,
    };
  },
  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        initScrollbar("sidenav");
      }
    },
    checkLoginState() {
      if (!state.loggedIn) {
        this.$router.push("/login");
      }
    },
  },
  mounted() {
    this.checkLoginState();
    this.initScrollbar();
  },
};
</script>
<style lang="scss">
</style>
