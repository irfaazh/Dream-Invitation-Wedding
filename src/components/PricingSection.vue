<template>
  <section id="pricing" class="pb-8">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-card style="width: 100%">
            <h1 class="pt-6 font-weight-light dark-slate-blue-text display-2 text-center">Harga Katalog</h1>
            <v-divider class="my-6"></v-divider>
            <v-row>
              <v-col class="col-12 col-sm-6 col-md-4">
                <div class="flex-center">
                  <v-card-text>
                    <div class="flex-center">
                    </div>
                    <div class="text--disabled text-uppercase text-h5 my-2 text-center">Simple Non Cover</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase blue--text text-left">Dengan 7 foto</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase blue--text text-left">Dengan fitur lengkap</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase blue--text text-left">Belum termasuk domain custom (+Rp 30.000,00 untuk domain .my.id)</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase blue--text text-left">Palet warna yang beragam (client bisa milih tema warna)</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase text-h4 mt-6 blue--text text-center">Rp 120.000,00</div>
                    <div class="text-center">
                      <v-btn
                          v-bind="size"
                          rounded
                          outlined
                          color="blue"
                          class="mt-6"
                      >
                        Lihat Sample
                      </v-btn>
                    </div>
                  </v-card-text>

                  <v-divider style="margin-right: -23px" vertical v-if="this.$vuetify.breakpoint.smAndUp"></v-divider>
                </div>
                <v-divider class="mx-4" v-if="!this.$vuetify.breakpoint.smAndUp"></v-divider>
              </v-col>
              <v-col class="col-12 col-sm-6 col-md-4">
                <div class="flex-center">
                  <v-card-text>
                    <div class="flex-center">
                    </div>
                    <div class="text--disabled text-uppercase text-h5 my-2 text-center">Simple Cover</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase blue--text text-left">Dengan 7 foto</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase blue--text text-left">Dengan fitur lengkap</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase blue--text text-left">Belum termasuk domain custom (+Rp 30.000,00 untuk domain .my.id)</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase blue--text text-left">Palet warna yang beragam (client bisa milih tema warna)</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase text-h4 mt-6 blue--text text-center">Rp 130.000,00</div>
                    <div class="text-center">
                      <v-btn
                          v-bind="size"
                          rounded
                          outlined
                          color="blue"
                          class="mt-6"
                      >
                        Lihat Sample
                      </v-btn>
                    </div>
                  </v-card-text>
                  <v-divider style="margin-right: -23px" vertical v-if="this.$vuetify.breakpoint.mdAndUp"></v-divider>
                </div>
                <v-divider class="mx-4" v-if="!this.$vuetify.breakpoint.smAndUp"></v-divider>
              </v-col>
              <v-col class="col-12 col-md-4">
                <v-divider v-if="this.$vuetify.breakpoint.smOnly" class="mx-4"></v-divider>

                <div class="flex-center">
                  <v-card-text>
                    <div class="flex-center">
                    </div>
                    <div class="text--disabled text-uppercase text-h5 my-2 text-center">Request Referensi</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase blue--text text-left">Menyesuaikan foto dan tata letak</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase blue--text text-left">Fitur menyesuaikan sesuai request</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase blue--text text-left">Belum termasuk domain custom (+Rp 30.000,00 untuk domain .my.id)</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase blue--text text-left">Palet warna/logo boleh di sediakan oleh client atau dibuatkan oleh kami</div>
                    <v-divider class="my-2"/>
                    <div class="text-uppercase text-h4 mt-6 blue--text text-center">Rp 110.000,00 s/d Rp 150.000,00</div>
                    <div class="text-center">
                      <v-btn
                          v-bind="size"
                          rounded
                          outlined
                          color="blue"
                          class="mt-6"
                      >
                        Konsultasi Sekarang
                      </v-btn>
                    </div>
                  </v-card-text>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-rounded text-light">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
      >
        <path
            d="M0,64L80,90.7C160,117,320,171,480,181.3C640,192,800,160,960,138.7C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
</template>