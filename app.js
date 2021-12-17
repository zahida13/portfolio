const toggle_button = document.querySelector(".toggle");
const nav = document.querySelector("nav");
const contact = document.querySelector(".contact");

console.log(contact);
toggle_button.addEventListener("click", function (e) {
  nav.classList.toggle("nav-show");
  contact.classList.toggle("button-show");
});

const li = document.querySelectorAll(".links");
const sec = document.querySelectorAll("section");

function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  li.forEach((itx) => itx.classList.remove("active-nav"));
  li[len].classList.add("active-nav");
}
activeMenu();
window.addEventListener("scroll", activeMenu);
