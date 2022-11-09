<template>
    <b-card no-body>
        <b-card-header class="border-0">
            <h3 class="mb-0">共 9 筆</h3>
        </b-card-header>

        <el-table class="table-responsive table"
                  header-row-class-name="thead-light"
                  :data="demoDatas">
            <!-- <el-table-column label="序號"
                             min-width="310px"
                             prop="name">
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                            <img alt="Image placeholder" :src="row.img">
                        </a>
                        <b-media-body>
                            <span class="font-weight-600 name mb-0 text-sm">{{row.title}}</span>
                        </b-media-body>
                    </b-media>
                </template>
            </el-table-column> -->
            <el-table-column label="序號"
                             prop="title"
                             min-width="40px">
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

            <!-- <el-table-column label="一階覆核姓名" min-width="190px">
                <div class="avatar-group">
                    <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip"
                       data-original-title="Ryan Tompson">
                        <img alt="Image placeholder" src="img/theme/team-1.jpg">
                    </a>
                    <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip"
                       data-original-title="Romina Hadid">
                        <img alt="Image placeholder" src="img/theme/team-2.jpg">
                    </a>
                    <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip"
                       data-original-title="Alexander Smith">
                        <img alt="Image placeholder" src="img/theme/team-3.jpg">
                    </a>
                    <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip"
                       data-original-title="Jessica Doe">
                        <img alt="Image placeholder" src="img/theme/team-4.jpg">
                    </a>
                </div>
            </el-table-column> -->

            <!-- <el-table-column label="覆核結果"
                             prop="completion"
                             min-width="240px">
                <template v-slot="{row}">
                    <div class="d-flex align-items-center">
                        <span class="completion mr-2">{{row.completion}}%</span>
                        <div>
                            <base-progress :type="row.statusType" :value="row.completion"/>
                        </div>
                    </div>
                </template>
            </el-table-column> -->
        </el-table>

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
