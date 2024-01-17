<script setup>
import Sidebar from "../../components/Sidebar.vue";
import Navbar from "../../components/Navbar-Admin.vue";
import Footer from "../../components/Footer.vue";
import { ref } from 'vue';

const sidebarToggled = ref(false);
const sidebarClass = ref('');

const toggleSidebar = () => {
  sidebarToggled.value = !sidebarToggled.value;
  sidebarClass.value = sidebarToggled.value ? 'toggle-sidebar' : '';
};
</script>
<template>
  <div id="wrapper">
    <Sidebar :class="sidebarClass"/>

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <Navbar @toggle-sidebar="toggleSidebar"/>

        <!-- Begin Page Content -->
        <h1 class="h3 mb-0 text-gray-800 text-center">Input Data User</h1>
        <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
          <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
              <div class="mb-3">
                <label for="nama" class="form-label">Nama</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="input nama"
                  v-model="form.name"
                />
              </div>
              <div class="mb-3">
                <label for="nama" class="form-label">Lokasi</label>
                <select
                      v-model="selectedLokasi"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option disabled>Pilih Lokasi</option>
                      <option
                        v-for="item in lokasi"
                        :key="item.id"
                        :value="{
                          kodeData: item.kodeData,
                          namaData: item.namaData,
                        }"
                      >
                        {{ item.namaData }}
                      </option>
                    </select>
              </div>
              <div class="mb-3">
                <label for="nik" class="form-label">NIK</label>
                <input
                  type="number"
                  class="form-control"
                  id="nik"
                  placeholder="input nik"
                  v-model="form.nik"
                />
              </div>
              <div class="mb-3">
                <label for="telp" class="form-label">Telp</label>
                <input
                  type="number"
                  class="form-control"
                  id="telp"
                  placeholder="input telp"
                  v-model="form.telp"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="input email"
                  v-model="form.email"
                />
              </div>
            </div>
            <div class="col-1"></div>
          </div>

          <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
              <div class="row">
                <div class="col-6">
                  <router-link
                    to="/admin-users"
                    class="btn btn-danger mb-5"
                    >Kembali</router-link
                  >
                </div>
                <div class="col-6">
                  <button
                    type="submit"
                    class="btn blueButton"
                    style="float:right"
                  >
                    Kirim
                  </button>
                </div>
              </div>
            </div>
            <div class="col-1"></div>
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
export default {
  data() {
    return {
      form: {
        name: "",
        kodeData: "",
        namaData: "",
        lokasi: "",
        nik: "",
        telp: "",
        email: "",
        password: "",
      },
      lokasi: [],
      selectedLokasi: []
    };
  },
  methods: {
    async dataLokasi() {
      try {
        const response = await axios.get(`https://10.11.10.243/backend/public/api/lokasi`);
        this.lokasi = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },
    handleSubmit() {
      let formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("kodeLokasi", this.selectedLokasi.kodeData);
      formData.append("namaLokasi", this.selectedLokasi.namaData);
      formData.append("nik", this.form.nik);
      formData.append("telp", this.form.telp);
      formData.append("email", this.form.email);
      formData.append("password", this.form.password);
      console.log(formData);
      axios
        .post("http://localhost:8000/api/auth/register", formData, {
          headers: {
            Authorization: 'Bearer ' + sessionStorage.getItem('token')
          }
        })
        .then((response) => {
          console.log(response);
        });
      this.form.name = "";
      this.showAlert();
    },

    showAlert() {
      // Use sweetalert2
      this.$swal("Data Berhasil di inputkan!!").then(() => {
        // Redirect to a specific page
        this.$router.push("/admin-users");
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
          sessionStorage.removeItem("token")
          this.$router.push("/");
        } else {
          console.log("Aman");
        }
        const role = tokenPayload.role; // Ambil role pengguna dari payload
        this.name = tokenPayload.name;
        this.alamat = tokenPayload.alamat;
        if (role !== "admin") {
          this.$router.push("/unauthorized");
        } else if (!header || !signature) {
          this.$router.push("/");
          localStorage.removeItem("token");
        }
        // success
        this.dataLokasi();
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
.customMargin {
  margin-top: 10px;
  margin-bottom: 50px;
}
</style>