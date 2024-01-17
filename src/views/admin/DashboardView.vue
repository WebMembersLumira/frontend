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
    async dataLokasi() {
      try {
        const response = await axios.get(`https://10.11.10.243/backend/public/api/lokasi`);
        this.lokasi = response.data.data.length;
        console.log("test lokasi: ", this.lokasi);
      } catch (error) {
        console.error(error);
        const data = JSON.stringify(error.message);
        sessionStorage.setItem("error", data);
      }
    },
    async fetchNote() {
      try {
        const response = await axios.get(
          `https://10.11.10.243/backend/public/api/auth/notes`,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
        this.note = response.data.data.length;
      } catch (error) {
        console.error(error);
        const data = JSON.stringify(error.message);
        sessionStorage.setItem("error", data);
      }
    },
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
   
  },
};
</script>


<style>
#content-wrapper {
  min-height: 780px !important;
}
</style>
