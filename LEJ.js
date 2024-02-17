var navbar = document.getElementById("navbar");

// Function to update navbar background color when scrolling
function updateNavbarBackground() {
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "#C9A9A6"; // Set the color you want when scrolling
  } else {
    navbar.style.backgroundColor = "transparent"; // Revert to initial color when at the top
  }
}

// Event listener to call the function on scroll
window.addEventListener("scroll", updateNavbarBackground);





function wholesaleAnimation() {
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "#C9A9A6"; // Set the color you want when scrolling
  } else {
    navbar.style.backgroundColor = "transparent"; // Revert to initial color when at the top
  }
}

// Event listener to call the function on scroll
window.addEventListener("scroll", updateNavbarBackground);