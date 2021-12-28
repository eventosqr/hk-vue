import HkConfirmDialog from './HkConfirmDialog.vue';

export default {};

export const Default = () => ({
  components: { HkConfirmDialog },
  template: '<hk-confirm-dialog><template #activator="{on}"><a v-on="on">TRIGGER</a></template></hk-confirm-dialog>',
});
