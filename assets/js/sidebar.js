function toggleSection(header) {
  const next = header.nextElementSibling;
  if (next.style.display === "none") {
    next.style.display = "block";
  } else {
    next.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".collapse-toggle");

  toggles.forEach(button => {
    button.addEventListener("click", function () {
      const content = this.nextElementSibling;

      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});
