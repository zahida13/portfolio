const toggle_button = document.querySelector(".toggle");
const nav = document.querySelector("nav");
const contact = document.querySelector(".contact");

console.log(contact);
toggle_button.addEventListener("click", function (e) {
  nav.classList.toggle("nav-show");
  contact.classList.toggle("button-show");
});
