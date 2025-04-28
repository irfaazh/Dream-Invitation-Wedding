<template>
  <v-footer dark padless>
    <v-card flat tile class="secondary white--text text-center">
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 white--text"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        How long are you going to wait before you demand the best for yourself?
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Dream Invitation Your Wedding</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: "mdi-instagram",
        link: "https://instagram.com/diw.project",
      },
      {
        text: "mdi-whatsapp",
        link: "https://wa.me/6281212651576", // Ganti dengan nomor WhatsApp Anda
      },
      {
        text: "mdi-email",
        link: "mailto:dreaminvitationwedding@gmail.com", // Ganti dengan email Anda
      },
    ],
  }),
};
</script>

<style scoped>
.v-card {
  width: 100%;
}
</style>