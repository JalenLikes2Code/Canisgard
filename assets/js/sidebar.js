function toggleSection(header) {
  const next = header.nextElementSibling;
  if (next.style.display === "none") {
    next.style.display = "block";
  } else {
    next.style.display = "none";
  }
}
