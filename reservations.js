function nextForm() {
  document.getElementById("form1").classList.add("hidden");
  document.getElementById("form2").classList.remove("hidden");
  document.getElementById("step1").classList.remove("active");
  document.getElementById("step2").classList.add("active");
}

function prevForm() {
  document.getElementById("form2").classList.add("hidden");
  document.getElementById("form1").classList.remove("hidden");
  document.getElementById("step1").classList.remove("active");
  document.getElementById("step2").classList.add("active");
}

function openModal() {
  document.getElementById("modal").classList.add("active");
}

function closeModal() {
  document.getElementById("modal").classList.remove("active");
}
