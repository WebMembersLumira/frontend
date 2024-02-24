<script setup>
import Sidebar from "../../components/Sidebar.vue";
import Navbar from "../../components/Navbar-Admin.vue";
import Footer from "../../components/Footer.vue";
import LineChart from "../../components/LineChart.vue";
import PolarChart from "../../components/PolarChart.vue";
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
          <!-- Content Row -->
          <div class="row">
            <!-- Pending -->
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div
                        class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                      >
                        Invoice Pending
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        {{pending}}
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Active -->
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div
                        class="text-xs font-weight-bold text-success text-uppercase mb-1"
                      >
                        Invoice Active
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        {{active}}
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Expired -->
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div
                        class="text-xs font-weight-bold text-warning text-uppercase mb-1"
                      >
                        Invoice Expired
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        {{expired}}
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Reject -->
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-danger shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div
                        class="text-xs font-weight-bold text-danger text-uppercase mb-1"
                      >
                        Invoice Reject
                      </div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        {{reject}}
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
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
import {
  Chart,
  LineController,
  LinearScale,
  PointElement,
  CategoryScale,
} from "chart.js";
Chart.register(LineController, LinearScale, PointElement, CategoryScale);

export default {
  data() {
    return {
      role: null,
      pending:'',
      active:'',
      expired:'',
      reject:'',
      perpanjang:'',

      user_id:'',
      active_token:'',
      myToken:''
    };
  },
   methods: {
    async getDataInvoice() {
      try {
        const response = await axios.get(
          `https://backend-webmember.lumirainternational.com/api/auth/statistik-invoice`,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
        this.pending = response.data.jumlahPending;
        this.active = response.data.jumlahActive;
        this.expired = response.data.jumlahExpired;
        this.reject = response.data.jumlahReject;
        this.perpanjang = response.data.jumlahPerpanjangan;
      } catch (error) {
        console.error(error);
      }
    },
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
        console.log("ini idddd:", this.user_id);
        if (level !== "1") {
          this.$router.push("/unauthorized");
        } else if (!header || !signature) {
          this.$router.push("/");
        }
        // success
        this.getActiveToken();
        this.getDataInvoice();
        // akhir
      } catch (error) {
        console.error("Error decoding token:", error);
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
</style>
