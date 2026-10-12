const themeToggleSelector = "#theme-toggler, .theme-toggler, [data-theme-toggle], [data-theme-switch]";

if (document.head && !document.getElementById("portfolio-light-only")) {
  const lightOnlyStyle = document.createElement("style");
  lightOnlyStyle.id = "portfolio-light-only";
  lightOnlyStyle.textContent = `:root { color-scheme: light !important; } ${themeToggleSelector} { display: none !important; }`;
  document.head.appendChild(lightOnlyStyle);
}

function enforceLightTheme() {
  const root = document.documentElement;
  if (root.getAttribute("data-theme") !== "light") {
    root.setAttribute("data-theme", "light");
  }
  if (root.style.colorScheme !== "light") {
    root.style.colorScheme = "light";
  }
  document.querySelectorAll(themeToggleSelector).forEach((toggle) => toggle.remove());
}

enforceLightTheme();

if ("MutationObserver" in window) {
  const lightThemeObserver = new MutationObserver(enforceLightTheme);
  lightThemeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
    childList: true,
    subtree: true
  });
}
