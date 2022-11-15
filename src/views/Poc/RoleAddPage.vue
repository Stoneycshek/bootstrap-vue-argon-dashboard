<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
      <b-row>
        <b-col xl="12" md="12" class="mb-4">
          <b-card no-body class="py-4 px-4">

            <b-row class="mb-2">
              <b-col>
                <h3 class="mb-0 mr-2 d-inline">角色功能權限設定</h3>
                <b-form-select v-model="sSelected" :options="sOptions" class="w-25 d-inline"></b-form-select>
              </b-col>
            </b-row>

            <hr class="mt-1 mb-3">

            <b-form-group
              label=""
              v-slot="{ ariaDescribedby }"
            >
              <b-form-checkbox-group
                v-model="selected"
                :options="options"
                :aria-describedby="ariaDescribedby"
                switches
                stacked
              ></b-form-checkbox-group>
            </b-form-group>
          </b-card>
          
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <a href="#" class="btn btn-neutral btn-icon text-blue mr-2 mr-md-4">
            <i class="ni ni-check-bold" style="vertical-align: middle; margin-right: 0;"></i>
            <span class="btn-inner--text">確認</span>
          </a>
        </b-col>
      </b-row>
    </base-header>
    <b-container fluid class="mt--7">
      <b-row>
        <b-col>
        </b-col>
      </b-row>
      <div class="mt-5"></div>
    </b-container>
  </div>
</template>
<script>
  export default {
    components: {
    },
    data() {
      return {
        selected: ['01', '02', '03', '05', '06'], // Must be an array reference!
        options: [
          { text: '待辦事項', value: '01', disabled: true },
          { text: 'CSM計算資料準備', value: '02' },
          { text: '--新增', value: '021' },
          { text: '--刪除', value: '022' },
          { text: 'HUB計算資料準備', value: '03' },
          { text: 'CSM轉檔作業', value: '04' },
          { text: '查詢作業', value: '05' },
          { text: '系統管理作業', value: '06', disabled: true },
          { text: '費用分攤', value: '07' }
        ],
        sSelected: '01',
        sOptions: [
          { value: '01', text: '群組A' },
          { value: '02', text: '群組B' },
          { value: '03', text: '群組C' }
        ],
      };
    }
  };
</script>
<style>
</style>
