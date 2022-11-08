<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-green">
      <!-- Card stats -->
      <b-row>
        <b-col xl="3" md="6">
          <btn-card title="新增"
                      type="gradient-blue"
                      icon="ni ni-fat-add"
                      class="mb-4">
          </btn-card>
        </b-col>
        <b-col xl="3" md="6">
          <btn-card title="查詢"
                      type="gradient-green"
                      icon="ni ni-sound-wave"
                      class="mb-4">
          </btn-card>
        </b-col>
        <b-col xl="3" md="6">
          <btn-card title="修改"
                      type="gradient-orange"
                      icon="ni ni-ruler-pencil"
                      class="mb-4">
          </btn-card>

        </b-col>
        <b-col xl="3" md="6">
          <btn-card title="刪除"
                      type="gradient-red"
                      icon="ni ni-fat-remove"
                      class="mb-4">
          </btn-card>
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
import BtnCard from '../../components/Cards/BtnCard.vue';
  // import { Dropdown, DropdownItem, DropdownMenu, Table, TableColumn } from 'element-ui';
  // import projects from '../Tables/projects'
  // import users from '../Tables/users'
  // import LightTable from "../Tables/RegularTables/LightTable";
  // import DarkTable from "../Tables/RegularTables/DarkTable";

  export default {
    components: {
        BtnCard
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
        // projects,
        // users
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
