// variable assiigned to the button element
const btn = document.querySelector("button");
// variable assiigned to the body element
const body = document.querySelector("body");

// Click Event listener on the btn element
btn.addEventListener("click", function () {
  // on click toggle darkmode class
  body.classList.toggle("darkmode");
  this.classList.toggle("btn-darkmode");
  // if the text-content is "dark mode"
  if (this.textContent === "Dark Mode") {
    // change to "light mode"
    this.textContent = "Light Mode";
  } else {
    // otherwise "dark mode"
    this.textContent = "Dark Mode";
  }
});
