<script setup>
import Sidebar from "../../components/Sidebar-User.vue";
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";
import ChatMe from "../../components/ChatMe.vue";
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
      lokasi: "",
      note: "",
      user: "",
    };
  },
  methods: {
    async fetchUser() {
      try {
        const response = await axios.get("https://10.11.10.243/backend/public/api/auth/user", {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        });
        this.user = response.data.data.length;
      } catch (error) {
        console.error(error);
        const data = JSON.stringify(error.message);
        sessionStorage.setItem("error", data);
      }
    },
  },
  created() {
    const currentTimeUTC = new Date().toUTCString();
    console.log("Waktu Sekarang (UTC):", new Date());

    const token = sessionStorage.getItem("token");
    console.log("test token: ", token);

    if (token) {
      try {
        const tokenPayload = JSON.parse(atob(token.split(".")[1])); // Mendekode bagian payload dari token JWT
        const expTimestamp = tokenPayload.exp;

        const expDate = new Date(expTimestamp * 1000); // Konversi Unix Timestamp ke JavaScript Date

        console.log("Waktu Kedaluwarsa (UTC):", expDate); // Tampilkan waktu kedaluwarsa dalam format UTC

        if (new Date() > expDate) {
          console.log("Keluar");
          sessionStorage.removeItem("token");
          this.$router.push("/");
        } else {
          console.log("Aman");
        }

        this.level = tokenPayload.level; // Ambil level pengguna dari payload
        this.user_id = tokenPayload.id;
        console.log('ini level: ',this.level);
        if (this.level !== "0") {
          this.$router.push("/unauthorized");
        }
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

.customIndex {
  z-index: -1 !important;
}
</style>
