<template>
  <q-layout view="hHh lpR fff">
    <q-header
      reveal
      elevated
      class="bg-primary text-white"
    >
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="left = !left"
        />

        <q-toolbar-title class="abc">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          Title Ahihi
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab
          to="/page1"
          v-go-back=" '/' "
          label="Page One"
        />
        <q-route-tab
          to="/page2"
          label="Page Two"
        />
        <q-route-tab
          to="/page3"
          label="Page Three"
        />
      </q-tabs>
    </q-header>

    <q-drawer
      v-model="left"
      side="left"
      overlay
    >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      elevated
      class="bg-grey-8 text-white"
    >
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default {
  name: 'LandingLayout',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      left: true,
    };
  },
  methods: {
    openURL,
  },
};
</script>

<style lang="scss" scoped>
.abc {
  background: $test;
}
</style>
