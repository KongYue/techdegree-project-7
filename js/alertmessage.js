const alert_container = document.getElementById("alert");
alert_container.innerHTML =
  '<div class="alert-banner"><p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p><p class="alert-banner-close">x</p></div>';
alert_container.addEventListener("click", e => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alert_container.style.display = "none";
  }
});
