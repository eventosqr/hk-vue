import hkAppState from './modules/hkAppState';
import hkLayoutState from './modules/hkLayoutState';

export default ({ store }) => {
  store.registerModule('app', hkAppState);
  store.registerModule('layout', hkLayoutState);
};
