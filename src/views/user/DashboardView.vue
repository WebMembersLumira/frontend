<script setup>
import Sidebar from "../../components/Sidebar-User.vue";
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";
import { ref } from "vue";

const sidebarToggled = ref(false);
const sidebarClass = ref("");

const toggleSidebar = () => {
  sidebarToggled.value = !sidebarToggled.value;
  sidebarClass.value = sidebarToggled.value ? "toggle-sidebar" : "";
};
</script>
<template>
  <div id="wrapper">
    <Sidebar :class="sidebarClass" />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <Navbar @toggle-sidebar="toggleSidebar" />

        <!-- Begin Page Content -->
        <div class="container-fluid mt-4">
          <!-- Page Heading -->
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800 text-center">Dashboard</h1>
          </div>

          <!-- Keunggulan ALICORN BOT -->
          <div class="card mb-4">
            <div class="card-body">
              <h2 class="card-title text-center mb-4">🦄 Keunggulan ALICORN BOT 🦄</h2>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">1. Mudah dipahami</li>
                <li class="list-group-item">2. Pemakaian tidak ribet</li>
                <li class="list-group-item">3. Owner sangat kooperatif dan responsif banget</li>
                <li class="list-group-item">4. Indikator simpel tanpa banyak aturan</li>
                <li class="list-group-item">5. Anti ngelag alasan jaringan</li>
                <li class="list-group-item">6. Winrate indikator di atas 80%</li>
                <li class="list-group-item">7. Respon cepat jika ada pertanyaan</li>
              </ul>
            </div>
          </div>

          <!-- Ketentuan -->
          <div class="card mb-4">
            <div class="card-body">
              <h2 class="card-title text-center mb-4">🦄 KETENTUAN 🦄</h2>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">- Khusus MARKET Crypto IDX di Broker STOCKITY/BINOMO</li>
                <li class="list-group-item">- Buka dari Chrome/Safari/Explorer</li>
                <li class="list-group-item">- No Delay</li>
                <li class="list-group-item">- 24 JAM RUNNING</li>
                <li class="list-group-item">- Tersedia GRUP untuk saling belajar</li>
                <li class="list-group-item">- OP MANUAL</li>
                <li class="list-group-item">- ALICORN BOT memudahkan open posisi buy/sell hanya mengikuti sinyal/simbol</li>
                <li class="list-group-item">- FREE GMEET 1X PERTEMUAN untuk pemahaman</li>
              </ul>
            </div>
          </div>

          <!-- Aturan BOT ALICORN -->
          <div class="card mb-4">
            <div class="card-body">
              <h2 class="card-title text-center mb-4">🦄 ATURAN BOT ALICORN 🦄</h2>
              <!-- Tambahkan informasi aturan BOT ALICORN di sini -->
            </div>
          </div>

          <!-- Note -->
          <div class="card mb-4">
            <div class="card-body">
              <h2 class="card-title text-center mb-4">NOTE</h2>
              <!-- Tambahkan informasi catatan di sini -->
            </div>
          </div>

          <!-- Content Row -->
          <ChatMe />
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <Footer />
      <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
  </div>
</template>

<style>
#content-wrapper {
  min-height: 780px !important;
}

.customIndex {
  z-index: -1 !important;
}

.card {
  border: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.card-title {
  color: #4e73df;
}

.list-group-item {
  background-color: #f8f9fc;
  border: none;
}
</style>
