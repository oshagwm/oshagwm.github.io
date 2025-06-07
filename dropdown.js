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

// Close all dropdowns unless the click was inside a .dropdown or the secret one
window.addEventListener('click', function (e) {
  const isInsideDropdown = e.target.closest('.dropdown');
  const isInsideSecret = e.target.closest('#secretDropdown');

  if (!isInsideDropdown && !isInsideSecret) {
    document.querySelectorAll('.dropdown-content').forEach((dropdown) => {
      dropdown.classList.remove('show');
    });
  }
});
