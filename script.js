document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.getElementById("burger-icon");
  const menu = document.getElementById("menu");
  const closeBtn = document.getElementById("close-btn");
  const blur = document.getElementById("blur");

  // Toggle menu open/close when burger icon is clicked
  burgerIcon.addEventListener("click", function () {
    menu.classList.toggle("open"); // Toggle menu open state
    burgerIcon.classList.toggle("hide"); // Hide burger icon when menu is open

    // Toggle the visibility of the close button based on the menu state
    if (menu.classList.contains("open")) {
      closeBtn.style.display = "block"; // Show the close button
      blur.style.visibility = "visible"; // Show blur background
      blur.style.opacity = 1; // Make the blur visible
    } else {
      closeBtn.style.display = "none"; // Hide the close button
      blur.style.visibility = "hidden"; // Hide blur background
      blur.style.opacity = 0; // Make the blur invisible
    }
  });

  // Close the menu when the close button is clicked
  closeBtn.addEventListener("click", function () {
    menu.classList.remove("open"); // Close the menu
    closeBtn.style.display = "none"; // Hide the close button
    blur.style.visibility = "hidden"; // Hide blur background
    blur.style.opacity = 0; // Make blur invisible
  });

  // Close the menu when clicking anywhere outside the menu
  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && event.target !== burgerIcon) {
      menu.classList.remove("open"); // Close the menu
      closeBtn.style.display = "none"; // Hide the close button
      blur.style.visibility = "hidden"; // Hide blur background
      blur.style.opacity = 0; // Make blur invisible
    }
  });

  // Show the burger icon after the menu has fully closed
  menu.addEventListener("transitionend", function () {
    if (!menu.classList.contains("open")) {
      burgerIcon.style.display = "block"; // Show burger icon after the menu is fully closed
    }
  });

  // Initially hide burger icon while menu is open
  if (menu.classList.contains("open")) {
    burgerIcon.style.display = "none";
  }
});
