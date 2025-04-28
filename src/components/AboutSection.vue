<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <h1 class="font-weight-light display-2 dark-slate-blue-text">Kelebihan Kami</h1>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  
                  <v-img
                    src="@/assets/img/icon1.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify-bold "><br> Menyesuaikan Budget. 
                  <br>Walau menyesuaikan dengan budget client tapi, hasil akan tetap sesuai dengan request client.</p>
                </v-col>

                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon2.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify-bold ">Fast Respon, Progress & Revisian. 
                  <br>Kami menjual kualitas dan kepuasan para client dengan prinsip Fast RPR (Respon, Progress, Revisian).</p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon3.svg"
                    max-width="60px"
                    class="mr-4"
                  />

                  <p class="text-justify-bold ">Progress yang Terbuka. 
                  <br>Selama pengerjaan client akan kami berikan link publik guna memantau pengerjaan dan jika ada revisian.</p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                src="@/assets/img/ill1.png"
                class="d-block ml-auto mr-auto"
                max-width="400px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>
