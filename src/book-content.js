"use strict";

export function getBookContent(contentContainer) {
  const newHeading = document.createElement("h1");
  newHeading.textContent = "Book a Table";
  contentContainer.appendChild(newHeading);
}
