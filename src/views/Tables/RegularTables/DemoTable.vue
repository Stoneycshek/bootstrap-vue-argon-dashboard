<template>
    <b-card no-body>
        <b-card-header class="border-0">
            <b-row>
                <b-col class="text-left align-items-center">
                    <h3 class="mb-0">共 {{demoDatas.length}} 筆</h3>                    
                </b-col>
                <b-col class="text-right">
                    <base-button v-b-modal.modal-1 type="primary" class="">新增</base-button>
                </b-col>
            </b-row>
        </b-card-header>

        <el-table class="table-responsive table"
                  header-row-class-name="thead-light"
                  :data="demoDatas">
            <el-table-column label="序號"
                             prop="title"
                             min-width="60px">
                             <template slot-scope="scope">
                                <span>{{scope.$index + 1}}</span>
                            </template>
            </el-table-column>

            <el-table-column label="事件編號"
                             prop="budget"
                             min-width="200px">
            </el-table-column>

            <el-table-column label="事件狀態"
                             min-width="160px"
                             prop="status">
                <template v-slot="{row}">
                    <badge class="badge-dot mr-4" type="">
                        <i :class="`bg-${row.statusType}`"></i>
                        <span class="status" :class="`text-${row.statusType}`">{{row.status}}</span>
                    </badge>
                </template>
            </el-table-column>

            <el-table-column label="一階覆核姓名"
                             prop="apprvName"
                             min-width="120px">
            </el-table-column>

            <el-table-column label="覆核結果"
                             prop="apprvResult"
                             min-width="100px">
            </el-table-column>

            <el-table-column label="功能"
                             min-width="80px">
                                <b-row>
                                    <a href="#" class="nav-link text-orange d-flex justify-content-between" v-b-modal.modal-1 v-b-popover.hover.top="'修改'">
                                        <i class="ni ni-ruler-pencil mr-0"></i>
                                    </a>
                                    <a href="#" class="nav-link text-red d-flex justify-content-between" v-b-modal.modal-2 v-b-popover.hover.top="'刪除'">
                                        <i class="ni ni-fat-remove mr-0"></i>
                                    </a>
                                </b-row>
            </el-table-column>

        </el-table>

        <b-modal id="modal-1" size="xl" centered title="使用者資料" ok-title="確認" cancel-title="取消">
            <b-row class="mb-3">
                <b-col lg="6">
                  <b-form-group
                    label="*使用者ID :"
                    label-for="nested-user-id"
                    label-cols-sm="3"
                    label-cols-lg="4"
                    label-align-sm="right"
                  >
                    <b-form-input id="nested-user-id" placeholder="A1234"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="6">
                  <b-form-group
                    label="姓名 :"
                    label-for="nested-user-name"
                    label-cols-sm="3"
                    label-cols-lg="4"
                    label-align-sm="right"
                  >
                    <b-form-input id="nested-user-name" placeholder="王O陸"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="6">
                  <b-form-group
                    label="部門名稱 :"
                    label-for="nested-department-name"
                    label-cols-sm="3"
                    label-cols-lg="4"
                    label-align-sm="right"
                  >
                    <b-form-input id="nested-department-name" placeholder="會計部"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="6">
                  <b-form-group
                    label="代理狀態 :"
                    label-for="nested-state"
                    label-cols-sm="3"
                    label-cols-lg="4"
                    label-align-sm="right"
                  >
                    <b-form-input id="nested-state" placeholder="Y / N"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="6">
                  <b-form-group
                    label="角色群組 :"
                    label-for="nested-role-name"
                    label-cols-sm="3"
                    label-cols-lg="4"
                    label-align-sm="right"
                  >
                    <b-form-input id="nested-role-name" placeholder="ACT01"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="6">
                  <b-form-group
                    label="單位名稱 :"
                    label-for="nested-group-name"
                    label-cols-sm="3"
                    label-cols-lg="4"
                    label-align-sm="right"
                  >
                    <b-form-input id="nested-group-name" placeholder="會計二科"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
        </b-modal>

        <b-modal id="modal-2" centered title="刪除記錄" ok-title="確認" cancel-title="取消">
            <b-row class="mb-3">
                <b-col>
                  <h2>確認要刪除此記錄嗎?</h2>
                </b-col>
              </b-row>
        </b-modal>

        <b-card-footer class="py-4 d-flex justify-content-end">
            <base-pagination v-model="currentPage" :per-page="10" :total="50"></base-pagination>
        </b-card-footer>
    </b-card>
</template>
<script>
  import projects from '../demoDatas'
  import { Table, TableColumn} from 'element-ui'
  import {state} from '@/store/loggedInUser.js';

  export default {
    name: 'demo-table',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    data() {
      return {
        projects,
        currentPage: 1
      };
    },
    computed: {
        demoDatas() {
            if (state.permissions.add)
                return projects;
            else if (state.permissions.edit)
                return projects.filter( data => data.statusType != 'success');
            else
                return projects.filter( data => data.statusType == 'success');
        },
    }
  }
</script>
