function loadView(view: string) {
  // eslint-disable-next-line
  return () => import(/* webpackChunkName: "view-[request]" */ `@/pages/${view}.vue`)
}
export default [
  {
    path: "/",
    name: "home",
    component: loadView("Builder")
  },
  {
    path: '*',
    name: 'notfound',
    component: () => import('@/pages/404.vue')
}
];
