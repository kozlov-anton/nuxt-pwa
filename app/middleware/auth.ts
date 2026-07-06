const PUBLIC_ROUTES = ["/login", "/register", "/confirm"];

export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser();
  if (PUBLIC_ROUTES.includes(to.path)) return;
  if (!user.value) return navigateTo("/login");
});
