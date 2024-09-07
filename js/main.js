let darkmode = localStorage.getItem("darkmode");
const theme = document.getElementById("theme");

const enable = () => {
 document.body.classList.add("darkmode"),
  localStorage.setItem("darkmode", "active");
};
const disable = () => {
 document.body.classList.remove("darkmode");
 localStorage.setItem("darkmode", null);
};
if (darkmode === "active") enable();
theme.addEventListener("click", () => {
 darkmode = localStorage.getItem("darkmode");
 darkmode !== "active" ? enable() : disable();
});
