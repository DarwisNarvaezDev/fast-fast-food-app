import { createStore } from 'vuex'

export default createStore({
  state: {
    navRenderOption: 1,
  },
  getters: {
  },
  mutations: {
    UPDATE_NAV_RENDER_OPTION(state, payload){
      state.navRenderOption = payload
      console.log(state.navRenderOption);
    }
  },
  actions: {
    updateNavRenderOptions(context, payload) {
      context.commit('UPDATE_NAV_RENDER_OPTION', payload)
    }
  },
  modules: {
  }
})
