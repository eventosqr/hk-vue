<template>
  <div>
    <v-snackbar
      v-if="innerErrorSnackbar"
      :value="innerErrorSnackbar"
      :timeout="5000"
      color="error"
      bottom
      @input="$store.commit('app/setErrorSnackbar')"
    >
      <v-layout justify-center align-center>
        <v-flex shrink class="p-1">
          <v-icon v-if="errorIcon" color="error lighten-4" class="mx-auto">{{ errorIcon }}</v-icon>
        </v-flex>
        <v-flex grow class="p-1">
          <span v-if="errorMessage" class="w-full text-center">{{ errorMessage }}</span>
        </v-flex>
      </v-layout>
    </v-snackbar>

    <v-snackbar
      v-if="innerSuccessSnackbar"
      :value="innerSuccessSnackbar"
      :timeout="5000"
      color="success"
      bottom
      @input="$store.commit('app/setSuccessSnackbar')"
    >
      <v-layout justify-center align-center>
        <v-flex shrink class="p-1">
          <v-icon v-if="successIcon" color="success lighten-4" class="mx-auto">{{ successIcon }}</v-icon>
        </v-flex>
        <v-flex grow class="p-1">
          <span v-if="successMessage" class="w-full text-center">{{ successMessage }}</span>
        </v-flex>
      </v-layout>
    </v-snackbar>
  </div>
</template>

<script>
import { VSnackbar, VLayout } from 'vuetify/lib';
import { mapState } from 'vuex';

export default {
  name: 'HkSnackbars',
  components: { VSnackbar, VLayout },
  data() {
    return {
      innerErrorSnackbar: null,
      innerSuccessSnackbar: null,
    };
  },
  computed: {
    ...mapState('app', [
      'errorMessage',
      'errorSnackbar',
      'errorIcon',
      'errorTimestamp',
      'successMessage',
      'successIcon',
      'successSnackbar',
      'successTimestamp',
    ]),
  },
  watch: {
    errorSnackbar() {
      this.innerErrorSnackbar = null;
      this.$nextTick(() => {
        this.innerErrorSnackbar = this.errorSnackbar;
      });
    },

    errorTimestamp() {
      if (this.errorSnackbar) {
        this.innerErrorSnackbar = null;
        setTimeout(() => {
          this.innerErrorSnackbar = this.errorSnackbar;
        }, 200);
      }

      if (this.innerSuccessSnackbar) {
        this.innerSuccessSnackbar = null;
      }
    },

    successSnackbar() {
      this.innerSuccessSnackbar = null;
      this.$nextTick(() => {
        this.innerSuccessSnackbar = this.successSnackbar;
      });
    },

    successTimestamp() {
      if (this.successSnackbar) {
        this.innerSuccessSnackbar = null;
        setTimeout(() => {
          this.innerSuccessSnackbar = this.successSnackbar;
        }, 200);
      }

      if (this.innerErrorSnackbar) {
        this.innerErrorSnackbar = null;
      }
    },
  },
};
</script>

<style scoped></style>
