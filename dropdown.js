function toggleDropdown() {
  const dropdown = document.getElementById('dropdownContent');
  dropdown.classList.toggle('show');
}

// Optional: Close dropdown if clicking outside
window.addEventListener('click', function (e) {
  const button = document.querySelector('.dropbtn');
  const dropdown = document.getElementById('dropdownContent');
  if (!button.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove('show');
  }
});
