import { createStore } from 'vuex'
import { menuType } from '@/helpers/MenuData';

export default createStore({
  state: {
    navRenderOption: 1,
    renderingMenuOption: {},
    order: [],
  },
  getters: {
  },
  mutations: {
    GET_TO_MENU_VIEW_WITH_TYPE(state, payload){
      // If the payload is 1, we render burger options, if else we render salad options.
      let burgerRender = payload === 1; // should return a boolean
      if( burgerRender ){
        state.renderingMenuOption = menuType.burger
        state.navRenderOption = 2
        console.log("Me llaman del dispatcher");
      }else {
        state.renderingMenuOption = menuType.salad
        state.navRenderOption = 2
      }
    },
    UPDATE_NAV_RENDER_OPTION(state, payload){
      state.navRenderOption = payload
    },
    PUSH_LINE_TO_ARRAY_OF_ORDERS(state, payload){
      state.order.push(payload);
      console.log(state.order.length);
      state.order.forEach( order => {
        console.log(order);
      })
    }
  },
  actions: {
    getToMenuViewWithType(context, payload){
      context.commit('GET_TO_MENU_VIEW_WITH_TYPE', payload)
    },
    updateNavRenderOptions(context, payload) {
      context.commit('UPDATE_NAV_RENDER_OPTION', payload)
    },
    pushLineToOrderArray(context, payload){
      context.commit('PUSH_LINE_TO_ARRAY_OF_ORDERS', payload)
    }
  },
  modules: {
  }
})
