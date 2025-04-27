<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      color="red"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/img/logo-small.png" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">Calango</v-list-item-title>
            <v-list-item-subtitle>WEB</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      class="px-15"
      :class="{ expand: flat }"
    >
      
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4 dark-slate-blue-text hover-white"
        v-if="isXs"
      />
      <div v-else>
        <v-btn text @click="$vuetify.goTo('#hero')" class="nav-btn">
          <span class="mr-2 dark-slate-blue-text hover-white">Home</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#features')" class="nav-btn">
          <span class="mr-2 dark-slate-blue-text hover-white">Features</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#pricing')" class="nav-btn">
          <span class="mr-2 dark-slate-blue-text hover-white">Pricing</span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}

.dark-slate-blue-text {
  color: #483D8B !important;
  transition: color 0.3s ease;
}

.hover-white:hover {
  color: white !important;
}

.nav-btn::before {
  background-color: rgba(72, 61, 139, 0.1) !important;
}

.nav-btn:hover::before {
  opacity: 1 !important;
  background-color: rgba(72, 61, 139, 0.7) !important;
}

.contact-btn {
  border-color: #483D8B !important;
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

.contact-btn:hover {
  border-color: white !important;
  background-color: rgba(72, 61, 139, 0.7) !important;
}
</style>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Home", "#hero"],
      ["mdi-information-outline", "Features", "#features"],
      ["mdi-download-box-outline", "Download", "#download"],
      ["mdi-currency-usd", "Pricing", "#pricing"],
      ["mdi-email-outline", "Contact us", "#contact"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>