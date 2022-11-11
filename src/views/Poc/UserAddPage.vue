<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>
    <b-container fluid class="mt--7">
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

              <!-- <b-row class="mb-3">
                <b-col lg="4">
                  <b-form-group
                    label="使用者ID :"
                    label-for="nested-user-id"
                    label-cols-sm="3"
                    label-cols-lg="5"
                    label-align-sm="left"
                  >
                    <b-form-input id="nested-user-id" placeholder="A1234"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="4">
                  <b-form-group
                    label="姓名 :"
                    label-for="nested-user-name"
                    label-cols-sm="3"
                    label-cols-lg="5"
                    label-align-sm="left"
                  >
                    <b-form-input id="nested-user-name" placeholder="王O陸"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="4">
                  <b-form-group
                    label="部門名稱 :"
                    label-for="nested-department-name"
                    label-cols-sm="3"
                    label-cols-lg="5"
                    label-align-sm="left"
                  >
                    <b-form-input id="nested-department-name" placeholder="會計部"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="4">
                  <b-form-group
                    label="代理狀態 :"
                    label-for="nested-state"
                    label-cols-sm="3"
                    label-cols-lg="5"
                    label-align-sm="right"
                  >
                    <b-form-input id="nested-state" placeholder="Y / N"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="4">
                  <b-form-group
                    label="角色群組 :"
                    label-for="nested-role-name"
                    label-cols-sm="3"
                    label-cols-lg="5"
                    label-align-sm="right"
                  >
                    <b-form-input id="nested-role-name" placeholder="ACT01"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="4">
                  <b-form-group
                    label="單位名稱 :"
                    label-for="nested-group-name"
                    label-cols-sm="3"
                    label-cols-lg="5"
                    label-align-sm="right"
                  >
                    <b-form-input id="nested-group-name" placeholder="會計二科"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <hr class="mt-1 mb-3"> -->

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

              <!-- <b-row>
                <b-col>
                    <label for="datepicker-buttons">開始日期</label>
                    <b-form-datepicker
                        id="datepicker-buttons"
                        today-button
                        reset-button
                        close-button
                        locale="en"
                    ></b-form-datepicker>
                </b-col>
              </b-row> -->

              <b-row class="">
                <b-col class="text-right">
                  <a href="#" class="btn btn-neutral btn-icon text-green mx-2">
                    <i class="ni ni-sound-wave mr-0 align-middle"></i>
                    <span class="btn-inner--text">查詢</span>
                  </a>
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
    </b-container>
  </div>
</template>
<script>
  import DemoTable from "../Tables/RegularTables/DemoTable";

  export default {
    components: {
      DemoTable,
    },
    data() {
      return {
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
    }
  };
</script>
<style>
  .collapsed .when-open,
  .not-collapsed .when-closed {
    display: none;
  }
</style>
