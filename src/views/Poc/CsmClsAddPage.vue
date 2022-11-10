<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-green">
      <!-- Demo btn -->
      <b-row>
        <b-col xl="12" md="12">
          <a href="#" v-if="state.permissions.add" class="btn btn-neutral btn-icon text-blue mr-2 mr-md-4">
            <i class="ni ni-fat-add" style="vertical-align: middle; margin-right: 0;"></i>
            <span class="btn-inner--text">新增</span>
          </a>

          <a href="#" v-if="state.permissions.view" class="btn btn-neutral btn-icon text-green mr-2 mr-md-4">
            <i class="ni ni-sound-wave" style="vertical-align: middle; margin-right: 0;"></i>
            <span class="btn-inner--text">查詢</span>
          </a>

          <a href="#" v-if="state.permissions.edit" class="btn btn-neutral btn-icon text-orange mr-2 mr-md-4">
            <i class="ni ni-ruler-pencil" style="vertical-align: middle; margin-right: 0;"></i>
            <span class="btn-inner--text">修改</span>
          </a>

          <a href="#" v-if="state.permissions.delete" class="btn btn-neutral btn-icon text-red mr-2 mr-md-4">
            <i class="ni ni-fat-remove" style="vertical-align: middle; margin-right: 0;"></i>
            <span class="btn-inner--text">刪除</span>
          </a>
        </b-col>
      </b-row>
    </base-header>
    <b-container fluid class="mt--7">
      <b-row>
        <b-col>
          <demo-table></demo-table>
        </b-col>
      </b-row>
      <div class="mt-5"></div>
    </b-container>
  </div>
</template>
<script>
  import BtnCard from '../../components/Cards/BtnCard.vue';
  import { Dropdown, DropdownItem, DropdownMenu, Table, TableColumn } from 'element-ui';
  import projects from '../Tables/demoDatas'
  import users from '../Tables/users'
  import DemoTable from "../Tables/RegularTables/DemoTable";
  import {state} from '@/store/loggedInUser.js';

  export default {
    components: {
        BtnCard,
        DemoTable,
        [Dropdown.name]: Dropdown,
        [DropdownItem.name]: DropdownItem,
        [DropdownMenu.name]: DropdownMenu,
        [Table.name]: Table,
        [TableColumn.name]: TableColumn
    },
    data() {
      return {
        projects,
        users,
        state
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
