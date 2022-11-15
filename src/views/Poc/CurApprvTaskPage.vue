<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>
    <b-container fluid class="mt--9 mb-5">
      <b-row>
        <b-col>
          <b-card no-body>
            <b-tabs pills card>
              <b-tab title="待辦事項" active>
                <b-row>
                  <b-col>
                    <b-card no-body class="px-3 py-2">
                      <a href="#collapse-user" v-b-toggle class="nav-link text-gray d-flex justify-content-between" @click.prevent>
                        <span class="btn-inner--text">篩選</span>
                        <i class="ni ni-bold-down mr-0 when-closed"></i>
                        <i class="ni ni-bold-up mx-0 when-open"></i>
                      </a>

                      <b-collapse id="collapse-user" class="mx-2">

                        <hr class="mt-1 mb-3">

                        <b-row class="">
                          <b-col lg="4" md="6">
                            <b-form-input class="mb-3" placeholder="使用者ID"></b-form-input>
                          </b-col>
                          <b-col lg="4" md="6">
                            <b-form-input class="mb-3" placeholder="姓名"></b-form-input>
                          </b-col>
                          <b-col lg="4" md="6">
                            <b-form-input class="mb-3" placeholder="部門名稱"></b-form-input>
                          </b-col>
                          <b-col lg="4" md="6">
                            <b-form-select class="mb-3" v-model="selectedA" :options="optionsA"></b-form-select>                  
                          </b-col>
                          <b-col lg="4" md="6">
                            <b-form-input class="mb-3" placeholder="角色群組"></b-form-input>
                          </b-col>
                          <b-col lg="4" md="6">
                            <b-form-input class="mb-3" placeholder="單位名稱" list="my-list-id"></b-form-input>
                            <datalist id="my-list-id">
                              <option>資訊一科</option>
                              <option>會計二科</option>
                              <option>業務三科</option>
                              <option>會計五科</option>
                            </datalist>
                          </b-col>
                        </b-row>

                        <b-row>
                          <b-col>
                              <b-form-group label="部門名稱 :" v-slot="{ ariaDescribedby }">
                                <b-form-checkbox-group
                                  id="checkbox-group-1"
                                  v-model="selectedB"
                                  :options="optionsB"
                                  :aria-describedby="ariaDescribedby"
                                  name="flavour-1"
                                ></b-form-checkbox-group>
                              </b-form-group>
                          </b-col>
                        </b-row>

                        <b-row class="">
                          <b-col class="text-right">
                            <base-button type="success" class="my-4">查詢</base-button>
                          </b-col>
                        </b-row>

                      </b-collapse>
                    </b-card>

                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col>
                    <b-card no-body>
                      <demo-table></demo-table>
                    </b-card>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="待辦事項查詢">
                <b-alert variant="info" show><i class="ni ni-bell-55 mr-2 align-middle"></i>15碼合約群組轉檔工作僅包含資料備份，不傳送決算結果至會計子帳</b-alert>
                <b-alert variant="danger" show>作業訊息 : 前次決算轉檔異動(PROC_20210225-1430)尚未結案，無法使用本功能</b-alert>
              </b-tab>
              <b-tab title="代理人設定">
                <div class="table-container">
                  <b-row>
                    <b-col class="text-right">
                      <b-button variant="primary" @click="handleAdd()">新增</b-button>
                    </b-col>
                  </b-row>
                  
                  <b-editable-table
                    disableDefaultEdit
                    :rowUpdate="rowUpdate"
                    :editMode="'row'"
                    bordered
                    class="editable-table"
                    v-model="items"
                    :fields="fields"
                  >
                    <template #cell(isActive)="data">
                      <span v-if="data.value">Yes</span>
                      <span v-else>No</span>
                    </template>
                    <template #cell(edit)="data">
                      <div v-if="data.isEdit">
                        <BIconX class="edit-icon" @click="handleSubmit(data, false)"></BIconX>
                        <BIconCheck
                          class="edit-icon"
                          @click="handleSubmit(data, true)"
                        ></BIconCheck>
                      </div>
                      <BIconPencil
                        v-else
                        class="edit-icon"
                        @click="handleEdit(data, true)"
                      ></BIconPencil>
                    </template>
                    <template #cell(delete)="data">
                      <BIconTrash
                        class="remove-icon"
                        @click="handleDelete(data)"
                      ></BIconTrash>
                    </template>
                  </b-editable-table>
                </div>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import DemoTable from "../Tables/RegularTables/DemoTable";
  import BEditableTable from 'bootstrap-vue-editable-table';
  import {
    BIconTrash,
    BIconPencil,
    BIconX,
    BIconCheck,
    BButton,
  } from "bootstrap-vue";

  export default {
    components: {
      DemoTable,
      BEditableTable,
      BIconX,
      BIconTrash,
      BIconPencil,
      BIconCheck,
      BButton,
    },
    data() {
      return {
        fields: [
          {
            key: "name",
            label: "名字",
            type: "text",
            editable: true,
            placeholder: "請輸入名字",
            class: "name-col",
          },
          {
            key: "department",
            label: "群組",
            type: "select",
            editable: true,
            class: "department-col",
            options: [
              { value: 1, text: "群組 A" },
              { value: 2, text: "群組 B" },
              { value: 3, text: "群組 C" },
              { value: 4, text: "群組 D" },
            ],
          },
          {
            key: "age",
            label: "年齡",
            type:"number",
            editable: true,
            placeholder: "請輸入年齡",
            class: "age-col",
          },
          {
            key: "dateOfBirth",
            label: "加入日期",
            type: "text",
            editable: true,
            class: "date-col",
          },
          {
            key: "isActive",
            label: "在職",
            type: "checkbox",
            editable: true,
            class: "is-active-col",
          },
          { key: "edit", label: "" },          
          { key: "delete", label: "" },
        ],
        items: [
          {
            id: 1,
            age: 40,
            name: "Dickerson",
            department: 1,
            dateOfBirth: "1984-05-20",
            isActive: true,
          },
          {
            id: 2,
            age: 21,
            name: "Larsen",
            department: 2,
            dateOfBirth: "1972-07-25",
            isActive: false,
          },
          {
            id: 3,
            age: 89,
            name: "Geneva",
            department: 3,
            dateOfBirth: "1981-02-02",
            isActive: false,
          },
          {
            id: 4,
            age: 38,
            name: "Jami",
            department: 4,
            dateOfBirth: "1964-10-19",
            isActive: true,
          },
        ],
        rowUpdate: {},
        selectedA: null,
        optionsA: [
          { value: null, text: '請選擇代理狀態' },
          { value: 'y', text: 'Y' },
          { value: 'n', text: 'N' },
        ],
        selectedB: [],
        optionsB: [
          { text: '資訊部', value: 'a' },
          { text: '會計部', value: 'b' },
          { text: '業務部', value: 'c' },
          { text: '核數部', value: 'd' }
        ]
      };
    },
    methods: {
      handleAdd() {
        this.rowUpdate = {
          edit: true,
          id: Date.now(),
          action: "add",
          data: {
            id: Date.now(),
            age: null,
            name: "",
            department: 1,
            dateOfBirth: null,
            isActive: false,
          },
        };
      },
      handleSubmit(data, update) {
        this.rowUpdate = {
          edit: false,
          id: data.id,
          action: update ? "update" : "cancel",
        };
      },
      handleEdit(data) {
        this.rowUpdate = { edit: true, id: data.id };
      },
      handleDelete(data) {
        this.rowUpdate = { id: data.id, action: "delete" };
      }
    },
  };
</script>
<style>
.collapsed .when-open,
.not-collapsed .when-closed {
  display: none;
}

.table-container {
  margin: 10px;
}

table.editable-table {
  margin-top: 10px;
  width: 100% !important;
}

table.editable-table th {
  background-color: #f6f9fc;
  color: #8898aa;
}

table.editable-table td {
  vertical-align: middle;
}

.editable-table .data-cell {
  padding: 8px;
  vertical-align: middle;
}

.editable-table .custom-checkbox {
  width: 50px;
}

.remove-icon {
  color: red;
  cursor: pointer;
  font-size: 20px;
}

.edit-icon {
  color: rgb(4, 83, 158);
  cursor: pointer;
  font-size: 20px;
}

.name-col {
  min-width: 120px;
}

.department-col {
  min-width: 150px;
}

.age-col {
  min-width: 100px;
}

.date-col {
  min-width: 200px;
}

.is-active-col {
  min-width: 100px;
}
</style>
