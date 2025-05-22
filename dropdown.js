function toggleDropdown() {
  const dropdown = document.getElementById('dropdownContent');
  const arrow = document.getElementById('arrow');

  dropdown.classList.toggle('show');
  arrow.classList.toggle('rotate');
}
