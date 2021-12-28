<template>
  <validation-provider :name="name || $attrs.label" :rules="rules" class="flex">
    <v-text-field
      v-model="innerValue"
      slot-scope="{ errors: veeErrors, valid }"
      :error-messages="[...veeErrors, ...errors, ...gqlErrors]"
      :success="successState && valid"
      v-bind="$attrs"
      :outlined="outlined"
      :hide-details="hideDetails"
      v-on="$listeners"
    ></v-text-field>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import { VTextField } from 'vuetify/lib';

export default {
  name: 'HkTextField',
  components: { ValidationProvider, VTextField },
  props: {
    name: String,

    rules: {
      type: [Object, String],
      default: '',
    },
    // must be included in props
    value: {
      type: null,
    },

    errors: {
      type: Array,
      default: () => [],
    },

    gqlErrors: {
      type: Array,
      default: () => [],
    },

    /** Indica si debe usar el estado `valid` de `vee-validation` en `v-text-field`. */
    successState: {
      type: Boolean,
      default: false,
    },

    /** Overrides default vuetify's props */
    outlined: {
      type: Boolean,
      default: true,
    },
    hideDetails: {
      type: [Boolean, String],
      default: 'auto',
    },
  },
  data: () => ({
    innerValue: '',
  }),
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit('input', newVal);
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal;
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  },
};
</script>

<style scoped></style>
