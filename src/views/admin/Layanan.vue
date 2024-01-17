<script setup>
import Sidebar from "../../components/Sidebar.vue";
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
  <div id="wrapper">
    <Sidebar :class="sidebarClass" />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <Navbar @toggle-sidebar="toggleSidebar" />

        <!-- Begin Page Content -->
        <ChatMe />
        <h1 class="h3 mb-0 text-gray-800 text-center mt-4">Layanan</h1>

        <div class="container">
          <button
            class="btn btn-warning mb-3 mt-5"
            data-toggle="modal"
            data-target="#updateLayanan"
          >
            Update Layanan
          </button>
          <!-- Embed Screenleap iframe -->
          <div class="d-flex justify-content-center">
            <iframe
              src="https://screenleap.com/523071095"
              width="100%"
              height="500px"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
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

  <!-- Modal Update Layanan -->
  <div
    class="modal fade"
    id="updateLayanan"
    tabindex="-1"
    role="dialog"
    aria-labelledby="updateLayananLabel"
    aria-hidden="true"
    ref="updateLayananRef"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addInvoiceModalLabel">Update Layanan</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- Form Update Layanan -->
          <form @submit.prevent="setLink()">
            <div class="form-group">
              <label for="link">Judul</label>
              <input
                type="text"
                class="form-control"
                id="judul"
                v-model="formLink.judul"
              />
            </div>
            <div class="form-group">
              <label for="link">Link</label>
              <input
                type="text"
                class="form-control"
                id="link"
                v-model="formLink.link"
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">Simpan</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal Update Layanan -->
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
      link:null,
       formLink: {
        judul: "",
        link: ""
      },
    };
  },
  methods: {
    setLink() {
      // Membuat FormData untuk mengirim file
      const formData = new FormData();
      formData.append("judul", this.formLink.judul);
      formData.append("link", this.formLink.link);

      axios
        .post("https://backend-webmember.lumirainternational.com/api/auth/set-link", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log(response.data);
          
          this.showAlert();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    showAlert() {
      // Use sweetalert2
      this.$swal("Data Berhasil Dikirm!!").then(() => {
        $("#updateLayanan").modal("hide");
      });
    },
  },
  created() {
    const token = sessionStorage.getItem("token"); // Ambil token dari local storage

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
