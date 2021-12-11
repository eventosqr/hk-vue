export const getDefaultState = () => ({
  globalLoading: 0,

  errorMessage: null,
  errorSnackbar: null,

  cookieConsent: true,

  successMessage: null,
  successSnackbar: null,

  jwt: null,

  locale: 'es_AR',

  uploadEndpoint: null,
});

export const state = () => getDefaultState();

export const getters = {
  showGlobalLoading: (state) => {
    return state.globalLoading > 0;
  },
  showCookieConsent: (state) => {
    return state.cookieConsent !== true;
  },
};

export const actions = {
  init({ commit }) {
    commit('setCookieConsent', localStorage.getItem('cookieConsent') === 'true');
  },
};

export const mutations = {
  presentGlobalLoading(state) {
    state.globalLoading = state.globalLoading + 1;
  },
  dismissGlobalLoading(state) {
    state.globalLoading = state.globalLoading - 1;
  },
  errorToast(state, message) {
    state.errorMessage = message || 'Ocurrió un error. Por favor intenta de nuevo.';
    state.errorSnackbar = true;
  },
  setErrorSnackbar(state, snackbar) {
    state.errorSnackbar = snackbar;
  },
  successToast(state, message) {
    state.successMessage = message;
    state.successSnackbar = true;
  },
  setSuccessSnackbar(state, snackbar) {
    state.successSnackbar = snackbar;
  },
  setCookieConsent(state, consent) {
    localStorage.setItem('cookieConsent', consent === true);
    state.cookieConsent = consent === true;
  },
  setUploadEndpoint(state, endpoint) {
    state.uploadEndpoint = endpoint;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
