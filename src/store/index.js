import { createStore } from "vuex";
import { menuType } from "@/helpers/MenuData";
import {
  SESSION_TRANSACTIONAL_OBJECT,
} from "../helpers/Constants";
import {sessionObjectToArray, callSessionObject} from '../helpers/SessionService'

export default createStore({
  state: {
    navRenderOption: 0,
    renderingMenuOption: {},
    sessionTransactionObject: "",
    render: false,
    orderObjectList: [],
    orderToRender: []
  },
  getters: {},
  mutations: {
    UPDATE_ORDER_OBJECT(state, payload){
      const { key, replaceObject } = payload;
      state.orderToRender[key] = replaceObject;
    },
    SET_ORDER(state, payload) {
      sessionStorage.setItem('OrderSessionObject', JSON.stringify(payload))
      state.orderObjectList = sessionObjectToArray()
    },
    SET_ORDER_TO_RENDER(state, payload){
      state.orderToRender = JSON.parse(callSessionObject());
    },
    UPDATE_RENDER(state, payload) {
      state.render = !state.render;
    },
    GET_TO_MENU_VIEW_WITH_TYPE(state, payload) {
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
      const sessionTransaction = JSON.parse(
        sessionStorage.getItem(SESSION_TRANSACTIONAL_OBJECT)
      );
      sessionTransaction.push(payload)
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
    setOrderObject(context, payload){
      context.commit("SET_ORDER", payload);
    },
    setOrderObjectToRender(context, payload){
      context.commit("SET_ORDER_TO_RENDER", payload);
    },
    updateOrderObject(context, payload){
      context.commit("UPDATE_ORDER_OBJECT", payload);
    }
  },
  modules: {},
});
