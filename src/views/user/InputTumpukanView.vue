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

        <ChatMe/>
        <!-- Begin Page Content -->
        <h1 class="h3 mb-0 text-gray-800 text-center mt-4">Halaman Input Tumpukan</h1>
        <!-- detail -->
        <div class="row mt-5" v-if="detailNote">
          <div class="col-1"></div>
          <div class="col-10">
            <div class="row">
              <div class="col-4">
                <h6>Lokasi</h6>
              </div>
              <div class="col-8">
                <h6>: {{ detailNote.location }}</h6>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <h6>Tanggal</h6>
              </div>
              <div class="col-8">
                <h6>: {{ detailNote.date }}</h6>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <h6>Supir</h6>
              </div>
              <div class="col-8">
                <h6>: {{ detailNote.driver }}</h6>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <h6>No. Container</h6>
              </div>
              <div class="col-8">
                <h6>: {{ detailNote.no_container }}</h6>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <h6>No Telp</h6>
              </div>
              <div class="col-8">
                <h6>: {{ detailNote.telp }}</h6>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <h6>No Seal</h6>
              </div>
              <div class="col-8">
                <h6>: {{ detailNote.no_seal }}</h6>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <h6>Tujuan</h6>
              </div>
              <div class="col-8">
                <h6>: {{ detailNote.destination }}</h6>
              </div>
            </div>
          </div>
          <div class="col-1"></div>
        </div>

        <!-- barang -->
        <div class="row mt-4">
          <div class="col-1"></div>
          <div class="col-10">
            <div class="row">
              <!-- sppg -->
              <div class="col-sm-6">
                <label for="barang" class="form-label">SPPG</label>
                <select
                  v-model="selectedSPPG"
                  class="form-select"
                  aria-label="Default select example"
                  @select="showBarang = true"
                >
                  <option disabled>Pilih SPPG</option>
                  <option
                    v-for="barang in listBarang"
                    :key="barang.id"
                    :value="barang.no_sppg"
                  >
                    {{ barang.no_sppg }}
                  </option>
                </select>
              </div>
              <!-- barang -->
              <div class="col-sm-6" v-if="selectedSPPG != null">
                <label for="barang" class="form-label">Barang</label>
                <div class="row">
                  <div class="col-9">
                    <select
                      v-model="selectedBarang"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option disabled>Pilih barang</option>
                      <option
                        v-for="barang in listBarang"
                        :key="barang.id"
                        :value="barang.product_name"
                      >
                        {{ barang.product_name }}
                      </option>
                    </select>
                  </div>
                  <div class="col-3">
                    <button @click="submitBarang" class="btn btn-success" v-if="selectedBarang!=null">
                      <!-- <i class="bi bi-arrow-down-square"></i> -->
                      <i class="bi bi-check2-circle"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <!-- tumpukan -->
              <div class="col-sm-6" v-if="showInput === true">
                <label for="tumpukan" class="form-label">Tumpukan</label>
                <div class="row ms-1">
                  <div class="col-6">
                    <div class="row">
                      <div class="col-8 border bg-white">
                        <h4>{{ tumpukan }}</h4>
                      </div>
                      <div class="col-4">
                        <button
                          @click="hitungTumpukan()"
                          class="btn btn-danger"
                        >
                          <i class="bi bi-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-3">
                    <button
                      @click="submitTumpukan"
                      class="btn btn-success ms-3"
                      v-if="tumpukan!=0"
                    >
                      <i class="bi bi-arrow-down-square"></i>
                    </button>
                  </div>
                  <div class="col-3"></div>
                </div>
              </div>
              <div class="col-sm-6">
                <div v-if="size>500" style="margin-top:30px"></div>
                <button @click="selectedBarang = null, selectedSPPG = null, showInput = false, tumpukan=0" class="btn btn-warning w-100 customNext">
                  <!-- <i class="bi bi-arrow-down-square"></i> -->
                  Baris Baru <i class="bi bi-arrow-down-circle"></i>
                </button>
              </div>
            </div>
            <h4 class="text-center mt-5 mb-3">Data Barang</h4>
            <div class="table-responsive">
              <table class="bordered-table table-striped m-auto">
                <thead>
                  <tr>
                    <th>No. SPPG</th>
                    <th>Jenis Barang</th>
                    <th
                      v-for="header in headers"
                      :key="header"
                      class="text-center"
                    >
                      {{ header }}
                    </th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in dataBarang" :key="index">
                    <td>{{ item.sppg }}</td>
                    <td>{{ item.barang }}</td>
                    <td v-for="header in headers" :key="header">
                      <!-- <ul> -->
                      <p
                        v-for="tumpukan in item.tumpukan[header]"
                        :key="tumpukan"
                      >
                        {{ tumpukan }}
                      </p>
                      <!-- </ul> -->
                    </td>
                    <td>{{ getTotalTumpukan(item) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-1"></div>
        </div>

        <!-- button -->
        <div class="row">
          <div class="col-1"></div>
          <div class="col-10">
            <div class="row mb-5 mt-5">
              <div class="col-6">
                <router-link to="/user-input-note" class="btn btn-danger">
                  Kembali
                </router-link>
              </div>
              <div class="col-6">
                <button class="btn blueButton float-end" @click="submitData">
                  Selanjutnya
                </button>
              </div>
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
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      tumpukan: 0,
      selectedBarang: null,
      listBarang: [],
      dataBarang: [],
      headers: [], // Menyimpan nama header
      APIHeaders: [],
      detailNote: [],
      role: null,
      id_note: null,
      selectedSPPG: null,
      showInput: false,
      showBarang: false,
      size:null
    };
  },

  methods: {
    realtimeInput() {
      console.log("test :", this.dataBarang);

      const requestData = [];

      this.dataBarang.forEach((item) => {
        const tumpukanFields = {};
        for (const header in item.tumpukan) {
          tumpukanFields[`tumpukan_${header}`] =
            item.tumpukan[header].join(",");
        }

        const total = this.getTotalTumpukan(item);

        const newData = {
          ...tumpukanFields,
          barang: item.barang,
          sppg: item.sppg,
          id_note: 0,
          total: total,
        };
        requestData.push(newData);
      });

      const data = JSON.stringify(this.dataBarang);
      if (requestData.length === 0) {
        this.showAlert();
      }
      localStorage.setItem("tumpukans", data);
    },
    submitData() {
      this.realtimeInput();
      this.showInput = false;
      this.$router.push({ name: "user-signature" });
    },
    showAlert() {
      // Use sweetalert2
      this.$swal("SPPG tidak tersedia!!").then(() => {
        this.$router.push("/user-input-note");
      });
    },

    fetchBarang() {
      let formData = new FormData();
      formData.append("lokasi", this.APIHeaders.lokasi);
      formData.append("id_keterangan", this.APIHeaders.id_keterangan);
      axios
        .post("https://10.11.10.243/backend/public/api/sppg", formData)
        .then((response) => {
          this.listBarang = response.data.data;
        })
        .catch((error) => {
          console.error(error);
          this.showAlert();
        });
    },
    submitBarang() {
      if (this.selectedBarang) {
        this.dataBarang.push({
          barang: this.selectedBarang,
          sppg: this.selectedSPPG,
          tumpukan: {},
        });
        // this.selectedBarang = null;
        // this.selectedSPPG = null;
        this.showBarang = false;
      }
      this.showInput = true;
    },
    hitungTumpukan() {
      this.tumpukan = parseInt(this.tumpukan + 1);
    },
    submitTumpukan() {
      if (this.tumpukan && this.dataBarang.length > 0) {
        const lastBarang = this.dataBarang[this.dataBarang.length - 1];
        const header = Object.keys(lastBarang.tumpukan).length + 1;
        console.log("test header: ", header);
        console.log("test lastBarang: ", lastBarang);
        if (header <= 10) {
          if (!this.headers.includes(header.toString())) {
            this.headers.push(header.toString());
            console.log("test headers: ", this.headers);
          }
          if (!lastBarang.tumpukan[header.toString()]) {
            lastBarang.tumpukan[header.toString()] = [];
            console.log("test lastBarang: ", lastBarang);
          }
          lastBarang.tumpukan[header.toString()].push(parseInt(this.tumpukan));
        }
        this.tumpukan = 0;
      }
      this.realtimeInput();
    },
    getTotalTumpukan(item) {
      let total = 0;
      for (const header in item.tumpukan) {
        for (const tumpukan of item.tumpukan[header]) {
          total += tumpukan;
        }
      }
      return total;
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
        this.role = tokenPayload.role; // Ambil role pengguna dari payload
        this.APIHeaders.lokasi = tokenPayload.kodeLokasi;
        if (this.role !== "user") {
          this.$router.push("/unauthorized");
        } else if (!header || !signature) {
          this.$router.push("/");
        }
        // success
        const dataNote = localStorage.getItem("note");
        if (dataNote) {
          this.detailNote = dataNote;
          this.detailNote = JSON.parse(dataNote);
          this.APIHeaders.id_keterangan = this.detailNote.id_keterangan;
        }
        const dataTumpukan = localStorage.getItem("tumpukans");
        if (dataTumpukan) {
          const data = JSON.parse(dataTumpukan);
          this.dataBarang = data;
          // this.selectedSPPG = data[0].sppg;
          console.log("test data tumpukan: ", data[0].sppg);
          let header = 0;
          for (let i = 0; i < data.length; i++) {
            const tumpukan = data[i].tumpukan;
            const tumpukanLength = Object.keys(tumpukan).reduce(
              (sum, key) => sum + tumpukan[key].length,
              0
            );

            header = Math.max(header, tumpukanLength);
          }
          for (let i = 0; i < header; i++) {
            this.headers[i] = (i + 1).toString();
          }

          console.log(" header: ", header);
          console.log("test headers: ", this.headers);
          console.log("from data: ", data[0].tumpukan);
          console.log("form ls: ", this.dataBarang);
          this.showInput = true;
          const index = this.dataBarang.length - 1;
          this.selectedSPPG = this.dataBarang[index].sppg;
          this.selectedBarang = this.dataBarang[index].barang;
        }
        this.fetchBarang();

        this.size = window.innerWidth;
        console.log('size:',this.size);
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
.bordered-table {
  border-collapse: collapse;
}

.bordered-table th,
.bordered-table td {
  border: 1px solid #ccc;
  padding: 10px;
}

.bordered-li {
  border-bottom: 1px solid #ccc;
  padding: 5px;
}

span.custom {
  float: right;
  margin-right: 130px;
}
@media (max-width: 768px) {
  .customNext{
    margin-top: 20px;
  }
}

</style>

