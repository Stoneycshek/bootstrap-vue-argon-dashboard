<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-info">
      <!-- Card stats -->
      <b-row>
        <b-col xl="12" md="12" class="mb-4">
          <b-card no-body class="py-4 px-4">
            <b-card-header class="border-0">
                <h3 class="mb-0">角色功能權限設定</h3>
                <div>
                  <b-form-select v-model="sSelected" :options="sOptions"></b-form-select>
                </div>
            </b-card-header>
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
          <!-- <light-table/> -->
        </b-col>
      </b-row>
      <div class="mt-5"></div>
      <!-- <dark-table></dark-table> -->
    </b-container>
  </div>
</template>
<script>
  //import BtnCard from '../../components/Cards/BtnCard.vue';
  // import { Dropdown, DropdownItem, DropdownMenu, Table, TableColumn } from 'element-ui';
  // import projects from '../Tables/projects'
  // import users from '../Tables/users'
  // import LightTable from "../Tables/RegularTables/LightTable";
  // import DarkTable from "../Tables/RegularTables/DarkTable";

  export default {
    components: {
      //  BtnCard
      // LightTable,
      // DarkTable,
      // [Dropdown.name]: Dropdown,
      // [DropdownItem.name]: DropdownItem,
      // [DropdownMenu.name]: DropdownMenu,
      // [Table.name]: Table,
      // [TableColumn.name]: TableColumn
    },
    data() {
      return {
        selected: ['01', '02', '03', '05', '06'], // Must be an array reference!
        options: [
          { text: '待辦事項', value: '01', disabled: true },
          { text: 'CSM計算資料準備', value: '02' },
          { text: 'HUB計算資料準備', value: '03' },
          { text: 'CSM轉檔作業', value: '04' },
          { text: '查詢作業', value: '05' },
          { text: '系統管理作業', value: '06', disabled: true },
          { text: '費用分攤', value: '07' }
        ],
        sSelected: ['01'],
        sOptions: [
          { value: '01', text: '部長' },
          { value: '02', text: '主管' },
          { value: '03', text: '經辦'}
        ],
      };
    }
  };
</script>
<style>
/* .el-table.table-dark{
  background-color: #172b4d;
  color: #f8f9fe;
}

.el-table.table-dark th,
.el-table.table-dark tr{
  background-color: #172b4d;
}

.el-table.table-dark td,
.el-table.table-dark th.is-leaf{
  border-bottom: none;
} */
</style>
