<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success pb-8 pt-5">
      <b-container>
        <div class="header-body text-center mb-5">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <img class="w-100" src="img/brand/skl_logo.jpg">
              <!-- <h1 class="text-white">SKL</h1> -->
              <!-- <p class="text-lead text-white">Use these awesome forms to login or create new account in your project for
                free.</p> -->
            </b-col>
          </b-row>
        </div>
      </b-container>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <b-row class="justify-content-center">
        <b-col xl="5" lg="6" md="8" >
          <b-card no-body class="bg-secondary border-0 mb-0">
            <!-- <b-card-header class="bg-transparent pb-5"  >
              <div class="text-muted text-center mt-2 mb-3"><small>Sign in with</small></div>
              <div class="btn-wrapper text-center">
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"><img src="img/icons/common/github.svg"></span>
                  <span class="btn-inner--text">Github</span>
                </a>
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"><img src="img/icons/common/google.svg"></span>
                  <span class="btn-inner--text">Google</span>
                </a>
              </div>
            </b-card-header> -->
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <strong>IFRS 17 計算引擎系統 ICE</strong>
              </div>
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input alternative
                              class="mb-3"
                              name="使用者帳號"
                              :rules="{required: true, min: 3}"
                              prepend-icon="ni ni-single-02"
                              placeholder="使用者帳號"
                              v-model="model.email">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              name="密碼"
                              :rules="{required: true, min: 3}"
                              prepend-icon="ni ni-lock-circle-open"
                              type="password"
                              placeholder="密碼"
                              v-model="model.password">
                  </base-input>

                  <!-- <b-form-checkbox v-model="model.rememberMe">Remember me</b-form-checkbox> -->
                  <div class="text-center">
                    <base-button type="primary" native-type="submit" class="my-4">Sign in</base-button>
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
          <!-- <b-row class="mt-3">
            <b-col cols="6">
              <router-link to="/dashboard" class="text-light"><small>Forgot password?</small></router-link>
            </b-col>
            <b-col cols="6" class="text-right">
              <router-link to="/register" class="text-light"><small>Create new account</small></router-link>
            </b-col>
          </b-row> -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        model: {
          email: '',
          password: '',
          rememberMe: false
        }
      };
    },
    methods: {
      onSubmit() {
        // this will be called only after form is valid. You can do api call here to login
        console.log('Sign in btn clicked')
      }
    }
  };
</script>
