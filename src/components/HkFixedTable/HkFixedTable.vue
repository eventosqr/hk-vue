<template>
  <v-layout ref="wrapper" v-resize="onResize" column>
    <slot :table-height="tableHeight" />
  </v-layout>
</template>

<script>
import { VLayout, Resize } from 'vuetify/lib';

export default {
  name: 'HkFixedTable',
  components: { VLayout },
  directives: { Resize },
  props: {
    wrapper: null,

    discount: {
      type: Array,
      default: () => [],
    },

    evaluate: {
      type: Boolean,
      default: true,
    },

    discountFooter: {
      type: Boolean,
      default: true,
    },

    /** Holgura */
    threshold: {
      type: Number,
      default: 12,
    },
  },
  data() {
    return {
      tableHeight: null,
      minTableHeight: 250,
      hasForcedMinHeight: null,
    };
  },
  computed: {
    wrapperRef() {
      if (this.wrapper) {
        return this.wrapper;
      }

      return this.$refs.wrapper;
    },
  },
  watch: {
    hasForcedMinHeight(value, old) {
      if (value !== old) {
        this.$emit('input:forced-min', this.hasForcedMinHeight);
      }
    },
  },
  methods: {
    onResize() {
      this.$nextTick(() => {
        if (!this.evaluate) {
          this.tableHeight = null;
          return;
        }

        const height = this.calculateTableHeight();

        this.hasForcedMinHeight = height <= this.minTableHeight;

        this.tableHeight = height;
      });
    },

    calculateTableHeight() {
      if (!this.wrapperRef) {
        return this.minTableHeight;
      }

      let discount = 0;
      if (this.discount && this.discount.length) {
        discount = this.discount
          .filter((element) => element != null)
          .map((element) => element.clientHeight)
          .reduce((acc, value) => {
            return acc + value;
          }, 0);
      }

      return this.wrapperRef.clientHeight - discount - (this.discountFooter ? 46 : 0) - this.threshold;
    },
  },
};
</script>

<style scoped></style>
