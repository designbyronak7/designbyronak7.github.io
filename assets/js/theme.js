const STORAGE_KEY = "theme";
const THEME_ATTR = "data-theme";

const themes = {
  LIGHT: "light",
  DARK: "dark",
};

initTheme();

function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  const defaultTheme = savedTheme === themes.DARK ? themes.DARK : themes.LIGHT;
  setTheme(defaultTheme);
}

function toggleTheme() {
  const newTheme = getTheme() === themes.DARK ? themes.LIGHT : themes.DARK;
  setTheme(newTheme);
  localStorage.setItem(STORAGE_KEY, newTheme);
}

function getTheme() {
  return document.documentElement.getAttribute(THEME_ATTR);
}

function setTheme(value) {
  document.documentElement.setAttribute(THEME_ATTR, value);
}
