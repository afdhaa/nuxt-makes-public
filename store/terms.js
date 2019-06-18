export const state = () => ({
  items: {
    meta: {},
    data: []
  },
  item: {
    attachments: [],
    tags: []
  }
})

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
  SET_ITEM(state, data) {
    state.item = { ...state.item, ...data }
  }
}

export const getters = {
  items(state) {
    return state.items
  },
  item(state) {
    return state.item
  }
}

export const actions = {
  async FETCH_ITEMS({ commit }, params) {
    try {
      const response = await this.$axios.$get('terms', params)
      commit('SET_ITEMS', response)
    } catch (error) {
      throw error
    }
  },
  async FETCH_ITEM({ commit }, { id, params }) {
    try {
      const response = await this.$axios.$get(`terms/${id}`, params)
      commit('SET_ITEM', response.data)
    } catch (error) {
      throw error
    }
  }
}
