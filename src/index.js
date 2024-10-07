"use strict";
// import images to modules here in the format;
/*
import odinImage from "./odin.png";

// use in the following way;
const image = document.createElement("img");
image.src = odinImage;
   
document.body.appendChild(image);
*/

import "./index.css";
import { getHomeContent } from "./home-content.js";
import { getBookContent } from "./book-content.js";
import { getMenuContent } from "./menu-content.js";

const navBar = document.querySelector(".nav-bar");
const contentWrapper = document.querySelector("#content");
const navButtons = document.querySelectorAll(".nav-button");

// helper function to reset the buttons on the navbar prior to the tab selection becoming active;
function resetButtons() {
  navButtons.forEach((button) => {
    button.style.backgroundColor = "var(--neon-color)";
    button.style.opacity = ".5";
  });
}

// helper function to set styling on the active button;
function setActiveButton(clickedButton) {
  clickedButton.style.backgroundColor = "var(--neon-color)";
  clickedButton.style.opacity = "1";
  clickedButton.style.borderShadow = "var(--neon-box-shadow)";
}

// callback function, evaluates the clicked item and gets it's data
function getSelectedContent(event) {
  const clickedButton = event.target;
  if (clickedButton.classList.contains("nav-button")) {
    resetButtons();

    setActiveButton(clickedButton);
    const selectedContent = clickedButton.dataset.target;
    selectedContent === "book"
      ? getBookContent(contentWrapper)
      : selectedContent === "menu"
      ? getMenuContent(contentWrapper)
      : getHomeContent(contentWrapper);
  }
}

// delegated listener on the navbar for tabbed navigation;
navBar.addEventListener("click", (event) => {
  getSelectedContent(event);
});

// initialise webpage by calling the home page content function at load time;
(function init() {
  getHomeContent(contentWrapper);
})();
