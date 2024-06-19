// typeEffect();
const textLines = [
  "Hello Visitors...",
  "Website is under construction",
  "DO NOT TOUCH IT, IT IS RACING TO BUILD THE WEBSITE",
  "Stay Tuned !",
];
const speed = 100; // typing speed in milliseconds
const typingElement = document.getElementById("typing");
let lineIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (lineIndex < textLines.length) {
    // Check if there are characters left to type in the current line
    if (charIndex < textLines[lineIndex].length) {
      let currentChar = textLines[lineIndex].charAt(charIndex);

      // Highlight "Visitors" and "construction" in red
      if (
        currentChar === "V" &&
        textLines[lineIndex].substring(charIndex, charIndex + 8) === "Visitors"
      ) {
        typingElement.innerHTML += '<span style="color: red;">Visitors</span>';
        charIndex += 7; // Move charIndex to the end of "Visitors" word
      } else if (
        currentChar === "c" &&
        textLines[lineIndex].substring(charIndex, charIndex + 13) ===
          "construction"
      ) {
        typingElement.innerHTML +=
          '<span style="color: red;">construction</span>';
        charIndex += 12; // Move charIndex to the end of "construction" word
      } else {
        typingElement.innerHTML += currentChar;
      }

      charIndex++;
      setTimeout(typeEffect, speed);
    } else {
      // Add line break after the line is fully typed
      typingElement.innerHTML += "<br><br>";
      lineIndex++;
      charIndex = 0; // Reset charIndex for the next line

      setTimeout(typeEffect, speed);
    }
  }
}

// Start typing effect

typeEffect();
