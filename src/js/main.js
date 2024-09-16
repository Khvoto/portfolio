import * as section_cv from "./lib/section_cv.js";
import * as section_case from "./lib/section_case.js";
import { backgroundSwapper } from "./lib/background_swapper.js";
import { accessibility } from "./lib/accessibility_overlay.js";

//import * as cv_class from './lib/cv_class.js'

const collection = document.getElementsByClassName("menu-item"); // Creates an HTMLCollection of menu items
const menuItems = Array.from(collection); // Converts the HTMLCollection to an array

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    /*
     * The following code is both a test during development to have an easy control of proper targeting of the click event.
     * As a rule, I would recommend commenting out this kind of code for production, as we don't want any leftovers.
     */
    //const getMenuItemText = item.getElementsByClassName('menu-item-text'); // Find the text inside the menu item
    //const makeArrayOfMenuItemText = Array.from(getMenuItemText); // Convert the HTMLCollection to an array
    //console.log(makeArrayOfMenuItemText[0].innerText); // Logs the text of the clicked menu item for testing purposes

    /*
     * Following is the code that performs the desired action when a menu item is clicked.
     * It will toggle the different menu items content.
     */
    checkSectionVisibility(index); // Check the visibility of the clicked section and toggle the 'open' class accordingly
    toggleOverlay(); // Toggle the overlay visibility
    toggleVisibility(); // Toggle the visibility of the Main text
  });
});

function checkSectionVisibility(index) {
  let open;
  const section = document.getElementById("section" + index);
  if (section.classList.contains("open")) {
    open = true;
  } // If the section is already open, remember the state
  const siblings = Array.from(section.parentElement.children); // Get all the sibling sections
  siblings.forEach((sibling) => sibling.classList.remove("open")); // Remove the 'open' class
  if (open === true) {
    section.classList.remove("open");
  } // If the section was open before
  else {
    section.classList.add("open");
  } // If the section was closed before, add the 'open' class to it
}

function toggleVisibility() {
  const visible = document.getElementsByClassName("open");
  const mainText = document.getElementById("MainText");
  if (visible.length === 1) {
    // Hide Main text if a section is opened.
    mainText.style.opacity = 0;
  } else {
    // And show it again if sections are closed.
    mainText.style.opacity = 1;
  }
}

function toggleOverlay() {
  const overlay = document.getElementById("overlay");
  const open = document.getElementsByClassName("open");

  if (open.length === 1) {
    overlay.classList.add("active");
  } else {
    overlay.classList.remove("active");
  }
}

function overlayClickability() {
  const overlay = document.getElementById("overlay");
  const sections = document.getElementsByClassName("section");
  overlay.addEventListener("click", () => {
    Array.from(sections).forEach((section) => {
      section.classList.remove("open");
      overlay.classList.remove("active");
    });
    toggleVisibility();
  });
}

overlayClickability();
backgroundSwapper();
accessibility();

section_cv.fillCV();
section_case.caseFunctions();
