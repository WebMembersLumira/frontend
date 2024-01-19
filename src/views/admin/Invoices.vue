<script setup>
import Sidebar from "../../components/Sidebar.vue";
import Navbar from "../../components/Navbar-Admin.vue";
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
        <h1 class="h3 mb-0 text-gray-800 text-center">Pembayaran</h1>
        <div class="row">
          <div class="col-1"></div>
          <div class="col-10">
            <div class="row mt-5">
              <div class="col-sm-9"></div>
              <div class="col-sm-3">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Filter
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#" @click="getInvoiceByStatus('0')">Pending</a>
                    <a class="dropdown-item" href="#" @click="getInvoiceByStatus('1')">Active</a>
                    <a class="dropdown-item" href="#" @click="getInvoiceByStatus('3')">Expired</a>
                    <a class="dropdown-item" href="#" @click="getInvoiceByStatus('2')">Reject</a>
                    <a class="dropdown-item" href="#" @click="getInvoiceByStatus('00')">Perpanjang</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="table-responsive">
              <div v-if="!ready" class="preloader"></div>
              <DataTable class="display table table-striped" v-if="ready">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama</th>
                    <th scope="col">No. HP</th>
                    <th scope="col">No. Rekening</th>
                    <th scope="col">Jumlah Transfer</th>
                    <th scope="col">Bukti Transfer</th>
                    <th scope="col">Status</th>
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in invoices" :key="item.id">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ item.user.name }}</td>
                    <td>{{ item.user.no_hp }}</td>
                    <td>{{ item.nomor_rekening }}</td>
                    <td>{{ item.jumlah_transfer }}</td>
                    <td>
                      <img
                        :src="
                          'https://backend-webmember.lumirainternational.com/storage/' +
                          item.bukti_transfer
                        "
                        alt="Bukti Transfer"
                        style="max-width: 100px; cursor: pointer"
                        @click="detailBukti(item.bukti_transfer)"
                      />
                    </td>
                    <td>
                      <div class="bg-warning text-white rounded text-center" v-if="item.status == '0'">
                        Pending
                      </div>
                      <div class="bg-success text-white rounded text-center" v-if="item.status == '1'">
                        Active
                      </div>
                      <div class="bg-danger rounded text-center" v-if="item.status == '2'">
                        Reject
                      </div>
                      <div class="bg-secondary text-white rounded text-center" v-if="item.status == '3'">
                        Expired
                      </div>
                      <div class="bg-primary text-white rounded text-center" v-if="item.status == '00'">
                        Perpanjang
                      </div>
                    </td>

                    <td>
                      <button
                        class="btn btn-danger me-1"
                        @click="konfirmasi(item.user_id, item.id, '2', item.user.name)"
                        v-if="item.status == '1' || item.status == '0'"
                      >
                        Reject
                      </button>
                      <button
                        class="btn btn-success"
                        @click="setDataAction(item.user_id, item.id, '1')"
                        v-if="item.status == '0' || item.status == '00'"
                        data-toggle="modal"
                        data-target="#aturTanggal"
                      >
                        Accept
                      </button>
                      <button
                        class="btn btn-success"
                        @click="setDataAction(item.user_id, item.id, '3')"
                        v-if="item.status == '3'"
                        data-toggle="modal"
                        data-target="#aturTanggal"
                      >
                        Perpanjang
                      </button>
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

  <!-- Modal Atur Tanggal -->
  <div
    class="modal fade"
    id="aturTanggal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="aturTanggalLabel"
    aria-hidden="true"
    ref="aturTanggalRef"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addInvoiceModalLabel">Atur Tanggal</h5>
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
          <!-- Form Atur Tanggal -->
          <form
            @submit.prevent="
              actionInvoice(
                dataAction.user_id,
                dataAction.invoice_id,
                dataAction.status_invoice,
                dataAction.tanggal_berakhir
              )
            "
          >
            <div class="form-group">
              <label for="tanggal">Tanggal Berakhir</label>
              <input
                type="date"
                class="form-control"
                id="tanggal"
                v-model="dataAction.tanggal_berakhir"
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
  <!-- End Modal Atur Tanggal -->

  <!-- Modal Detail Bukti Transfer -->
  <div
    class="modal fade"
    id="detailBukti"
    tabindex="-1"
    role="dialog"
    aria-labelledby="detailBuktiLabel"
    aria-hidden="true"
    ref="detailBuktiRef"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addInvoiceModalLabel">
            Detail Bukti Transfer
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
          <img
            :src="
              'https://backend-webmember.lumirainternational.com/storage/' +
              path
            "
            alt="Bukti Transfer"
            style="width: 100%"
          />
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal Detail Bukti Transfer -->
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
      ready: null,
      user_id: null,
      path: null,
      dataAction: {
        user_id: "",
        invoice_id: "",
        status_invoice: "",
        tanggal_berakhir: "",
      },
    };
  },
  methods: {
    setDataAction(userId, invoiceId, statusInvoice) {
      this.dataAction.user_id = userId;
      this.dataAction.invoice_id = invoiceId;
      this.dataAction.status_invoice = statusInvoice;
    },

    async getAllDataInvoice() {
      try {
        const response = await axios.get(
          `https://backend-webmember.lumirainternational.com/api/auth/list-invoice`,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
        this.invoices = response.data.data;
        this.ready = true;
        console.log("ini invoice", this.invoices);
      } catch (error) {
        console.error(error);
      }
    },
    async getInvoiceByStatus(status) {
      try {
        this.ready = false;
        const response = await axios.get(
          `https://backend-webmember.lumirainternational.com/api/auth/invoice-status/${status}`,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
        this.invoices = response.data.data;
        this.ready = true;
        console.log("ini invoice", this.invoices);
      } catch (error) {
        console.error(error);
      }
    },

    detailBukti(bukti_transfer) {
      this.path = bukti_transfer;
      $("#detailBukti").modal("show");
    },

    async aturTanggal() {
      try {
        const formData = new FormData();
        formData.append("user_id", this.user_id);
        formData.append("invoice_id", this.selectedInvoice);
        formData.append("tanggal_berakhir", this.date);
        const response = await axios.post(
          `https://backend-webmember.lumirainternational.com/api/auth/atur-tanggal`,
          formData,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );
        this.ready = false;
        this.showAlert();
        this.getAllDataInvoice();
        console.log("ini invoice", this.invoices);
      } catch (error) {
        console.error(error);
      }
    },

    async actionInvoice(userId, invoiceId, invoiceStatus, tanggal = null) {
      try {
        let formData = new FormData();
        formData.append("user_id", userId);
        formData.append("invoice_id", invoiceId);
        formData.append("status_invoice", invoiceStatus);

        tanggal != null ? formData.append("tanggal_berakhir", tanggal) : null;

        const response = await axios.post(
          `https://backend-webmember.lumirainternational.com/api/auth/action-invoice`,
          formData,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        );

        // Tambahkan penanganan respons sesuai kebutuhan
        console.log("Invoice berhasil ditolak:", response.data);
        this.showAlert();
        this.ready = false;
        this.getAllDataInvoice();
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    },

    showAlert() {
      this.$swal({
        title: "Request Success",
        text: "Data Berhasil Dikirim!",
        icon: "success", // Atau gunakan icon lain sesuai kebutuhan
      }).then(() => {
        $("#aturTanggal").modal("hide");
      });
    },
    konfirmasi(user_id, invoice_id, status, user) {
      Swal.fire({
        title: `Apakah Anda yakin ingin mereject invoice ${user}?`,
        text: "Anda akan keluar dari akun ini.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#061387",
        confirmButtonText: "Reject",
        cancelButtonText: "Batal",
      }).then((result) => {
        if (result.isConfirmed) {
          this.actionInvoice(user_id, invoice_id, status)    
        }
      });
    },
  },
  created() {
    const currentTimeUTC = new Date().toUTCString();
    console.log("Waktu Sekarang (UTC):", currentTimeUTC);
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
        if (level !== "1") {
          this.$router.push("/unauthorized");
        } else if (!header || !signature) {
          this.$router.push("/");
          sessionStorage.removeItem("token");
        }
        // success
        this.getAllDataInvoice();
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
@media (max-width: 768px) {
  h1 {
    font-size: 30px;
  }
  .customDetail {
    margin-right: 40px !important;
  }
}
.customDetail {
  margin-right: -40px;
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
