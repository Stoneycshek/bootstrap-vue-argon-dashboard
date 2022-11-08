<template>
  <card class="card-stats" :show-footer-line="true" style="cursor: pointer;">
    <b-row>

      <b-col style="align-self: center;">
        <slot>
          <h2 class="card-title text-uppercase text-muted mb-0" v-if="title">{{title}}</h2>
          <span class="h2 font-weight-bold mb-0" v-if="subTitle">{{subTitle}}</span>
        </slot>
      </b-col>

      <b-col cols="auto" v-if="$slots.icon || icon">
        <slot name="icon">
          <div class="icon icon-shape text-white rounded-circle shadow"
               :class="[`bg-${type}`, iconClasses]">
            <i :class="icon"></i>
          </div>
        </slot>
      </b-col>
    </b-row>
<!-- 
    <p class="mt-3 mb-0 text-sm">
      <slot name="footer">

      </slot>
    </p> -->
  </card>
</template>
<script>
  import Card from './Card.vue';

  export default {
    name: 'btn-card',
    components: {
      Card
    },
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      icon: String,
      title: String,
      subTitle: String,
      iconClasses: [String, Array]
    }
  };
</script>
<style></style>
