var elBirta = document.querySelector(".birta");

var elModalShadow = document.querySelector(".ikkta");

function openModal() {
  elModal.classList.add("modal__open");
  elModalShadow.style.display = "block";
}
function closeModal() {
  elModal.classList.remove("modal__open");
  elModalShadow.style.display = "none";
}
