import Vue from 'vue'

export const state = Vue.observable({
  name: 'John Doe',
  photoPath: 'team-4',
  loggedIn: false,
  email: 'fake@email.com', 
  username: 'jd123',
  posts: ['post 1', 'post 2', 'post 3', 'post 4']
})

// export default ()=> state
// export const postsCount = () => state.posts.length
// export const updateName = (newName) => state.name = newName