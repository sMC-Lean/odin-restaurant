"use strict";

export function getHomeContent(contentContainer) {
  contentContainer.innerHTML = "";
  const newHeading = document.createElement("h1");
  newHeading.textContent = "home page";
  contentContainer.appendChild(newHeading);
}
