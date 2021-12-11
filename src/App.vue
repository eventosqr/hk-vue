<template>
  <v-app>
    <v-main>
      <v-container class="space-y-6">
        <section>
          <v-layout column>
            <h1 class="headline">Cookie consent</h1>
            <v-layout align-center class="wrap p-2 gap-2">
              <v-chip>
                Cookie consent? <strong class="ml-1 font-bold">{{ cookieConsent }}</strong>
              </v-chip>
              <v-btn @click="$store.commit('app/setCookieConsent', false)">Reset</v-btn>
            </v-layout>
            <hk-cookie-consent
              class="bg-blue-50 text-blue-900"
              @consent="$store.commit('app/setCookieConsent', true)"
            ></hk-cookie-consent>
          </v-layout>
        </section>

        <section>
          <v-layout column>
            <h1 class="headline">Loading</h1>
            <v-layout class="relative p-2 border rounded">
              <hk-loading-overlay absolute></hk-loading-overlay>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volutpat nulla nisl, in tristique tellus
                bibendum eu. Sed pulvinar fermentum erat sit amet lacinia. Aenean eu suscipit lacus. Duis vitae ipsum
                mollis, efficitur arcu id, aliquam turpis. In finibus eget ipsum id blandit.
              </p>
            </v-layout>
          </v-layout>
        </section>

        <section>
          <v-layout column>
            <h1 class="headline">Toasts / Snackbars</h1>
            <v-btn @click="$store.commit('app/successToast', 'test toast')">Trigger success toast</v-btn>
            <v-btn @click="$store.commit('app/errorToast', 'test toast')">Trigger error toast</v-btn>
          </v-layout>
        </section>

        <section ref="wrapper" style="min-height: 30vh; height: 30vh; max-height: 30vh">
          <hk-fixed-table :wrapper="$refs.wrapper" :table="$refs.table" :threshold="0">
            <template slot-scope="{ tableHeight }">
              <v-data-table
                ref="table"
                fixed-header
                :height="tableHeight"
                :headers="[{ text: 'name', value: 'name' }]"
              ></v-data-table>
            </template>
          </hk-fixed-table>
        </section>
      </v-container>
    </v-main>

    <hk-snackbars></hk-snackbars>
  </v-app>
</template>

<script>
import { VApp, VMain, VContainer, VLayout, VChip, VDataTable, VBtn } from 'vuetify/lib';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: { VApp, VMain, VContainer, VLayout, VChip, VDataTable, VBtn },
  async mounted() {
    await this.$store.dispatch('app/init');
  },
  computed: {
    ...mapState('app', ['cookieConsent']),
  },
};
</script>
