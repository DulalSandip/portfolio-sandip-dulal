const textLines = ["Hello Visitor ...", "Website is under construction"];
const speed = 100; // typing speed in milliseconds
const typingElement = document.getElementById("typing");
let lineIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (lineIndex < textLines.length) {
    if (charIndex < textLines[lineIndex].length) {
      typingElement.innerHTML += textLines[lineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, speed);
    } else {
      typingElement.innerHTML += "<br> <br>"; // Add line break after the line is fully typed
      lineIndex++;
      charIndex = 0; // Reset charIndex for the next line
      setTimeout(typeEffect, speed);
    }
  }
}

typeEffect();
