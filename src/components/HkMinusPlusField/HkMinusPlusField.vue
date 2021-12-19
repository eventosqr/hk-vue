<template>
  <validation-provider :name="name || $attrs.label" :rules="innerRules" class="flex">
    <v-text-field
      v-model="innerValue"
      slot-scope="{ errors: veeErrors, valid }"
      :error-messages="[...veeErrors, ...errors, ...gqlErrors]"
      :success="successState && valid"
      v-bind="$attrs"
      :outlined="outlined"
      :hide-details="hideDetails"
      type="number"
      :min="min"
      :max="max"
      style="-webkit-appearance: none"
      class="hk-minus-plus-field"
    >
      <template #prepend-inner>
        <v-btn
          icon
          small
          :disabled="min != null && innerValue <= min"
          class="mt-0"
          @click="
            remove();
            $event.stopPropagation();
          "
        >
          <v-icon>mdi-minus</v-icon>
        </v-btn>
      </template>

      <template #append>
        <v-btn
          icon
          small
          :disabled="max != null && innerValue >= max"
          class="mt-0"
          @click="
            add();
            $event.stopPropagation();
          "
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
    </v-text-field>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import { VBtn, VIcon, VTextField } from 'vuetify/lib';

export default {
  name: 'HkMinusPlusField',
  components: { ValidationProvider, VTextField, VBtn, VIcon },
  props: {
    name: String,

    min: {
      type: Number,
      default: null,
    },

    max: {
      type: Number,
      default: null,
    },

    rules: {
      type: [Object, String],
      default: '',
    },

    value: {
      type: Number,
      default: 0,
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
  data() {
    return {
      innerValue: this.value,
    };
  },
  computed: {
    innerRules() {
      if (this.rules) {
        return this.rules;
      }

      let rules = '';
      if (this.min != null) {
        rules += `|min_value:${this.min}`;
      }
      if (this.max != null) {
        rules += `|max_value:${this.max}`;
      }
      if (rules[0] === '|') {
        rules = rules.substr(1);
      }
      return rules;
    },

    isOverMax() {
      return this.max != null && this.innerValue > this.max;
    },

    isBelowMin() {
      return this.min != null && this.innerValue < this.min;
    },
  },
  watch: {
    innerValue(newVal) {
      this.$emit('input', Number(newVal));
    },
    value(newVal) {
      this.innerValue = Number(newVal);
    },
  },
  methods: {
    remove(delta = 1) {
      if (this.isOverMax) {
        this.innerValue = this.max;
        return;
      }
      if (this.min != null && this.innerValue - delta < this.min) {
        return;
      }
      this.innerValue -= delta;
    },
    add(delta = 1) {
      if (this.isBelowMin) {
        this.innerValue = this.min;
        return;
      }
      if (this.max != null && this.innerValue + delta > this.max) {
        return;
      }
      this.innerValue += delta;
    },
  },
};
</script>

<style lang="scss">
.hk-minus-plus-field.v-text-field {
  input {
    &::-webkit-inner-spin-button,
    &::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    }
  }
}
</style>
