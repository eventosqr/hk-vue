import { getField, updateField } from 'vuex-map-fields';

export const getDefaultState = () => ({
  sidebar: false,

  layoutProps: {
    container: true,

    paddingTop: true,

    bgColor: 'white',

    fillContent: false,

    goBack: null,
  },
});

export const state = () => getDefaultState();

export const getters = {
  getField,

  sidebarIsOpen: (state) => {
    return state.sidebar === true;
  },
};

export const actions = {};

export const mutations = {
  updateField,

  setSidebarIsOpen(state, isOpen) {
    state.sidebar = isOpen === true;
  },
  toggleSidebar(state) {
    state.sidebar = !state.sidebar;
  },
  resetLayoutProps(state) {
    state.layoutProps = getDefaultState().layoutProps;
  },
  setLayoutProps(state, layoutProps) {
    state.layoutProps = {
      ...getDefaultState().layoutProps,
      ...layoutProps,
    };
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
