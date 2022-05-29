import { createStore } from "vuex";
import { menuType } from "@/helpers/MenuData";
import {
  MENU_TYPE_BURGER,
  MENU_TYPE_SALAD,
  MENU_TYPE_DRINK,
  SESSION_TRANSACTIONAL_OBJECT,
} from "../helpers/Constants";

export default createStore({
  state: {
    navRenderOption: 1,
    renderingMenuOption: {},
    sessionTransactionObject: "",
    render: false,
  },
  getters: {},
  mutations: {
    UPDATE_RENDER(state, payload){
      state.render = !state.render
    },
    GET_TO_MENU_VIEW_WITH_TYPE(state, payload) {
      // If the payload is 1, we render burger options, if else we render salad options.
      let burgerRender = payload === 1; // should return a boolean
      if (burgerRender) {
        state.renderingMenuOption = menuType.burger;
        state.navRenderOption = 3;
      } else {
        state.renderingMenuOption = menuType.salad;
        state.navRenderOption = 3;
      }
    },
    UPDATE_NAV_RENDER_OPTION(state, payload) {
      state.navRenderOption = payload;
    },
    PUSH_LINE_TO_ARRAY_OF_ORDERS(state, payload) {
      // Orders array will be in the session storage of the browser
      const sessionTransaction = JSON.parse(
        sessionStorage.getItem(SESSION_TRANSACTIONAL_OBJECT)
      );
      const { menuType, menuName, menuExtras, qty } = payload;
      switch (menuType) {
        case 1: //burgers
          const burgerObj = {
            menuName: menuName,
            menuExtras: menuExtras,
            qty: qty,
          };
          sessionTransaction.burgers.push(burgerObj);
          break;
        case 2: //Salads
          const saladsObj = {
            menuName: menuName,
            menuExtras: menuExtras,
            qty: qty,
          };
          sessionTransaction.salads.push(saladsObj);
          break;
      }
      sessionStorage.setItem(
        SESSION_TRANSACTIONAL_OBJECT,
        JSON.stringify(sessionTransaction)
      );
      state.sessionTransactionObject = JSON.stringify(sessionTransaction);
    },
  },
  actions: {
    getToMenuViewWithType(context, payload) {
      context.commit("GET_TO_MENU_VIEW_WITH_TYPE", payload);
    },
    updateNavRenderOptions(context, payload) {
      context.commit("UPDATE_NAV_RENDER_OPTION", payload);
    },
    pushLineToOrderArray(context, payload) {
      context.commit("PUSH_LINE_TO_ARRAY_OF_ORDERS", payload);
    },
    updateRender(context, payload) {
      context.commit("UPDATE_RENDER", payload);
    },
  },
  modules: {},
});
