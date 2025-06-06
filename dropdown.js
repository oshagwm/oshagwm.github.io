function toggleDropdown(id) {
  const dropdowns = document.querySelectorAll('.dropdown-content');

  // Close all other dropdowns
  dropdowns.forEach((dropdown) => {
    if (dropdown.id !== id) {
      dropdown.classList.remove('show');
    }
  });

  // Toggle the clicked dropdown
  const target = document.getElementById(id);
  if (target) {
    target.classList.toggle('show');
  }
}

// Close all dropdowns if the click is outside the entire dropdown area
window.addEventListener('click', function (e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-content').forEach((dropdown) => {
      dropdown.classList.remove('show');
    });
  }
});
