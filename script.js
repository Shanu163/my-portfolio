// Toggle for project 1
function toggleDetails(id, element) {
  const details = document.getElementById(id);
  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block";
    element.textContent = "[Read Less]";
  } else {
    details.style.display = "none";
    element.textContent = "[Read More]";
  }
}

// Toggle for project 2
function toggleDetails2(id, element) {
  const details = document.getElementById(id);
  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block";
    element.textContent = "[Read Less]";
  } else {
    details.style.display = "none";
    element.textContent = "[Read More]";
  }
}
