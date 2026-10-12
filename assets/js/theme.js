function keepLightTheme() {
  document.documentElement.setAttribute("data-theme", "light");
  const themeToggler = document.getElementById("theme-toggler");
  if (themeToggler) themeToggler.remove();
}

keepLightTheme();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", keepLightTheme, { once: true });
}
