<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-primary">
    </base-header>
    <b-container fluid class="mt--9 mb-5">
      <b-row>
        <b-col>
          <b-card no-body>
            <b-tabs pills card>
              <b-tab title="待辦事項" active>
                <demo-table></demo-table>
              </b-tab>
              <b-tab title="待辦事項查詢">
                <b-alert variant="info" show><i class="ni ni-bell-55 mr-2 align-middle"></i>15碼合約群組轉檔工作僅包含資料備份，不傳送決算結果至會計子帳</b-alert>
                <b-alert variant="danger" show>作業訊息 : 前次決算轉檔異動(PROC_20210225-1430)尚未結案，無法使用本功能</b-alert>
                <b-card-text>待辦事項查詢</b-card-text>
              </b-tab>
              <b-tab title="代理人設定">
                <b-card-text>代理人設定</b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import { Dropdown, DropdownItem, DropdownMenu, Table, TableColumn } from 'element-ui';
  import projects from '../Tables/demoDatas'
  import users from '../Tables/users'
  import LightTable from "../Tables/RegularTables/LightTable";
  import DemoTable from "../Tables/RegularTables/DemoTable";
  import {state} from '@/store/loggedInUser.js';

  export default {
    components: {
      LightTable,
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
.el-table.table-dark{
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
}
</style>
