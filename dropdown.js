// dropdown.js

// -----------------------------
// Dropdown Menu Toggle Logic
// -----------------------------
function toggleDropdown(id) {
  const allDropdowns = document.querySelectorAll('.dropdown-content');

  // Close all dropdowns except the target one
  allDropdowns.forEach(dropdown => {
    if (dropdown.id !== id) {
      dropdown.classList.remove('show');
    }
  });

  // Toggle the requested dropdown
  const targetDropdown = document.getElementById(id);
  if (targetDropdown) {
    targetDropdown.classList.toggle('show');
  }
}

// Close all dropdowns when clicking outside any dropdown area
window.addEventListener('click', (event) => {
  // If the click was not inside any .dropdown element, close everything
  if (!event.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
      dropdown.classList.remove('show');
    });
  }
});

// -----------------------------
// Flip Card + Secret Keypad Logic
// -----------------------------
document.addEventListener('DOMContentLoaded', () => {
  const flipCard = document.querySelector('.flip-card');
  const keys = document.querySelectorAll('.key');
  const secretDropdown = document.getElementById('secretDropdown');

  // Secret sequence to unlock hidden content
  const correctSequence = ['A', 'B', '1', 'C', '3'];
  let inputSequence = [];

  // Toggle flip card when clicking the logo area (ignore keypad clicks)
  if (flipCard) {
    flipCard.addEventListener('click', (e) => {
      // Prevent flip if user clicked a keypad button
      if (e.target.classList.contains('key')) {
        return;
      }

      flipCard.classList.toggle('flipped');

      // When flipping back to front, reset sequence and hide secret
      if (!flipCard.classList.contains('flipped')) {
        inputSequence = [];
        if (secretDropdown) {
          secretDropdown.classList.remove('show');
        }
      }
    });
  }

  // Handle keypad button presses
  keys.forEach(key => {
    key.addEventListener('click', () => {
      const value = key.getAttribute('data-value');
      if (value) {
        inputSequence.push(value);

        // Check if we've reached the required length
        if (inputSequence.length === correctSequence.length) {
          const entered = inputSequence.join('');
          const correct = correctSequence.join('');

          if (entered === correct) {
            // Success → show secret dropdown
            if (secretDropdown) {
              secretDropdown.classList.add('show');
            }
          } else {
            // Wrong sequence → reset
            inputSequence = [];
          }
        }
      }
    });
  });
});
