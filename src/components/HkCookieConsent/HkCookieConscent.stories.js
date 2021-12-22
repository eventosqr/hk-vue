import HkCookieConscent from './HkCookieConsent.vue';

export default {};

export const Default = () => ({
  components: { HkCookieConscent },
  template: '<hk-cookie-conscent></hk-cookie-conscent>',
});

export const WithCustomProps = () => ({
  components: { HkCookieConscent },
  template:
    '<hk-cookie-conscent message="Utilizamos cookies" more-info-text="Más info" ok-text="Entendido"></hk-cookie-conscent>',
});
