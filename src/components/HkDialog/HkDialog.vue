<template>
  <v-card :class="{ 'h-full': fillHeight }">
    <v-card-title v-if="title || closeButton">
      <v-layout align-center>
        <v-flex>
          <span>
            {{ title }}
          </span>
        </v-flex>

        <v-flex shrink>
          <v-btn v-if="closeButton" icon small @click="close"><v-icon color="icon">mdi-close</v-icon></v-btn>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-card-text v-if="hasSlot()">
      <slot :close="close" />
    </v-card-text>
    <v-card-actions v-if="hasSlot('actions')">
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
import { VCard, VCardTitle, VCardActions, VLayout, VBtn } from 'vuetify/lib';

export default {
  name: 'HkDialog',
  components: { VCard, VCardTitle, VCardActions, VLayout, VBtn },
  props: {
    title: String,
    closeButton: Boolean,
    fillHeight: Boolean,
  },
  methods: {
    close() {
      this.$emit('close');
    },

    hasSlot(name = 'default') {
      return !!this.$slots[name] || !!this.$scopedSlots[name];
    },
  },
};
</script>

<style scoped></style>
