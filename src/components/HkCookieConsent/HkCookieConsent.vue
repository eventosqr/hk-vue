<template>
  <v-layout align-center class="HkCookieConsent__wrapper p-2 space-x-2 text-sm rounded shadow">
    <v-flex :shrink="$vuetify.breakpoint.smAndUp">
      <v-layout wrap justify-center class="space-x-1">
        <span>{{ message }}</span>
        <nuxt-link v-if="nuxt" to="/privacy" :alt="moreInfoText" class="text-blue-800 hover:underline">{{
          moreInfoText
        }}</nuxt-link>
        <a v-else href="/privacy" :alt="moreInfoText" class="text-blue-800 hover:underline">{{ moreInfoText }}</a>
      </v-layout>
    </v-flex>
    <v-flex grow>
      <v-layout justify-end>
        <v-btn color="white" text small class="HkCookieConsent__button" @click="$emit('consent')">{{ okText }}</v-btn>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { VLayout, VFlex, VBtn } from 'vuetify/lib';

export default {
  name: 'HkCookieConsent',
  components: { VLayout, VFlex, VBtn },
  props: {
    message: {
      type: String,
      default: 'We use cookies.',
    },
    moreInfoText: {
      type: String,
      default: 'See more',
    },
    okText: {
      type: String,
      default: 'Accept',
    },
    nuxt: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.HkCookieConsent__wrapper {
  z-index: 9999;
}
.HkCookieConsent__button {
  @apply bg-blue-800;
}
</style>
