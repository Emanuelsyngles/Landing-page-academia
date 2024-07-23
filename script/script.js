const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
const mobile = document.querySelector(".mobile_ul");

mobile.addEventListener("click", () => {
  mobile.style.display = "block";
});
