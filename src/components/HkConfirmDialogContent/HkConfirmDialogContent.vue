<template>
  <hk-dialog :title="title" close-button @close="cancel">
    <p v-if="message">{{ message }}</p>

    <template #actions>
      <v-layout wrap justify-end align-center>
        <v-btn ref="okButton" color="error" text :tabindex="2" @click="handle">{{ okLabel }}</v-btn>
        <v-btn ref="cancelButton" text :tabindex="1" @click="cancel"> {{ cancelLabel }} </v-btn>
      </v-layout>
    </template>
  </hk-dialog>
</template>

<script>
import { VLayout, VBtn } from 'vuetify/lib';

export default {
  name: 'HkConfirmDialogContent',
  components: { VLayout, VBtn },
  props: {
    okLabel: String,
    cancelLabel: String,
    title: String,
    message: String,
  },
  mounted() {
    requestAnimationFrame(() => {
      this.$refs.cancelButton.$el.focus();
    });
  },
  methods: {
    cancel() {
      this.$emit('cancel');
    },
    handle() {
      this.$emit('handle');
    },
  },
};
</script>

<style scoped></style>
