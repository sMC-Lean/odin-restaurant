"use strict";

export function getMenuContent(contentContainer) {
  contentContainer.innerHTML = "";
  const newHeading = document.createElement("h1");
  newHeading.textContent = "Our Menu";
  contentContainer.appendChild(newHeading);
}
