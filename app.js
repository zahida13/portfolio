const toggle_button = document.querySelector(".toggle");
const nav = document.querySelector("nav");
const contact = document.querySelector(".contact");

toggle_button.addEventListener("click", function (e) {
  nav.classList.toggle("nav-show");
  contact.classList.toggle("button-show");
});

const li = document.querySelectorAll(".links");
const sec = document.querySelectorAll("section");

li.forEach((list) => {
  list.addEventListener("click", function (e) {
    nav.classList.remove("nav-show");
  });
});
function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  li.forEach((itx) => itx.classList.remove("active-nav"));
  li[len].classList.add("active-nav");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

ScrollReveal().reveal(".banner", { delay: 500, origin: "left" });
ScrollReveal().reveal("#about-me", { delay: 500, origin: "bottom" });
ScrollReveal().reveal("#services", { delay: 500, origin: "right" });
ScrollReveal().reveal("#projects", { delay: 500, origin: "left" });
ScrollReveal().reveal("#footer", { delay: 500, origin: "bottom" });
ScrollReveal().reveal(".banner h1", { delay: 500, origin: "left" });
