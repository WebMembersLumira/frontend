<template>
  <div class="preloader"></div>
</template>

<script>
export default {
  data() {
    return {
    //   secretKey: "uwgiuewgfeiwugfweuif",
    };
  },
  mounted() {
    const body = document.querySelector("body");
    body.style.backgroundImage = "url(/img/wilayah.png)";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
  },
  methods: {
    
  },
  created() {
    const currentTimeUTC = new Date().toUTCString();
    console.log("Waktu Sekarang (UTC):", new Date());

    const token = localStorage.getItem("ssoAccess");
    console.log("test token: ", token);

    window.location.href = `http://localhost:3000/dashboard/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY5NzAwOTQ5NiwiZXhwIjoxNjk3MDEzMDk2LCJuYmYiOjE2OTcwMDk0OTYsImp0aSI6IkhEYTFRZ3hQTktROGoxYTkiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJpZCI6MSwiZ2FtYmFyIjoiZGVmYXVsdC5qcGciLCJuYW1lIjoiYWRtaW4iLCJrb2RlTG9rYXNpIjoiMDAwMSIsIm5hbWFMb2thc2kiOiJLYWxpYW5nZXQiLCJyb2xlIjoiYWRtaW4ifQ.M7FvO1Ek4AzNn7DACRSv6WA0y7CRgN7b_P-hIF6e2LE`;

    // if (token) {
    //   try {
    //     const tokenPayload = JSON.parse(atob(token.split(".")[1])); // Mendekode bagian payload dari token JWT
    //     const expTimestamp = tokenPayload.exp;

    //     const expDate = new Date(expTimestamp * 1000); // Konversi Unix Timestamp ke JavaScript Date

    //     console.log("Waktu Kedaluwarsa (UTC):", expDate); // Tampilkan waktu kedaluwarsa dalam format UTC

    //     if (new Date() > expDate) {
    //       console.log("Keluar");
    //       localStorage.removeItem("ssoAccess");
    //       this.$router.push("/");
    //     } else {
    //       window.location.href = `http://localhost:3000/dashboard/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY5NzAwOTQ5NiwiZXhwIjoxNjk3MDEzMDk2LCJuYmYiOjE2OTcwMDk0OTYsImp0aSI6IkhEYTFRZ3hQTktROGoxYTkiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJpZCI6MSwiZ2FtYmFyIjoiZGVmYXVsdC5qcGciLCJuYW1lIjoiYWRtaW4iLCJrb2RlTG9rYXNpIjoiMDAwMSIsIm5hbWFMb2thc2kiOiJLYWxpYW5nZXQiLCJyb2xlIjoiYWRtaW4ifQ.M7FvO1Ek4AzNn7DACRSv6WA0y7CRgN7b_P-hIF6e2LE`;
    //       // window.location.href = `http://localhost:3000/dashboard`;
    //     }
    //   } catch (error) {
    //     console.error("Error decoding token:", error);
    //     this.$router.push("/");
    //   }
    // } else {
    //   this.$router.push("/"); // Tindakan jika token tidak ada (pengguna belum terautentikasi)
    // }
  },
};
</script>

<style scoped>
.preloader {
  position: fixed;
  opacity: 0.7;
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
</style>