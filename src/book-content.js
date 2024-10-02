"use strict";

export function getBookContent(contentContainer) {
  contentContainer.innerHTML = "";
  const newHeading = document.createElement("h1");
  newHeading.textContent = "book a table";
  contentContainer.appendChild(newHeading);
}
