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
  <div id="wrapper">
    <Sidebar :class="sidebarClass" />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <Navbar @toggle-sidebar="toggleSidebar" />

        <!-- Begin Page Content -->
        <ChatMe />
        <h1 class="h3 mb-0 text-gray-800 text-center mt-4">List Invoice</h1>
        <div class="row">
          <div class="col-1"></div>
          <div class="col-10">
            <div class="row mt-5">
              <div class="col-sm-3">
                <button
                  class="btn blueButton"
                  data-toggle="modal"
                  data-target="#addInvoiceModal"
                >
                  Tambah Invoice
                </button>
              </div>
              <div class="col-sm-9">
                <!-- <button type="button" @click="test()">test</button> -->
              </div>
            </div>
            <div class="table-responsive mt-5">
              <div v-if="!ready" class="preloader"></div>
              <!-- <small  class="m-auto">Load data...</small> -->
              <DataTable
                class="tableCustom display table table-striped"
                v-if="ready"
              >
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nomor Rekening</th>
                    <th scope="col">Jumlah Transfer</th>
                    <th scope="col">Bukti Transfer</th>
                    <th scope="col">Berlaku Hingga</th>
                    <th scope="col">Status</th>
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>
                <!-- Table Body -->
                <tbody>
                  <tr v-for="(item, index) in invoices" :key="item.id">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ item.nomor_rekening }}</td>
                    <td>{{ item.jumlah_transfer }}</td>
                    <td>
                      <!-- Tampilkan gambar di dalam tabel -->
                      <img
                        :src="
                          'https://backend-webmember.lumirainternational.com/storage/' + item.bukti_transfer
                        "
                        alt="Bukti Transfer"
                        style="max-width: 100px"
                      />
                    </td>
                    <td>{{ item.tanggal_berakhir != null ? item.tanggal_berakhir : 'Belum Diatur' }}</td>
                    <td>
                      {{
                        item.status === "0"
                          ? "Pending"
                          : item.status === "1"
                          ? "Active"
                          : item.status === "2"
                          ? "Expired"
                          : "Reject"
                      }}
                    </td>
                    <td>
                      <!-- <button class="btn btn-warning" v-if="item.tanggal_berakhir > today">Perpanjang</button>
                      <button class="btn btn-success" v-if="item.tanggal_berakhir < today">Perpanjang</button> -->
                    </td>
                  </tr>
                </tbody>
              </DataTable>
            </div>
          </div>
          <div class="col-1"></div>
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

  <!-- Modal Tambah Invoice -->
  <div
    class="modal fade"
    id="addInvoiceModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="addInvoiceModalLabel"
    aria-hidden="true"
    ref="addInvoiceModalRef"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addInvoiceModalLabel">Tambah Invoice</h5>
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
          <!-- Form Tambah Invoice -->
          <form @submit.prevent="addInvoice">
            <div class="form-group">
              <label for="nomorRekening">Nomor Rekening</label>
              <input
                type="text"
                class="form-control"
                id="nomorRekening"
                v-model="newInvoice.nomor_rekening"
              />
            </div>
            <div class="form-group">
              <label for="jumlahTransfer">Jumlah Transfer</label>
              <input
                type="text"
                class="form-control"
                id="jumlahTransfer"
                v-model="newInvoice.jumlah_transfer"
              />
            </div>
            <div class="form-group">
              <label for="buktiTransfer">Bukti Transfer</label>
              <input
                type="file"
                class="form-control"
                id="buktiTransfer"
                @change="handleFileUpload"
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
              <button type="submit" class="btn btn-primary">Tambah</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal Tambah Invoice -->
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";

DataTable.use(DataTablesCore);

export default {
  data() {
    return {
      invoices: [],
      newInvoice: {
        nomor_rekening: "",
        jumlah_transfer: "",
        bukti_transfer: null,
      },
      user_id: null,
      role: null,
      ready: null,
      today: null
    };
  },
  methods: {
    async fetchDataInvoice() {
      try {
        const response = await axios.get(
          `https://backend-webmember.lumirainternational.com/api/auth/list-myinvoice/${this.user_id}`,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
        this.invoices = response.data.data;
        this.ready = true;

        console.log('tanggal :',response.data.data[0]['tanggal_berakhir']);
        console.log(new Date(response.data.data[0]['tanggal_berakhir']) < new Date);
        console.log('sekarang:', new Date());
      } catch (error) {
        console.error(error);
      }
    },
    addInvoice() {
      // Membuat FormData untuk mengirim file
      const formData = new FormData();
      formData.append("nomor_rekening", this.newInvoice.nomor_rekening);
      formData.append("jumlah_transfer", this.newInvoice.jumlah_transfer);
      formData.append("bukti_transfer", this.newInvoice.bukti_transfer);
      formData.append("user_id", this.user_id);

      axios
        .post("https://backend-webmember.lumirainternational.com/api/auth/create-invoice", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log(response.data);
          // Lakukan sesuatu setelah berhasil menambah invoice
          this.newInvoice = {
            nomor_rekening: "",
            jumlah_transfer: "",
            bukti_transfer: null,
          };
          this.showAlert();
        })
        .catch((error) => {
          console.error(error);
        });
    },

    showAlert() {
      // Use sweetalert2
      this.$swal("Data Berhasil Dikirm!!").then(() => {
        $("#addInvoiceModal").modal("hide");
      });
    },
    handleFileUpload(event) {
      // Menggunakan FormData untuk mengirim file
      this.newInvoice.bukti_transfer = event.target.files[0];
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
        if (level !== "0") {
          this.$router.push("/unauthorized");
        } else if (!header || !signature) {
          this.$router.push("/");
        }
        // success
        this.fetchDataInvoice();
        this.today = new Date();
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
