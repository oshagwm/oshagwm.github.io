
// Dropdown toggle function
function toggleDropdown(id) {
  const dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach((dropdown) => {
    if (dropdown.id !== id) {
      dropdown.classList.remove('show');
    }
  });
  const target = document.getElementById(id);
  if (target) {
    target.classList.toggle('show');
  }
}

window.addEventListener('click', function (e) {
  if (!e.target.closest('.dropdown') && !e.target.closest('.flip-card')) {
    document.querySelectorAll('.dropdown-content').forEach((dropdown) => {
      dropdown.classList.remove('show');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const flipCard = document.querySelector('.flip-card');
  const keys = document.querySelectorAll('.key');
  const secretDropdown = document.getElementById('secretDropdown');
  let inputSequence = [];
  const correctSequence = ['A', 'B', '1', 'C', '3'];

  if (!flipCard || !secretDropdown || keys.length === 0) return;

  flipCard.addEventListener('click', (e) => {
    if (!e.target.classList.contains('key')) {
      flipCard.classList.toggle('flipped');
      if (!flipCard.classList.contains('flipped')) {
        inputSequence = [];
      }
    }
  });

  keys.forEach((key) => {
    key.addEventListener('click', (e) => {
      e.stopPropagation();
      inputSequence.push(key.textContent.trim());
      if (inputSequence.join(',') === correctSequence.join(',')) {
        secretDropdown.classList.toggle('show');
        inputSequence = [];
      } else if (inputSequence.length >= correctSequence.length) {
        inputSequence = [];
      }
    });
  });
});
