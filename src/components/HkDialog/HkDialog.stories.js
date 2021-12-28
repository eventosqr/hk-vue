import HkDialog from './HkDialog.vue';

export default {};

export const Default = () => ({
  components: { HkDialog },
  template:
    '<hk-dialog title="Test Dialog" close-button><p>Content</p><template #actions><a>ACTION 1</a> <a>ACTION 2</a></template></hk-dialog>',
});
