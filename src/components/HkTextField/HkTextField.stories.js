import '../../plugins/vee-validate';

import HkTextField from './HkTextField.vue';

export default {
  message: 'We use cookies',
  moreInfoText: 'See more',
  okText: 'Ok',
  nuxt: false,
};

export const Default = () => ({
  components: { HkTextField },
  template: '<validation-observer><hk-text-field label="E-mail"></hk-text-field></validation-observer>',
});
