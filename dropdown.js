function toggleDropdown() {
  const dropdown = document.getElementById('dropdownContent');
  const arrow = document.getElementById('arrow');

  dropdown.classList.toggle('show');
  arrow.classList.toggle('rotate');
}

document.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll(".dropbtn");

  dropdownButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const content = this.nextElementSibling;

      // Close all dropdowns except the one clicked
      document.querySelectorAll(".dropdown-content").forEach((el) => {
        if (el !== content) {
          el.style.display = "none";
        }
      });

      // Toggle current dropdown
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });

  // Close dropdowns when clicking outside
  window.addEventListener("click", function (e) {
    if (!e.target.matches(".dropbtn")) {
      document.querySelectorAll(".dropdown-content").forEach((el) => {
        el.style.display = "none";
      });
    }
  });
});
