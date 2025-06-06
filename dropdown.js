function toggleDropdown(id) {
  const dropdowns = document.querySelectorAll('.dropdown-content');

  dropdowns.forEach((dropdown) => {
    if (dropdown.id !== id) {
      dropdown.style.display = 'none';
    }
  });

  const target = document.getElementById(id);
  if (target) {
    target.style.display = target.style.display === 'block' ? 'none' : 'block';
  }
}

// Close dropdowns when clicking outside of dropdowns or buttons
window.addEventListener('click', function (e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-content').forEach((dropdown) => {
      dropdown.style.display = 'none';
    });
  }
});
