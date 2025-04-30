<template>
  <section id="pricing" class="pb-8">
    <v-container fluid>
      <h1 class="pt-6 font-weight-light dark-slate-blue-text display-2 text-center">Harga Katalog</h1>
      <v-divider class="my-6"></v-divider>

      <v-row dense>
        <!-- Paket 1 -->
        <v-col cols="12" sm="6" md="4">
          <v-card outlined class="pa-2" max-width="320px" style="margin: 0 auto;">
            <v-img :src="require('@/assets/img/mockup-spl-polos.png')" height="200px" contain></v-img>
            <v-card-actions class="justify-start px-4 pt-4 pb-0">
              <v-btn block outlined color="blue" href="https://sample-polos-diw.vercel.app" target="_blank" rel="noopener">
                Preview
              </v-btn>
            </v-card-actions>

            <v-card-text class="text-left">
              <div class="text--disabled text-uppercase text-h6 font-weight-bold mb-2">Simple Non Photo</div>
              <div class="blue--text mb-1">Dengan fitur lengkap</div>
              <div class="blue--text mb-1">Belum termasuk domain custom (+Rp 30.000,00 untuk domain .my.id)</div>
              <div class="blue--text mb-1">Palet warna yang beragam (client bisa milih tema warna)</div>
              <div class="text-h6 mt-4 blue--text font-weight-bold">Rp 120.000,00</div>
            </v-card-text>

            <v-card-actions class="px-4 pt-0 pb-4">
              <v-btn block color="blue" dark href="https://www.instagram.com/diw.project" target="_blank">
                Order
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- Paket 2 -->
        <v-col cols="12" sm="6" md="4">
          <v-card outlined class="pa-2" max-width="320px" style="margin: 0 auto;">
            <v-img :src="require('@/assets/img/mockup-spl-foto.png')" height="200px" contain></v-img>
            <v-card-actions class="justify-start px-4 pt-4 pb-0">
              <v-btn block outlined color="blue" href="https://sample-foto-diw.vercel.app" target="_blank" rel="noopener">
                Preview
              </v-btn>
            </v-card-actions>

            <v-card-text class="text-left">
              <div class="text--disabled text-uppercase text-h6 font-weight-bold mb-2">Simple with Photo</div>
              <div class="blue--text mb-1">Dengan 7 foto</div>
              <div class="blue--text mb-1">Dengan fitur lengkap</div>
              <div class="blue--text mb-1">Belum termasuk domain custom (+Rp 30.000,00 untuk domain .my.id)</div>
              <div class="blue--text mb-1">Palet warna yang beragam (client bisa milih tema warna)</div>
              <div class="text-h6 mt-4 blue--text font-weight-bold">Rp 130.000,00</div>
            </v-card-text>

            <v-card-actions class="px-4 pt-0 pb-4">
              <v-btn block color="blue" dark href="https://www.instagram.com/diw.project" target="_blank">
                Order
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- Paket 3 -->
        <v-col cols="12" sm="6" md="4">
          <v-card outlined class="pa-2" max-width="320px" style="margin: 0 auto;">
            <v-img :src="require('@/assets/img/reload.png')" height="200px" contain></v-img>
            <v-card-actions class="justify-start px-4 pt-4 pb-0">
              <v-btn block outlined color="blue" href="https://www.instagram.com/diw.project" target="_blank" rel="noopener">
                Preview
              </v-btn>
            </v-card-actions>

            <v-card-text class="text-left">
              <div class="text--disabled text-uppercase text-h6 font-weight-bold mb-2">Request Referensi</div>
              <div class="blue--text mb-1">Menyesuaikan foto dan tata letak</div>
              <div class="blue--text mb-1">Fitur menyesuaikan sesuai request</div>
              <div class="blue--text mb-1">Belum termasuk domain custom (+Rp 30.000,00 untuk domain .my.id)</div>
              <div class="blue--text mb-1">Palet warna/logo boleh disediakan oleh client atau dibuatkan oleh kami</div>
              <div class="text-h6 mt-4 blue--text font-weight-bold">Rp 110.000,00 s/d Rp 150.000,00</div>
            </v-card-text>

            <v-card-actions class="px-4 pt-0 pb-4">
              <v-btn block color="blue" dark href="https://wa.me/6281234567890?text=Order%20Request%20Referensi" target="_blank">
                Order
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
