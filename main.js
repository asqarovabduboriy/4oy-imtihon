document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("toggle-theme");

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  });
});

document
  .querySelector('.searchbox [type="reset"]')
  .addEventListener("click", function () {
    this.parentNode.querySelector("input").focus();
  });
