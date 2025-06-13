const htmlEl = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  htmlEl.classList.add("dark-theme");
  toggleBtn.textContent = "Light Mode";
} else {
  htmlEl.classList.remove("dark-theme");
  toggleBtn.textContent = "Dark Mode";
}

// Toggle theme and save
toggleBtn.addEventListener("click", () => {
  const isDark = htmlEl.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  toggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
});
