<template>
  <div class="container">
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Buat Akun!</h1>
              </div>
              <form class="user" @submit.prevent="registerUser">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-user mb-2"
                    id="name"
                    aria-describedby="name"
                    placeholder="Masukkan nama"
                    v-model="name"
                  />
                  <input
                    type="email"
                    class="form-control form-control-user mb-2"
                    id="email"
                    aria-describedby="email"
                    placeholder="Masukkan email"
                    v-model="email"
                  />
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <span class="input-group-text">+62</span>
                    </div>
                    <input
                      type="number"
                      class="form-control form-control-user"
                      id="noHp"
                      aria-describedby="noHp"
                      placeholder="8972398127391"
                      v-model="noHp"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  class="btn btn-primary btn-user btn-block"
                >
                  Daftar
                </button>
              </form>
              <hr />
              <div class="text-center">
                <router-link class="small" to="/login"
                  >Sudah punya akun? Login!</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  mounted() {
    const body = document.querySelector("body");
    body.style.backgroundImage = "url(/img/bg.webp)";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
  },
  data() {
    return {
      name: null,
      email: null,
      noHp: null,
      metodePembayaran: "",
    };
  },
  methods: {
    registerUser() {
      if (this.name == null || this.email == null || this.noHp == null) {
        Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Terdapat data yang belum anda isi, mohon lengkapi semua data seblum mendaftar!!",
                    confirmButtonText: "OK",
        })
      }else{
         const formData = new FormData();
    formData.append("name", this.name);
    formData.append("email", this.email);
    formData.append("no_hp", this.noHp);

    // Kirim permintaan POST menggunakan Axios
    axios
        .post(
            "https://backend-webmember.lumirainternational.com/api/auth/register",
            formData
        )
        .then((response) => {
            console.log(response.data);
            // Periksa status code respons
            if (response.status === 201) {
                // Menampilkan SweetAlert sukses
                Swal.fire({
                    icon: "success",
                    title: "Pendaftaran berhasil!",
                    text: "Silahkan cek email untuk aktivasi akun.",
                    confirmButtonText: "OK",
                }).then(() => {
                    // Arahkan pengguna ke rute '/'
                    this.$router.push("/");
                });
            } else if (response.status === 400) {
                // Menampilkan SweetAlert dengan pesan dari response
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Email atau nomor hp yang anda inputkan sama, data dilarang sama!!",
                });
            } else {
                // Menampilkan SweetAlert dengan pesan umum
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Terjadi kesalahan saat mendaftar.",
                });
            }
        })
        .catch((error) => {
            console.error(error);
            if (error.response && error.response.status === 400) {
                // Menampilkan SweetAlert dengan pesan dari response
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Email atau nomor hp yang anda inputkan sama, data dilarang sama!!",
                });
            } else {
                // Menampilkan SweetAlert error umum
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Terjadi kesalahan saat mendaftar.",
                });
            }
        });

      }
   },

  },
};
</script>
