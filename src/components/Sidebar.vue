<template>
  <!-- Sidebar -->
  <ul
    class="navbar-nav bg-gradient-light sidebar sidebar-dark accordion"
    id="accordionSidebar"
    :class="{ toggled: sidebarToggled }"
  >
    <!-- Sidebar - Brand -->
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="#"
    >
      <div class="sidebar-brand-icon mt-2">
        <!-- <img src="/img/logo.png" alt="logo" width="50" /> -->
      </div>
      <div class="sidebar-brand-text ms-3">
                <span class="text-primary">Alicorn<span class="text-warning">bot</span></span>
      </div>
    </a>

    <!-- Divider -->
    <!-- <hr class="sidebar-divider my-0 mt-5"> -->

    <!-- Heading -->
    <div class="sidebar-heading mt-5 text-primary">Menu</div>
    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
      <router-link
        class="nav-link text-primary"
        to="/admin-dashboard"
        active-class="font-weight-bold active-link"
      >
        <i class="bi bi-speedometer2 text-primary"></i>
        <span>Dashboard</span>
      </router-link>
    </li>

    <!-- Nav Item - note -->
    <li class="nav-item">
      <router-link
        class="nav-link text-primary"
        to="/admin-layanan"
        active-class="font-weight-bold text-primary active-link"
      >
        <i class="bi bi-journal-text text-primary"></i>
        <span>Layanan</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading text-primary">Langganan</div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
      <a
        class="nav-link collapsed text-primary"
        href="#"
        data-toggle="collapse"
        data-target="#collapsePages"
        aria-expanded="true"
        aria-controls="collapsePages"
      >
        <i class="fas fa-fw fa-folder text-primary"></i>
        <span>Invoices</span>
      </a>
      <div
        id="collapsePages"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Management Invoice</h6>
          <router-link class="collapse-item" to="/admin-invoices">
            <span>Pending</span>
          </router-link>
          <router-link class="collapse-item" to="/">
            <span>Aktif</span>
          </router-link>
          <router-link class="collapse-item" to="/">
            <span>Berakhir</span>
          </router-link>
          <router-link class="collapse-item" to="/">
            <span>Perpanjang</span>
          </router-link>
        </div>
      </div>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />
     <li class="nav-item">
      <router-link
        class="nav-link text-primary"
        to="/admin-users"
        active-class="font-weight-bold text-primary active-link"
      >
        <i class="bi bi-journal-text text-primary"></i>
        <span>Users</span>
      </router-link>
    </li>
  </ul>
  <!-- End of Sidebar -->
</template>
<script>
export default {
  data() {
    return {
      sidebarToggled: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarToggled = !this.sidebarToggled;
    },
  },
};
</script>

<style>
@media (max-width: 576px) {
  /* Gaya CSS untuk menyembunyikan sidebar saat sidebarToggled bernilai false */
  .sidebar {
    display: none;
  }
}
/* Gaya CSS untuk menampilkan sidebar saat sidebarToggled bernilai true */
.toggle-sidebar {
  display: block !important;
  /* Tambahkan gaya CSS lain yang Anda inginkan untuk tampilan sidebar yang ditampilkan */
}
.nav-link.active-link,
.nav-link > i {
  font-weight: bold;
  color: #061387 !important;
}

.nav-link.active-link::before {
  content: "";
  display: block;
  width: 50%;
  height: 3px;
  background-color: #061387;
  position: absolute;
  bottom: 0;
}
</style>