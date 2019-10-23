const routes = [
  {
    path: '',
    components: {
      default: () =>import('layouts/LandingLayout.vue'),

    },
    children: [
      { path: '/page2', component: () => import('pages/Index.vue') },
      { path: '/page1', component: () => import('pages/Index.vue') }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
