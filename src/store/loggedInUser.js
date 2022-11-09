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

// export default ()=> state
// export const postsCount = () => state.posts.length
// export const updateName = (newName) => state.name = newName