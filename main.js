import "./assets/css/tailus.css";

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    const mainHeader = document.querySelector("#header");
    const menuBtn = document.querySelector("#menu-btn");

    if (mainHeader && menuBtn) {
      menuBtn.addEventListener("click", () => {
        mainHeader.dataset.state = mainHeader.dataset.state === "active" ? "closed" : "active";
      });
    }
  }, 200);
});