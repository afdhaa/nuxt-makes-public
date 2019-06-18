export const state = () => ({
  cloudinary: '',
  showLogin: false,
  option: {
    cloudinary: 'https://res.cloudinary.com/makeslaw-com/image/upload'
  }
})

export const mutations = {
  SHOW_LOGIN(state, payload) {
    state.showLogin = payload
  }
}

export const getters = {
  option(state) {
    return state.option
  },
  cloudinary(state) {
    return state.option.cloudinary
  }
}
