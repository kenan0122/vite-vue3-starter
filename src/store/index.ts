import { createStore } from 'vuex';

const defaultState = {
  count: 0,
  listData: {1:10},
  num: 10
};

// Create a new store instance.
export default createStore({
  state() {
    return defaultState;
  },

  mutations: {
    increment(state: typeof defaultState) {
      state.count += 1;
    },

    setData(state, value) {
      state.listData = value;
    },

    addNum(state) {
      state.num += 10;
    }
  },

  // 读取
  actions: {
    increment(context) {
      context.commit('increment');
    },

    setData(context, value) {
      context.commit('setData', value);
    }
  },

  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count;
    }
  },

  modules: {}
});
