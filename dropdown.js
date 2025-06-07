// Dropdown toggle function
function toggleDropdown(id) {
  console.log(`Toggling dropdown: ${id}`);
  const dropdowns = document.querySelectorAll('.dropdown-content');

  dropdowns.forEach((dropdown) => {
    if (dropdown.id !== id) {
      dropdown.classList.remove('show');
    }
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.toggle('show');
  } else {
    console.error(`Dropdown with id ${id} not found`);
  }
}

// Close dropdowns on outside click
window.addEventListener('click', function (e) {
  if (!e.target.closest('.dropdown')) {
    console.log('Click outside dropdown, closing all');
    document.querySelectorAll('.dropdown-content').forEach((dropdown) => {
      dropdown.classList.remove('show');
    });
  }
});

// Logo flip and keypad sequence
document.addEventListener('DOMContentLoaded', () => {
  const flipCard = document.querySelector('.flip-card');
  const keys = document.querySelectorAll('.key');
  const secretDropdown = document.getElementById('secretDropdown');
  let inputSequence = [];
  const correctSequence = ['A', 'B', '1', 'C', '3'];

  if (!flipCard) {
    console.error('Flip card not found');
    return;
  }
  if (!secretDropdown) {
    console.error('Secret dropdown not found');
    return;
  }
  if (keys.length === 0) {
    console.error('No keypad buttons found');
    return;
  }

  console.log(`Found ${keys.length} keypad buttons`);

  flipCard.addEventListener('click', (e) => {
    if (!e.target.classList.contains('key')) {
      console.log('Logo clicked, toggling flip');
      flipCard.classList.toggle('flipped');
      if (!flipCard.classList.contains('flipped')) {
        inputSequence = [];
