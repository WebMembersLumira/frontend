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
          <div
            class="d-sm-flex align-items-center justify-content-between mb-4"
          >
            <h1 class="h3 mb-0 text-gray-800 text-center">Dashboard</h1>
          </div>

          <!-- Keunggulan ALICORN BOT -->
          <div class="card mb-4">
            <div class="card-body">
              <h2 class="card-title text-center mb-4">
                🦄 Keunggulan ALICORN BOT 🦄
              </h2>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">1. Mudah dipahami</li>
                <li class="list-group-item">2. Pemakaian tidak ribet</li>
                <li class="list-group-item">
                  3. Owner sangat kooperatif dan responsif banget
                </li>
                <li class="list-group-item">
                  4. Indikator simpel tanpa banyak aturan
                </li>
                <li class="list-group-item">5. Anti ngelag alasan jaringan</li>
                <li class="list-group-item">
                  6. Winrate indikator di atas 90%
                </li>
                <li class="list-group-item">
                  7. Respon cepat jika ada pertanyaan
                </li>
              </ul>
            </div>
          </div>

          <!-- Ketentuan -->
          <div class="card mb-4">
            <div class="card-body">
              <h2 class="card-title text-center mb-4">🦄 KETENTUAN 🦄</h2>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  - Khusus MARKET Crypto IDX di Broker STOCKITY/BINOMO
                </li>
                <li class="list-group-item">
                  - Buka dari Chrome/Safari/Explorer
                </li>
                <li class="list-group-item">- No Delay</li>
                <li class="list-group-item">- 24 JAM RUNNING</li>
                <li class="list-group-item">
                  - Tersedia GRUP untuk saling belajar
                </li>
                <li class="list-group-item">- OP MANUAL</li>
                <li class="list-group-item">
                  - ALICORN BOT memudahkan open posisi buy/sell hanya mengikuti
                  sinyal/simbol
                </li>
                <li class="list-group-item">
                  - FREE GMEET 1X PERTEMUAN untuk pemahaman
                </li>
              </ul>
            </div>
          </div>

          <!-- Aturan BOT ALICORN -->
          <div class="card mb-4">
            <div class="card-body">
              <h2 class="card-title text-center mb-4">
                🦄 ATURAN BOT ALICORN 🦄
              </h2>
              <ol>
                <li>
                  PANAH PUTIH BESAR (PPB) OP NEXT CANDLE ( HATI HATI JIKA MUNCUL
                  DI AREA BIRU) 🌲Berdasarakan suport & resisten ⭐⭐⭐⭐⭐
                </li>
                <li>
                  LILIN HIJAU OP 🔼 BUY LILIN KUNING OP 🔽 SELL OP DI NEXT
                  CANDLE. 🌲Sinyal penerusan ⭐⭐⭐⭐
                </li>
                <li>
                  3. PANAH IJO .( REVERSAL) OP REVERSAL IKUTI ARAH PANAHNYA.
                  DALAM CANDLE BERJALAN 🌲Berdasarkan oversold overbough ⭐⭐⭐
                </li>
                <li>
                  PANAH BIRU PANAH MERAH ⭐⭐⭐ OP DI CANDLE BERJALAN Jika
                  keluar panah di bawah 15 detik pertama. Akurasi lebih tinggi.
                  HATI HATI JIKA BERADA DI AREA BIRU 🌲berdasarkan kekuatan
                  candle
                </li>
                <li>
                  PANAH PUTIH. PANAH BREAK OUT SNR PENDEK 🌲berdasarkan
                  penembusan snr
                </li>
                <li>
                  PANAH ORANGE INFORMASI PERGANTIAN ARAH TREN // PERSILANGAN MA
                  (JIKA BATAL PERSILANGAN TANDA PANAH AKAN HILANG) 🌲berdasarkan
                  persilangan MA
                </li>

                <li>
                  👉GARIS WARNA HIJAU DAN TITIK TITIK HIJAU DI TENGAH MENANDAKAN
                  TREN NAIK 👉GARIS WARNA MERAH DAN TITIK TITIK MERAH DI TENGAH
                  MENANDAKAN TREN TURUN INI ADALAH GARIS TRENDLINE SNR
                </li>
                <li>TITIK KUNING SAMA TITIK MERAH ADALAH SNR PENDEK</li>
                <li>TITIK GOLD SAMA TITIK PUTIH PANJANG ADALAH SNR GLOBAL</li>
                <li>BINTANG KUNING FRAKTAL 5</li>
                <li>BINTANG UNGU ADALAH FRAKTAL 7</li>
                <li>KOTAK BIRU ADALAH AREA SIDE WAYS ATAU KONSOLIDASI</li>
              </ol>
            </div>
          </div>

          <!-- Note -->
          <div class="card mb-4">
            <div class="card-body">
              <h2 class="card-title text-center mb-4">NOTE</h2>
              <ul>
                <li>ACUAN ENTRY NO 1 SAMPAI NO 5.</li>
                <li>SELALU PERHATIKAN SNR</li>
              </ul>
              <ol>
                <li>SEMUA SINYAL MAKSIMAL K2</li>
                <li>SEMUA SINYAL HATI HATI JIKA ADA SNR DAN BORD LINE</li>
                <li>JAGA EMOSI</li>
                <li>JAGA NOMINAL OP SESUAIKAN SALDO</li>
              </ol>
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
<script>
import axios from "axios";

export default {
  data() {
    return {
      role: null,

      user_id:'',
      active_token:'',
      myToken:''
    };
  },
   methods: {
    async getActiveToken(){
       try {
        const response = await axios.get(
          `https://backend-webmember.lumirainternational.com/api/auth/active-token/${this.user_id}`,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
        this.active_token = response.data;
        if (this.myToken !== this.active_token) {
          this.showAlertAkun();
        }
      } catch (error) {
        console.error(error);
      }
    },
        showAlertAkun() {
          this.$swal({
            title: "Request Failed",
        text: "Akun anda sedang dibuka di perangkat lain!",
        icon: "error",
      }).then(() => {
        sessionStorage.removeItem("token");
        this.$router.push("/");
      });
    },
  },
  created() {
    const token = sessionStorage.getItem("token"); // Ambil token dari local storage
    this.myToken = token;

    if (token) {
      try {
        const [headerBase64, signatureBase64] = token.split(".");
        const header = JSON.parse(atob(headerBase64));
        const signature = atob(signatureBase64);

        const tokenPayload = JSON.parse(atob(token.split(".")[1])); // Mendekode bagian payload dari token JWT
        const expTimestamp = tokenPayload.exp;

        const expDate = new Date(expTimestamp * 1000); // Konversi Unix Timestamp ke JavaScript Date

        console.log("Waktu Kedaluwarsa (UTC):", expDate.toUTCString()); // Tampilkan waktu kedaluwarsa dalam format UTC

        if (new Date() > expDate) {
          console.log("Keluar");
          sessionStorage.removeItem("token");
          this.$router.push("/");
        } else {
          console.log("Aman");
        }
        const level = tokenPayload.level; // Ambil level pengguna dari payload
        this.user_id = tokenPayload.id;
        if (level !== "0") {
          this.$router.push("/unauthorized");
        } else if (!header || !signature) {
          this.$router.push("/");
        }
        // success
        this.getActiveToken();
        // akhir
      } catch (error) {
        this.$router.push("/"); // Tindakan jika terjadi kesalahan dekode
      }
    } else {
      this.$router.push("/"); // Tindakan jika token tidak ada (pengguna belum terautentikasi)
    }
  },
};
</script>


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
