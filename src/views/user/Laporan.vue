<script setup>
import Sidebar from "../../components/Sidebar-User.vue";
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";
import Barcode from "../../components/QRCodeGenerator.vue";
import { ref } from "vue";

const sidebarToggled = ref(false);
const sidebarClass = ref("");

const toggleSidebar = () => {
  sidebarToggled.value = !sidebarToggled.value;
  sidebarClass.value = sidebarToggled.value ? "toggle-sidebar" : "";
};
</script>
<template>
  <!-- <div class="preloader" v-if="!showContent"></div> -->
  <div id="wrapper" v-if="showContent">
    <Sidebar :class="sidebarClass" />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <Navbar @toggle-sidebar="toggleSidebar" />

        <!-- Begin Page Content -->
        <div id="app" ref="document">
          <div class="row mt-4">
            <div class="col-1"></div>
            <div class="col-10">
              <div class="row">
                <div class="col-6">
                  <router-link to="/user-note" class="btn btn-danger mb-5"
                    >Kembali</router-link
                  >
                </div>
                <div class="col-6">
                  <button
                    @click="exportToPDF"
                    class="btn btn-success float-end"
                  >
                    Export to PDF
                  </button>
                </div>
              </div>
            </div>
            <div class="col-1"></div>
          </div>
          <div id="element-to-convert">
            <div class="text-black">
              <!-- header -->
              <div class="row mt-5">
                <div class="col-1"></div>
                <div class="col-10 text-center bg-white">
                  <img src="/img/logo.png" alt="logo" width="60" />
                  <h5 class="fw-bold mt-3">TALLY SHEET</h5>
                  <p>
                    No. 0{{ note.id }}/TALLYSHEET/{{ romawi }}/{{ tahun }}
                  </p>
                </div>
                <div class="col-1"></div>
              </div>
              <!-- content -->
              <div class="row">
                <div class="col-1"></div>
                <div class="col-10 bg-white">
                  <div class="row">
                    <div class="col-6">
                      <p>Lokasi : {{ note.location }}</p>
                    </div>
                    <div class="col-6">
                      <p>No. Truck : {{ note.no_truck }}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <p>Tanggal : {{ note.date }}</p>
                    </div>
                    <div class="col-6">
                      <p>Supir : {{ note.driver }}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <p>No. Container : {{ note.no_container }}</p>
                    </div>
                    <div class="col-6">
                      <p>No. HP : {{ note.telp }}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <p>No. Tujuan : {{ note.destination }}</p>
                    </div>
                    <div class="col-6"></div>
                  </div>
                </div>
                <div class="col-1"></div>
              </div>
              <!-- table -->
              <div class="row">
                <div class="col-1"></div>
                <div class="col-10 bg-white">
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">No</th>
                          <th scope="col">Jenis Barang</th>
                          <th scope="col">1</th>
                          <th scope="col">2</th>
                          <th scope="col">3</th>
                          <th scope="col">4</th>
                          <th scope="col">5</th>
                          <th scope="col">6</th>
                          <th scope="col">7</th>
                          <th scope="col">8</th>
                          <th scope="col">9</th>
                          <th scope="col">10</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in note.tumpukans"
                          :key="item.id"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ item.barang }}</td>
                          <td>{{ item.tumpukan_1 }}</td>
                          <td>{{ item.tumpukan_2 }}</td>
                          <td>{{ item.tumpukan_3 }}</td>
                          <td>{{ item.tumpukan_4 }}</td>
                          <td>{{ item.tumpukan_5 }}</td>
                          <td>{{ item.tumpukan_6 }}</td>
                          <td>{{ item.tumpukan_7 }}</td>
                          <td>{{ item.tumpukan_8 }}</td>
                          <td>{{ item.tumpukan_9 }}</td>
                          <td>{{ item.tumpukan_10 }}</td>
                          <td>{{ item.total }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-1"></div>
              </div>
              <!-- signature -->
              <div class="row">
                <div class="col-1"></div>
                <div class="col-10 bg-white">
                  <div class="row">
                    <div class="col-1"></div>
                    <div class="col-11">
                      <p class="float-end">
                        {{ note.location }}, {{ note.date }}
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-5 text-center">
                      <p>pelanggan</p>
                      <img
                        :src="note.signatures[0].supir_signature"
                        alt="tandatangan supir"
                        class="imageCustom"
                        width="130"
                      />
                      <h5>
                        (<span class="fw-bold">{{
                          note.signatures[0].supir
                        }}</span
                        >)
                      </h5>
                    </div>
                    <div class="col-2"></div>
                    <div class="col-5 text-center">
                      <p>Petugas</p>
                      <img
                        :src="note.signatures[0].petugas_signature"
                        alt="tandatangan petugas"
                        class="imageCustom"
                        width="130"
                      />
                      <h5>
                        (<span class="fw-bold">{{
                          note.signatures[0].petugas
                        }}</span
                        >)
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col-1"></div>
              </div>

              <div class="row">
                <div class="col-1"></div>
                <div class="col-10 bg-white">
                  <!-- qrcode -->
                  <div class="row">
                    <div class="col-6">
                      <Barcode />
                    </div>
                    <div class="col-6"></div>
                  </div>
                  <!-- keterangan cetak -->
                  <div class="row mt-2">
                    <small>Dokument ini dicetak oleh: {{ name }}</small>
                    <small
                      >Dokument ini dicetak pada: {{ now.date }}
                      {{ now.time }}</small
                    >
                    <!-- <div class="col-6">
                    </div> -->
                    <!-- <div class="col-6"></div> -->
                  </div>
                </div>
                <div class="col-1"></div>
              </div>
            </div>
          </div>
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
import html2pdf from "html2pdf.js";
export default {
  props: ["id"],
  data() {
    return {
      note: [],
      name: "",
      now: {},
      romawi: null,
      tahun: null,
      alamat: null,
      pdfFile: null,
      noTallySheet: "",
      showContent: false,
    };
  },
  methods: {
    exportToPDF() {
      const elementToConvert = document.getElementById("element-to-convert");
      html2pdf()
        .from(elementToConvert)
        .output("blob")
        .then((data) => {
          this.pdfFile = new Blob([data], { type: "application/pdf" });

          const formData = new FormData();
          formData.append("file", this.pdfFile, "surat_pengantar.pdf");

          axios
            .post(`https://10.11.10.243/backend/public/api/export/${this.id}`, formData, {
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token"),
              },
            })
            .then((resp) => {
              if (!resp.data.message) {
                throw new Error("Gagal mengirimkan PDF ke API.");
              }

              // this.fetchData();
              this.downloadPDF();
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error("Error converting to PDF:", error);
        });
    },
    downloadPDF() {
      if (this.pdfFile) {
        const url = URL.createObjectURL(this.pdfFile);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${this.noTallySheet}.pdf`;
        link.click();
      }
    },
    getRomanMonth(date) {
      const months = [
        "",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XI",
        "XII",
      ];

      // Split tanggal menjadi array [dd, mm, yyyy]
      const [day, month, year] = date.split("-");

      // Ambil bulan dalam bentuk angka
      const monthNumber = parseInt(month, 10);
      this.tahun = year;
      // Ubah angka bulan ke dalam angka Romawi
      return months[monthNumber];
    },
    async fetchData() {
      const response = await axios.get(
        `https://10.11.10.243/backend/public/api/auth/note-detail/${this.id}`,
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      );
      this.note = response.data.data[0];
      console.log("test note: ", this.note);
      this.romawi = this.getRomanMonth(this.note.date);

      this.noTallySheet = `0${this.id}/TALLYSHEET/${this.romawi}/${this.tahun}`;
    },
    getCurrentDateTime() {
      const date = new Date();
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");

      this.now = {
        date: `${day}-${month}-${year}`,
        time: `${hours}:${minutes}:${seconds}`,
      };
    },

    timeOut(){
      setTimeout(() => {
        this.showContent = true;
      }, 3000); // 3000 milidetik = 3 detik
    }
  },
  mounted() {
    const body = document.querySelector("body");
    body.style.backgroundImage = "url(/img/wilayah.png)";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
    this.timeOut();
    this.getCurrentDateTime();
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
        const role = tokenPayload.role; // Ambil role pengguna dari payload
        this.name = tokenPayload.name;
        this.alamat = tokenPayload.alamat;
        if (role !== "user") {
          this.$router.push("/unauthorized");
        } else if (!header || !signature) {
          this.$router.push("/");
        }
        // success
        this.fetchData();
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
.preloader{ 
  position:fixed; 
  /* opacity: 0.5; */
  left:0px; 
  top:0px; 
  width:100%; 
  height:100%; 
  z-index:999999; 
  /* background-color:#ffffff;  */
  background-position:center center; 
  background-repeat:no-repeat; 
  background-image:url(/img/loader.gif);
}

@media (max-width: 768px) {
  .imageCustom {
    width: 100% !important;
  }
}

.surat {
  background-color: #ffffff !important;
}
hr {
  border: none;
  height: 3px;
  /* Set the hr color */
  color: #000000 !important; /* old IE */
  background-color: #000000 !important; /* Modern Browsers */
}
#app {
  margin-top: 60px;
  /* text-align: center; */
}
</style>