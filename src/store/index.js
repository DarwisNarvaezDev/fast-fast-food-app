import { createStore } from "vuex";
import { menuType } from "@/helpers/MenuData";
import {
  SESSION_TRANSACTIONAL_OBJECT,
} from "../helpers/Constants";

export default createStore({
  state: {
    navRenderOption: 0,
    renderingMenuOption: {},
    sessionTransactionObject: "",
    render: false,
  },
  getters: {},
  mutations: {
    UPDATE_RENDER(state, payload) {
      state.render = !state.render;
    },
    GET_TO_MENU_VIEW_WITH_TYPE(state, payload) {
      console.log(`El render option que me llega: ${payload}`);
      switch (payload) {
        case 1:
          state.renderingMenuOption = menuType.burger;
          state.navRenderOption = 3;
          break;
        case 2:
          state.renderingMenuOption = menuType.salad;
          state.navRenderOption = 3;
          break;
        case 3:
          state.renderingMenuOption = menuType.drink;
          state.navRenderOption = 4;
          break;
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
        case 3: //Drinks
          const drinksObj = {
            menuName: menuName,
            menuExtras: menuExtras,
            qty: qty,
          };
          sessionTransaction.drinks.push(drinksObj);
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
