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
<div class="preloader" v-if="reload"></div>
  <div id="wrapper">
    <Sidebar :class="sidebarClass" />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <Navbar @toggle-sidebar="toggleSidebar" />

        <ChatMe />
        <!-- Begin Page Content -->
        <div id="app">
          <h1
            class="h3 mb-0 text-gray-800 text-center mt-4"
            v-if="index <= 1 && index >= 0"
          >
            {{
              index === 0 ? "Tandatangan Petugas" : "Tandatangan Pelanggan"
            }}
          </h1>
          <h1 class="h3 mb-0 text-gray-800 text-center mt-3" v-if="index > 1">
            Nama Petugas dan Pelanggan
          </h1>
          <div class="row mt-4" v-if="index <= 1 && index >= 0">
            <div class="col-sm-1"></div>
            <div class="col-sm-10">
              <div class="row">
                <div class="col-sm-1"></div>
                <div class="col-sm-5">
                  <vueSignature
                    ref="signature"
                    :sigOption="option"
                    :h="'200px'"
                    :w="'300px'"
                    :disabled="disabled"
                    :defaultUrl="dataUrl"
                    class="mt-3 m-auto custom"
                  ></vueSignature>
                </div>
                <div class="col-sm-5">
                  <div class="text-center">
                    <!-- save -->
                    <button
                      class="btn blueButton mb-2 me-2 w-40"
                      type="button"
                      @click="confirmSave"
                    >
                      <i class="bi bi-file-check"> Simpan</i>
                    </button>
                    <!-- clear -->
                    <button
                      class="btn btn-danger mb-2 me-2 w-40"
                      type="button"
                      @click="clear"
                    >
                      <i class="bi bi-x"> Hapus</i>
                    </button>
                    <!-- undo -->
                    <button
                      class="btn btn-warning mb-2 me-2 w-40"
                      type="button"
                      @click="undo"
                    >
                      <i class="bi bi-arrow-counterclockwise"> Kembali</i>
                    </button>
                    <!-- watermark -->
                    <button
                      class="btn btn-success mb-2 me-2 w-40"
                      type="button"
                      @click="addWatermark"
                    >
                      <i class="bi bi-droplet-half"> Tandai</i>
                    </button>

                    <!-- disable -->
                    <button
                      class="btn btn-dark mb-2 me-2 w-40"
                      type="button"
                      @click="toggleDisabled"
                    >
                      <i class="bi bi-journal-x"> Hide</i>
                    </button>
                  </div>
                </div>
                <div class="col-sm-1"></div>
              </div>
            </div>
            <div class="col-sm-1"></div>
          </div>

          <!-- name -->
          <form
            @submit.prevent="submitNote"
            enctype="multipart/form-data"
            v-if="index > 1"
          >
            <div class="row mt-5">
              <div class="col-1"></div>
              <div class="col-10">
                <div class="mb-3">
                  <label for="petugas" class="form-label">Petugas</label>
                  <input
                    type="text"
                    class="form-control disable"
                    id="petugas"
                    placeholder="input petugas"
                    v-model="form.petugas"
                    :disabled="true"
                  />
                </div>
                <div class="mb-3">
                  <label for="supir" class="form-label">Pelanggan</label>
                  <input
                    type="text"
                    class="form-control"
                    id="supir"
                    placeholder="nama pelanggan"
                    v-model="form.supir"
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
                      to="/user-input-tumpukan"
                      class="btn btn-danger"
                      >Kembali</router-link
                    >
                  </div>
                  <div class="col-6">
                    <button type="submit" class="btn blueButton float-end">
                      Kirim
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-1"></div>
            </div>
          </form>
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
import vueSignature from "vue-signature";
import Swal from "sweetalert2";

