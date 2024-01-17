<script setup>
import Sidebar from "../../components/Sidebar.vue";
import Navbar from "../../components/Navbar-Admin.vue";
import Footer from "../../components/Footer.vue";
import AddUser from "../../components/AddUser.vue";
import { ref } from "vue";

const sidebarToggled = ref(false);
const sidebarClass = ref("");

const toggleSidebar = () => {
  sidebarToggled.value = !sidebarToggled.value;
  sidebarClass.value = sidebarToggled.value ? "toggle-sidebar" : "";
};
</script>
<template>
  <!-- Page Wrapper -->
  <div id="wrapper">
    <Sidebar :class="sidebarClass" />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <Navbar @toggle-sidebar="toggleSidebar" />

        <!-- Begin Page Content -->
        <h1 class="h3 mb-0 text-gray-800 text-center">Halaman User</h1>
        <div class="row">
          <div class="col-1"></div>
          <div class="col-10">
            <div class="row mt-5">
              <div class="col-sm-3">
                <!-- <router-link
                  class="btn blueButton me-2"
                  to="/admin-input-user"
                >
                  <i class="bi bi-plus"></i>
                </router-link> -->
              </div>
              <div class="col-sm-9"></div>
            </div>

            <div class="table-responsive">
              <div v-if="!ready" class="preloader"></div>
              <DataTable class="display table table-striped" v-if="ready">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Email</th>
                    <th scope="col">Status</th>
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in user" :key="item.id">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td>
                      <i
                        class="bi bi-hourglass-split text-warning"
                        v-if="item.status == '0'"
                      ></i>
                      <i
                        class="bi bi-check-lg text-success"
                        v-if="item.status == '1'"
                      ></i>
                      <i
                        class="bi bi-x-lg text-danger"
                        v-if="item.status == '2'"
                      ></i>
                    </td>
                    <td class="pe-5">
                      <div class="row">
                        <div class="col-4">
                          <a
                            target="_blank"
                            :href="
                              'https://api.whatsapp.com/send?phone=' + item.telp
                            "
                          >
                            <div
                              class="whatsapp-icon"
                              :class="{ active: showChatBox }"
                              @click="toggleChatBox"
                            >
                              <i class="fab fa-whatsapp"></i>
                            </div>
                          </a>
                        </div>
                        <div class="col-4">
                          <button
                            v-if="item.role != 'admin'"
                            @click="confirmDelete(item.id)"
                            class="btn btn-danger customDetail"
                          >
<i class="bi bi-x-circle"></i>
                          </button>
                        </div>
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
  <!-- End of Page Wrapper -->
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
      user: [],
      ready: null
    };
  },
  methods: {
    // dengan token 
    async fetchData() {
      const response = await axios.get("https://backend-webmember.lumirainternational.com/api/auth/list-user", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      this.user = response.data.data;
      this.ready = true;
    },
    confirmDelete(id) {
      Swal.fire({
        title: "Konfirmasi",
        text: "Apakah Anda yakin ingin menghapus item ini?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteItem(id);
        }
      });
    },
    deleteItem(id) {
      axios
        .delete(`https://backend-webmember.lumirainternational.com/api/auth/user/${id}`, {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log(response.data);
          this.ready = false;
          this.fetchData();
        })
        .catch((error) => {
          console.error(error);
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
        const level = tokenPayload.level;
        console.log('level:', level);
        if (level !== "1") {
          this.$router.push("/unauthorized");
        } else if (!header || !signature) {
          this.$router.push("/");
          sessionStorage.removeItem("token");
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
.whatsapp-icon {
  background-color: #25d366;
  color: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 24px;
  transition: background-color 0.3s ease;
}

.whatsapp-icon:hover{
  background-color: #1aac50;
}

a{
  text-decoration: none;
}

@media (max-width: 768px) {
  h1 {
    font-size: 30px;
  }
  .customDetail {
    margin-left: 20px !important;
  }
}
</style>

