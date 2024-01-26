<script setup>
import Sidebar from "../../components/Sidebar.vue";
import Navbar from "../../components/Navbar-Admin.vue";
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
          <div class="row">
            <div class="col-sm-6">
              <button
                class="btn btn-warning mb-3 mt-5"
                data-toggle="modal"
                data-target="#updateLayanan"
              >
                Atur Layanan
              </button>
              <button
                class="btn btn-primary mb-3 mt-5 ms-3"
                data-toggle="modal"
                data-target="#updateRekening"
              >
                Atur Rekening
              </button>
              <button
                class="btn btn-primary mb-3 mt-5 ms-3"
                data-toggle="modal"
                data-target="#aturLangganan"
                @click="getLangganan()"
              >
                Atur Langganan
              </button>
            </div>
            <div class="col-sm-6"></div>
          </div>
          <!-- Embed Screenleap iframe -->
          <div class="d-flex justify-content-center">
            <iframe
              :src="link"
              width="100%"
              height="500px"
              frameborder="0"
              allowfullscreen
              v-if="ready"
            ></iframe>
            <p v-if="!ready">Loading...</p>
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

  <!-- Modal Update Rekening -->
  <div
    class="modal fade"
    id="updateRekening"
    tabindex="-1"
    role="dialog"
    aria-labelledby="updateRekeningLabel"
    aria-hidden="true"
    ref="updateRekeningRef"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addInvoiceModalLabel">Update Rekening</h5>
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
          <!-- Form Update Rekening -->
          <form @submit.prevent="setRekening()">
            <div class="form-group">
              <label for="rekPenerima">Rekening Penerima</label>
              <input
                type="text"
                class="form-control"
                id="rekPenerima"
                v-model="formRekening.rekening_penerima"
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
  <!-- End Modal Update Rekening -->

  <!-- Modal Atur Langganan -->
  <div
    class="modal fade"
    id="aturLangganan"
    tabindex="-1"
    role="dialog"
    aria-labelledby="aturLanggananLabel"
    aria-hidden="true"
    ref="aturLanggananRef"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="aturLangganan">Atur Langganan</h5>
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
          <table v-if="langgananReady" class="table table-striped m-auto">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Jenis Langganan</th>
                <th scope="col">Harga</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in listLangganan" :key="item.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ item.jenis_langganan }}</td>
                <td>{{ item.harga }}</td>
                <td>
                  <button class="btn btn-danger">
                  <i class="bi bi-trash-fill"></i>

                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <p v-if="!langgananReady">Loading...</p>

          <h5 class="mt-5 mb-2 text-center fw-bold">Tambah Jenis Langganan</h5>
          <!-- Form Update Rekening -->
          <form @submit.prevent="setLangganan()">
            <div class="form-group">
              <label for="jenisLangganan">Jenis Langganan</label>
              <input
                type="text"
                class="form-control"
                id="jenisLangganan"
                v-model="formLangganan.jenis_langganan"
              />
            </div>
            <div class="form-group">
              <label for="harga">Harga</label>
              <input
                type="text"
                class="form-control"
                id="harga"
                v-model="formLangganan.harga"
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
  <!-- End Modal Atur Langganan -->
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      user_id: null,
      role: null,
      ready: false,
      link: null,
      formLink: {
        judul: "",
        link: "",
      },
      formRekening: {
        rekening_penerima: "",
      },
      formLangganan: {
        jenis_langganan: "",
        harga: "",
      },
      listLangganan: [],
      langgananReady: false,
    };
  },
  methods: {
    setLink() {
      // Membuat FormData untuk mengirim file
      const formData = new FormData();
      formData.append("judul", this.formLink.judul);
      formData.append("link", this.formLink.link);

      axios
        .post(
          "https://backend-webmember.lumirainternational.com/api/auth/set-link",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.formLink.judul = "";
          this.formLink.link = "";
          this.showAlert();
          this.ready = false;
          this.getLink();
        })
        .catch((error) => {
          console.error(error);
        });
    },

    setRekening() {
      const formData = new FormData();
      formData.append("rekening_tujuan", this.formRekening.rekening_penerima);

      axios
        .post(
          "https://backend-webmember.lumirainternational.com/api/auth/set-rekening",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.formRekening.rekening_penerima = "";
          this.showAlert();
        })
        .catch((error) => {
          console.error(error);
        });
    },

    async getLink() {
      try {
        const response = await axios.get(
          `https://backend-webmember.lumirainternational.com/api/auth/get-link`,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );

        console.log("link: ", response.data.data[0]["link"]);
        this.link = response.data.data[0]["link"];
        this.ready = true;
      } catch (error) {
        console.error(error);
      }
    },

    setLangganan() {
      // Membuat FormData untuk mengirim file
      const formData = new FormData();
      formData.append("jenis_langganan", this.formLangganan.jenis_langganan);
      formData.append("harga", this.formLangganan.harga);

      axios
        .post(
          "https://backend-webmember.lumirainternational.com/api/auth/set-langganan",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          this.formLangganan.jenis_langganan = "";
          this.formLangganan.harga = "";
          this.showAlert();
        })
        .catch((error) => {
          console.error(error);
        });
    }, 
    deleteLangganan(id) {
      axios
        .post(
          `https://backend-webmember.lumirainternational.com/api/auth/delete-langganan/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          this.langgananReady = false;
          this.getLangganan();
        })
        .catch((error) => {
          console.error(error);
        });
    }, 

    async getLangganan() {
      try {
        const response = await axios.get(
          `https://backend-webmember.lumirainternational.com/api/auth/list-langganan`,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );

        this.listLangganan = response.data.data;
        this.langgananReady = true;
      } catch (error) {
        console.error(error);
      }
    },

    showAlert() {
      this.$swal({
        title: "Request Success",
        text: "Data Berhasil Dikirim!",
        icon: "success", // Atau gunakan icon lain sesuai kebutuhan
      }).then(() => {
        $("#updateLayanan").modal("hide");
        $("#updateRekening").modal("hide");
        $("#aturLangganan").modal("hide");
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
        this.getLink();
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
