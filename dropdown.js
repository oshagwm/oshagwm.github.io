// Existing dropdown toggle function (unchanged)
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

// New code for logo flip and keypad sequence
document.addEventListener('DOMContentLoaded', () => {
  const flipCard = document.querySelector('.flip-card');
  const keys = document.querySelectorAll('.key');
  const secretDropdown = document.getElementById('secretDropdown');
  let inputSequence = [];
  const correctSequence = ['A', 'B', '1', 'C', '3'];

  // Toggle flip on logo click
  if (flipCard) {
    flipCard.addEventListener('click', (e) => {
      // Prevent flip if clicking a keypad button
      if (!e.target.classList.contains('key')) {
        flipCard.classList.toggle('flipped');
        // Reset sequence and hide dropdown when flipping back to logo
        if (!flipCard.classList.contains('flipped')) {
          inputSequence = [];
          secretDropdown.classList.remove('show');
        }
      }
    });
  }

  // Handle keypad button clicks
  keys.forEach((key) => {
    key.addEventListener('click', () => {
      const value = key.getAttribute('data-value');

      // If # is clicked, flip back to logo and hide dropdown
      if (value === '#') {
        flipCard.classList.remove('flipped');
        inputSequence = [];
        secretDropdown.classList.remove('show');
        return;
      }

      // Otherwise, process the sequence
      inputSequence.push(value);

      // Check sequence
      if (inputSequence.length === correctSequence.length) {
        if (inputSequence.join('') === correctSequence.join('')) {
          secretDropdown.classList.add('show'); // Show secret dropdown
        } else {
          inputSequence = []; // Reset on wrong sequence
        }
      }
    });
  });
});
