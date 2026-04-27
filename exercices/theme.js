const themeToggle = document.getElementById("themeToggle");

function getPreferredTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    return savedTheme;
  }

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggle) themeToggle.textContent = "☀️";
  } else {
    document.body.classList.remove("dark-mode");
    if (themeToggle) themeToggle.textContent = "🌙";
  }
}

applyTheme(getPreferredTheme());

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    const newTheme = isDark ? "dark" : "light";

    localStorage.setItem("theme", newTheme);
    themeToggle.textContent = isDark ? "☀️" : "🌙";
  });
}