import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      image: "",
      header: "",
      text: "",
      points: "",
      brand: "",
      isMilestone: false,
      isRare: false,
      trophy: "",
      isIcon: false,
      currentIcon: []
    };
  },
  actions: {
    updateHeader(context, payload) {
      context.commit("updateHeader", payload);
    },
    updateText(context, payload) {
      context.commit("updateText", payload);
    },
    updatePoints(context, payload) {
      context.commit("updatePoints", payload);
    },
    updateImage(context, payload) {
        context.commit("updateImage", payload)
    },
    updateBrand(context, payload) {
      context.commit("updateBrand", payload)
    },
    updateMilestone(context, payload) {
      context.commit("updateMilestone", payload)
    },
    updateRarity(context, payload) {
      context.commit("updateRarity", payload)
    },
    updateTrophy(context, payload) {
      context.commit("updateTrophy", payload)
    },
    updateIcons(context, payload) {
      context.commit("updateIcons", payload)
    },
    updateCurrentIcon(context, payload) {
      context.commit("updateCurrentIcon", payload)
    }
  },
  mutations: {
    updateHeader(state, payload) {
      state.header = payload;
    },
    updateText(state, payload) {
      state.text = payload;
    },
    updatePoints(state, payload) {
      state.points = payload;
    },
    updateImage(state, payload) {
        state.image = payload
    },
    updateBrand(state, payload) {
      state.brand = payload
    },
    updateMilestone(state, payload) {
      state.isMilestone = payload
    },
    updateRarity(state, payload) {
      state.isRare = payload
    },
    updateTrophy(state, payload) {
      state.trophy = payload
    },
    updateIcons(state, payload) {
      state.isIcon = payload
    },
    updateCurrentIcon(state, payload) {
      state.currentIcon = payload
    },
  },
  getters: {
    getImage(state) {
      return state.image;
    },
    getHeader(state) {
      return state.header;
    },
    getText(state) {
      return state.text;
    },
    getPoints(state) {
      return state.points;
    },
    getBrand(state) {
      return state.brand;
    },
    getMilestone(state) {
      return state.isMilestone;
    },
    getRarity(state) {
      return state.isRare;
    },
    getTrophy(state) {
      return state.trophy
    },
    getIsIcon(state) {
      return state.isIcon
    },
    getCurrentIcon(state) {
      return state.currentIcon
    }
  },
});
export default store;
