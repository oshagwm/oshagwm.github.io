/* Minimal CSS for flip card, keypad, and secret dropdown */
.flip-card {
  width: 150px; /* Adjust to your logo size */
  height: 150px;
  perspective: 1000px;
  margin: 0 auto;
  cursor: pointer;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flip-card-back {
  transform: rotateY(180deg);
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
}

.keypad {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  padding: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.key {
  background: #555;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.key:hover {
  background: #f97316; /* Matches your orange theme */
}

.secret-dropdown {
  display: none;
  background: #222;
  color: #fff;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  text-align: center;
}

.secret-dropdown.show {
  display: block;
}

.secret-dropdown p,
.secret-dropdown a {
  margin: 5px 0;
  color: #f97316;
  text-decoration: none;
}

.secret-dropdown a:hover {
  text-decoration: underline;
}