export default {
  props: ["id"],
  name: "App",
  components: {
    vueSignature,
  },
  data() {
    return {
      option: {
        penColor: "rgb(0, 0, 0)",
        backgroundColor: "rgb(255,255,255)",
      },
      disabled: false,
      form: {
        petugas: "",
        supir: "",
      },
      signature: [],
      index: 0,
      role: null,
      note: [],
      tumpukans: [],
      reload: false
    };
  },
  methods: {
    submitNote() {
      this.reload = true;
      axios
        .post("https://10.11.10.243/backend/public/api/auth/notes", this.note, {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.submitTumpukans(response.data.data.id);
        })
        .catch((error) => {
          this.reload = false;
          console.error(error);
        });
    },

    submitTumpukans(id) {
      const requestData = [];

      this.tumpukans.forEach((item) => {
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
        // this.showInput = false;
        requestData.push(newData);
        console.log("test tumpukan: ", requestData);
      });

      requestData.forEach((objekTumpukan) => {
        objekTumpukan.id_note = id;
      });
      console.log("id: ", id);
      console.log("id_note: ", requestData.id_note);
      console.log("tumpukans: ", requestData);
      axios
        .post("https://10.11.10.243/backend/public/api/auth/tumpukan", requestData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.handleSubmit(id);
        })
        .catch((error) => {
          this.reload = false;
          console.error(error);
        });
    },
    handleSubmit(id) {
      let formData = new FormData();
      formData.append("petugas", this.form.petugas);
      formData.append("petugas_signature", this.signature[0]);
      formData.append("supir", this.form.supir);
      formData.append("supir_signature", this.signature[1]);
      formData.append("id_note", id);
      console.log(formData);
      axios
        .post("https://10.11.10.243/backend/public/api/auth/signatures", formData, {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log(response);
          this.reload = false;
          this.showAlert();
        });
      this.form.name = "";
    },

    showAlert() {
      // Use sweetalert2
      this.$swal("Data Berhasil di inputkan!!").then(() => {
        localStorage.removeItem("note");
        localStorage.removeItem("tumpukans");
        // Redirect to a specific page
        this.$router.push("/user-note");
      });
    },
    confirmSave() {
      Swal.fire({
        title: "Konfirmasi",
        text: `Apakah Anda yakin ingin menyimpan tandatangan ${
          this.index === 0 ? "Petugas" : "Pelanggan"
        } ?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
      }).then((result) => {
        if (result.isConfirmed) {
          this.save();
        }
      });
    },
    save() {
      // this.signature[this.index]= this.$refs.signature.save("image/svg+xml");
      this.signature[this.index] = this.$refs.signature.save();
      console.log("index awal :", this.index);
      console.log(
        "tandatangan :",
        this.signature[this.index],
        "index akhir :",
        this.index
      );
      this.index++;
      this.clear();
    },
    clear() {
      this.$refs.signature.clear();
    },
    undo() {
      this.$refs.signature.undo();
    },
    addWatermark() {
      this.$refs.signature.addWaterMark({
        text: "PT. Garam(Persero)",
        font: "20px Arial",
        style: "all",
        fillStyle: "red",
        strokeStyle: "blue",
        x: 100,
        y: 100,
        sx: 100,
        sy: 100,
      });
    },
    toggleDisabled() {
      this.disabled = !this.disabled;
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
        this.form.petugas = tokenPayload.name;
        if (role !== "user") {
          this.$router.push("/unauthorized");
        } else if (!header || !signature) {
          this.$router.push("/");
        }
        // success
        const note = localStorage.getItem("note");
        const tumpukans = localStorage.getItem("tumpukans");
        if (note) {
          this.note = JSON.parse(note);
        }
        if (tumpukans) {
          this.tumpukans = JSON.parse(tumpukans);
        }

        // test

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
  opacity: 0.9;
  left:0px; 
  top:0px; 
  width:100%; 
  height:100%; 
  z-index:999999; 
  background-color:#ffffff; 
  background-position:center center; 
  background-repeat:no-repeat; 
  background-image:url(/img/loader.gif);
}
</style>
