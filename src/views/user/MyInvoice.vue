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
              <div class="col-sm-3" v-if="invoices.length === 0">
                <button
                    class="btn blueButton"
                    data-toggle="modal"
                    data-target="#addInvoiceModal"
                    
                    @click="fetchDataLangganan()"
                  >
                    Tambah Layanan
                  </button>
              </div>
              <div class="col-sm-3" v-if="invoices.length >0">
                <button
                  class="btn blueButton"
                  data-toggle="modal"
                  data-target="#addInvoiceModal"
                  v-if="invoices[0].status != '0' && invoices[0].status != '1'"
                  @click="fetchDataLangganan()"
                >
                  Tambah Layanan
                </button>
                <button
                  class="btn btn-success"
                  data-toggle="modal"
                  data-target="#addInvoiceModal"
                  v-if="invoices[0].status == '1'"
                  @click="fetchDataLangganan()"
                >
                  Perpanjang Layanan
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
                    <th scope="col">Nama Pengirim</th>
                    <th scope="col">Nomor Rekening</th>
                    <th scope="col">Jumlah Transfer</th>
                    <th scope="col">Bukti Transfer</th>
                    <th scope="col">Berlaku Hingga</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <!-- Table Body -->
                <tbody>
                  <tr v-for="(item, index) in invoices" :key="item.id">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ item.nama_pengirim }}</td>
                    <td>{{ item.nomor_rekening }}</td>
                    <td>{{ item.jumlah_transfer }}</td>
                    <td>
                      <!-- Tampilkan gambar di dalam tabel -->
                      <img
                        :src="
                          'https://backend-webmember.lumirainternational.com/storage/' +
                          item.bukti_transfer
                        "
                        alt="Bukti Transfer"
                        style="max-width: 100px"
                      />
                    </td>
                    <td>
                      {{
                        item.tanggal_berakhir != null
                          ? item.tanggal_berakhir
                          : "Belum Diatur"
                      }}
                    </td>
                    <td>
                      <div
                        class="bg-warning rounded text-center"
                        v-if="item.status == '0'"
                      >
                        Pending
                      </div>
                      <div
                        class="bg-success rounded text-center"
                        v-if="item.status == '1'"
                      >
                        Active
                      </div>
                      <div
                        class="bg-secondary rounded text-center"
                        v-if="item.status == '3'"
                      >
                        Expired
                      </div>
                      <div
                        class="bg-danger rounded text-center text-white"
                        v-if="item.status == '2'"
                      >
                        Reject
                      </div>
                      <div
                        class="bg-primary rounded text-center text-white"
                        v-if="item.status == '00'"
                      >
                        Perpanjang
                      </div>
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
                            <label for="rekeningTujuan">Jenis Langganan</label>
              <select class="form-select" v-model="selectedLangganan" @change="onChangeLangganan">
                <option value="" disabled selected>
                  Pilih Jenis Langganan
                </option>
                <option
                  v-for="langganan in listLangganan"
                  :key="langganan.id"
                  :value="langganan.id"
                >
                  {{ langganan.jenis_langganan }} - RP.{{ langganan.harga }}
                </option>
              </select>
            </div>

           
            <div class="form-group">
              <label for="rekeningTujuan">Rekening Tujuan</label>
              <input
                type="text"
                class="form-control"
                id="rekeningTujuan"
                v-model="rekenings.rekening_tujuan"
                disabled
              />
            </div>
            <div class="form-group">
              <label for="rekeningPengirim">Nomor Rekening / Nomor Hp</label>
              <input
                type="text"
                class="form-control"
                id="rekeningPengirim"
                placeholder="nomor rekening atau hp pengirim uang"
                v-model="newInvoice.nomor_rekening"
              />
            </div>
            <div class="form-group">
              <label for="namaPengirim">Nama Pengirim</label>
              <input
                type="text"
                class="form-control"
                id="namaPengirim"
                placeholder="harus sesuai dengan rekening atau dompet digital"
                v-model="newInvoice.nama_pengirim"
              />
            </div>
            <div class="form-group">
              <label for="jumlahTransfer">Jumlah Transfer</label>
              <input
                type="text"
                class="form-control"
                id="jumlahTransfer"
                placeholder="contoh: 250000"
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

  <!-- Modal Edit Invoice -->
  <div
    class="modal fade"
    id="editInvoice"
    tabindex="-1"
    role="dialog"
    aria-labelledby="editInvoiceLabel"
    aria-hidden="true"
    ref="editInvoiceRef"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editInvoiceLabel">Edit Invoice</h5>
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
          <!-- Form Edit Invoice -->
          <form @submit.prevent="addInvoice('0')">
            <div class="form-group">
              <label for="durasi">Durasi</label>
              <input
                type="text"
                class="form-control"
                id="durasi"
                value="1 Bulan"
                disabled
              />
            </div>
            <div class="form-group">
              <label for="rekeningTujuan">Rekening Tujuan</label>
              <input
                type="text"
                class="form-control"
                id="rekeningTujuan"
                v-model="rekenings.rekening_tujuan"
                disabled
              />
            </div>
            <div class="form-group">
              <label for="bayar">Jumlah Bayar</label>
              <input
                type="text"
                class="form-control"
                id="bayar"
                v-model="rekenings.harga"
                disabled
              />
            </div>
            <div class="form-group">
              <label for="rekeningPengirim">Rekening Pengirim</label>
              <input
                type="text"
                class="form-control"
                id="rekeningPengirim"
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
              <button type="submit" class="btn btn-primary">Edit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal Edit Invoice -->

  <!-- Modal Tambah Invoice -->
  <div
    class="modal fade"
    id="perpanjangModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="perpanjangModalLabel"
    aria-hidden="true"
    ref="perpanjangModalRef"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="perpanjangModalLabel">
            Perpanjang Invoice
          </h5>
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
          <form @submit.prevent="addInvoice('00')">
            <div class="form-group">
              <label for="durasi">Durasi</label>
              <input
                type="text"
                class="form-control"
                id="durasi"
                value="1 Bulan"
                disabled
              />
            </div>
            <div class="form-group">
              <label for="rekeningTujuan">Rekening Tujuan</label>
              <input
                type="text"
                class="form-control"
                id="rekeningTujuan"
                v-model="rekenings.rekening_tujuan"
                disabled
              />
            </div>
            <div class="form-group">
              <label for="bayar">Jumlah Bayar</label>
              <input
                type="text"
                class="form-control"
                id="bayar"
                v-model="rekenings.harga"
                disabled
              />
            </div>
            <div class="form-group">
              <label for="rekeningPengirim">Rekening Pengirim</label>
              <input
                type="text"
                class="form-control"
                id="rekeningPengirim"
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
              <button type="submit" class="btn btn-primary">Perpanjang</button>
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
        nama_pengirim: "",
        nomor_rekening: "",
        jumlah_transfer: "",
        bukti_transfer: null,
      },
      rekenings: [],
      user_id: null,
      role: null,
      ready: false,
      today: null,
      disable: false,
      listLangganan: [],
      selectedLangganan: "",
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
      } catch (error) {
        console.error(error);
      }
    },
    async fetchDataRekening() {
      try {
        const response = await axios.get(
          `https://backend-webmember.lumirainternational.com/api/auth/get-rekening`,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
        this.rekenings = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },
    addInvoice(status = null) {
      this.ready = false;
      // Membuat FormData untuk mengirim file
      const formData = new FormData();
      formData.append("nama_pengirim", this.newInvoice.nama_pengirim);
      formData.append("nomor_rekening", this.newInvoice.nomor_rekening);
      formData.append("jumlah_transfer", this.newInvoice.jumlah_transfer);
      formData.append("bukti_transfer", this.newInvoice.bukti_transfer);
      formData.append("user_id", this.user_id);
      formData.append("langganan_id", this.selectedLangganan);
      // if (status !== null) {
      //   formData.append("status", status);

      // }

      axios
        .post(
          "https://backend-webmember.lumirainternational.com/api/auth/create-invoice",
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
          // Lakukan sesuatu setelah berhasil menambah invoice
          this.newInvoice = {
            nomor_rekening: "",
            jumlah_transfer: "",
            bukti_transfer: null,
          };
          this.fetchDataInvoice();
          this.showAlert();
        })
        .catch((error) => {
          console.error(error);
        });
    },

    async fetchDataLangganan() {
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
      } catch (error) {
        console.error(error);
      }
    },

    // async checkMembership() {
    //   try {
    //     const response = await axios.get(
    //       `https://backend-webmember.lumirainternational.com/api/auth/check-membership/${this.user_id}`,
    //       {
    //         headers: {
    //           Authorization: "Bearer " + sessionStorage.getItem("token"),
    //         },
    //       }
    //     );
    //     this.ready = true;
    //     console.log("data:", response.data["status"]);

    //     if (
    //       new Date(response.data.data[0]["tanggal_berakhir"]) > new Date()
    //     ) {
    //       this.disable = true;
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },

    showAlert() {
      this.$swal({
        title: "Request Success",
        text: "Data Berhasil Dikirim!",
        icon: "success", // Atau gunakan icon lain sesuai kebutuhan
      }).then(() => {
        $("#addInvoiceModal").modal("hide");
        $("#editInvoice").modal("hide");
        $("#perpanjangModal").modal("hide");
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
        this.ready = false;
        this.fetchDataInvoice();
        this.fetchDataRekening();
        // this.checkMembership();
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
