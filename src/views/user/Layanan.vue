<script setup>
import Sidebar from "../../components/Sidebar-User.vue";
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";
import ChatMe from "../../components/ChatMe.vue";
import { ref } from "vue";

const sidebarToggled = ref(false);
const sidebarClass = ref("");

const toggleSidebar = () => {
  sidebarToggled.value = !sidebarToggled.value;
  sidebarClass.value = sidebarToggled.value ? "toggle-sidebar" : "";
};
</script>
<template>
  <div id="wrapper" oncontextmenu="return false" onkeydown="return false;" onmousedown="return false;">
    <!-- <Sidebar :class="sidebarClass" /> -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <Navbar @toggle-sidebar="toggleSidebar" />

        <!-- Begin Page Content -->
        <ChatMe />
        <h1 class="h3 mb-0 text-gray-800 text-center mt-4">Layanan</h1>

        <!-- Embed Screenleap iframe -->
            <!-- src="https://www.google.com" -->
        <div class="d-flex justify-content-center">
          <object :data="link" type="text/html" width="100%" height="500px">
              <p>Browser tidak mendukung.</p>
            </object>
        </div>

        <!-- End Embed Screenleap iframe -->
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
import Swal from "sweetalert2";

export default {
  data() {
    return {
      user_id: null,
      role: null,
      ready: null,
      link: "",
      active_token:'',
      myToken:''
    };
  },
  methods: {
    async checkMembership() {
      try {
        const response = await axios.get(
          `https://backend.alicornbot.com/api/auth/check-membership/${this.user_id}`,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
        this.ready = true;
        console.log("data:", response.data["status"]);

        if (response.data["status"] === 401) {
          this.showAlert("Anda belum berlangganan, silahkan berlangganan dulu");
        } else if (
          new Date(response.data.data[0]["tanggal_berakhir"]) < new Date()
        ) {
          this.showAlert(
            "Anda belum berlangganan, silahkan berlangganan terlebih dulu!!"
          );
        }else{
          this.getLink();
        }
      } catch (error) {
        console.error(error);
      }
    },
    async getLink() {
      try {
        const response = await axios.get(
          `https://backend.alicornbot.com/api/auth/get-link`,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );

        console.log("link: ", response.data.data[0]["link"]);
        this.link = response.data.data[0]["link"];
      } catch (error) {
        console.error(error);
      }
    },
    showAlert(message) {
      this.$swal({
        title: "Layanan Tidak Tersedia",
        text: message,
        icon: "error", // Atau gunakan icon lain sesuai kebutuhan
      }).then(() => {
        this.$router.push("user-invoice");
      });
    },
      async getActiveToken(){
       try {
        const response = await axios.get(
          `https://backend.alicornbot.com/api/auth/active-token/${this.user_id}`,
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
        if (level !== "0") {
          this.$router.push("/unauthorized");
        } else if (!header || !signature) {
          this.$router.push("/");
        }
        // success
        this.checkMembership();
        this.getActiveToken();
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

<style scoped>
.preloader {
  position: fixed;
  opacity: 0.9;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 999999;
  background-color: #ffffff;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(/img/loader.gif);
}

/* Responsive typography */
h1 {
  font-size: 40px;
}
@media (max-width: 768px) {
  h1 {
    font-size: 30px;
  }
  .customDetail {
    margin-right: 50px !important;
  }
  .tableCustom {
    font-size: 12px;
  }
  thead {
    font-size: 12px !important;
  }
  tbody {
    font-size: 12px !important;
  }
}
.customDetail {
  margin-right: -50px;
}

/* Flexbox for alignment */
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.col-md-1,
.col-md-10 {
  flex: 1;
}
</style>
