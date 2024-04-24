export default defineNuxtRouteMiddleware((from, to) => {
  if (localStorage.getItem("admin")) {
    return navigateTo("/admin");
  } else {
    return navigateTo("/admin/auth");
  }
});
