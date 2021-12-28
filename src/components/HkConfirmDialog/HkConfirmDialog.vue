<template>
  <v-dialog v-model="innerValue" max-width="400px" @click:outside="cancel">
    <template v-slot:activator="{ on }">
      <slot :on="on" name="activator"></slot>
    </template>
    <hk-confirm-dialog-content
      v-if="innerValue"
      :ok-label="okLabel"
      :cancel-label="cancelLabel"
      :title="title"
      :message="message"
      @cancel="cancel"
      @handle="handle"
    ></hk-confirm-dialog-content>
  </v-dialog>
</template>

<script>
import HkConfirmDialogContent from './HkConfirmDialogContent';
import { VDialog } from 'vuetify/lib';

export default {
  name: 'HkConfirmDialog',
  components: { VDialog, HkConfirmDialogContent },
  props: {
    okLabel: {
      type: String,
      default: 'Eliminar',
    },
    cancelLabel: {
      type: String,
      default: 'Volver',
    },
    title: {
      type: String,
      default: '¿Estás seguro?',
    },
    message: String,
    value: [Object, Boolean],
  },
  data() {
    return {
      innerValue: this.value,
    };
  },
  watch: {
    value() {
      this.innerValue = this.value;
    },
    innerValue() {
      this.$emit('input', this.innerValue);
    },
  },
  methods: {
    cancel() {
      this.innerValue = !this.innerValue;
      this.$emit('cancel');
    },
    handle() {
      this.innerValue = null;
      this.$emit('handle');
    },
  },
};
</script>

<style scoped></style>
