import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/admin/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('../views/CompanyProfile.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      alias: '/login',
      meta: {
        bodyClass: 'custom-body-style', 
      },
    },
    {
      path: '/lupa-password',
      name: 'lupa-password',
      component: () => import('../views/LupaPasswordView.vue'),
    },
    {
      path: '/sso',
      name: 'sso',
      component: () => import('../views/SingelSignOn.vue'),
      alias: '/sso',
      meta: {
        bodyClass: 'custom-body-style', // Class khusus untuk halaman ini
      },
    },

    // admin
    {
      path: '/admin-dashboard',
      name: 'admin-dashboard',
      component: DashboardView
    },
    {
      path: '/admin-invoices',
      name: 'admin-invoices',
      component: () => import('../views/admin/Invoices.vue')
    },
    {
      path: '/admin-layanan',
      name: 'admin-layanan',
      component: () => import('../views/admin/Layanan.vue')
    },
    {
      path: '/admin-users',
      name: 'admin-users',
      component: () => import('../views/admin/UserView.vue')
    },
    {
      path: '/admin-input-user',
      name: 'admin-input-user',
      component: () => import('../views/admin/InputUserView.vue')
    },
    {
      path: '/admin-laporan/:id',
      name: 'admin-laporan',
      component: () => import('../views/admin/Laporan.vue'),
      props: true
    },
    {
      path: '/admin-profile',
      name: 'admin-profile',
      component: () => import('../views/admin/Profile.vue'),
    },



    // users
    {
      path: '/user-dashboard',
      name: 'user-dashboard',
      component: () => import('../views/user/DashboardView.vue')
    },
    {
      path: '/user-invoice',
      name: 'user-invoice',
      component: () => import('../views/user/MyInvoice.vue')
    },
    {
      path: '/user-layanan',
      name: 'user-layanan',
      component: () => import('../views/user/Layanan.vue')
    },
    {
      path: '/user-input-note',
      name: 'user-input-note',
      component: () => import('../views/user/InputNoteView.vue')
    },
    {
      path: '/user-input-tumpukan',
      name: 'user-input-tumpukan',
      component: () => import('../views/user/InputTumpukanView.vue'),
      // props: true
    },
    {
      path: '/user-signature',
      name: 'user-signature',
      component: () => import('../views/user/SignatureView.vue'),
      // props: true
    },

    {
      path: '/unauthorized',
      name: 'unauthorized',
      component: () => import('../views/Unauthorized.vue')
    },
    {
      path: '/user-laporan/:id',
      name: 'user-laporan',
      component: () => import('../views/user/Laporan.vue'),
      props: true,
      alias: '/laporan' , // Path alternatif yang akan ditampilkan di browser
    },
    {
      path: '/user-profile',
      name: 'user-profile',
      component: () => import('../views/user/Profile.vue'),
    },
    {
      path: '/crypto',
      name: 'crypto',
      component: () => import('../views/CriptoVue.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
    }
  ]
})


export default router
