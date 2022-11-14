<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
      <b-row>
        <b-col xl="12" md="12">
          <img class="w-100" src="img/demo/workflow-chart.png">
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
