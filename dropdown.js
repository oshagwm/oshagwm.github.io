// dropdown.js

// ================================================
// Dropdown Menu Logic (Projects & Interests)
// ================================================

/**
 * Toggles the visibility of a dropdown by ID and closes all others.
 * @param {string} id - The ID of the dropdown-content to toggle
 */
function toggleDropdown(id) {
  const dropdowns = document.querySelectorAll('.dropdown-content');

  // Close all dropdowns except the target
  dropdowns.forEach(dropdown => {
    if (dropdown.id !== id) {
      dropdown.classList.remove('show');
    }
  });

  // Toggle the requested dropdown
  const target = document.getElementById(id);
  if (target) {
    target.classList.toggle('show');
  }
}

// Close all dropdowns when clicking outside any dropdown
window.addEventListener('click', (event) => {
  // Only close if click was not inside a .dropdown element
  if (!event.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
      dropdown.classList.remove('show');
    });
  }
});

// ================================================
// Flip Card + Secret Keypad Logic
// ================================================

document.addEventListener('DOMContentLoaded', () => {
  const flipCard = document.querySelector('.flip-card');
  const keys = document.querySelectorAll('.key');
  const secretDropdown = document.getElementById('secretDropdown');

  // The secret code to unlock the hidden dropdown
  const correctSequence = ['A', 'B', '1', 'C', '3'];
  let currentSequence = [];

  // Toggle flip on logo click (skip if clicking a key)
  if (flipCard) {
    flipCard.addEventListener('click', (event) => {
      // Prevent flip if the target is a keypad button
      if (event.target.classList.contains('key')) {
        return;
      }

      flipCard.classList.toggle('flipped');

      // Reset sequence and hide secret when flipping back to front
      if (!flipCard.classList.contains('flipped')) {
        currentSequence = [];
        if (secretDropdown) {
          secretDropdown.classList.remove('show');
        }
      }
    });
  }

  // Handle each keypad button press
  keys.forEach(key => {
    key.addEventListener('click', () => {
      const value = key.getAttribute('data-value');
      if (value) {
        currentSequence.push(value);

        // Check if sequence is complete
        if (currentSequence.length === correctSequence.length) {
          const entered = currentSequence.join('');
          const expected = correctSequence.join('');

          if (entered === expected) {
            // Success: show secret dropdown
            if (secretDropdown) {
              secretDropdown.classList.add('show');
            }
          } else {
            // Wrong: reset
            currentSequence = [];
          }
        }
      }
    });
  });
});
