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
        <h1 class="h3 mb-0 text-gray-800 text-center mt-4">Halaman Input Note</h1>
        <form
          @submit.prevent="kL == null ? handleSubmit():
            pump.id_keterangan != form.id_keterangan
              ? confirmDelete()
              : handleSubmit()
          "
          enctype="multipart/form-data"
        >
          <div class="headerNote">
            <div class="row">
              <div class="col-1"></div>
              <div class="col-10">
                <div class="row mb-3">
                  <label for="nama" class="form-label">Keteragan</label>
                  <select
                    v-model="form.id_keterangan"
                    class="form-select"
                    aria-label="Default select example"
                    required
                  >
                    <option disabled>Pilih Keterangan</option>
                    <option
                      v-for="item in keterangan"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ item.keterangan }}
                    </option>
                  </select>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="location" class="form-label">Lokasi</label>
                      <input
                        type="text"
                        class="form-control"
                        id="location"
                        v-model="form.location"
                        required
                        :disabled="true"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="truck" class="form-label">Nomor Truk</label>
                      <input
                        type="text"
                        class="form-control"
                        id="no_truck"
                        placeholder="nomor truk"
                        v-model="form.no_truck"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="location" class="form-label">Tanggal</label>
                      <input
                        type="date"
                        class="form-control"
                        id="date"
                        v-model="form.date"
                        :max="now.date"
                        :min="now.date"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="driver" class="form-label">Supir</label>
                      <input
                        type="text"
                        class="form-control"
                        id="driver"
                        placeholder="nama supir"
                        v-model="form.driver"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="container" class="form-label"
                        >Nomor Kontainer</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="no_container"
                        placeholder="nomor kontainer"
                        v-model="form.no_container"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="telp" class="form-label">No Telp</label>
                      <input
                        type="text"
                        class="form-control"
                        id="telp"
                        placeholder="nomor telepon"
                        v-model="form.telp"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="seal" class="form-label">Nomor Seal</label>
                      <input
                        type="text"
                        class="form-control"
                        id="no_seal"
                        placeholder="nomor seal"
                        v-model="form.no_seal"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="destination" class="form-label">Tujuan</label>
                      <input
                        type="text"
                        class="form-control"
                        id="destination"
                        placeholder="tujuan"
                        v-model="form.destination"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-6">
                    <router-link to="/user-note" class="btn btn-danger mb-5"
                      >Kembali</router-link
                    >
                  </div>
                  <div class="col-6">
                    <button
                      type="submit"
                      class="btn blueButton"
                      style="float: right"
                    >
                      Selanjutnya
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-1"></div>
            </div>
          </div>
        </form>

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
      form: {
        location: "",
        id_keterangan: "",
        keterangan: "",
        date: "",
        no_container: "",
        no_seal: "",
        destination: "",
        no_truck: "",
        driver: "",
        telp: "",
        user_id: "",
      },
      now: {},
      role: null,
      keterangan: [],
      pump: {},
      kL: null,
    };
  },
  mounted() {
    this.getCurrentDateTime();
  },
  methods: {
    async dataKeterangan() {
      try {
        const response = await axios.get(
          `https://10.11.10.243/backend/public/api/keterangan`
        );
        this.keterangan = response.data.data;
        console.log("test: ", this.keterangan);
      } catch (error) {
        console.error(error);
      }
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
        date: `${year}-${month}-${day}`,
        time: `${hours}:${minutes}:${seconds}`,
      };
      this.form.date = this.now.date;
    },
    handleSubmit() {
      console.log('kL: ', this.kL);
      console.log('pump: ', this.pump.id_keterangan);
      console.log('form: ', this.form.id_keterangan);
      for (let index = 0; index < this.keterangan.length; index++) {
        if (this.form.id_keterangan == this.keterangan[index].id) {
          this.form.keterangan = this.keterangan[index].keterangan;
        }
      }
      
      const data = JSON.stringify(this.form);
      if (!data) {
        this.showAlert();
      }
      localStorage.setItem("note", data);
      console.log("test data: ", this.form);
      this.$router.push({ name: "user-input-tumpukan" });
    },
    showAlert() {
      // Use sweetalert2
      this.$swal("Data yang anda inputkan kosong !!").then(() => {
        this.$router.push("/user-note");
      });
    },
    confirmDelete() {
      Swal.fire({
        title: `Anda yakin merubah keterangan?`,
        text: `Semua data tumpukan ${this.kL} akan terhapus!!`,
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#3085d6",
        confirmButtonColor: "#d33",
        cancelButtonText: "Batal",
        confirmButtonText: "Yakin",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("tumpukans");
          this.handleSubmit();
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

        this.role = tokenPayload.role; // Ambil role pengguna dari payload
        this.form.user_id = tokenPayload.id;
        this.form.location = tokenPayload.namaLokasi;
        if (this.role !== "user") {
          this.$router.push("/unauthorized");
        } else if (!header || !signature) {
          this.$router.push("/");
        }
        // success
        this.dataKeterangan();
        const data = localStorage.getItem("note");
        if (data) {
          this.pump = JSON.parse(data);
          this.form = JSON.parse(data);
          this.kL = this.form.keterangan;
          this.form.user_id = tokenPayload.id;
          // this.keterangan.keterangan = this.form.keterangan
          // this.keterangan.id = this.form.id_keterangan
          console.log("pump: ", this.pump);
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
  
<style scoped>
.customMargin {
  margin-top: 10px;
  margin-bottom: 50px;
}
</style>