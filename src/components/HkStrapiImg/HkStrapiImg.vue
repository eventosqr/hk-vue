<template>
  <v-img v-bind="$attrs" :src="prefix + src"></v-img>
</template>

<script>
import { VImg } from 'vuetify/lib';
import { mapState } from 'vuex';

export default {
  name: 'HkStrapiImg',
  components: { VImg },
  props: {
    src: {
      type: String,
      default: null,
    },
    baseUrl: {
      type: String,
      default: null,
    },
  },
  computed: {
    ...mapState('app', ['uploadEndpoint']),
    prefix() {
      return this.baseUrl ? this.baseUrl : this.uploadEndpoint;
    },
  },
};
</script>

<style scoped></style>
