function nextForm() {
  const form1 = document.getElementById("form1");
  if (!form1.checkValidity()) {
    form1.reportValidity();
    return;
  }

  form1.classList.add("hidden");
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

document.getElementById("form2").addEventListener("submit", function (e) {
  e.preventDefault();
  openModal();
});
