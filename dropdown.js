function toggleDropdown(id) {
  const dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach((dropdown) => {
    if (dropdown.id !== id) {
      dropdown.style.display = 'none';
    }
  });

  const target = document.getElementById(id);
  target.style.display = target.style.display === 'block' ? 'none' : 'block';
}

window.addEventListener('click', function (e) {
  if (!e.target.matches('.dropbtn')) {
    document.querySelectorAll('.dropdown-content').forEach((dropdown) => {
      dropdown.style.display = 'none';
    });
  }
});
