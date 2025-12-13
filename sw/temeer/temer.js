const htmlEl = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  htmlEl.classList.add("dark-theme");
  toggleBtn.classList.remove("bi-moon-fill");
  toggleBtn.classList.add("bi-sun-fill");
} else {
  htmlEl.classList.remove("dark-theme");
  toggleBtn.classList.remove("bi-sun-fill");
  toggleBtn.classList.add("bi-moon-fill");
}

toggleBtn.addEventListener("click", () => {
  const isDark = htmlEl.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

function updateIcon(isDark) {
  icon.classList.remove("bi-moon-fill", "bi-sun-fill");
  icon.classList.add(isDark ? "bi-sun-fill" : "bi-moon-fill");
}
