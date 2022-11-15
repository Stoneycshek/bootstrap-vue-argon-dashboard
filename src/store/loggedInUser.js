import Vue from 'vue'

export const state = Vue.observable({
  name: 'John Doe',
  photoPath: 'team-4',
  loggedIn: false,
  permissions: {
    add: true,
    view: true,
    edit: true,
    delete: true,
  }
})
