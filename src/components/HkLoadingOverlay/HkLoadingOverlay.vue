<template>
  <div :class="{ absolute: absolute, fixed: fixed }" :style="{ 'z-index': zIndex }" class="inset-0 w-full h-full">
    <v-layout column justify-center align-center fill-height class="HkLoadingOverlay__backdrop">
      <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
    </v-layout>
  </div>
</template>

<script>
import { VLayout, VProgressCircular } from 'vuetify/lib';

export default {
  name: 'HkLoadingOverlay',
  components: { VLayout, VProgressCircular },
  props: {
    fixed: {
      type: Boolean,
      default: true,
    },
    absolute: Boolean,
    zIndex: {
      type: [Number, String],
      default: 1000,
    },
  },
};
</script>

<style scoped>
.HkLoadingOverlay__backdrop {
  background-color: rgba(255, 255, 255, 0.6);
}
</style>
